/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSVPanel extends JSAbstractColorFormatPanel {

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   saturationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   value = new JSRadioButton();

   valueSlider = new JSSlider();

   valueSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.hue, Translations.JSColorChooser_HUE, true, 2, 0);
    this.addRadio(this.saturation, Translations.JSColorChooser_SATURATION, false, 2, 2);
    this.addRadio(this.value, Translations.JSColorChooser_VALUE, false, 2, 4);
    this.addSlider(this.hueSlider, this.hueSpinner, 0, 360, 2, 1);
    this.addSlider(this.saturationSlider, this.saturationSpinner, 0, 100, 2, 3);
    this.addSlider(this.valueSlider, this.valueSpinner, 0, 100, 2, 5);
    this.addSpinner(this.hueSpinner, this.hueSlider, 0, 360, 3, 0);
    this.addSpinner(this.saturationSpinner, this.saturationSlider, 0, 100, 3, 2);
    this.addSpinner(this.valueSpinner, this.valueSlider, 100, 100, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    let hsv = new Array();
    let rgb = new Array();
    hsv[0] = this.hueSpinner.getValue() / 360;
    hsv[1] = this.saturationSpinner.getValue() / 100;
    hsv[2] = this.valueSpinner.getValue() / 100;
    Color.HSVtoRGB(hsv, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let hsv = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSV(rgb, hsv);
    this.setColor(360 * hsv[0], 100 * hsv[1], 100 * hsv[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorHSVPanel.SQUARE_SIZE, JSColorHSVPanel.SQUARE_SIZE);
    let data = imageData.data;
    let hsv = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSVPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorHSVPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsv[0] = this.hueSpinner.getValue() / 360;
          hsv[1] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[2] = y / JSColorHSVPanel.SQUARE_SIZE;
        } else if (this.saturation.isSelected()) {
          hsv[0] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[1] = this.saturationSpinner.getValue() / 100;
          hsv[2] = y / JSColorHSVPanel.SQUARE_SIZE;
        } else if (this.value.isSelected()) {
          hsv[0] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[1] = y / JSColorHSVPanel.SQUARE_SIZE;
          hsv[2] = this.valueSpinner.getValue() / 100;
        }
        Color.HSVtoRGB(hsv, rgb);
        let pos = ((JSColorHSVPanel.SQUARE_SIZE - y) * JSColorHSVPanel.SQUARE_SIZE + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.hue.isSelected()) {
      x = this.saturationSpinner.getValue() / 100;
      y = this.valueSpinner.getValue() / 100;
    } else if (this.saturation.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.valueSpinner.getValue() / 100;
    } else if (this.value.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.saturationSpinner.getValue() / 100;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorHSVPanel.RECT_WIDTH, JSColorHSVPanel.RECT_HEIGHT);
    let data = imageData.data;
    let hsv = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSVPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsv[0] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[1] = this.saturationSpinner.getValue() / 100;
        hsv[2] = this.valueSpinner.getValue() / 100;
      } else if (this.saturation.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[2] = this.valueSpinner.getValue() / 100;
      } else if (this.value.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = this.saturationSpinner.getValue() / 100;
        hsv[2] = y / JSColorHSVPanel.RECT_HEIGHT;
      }
      Color.HSVtoRGB(hsv, rgb);
      for (let x = 0; x < JSColorHSVPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorHSVPanel.RECT_HEIGHT - y) * JSColorHSVPanel.RECT_WIDTH + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let y = 0;
    if (this.hue.isSelected()) {
      y = this.hueSpinner.getValue() / 360;
    } else if (this.saturation.isSelected()) {
      y = this.saturationSpinner.getValue() / 100;
    } else if (this.value.isSelected()) {
      y = this.valueSpinner.getValue() / 100;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.value.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.valueSpinner.getValue(), true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true, type !== "up");
    } else if (this.value.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(h, s, v, call, adjusting) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));
    this.saturationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));
    this.valueSlider.setValue(parseInt(v));
    this.valueSpinner.setValue(parseInt(v));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
