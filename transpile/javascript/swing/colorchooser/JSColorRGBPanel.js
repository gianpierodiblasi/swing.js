/**
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
class JSColorRGBPanel extends JSAbstractColorFormatPanel {

   red = new JSRadioButton();

   redSlider = new JSSlider();

   redSpinner = new JSSpinner();

   green = new JSRadioButton();

   greenSlider = new JSSlider();

   greenSpinner = new JSSpinner();

   blue = new JSRadioButton();

   blueSlider = new JSSlider();

   blueSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.red, Translations.JSColorChooser_RED, true, 2, 0);
    this.addRadio(this.green, Translations.JSColorChooser_GREEN, false, 2, 2);
    this.addRadio(this.blue, Translations.JSColorChooser_BLUE, false, 2, 4);
    this.addSlider(this.redSlider, this.redSpinner, 0, 255, 2, 1);
    this.addSlider(this.greenSlider, this.greenSpinner, 0, 255, 2, 3);
    this.addSlider(this.blueSlider, this.blueSpinner, 0, 255, 2, 5);
    this.addSpinner(this.redSpinner, this.redSlider, 0, 255, 3, 0);
    this.addSpinner(this.greenSpinner, this.greenSlider, 0, 255, 3, 2);
    this.addSpinner(this.blueSpinner, this.blueSlider, 0, 255, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    return new Color(this.redSlider.getValue(), this.greenSlider.getValue(), this.blueSlider.getValue(), 255);
  }

   setSelectedColor(color) {
    this.setColor(color.red, color.green, color.blue, false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorRGBPanel.SQUARE_SIZE, JSColorRGBPanel.SQUARE_SIZE);
    let data = imageData.data;
    for (let y = 0; y < JSColorRGBPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorRGBPanel.SQUARE_SIZE; x++) {
        let pos = ((JSColorRGBPanel.SQUARE_SIZE - y) * JSColorRGBPanel.SQUARE_SIZE + x) * 4;
        if (this.red.isSelected()) {
          data[pos] = this.redSlider.getValue();
          data[pos + 1] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 2] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
        } else if (this.green.isSelected()) {
          data[pos] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 1] = this.greenSlider.getValue();
          data[pos + 2] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
        } else if (this.blue.isSelected()) {
          data[pos] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 1] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 2] = this.blueSlider.getValue();
        }
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.red.isSelected()) {
      x = this.greenSpinner.getValue() / 255;
      y = this.blueSpinner.getValue() / 255;
    } else if (this.green.isSelected()) {
      x = this.redSpinner.getValue() / 255;
      y = this.blueSpinner.getValue() / 255;
    } else if (this.blue.isSelected()) {
      x = this.redSpinner.getValue() / 255;
      y = this.greenSpinner.getValue() / 255;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorRGBPanel.RECT_WIDTH, JSColorRGBPanel.RECT_HEIGHT);
    let data = imageData.data;
    let rgb = new Array();
    for (let y = 0; y < JSColorRGBPanel.RECT_HEIGHT; y++) {
      if (this.red.isSelected()) {
        rgb[0] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[1] = this.greenSlider.getValue();
        rgb[2] = this.blueSlider.getValue();
      } else if (this.green.isSelected()) {
        rgb[0] = this.redSlider.getValue();
        rgb[1] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[2] = this.blueSlider.getValue();
      } else if (this.blue.isSelected()) {
        rgb[0] = this.redSlider.getValue();
        rgb[1] = this.greenSlider.getValue();
        rgb[2] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
      }
      for (let x = 0; x < JSColorRGBPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorRGBPanel.RECT_HEIGHT - y) * JSColorRGBPanel.RECT_WIDTH + x) * 4;
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
    if (this.red.isSelected()) {
      y = this.redSpinner.getValue() / 255;
    } else if (this.green.isSelected()) {
      y = this.greenSpinner.getValue() / 255;
    } else if (this.blue.isSelected()) {
      y = this.blueSpinner.getValue() / 255;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(event, type)) {
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(event, type)) {
    } else if (this.red.isSelected()) {
      this.setColor(parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), this.blueSlider.getValue(), true, type !== "up");
    } else if (this.green.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type !== "up");
    } else if (this.blue.isSelected()) {
      this.setColor(this.redSlider.getValue(), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    }
  }

   setColor(r, g, b, call, adjusting) {
    this.redSlider.setValue(r);
    this.redSpinner.setValue(r);
    this.greenSlider.setValue(g);
    this.greenSpinner.setValue(g);
    this.blueSlider.setValue(b);
    this.blueSpinner.setValue(b);
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
