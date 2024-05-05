/**
 * The panel to show colors in HSL format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSLPanel extends JSAbstractColorFormatPanel {

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   satutationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   lightness = new JSRadioButton();

   lightnessSlider = new JSSlider();

   lightnessSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.hue, Translations.JSColorChooser_HUE, true, 2, 0);
    this.addRadio(this.saturation, Translations.JSColorChooser_SATURATION, false, 2, 2);
    this.addRadio(this.lightness, Translations.JSColorChooser_LIGHTNESS, false, 2, 4);
    this.addSlider(this.hueSlider, this.hueSpinner, 0, 360, 2, 1);
    this.addSlider(this.satutationSlider, this.saturationSpinner, 0, 100, 2, 3);
    this.addSlider(this.lightnessSlider, this.lightnessSpinner, 0, 100, 2, 5);
    this.addSpinner(this.hueSpinner, this.hueSlider, 0, 360, 3, 0);
    this.addSpinner(this.saturationSpinner, this.satutationSlider, 0, 100, 3, 2);
    this.addSpinner(this.lightnessSpinner, this.lightnessSlider, 100, 100, 3, 4);
    this.drawAll();
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    let hsl = new Array();
    let rgb = new Array();
    hsl[0] = this.hueSpinner.getValue() / 360;
    hsl[1] = this.saturationSpinner.getValue() / 100;
    hsl[2] = this.lightnessSpinner.getValue() / 100;
    Color.HSLtoRGB(hsl, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.setColor(360 * hsl[0], 100 * hsl[1], 100 * hsl[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorHSLPanel.SQUARE_SIZE, JSColorHSLPanel.SQUARE_SIZE);
    let data = imageData.data;
    let hsl = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSLPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorHSLPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsl[0] = this.hueSpinner.getValue() / 360;
          hsl[1] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[2] = y / JSColorHSLPanel.SQUARE_SIZE;
        } else if (this.saturation.isSelected()) {
          hsl[0] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[1] = this.saturationSpinner.getValue() / 100;
          hsl[2] = y / JSColorHSLPanel.SQUARE_SIZE;
        } else if (this.lightness.isSelected()) {
          hsl[0] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[1] = y / JSColorHSLPanel.SQUARE_SIZE;
          hsl[2] = this.lightnessSpinner.getValue() / 100;
        }
        Color.HSLtoRGB(hsl, rgb);
        let pos = ((JSColorHSLPanel.SQUARE_SIZE - y) * JSColorHSLPanel.SQUARE_SIZE + x) * 4;
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
      y = this.lightnessSpinner.getValue() / 100;
    } else if (this.saturation.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.lightnessSpinner.getValue() / 100;
    } else if (this.lightness.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.saturationSpinner.getValue() / 100;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorHSLPanel.RECT_WIDTH, JSColorHSLPanel.RECT_HEIGHT);
    let data = imageData.data;
    let hsl = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSLPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsl[0] = y / JSColorHSLPanel.RECT_HEIGHT;
        hsl[1] = 1.0;
        hsl[2] = 0.5;
      } else if (this.saturation.isSelected()) {
        hsl[0] = this.hueSpinner.getValue() / 360;
        hsl[1] = y / JSColorHSLPanel.RECT_HEIGHT;
        hsl[2] = 0.5;
      } else if (this.lightness.isSelected()) {
        hsl[0] = this.hueSpinner.getValue() / 360;
        hsl[1] = 1.0;
        hsl[2] = y / JSColorHSLPanel.RECT_HEIGHT;
      }
      Color.HSLtoRGB(hsl, rgb);
      for (let x = 0; x < JSColorHSLPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorHSLPanel.RECT_HEIGHT - y) * JSColorHSLPanel.RECT_WIDTH + x) * 4;
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
    } else if (this.lightness.isSelected()) {
      y = this.lightnessSpinner.getValue() / 100;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.lightnessSpinner.getValue(), true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type !== "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(h, s, l, call, adjusting) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));
    this.satutationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));
    this.lightnessSlider.setValue(parseInt(l));
    this.lightnessSpinner.setValue(parseInt(l));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
