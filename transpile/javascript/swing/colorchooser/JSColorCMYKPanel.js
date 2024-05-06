/**
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
class JSColorCMYKPanel extends JSAbstractColorFormatPanel {

   cyan = new JSRadioButton();

   cyanSlider = new JSSlider();

   cyanSpinner = new JSSpinner();

   magenta = new JSRadioButton();

   magentaSlider = new JSSlider();

   magentaSpinner = new JSSpinner();

   yellow = new JSRadioButton();

   yellowSlider = new JSSlider();

   yellowSpinner = new JSSpinner();

   blackSlider = new JSSlider();

   blackSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.cyan, Translations.JSColorChooser_CYAN, true, 2, 0);
    this.addRadio(this.magenta, Translations.JSColorChooser_MAGENTA, false, 2, 2);
    this.addRadio(this.yellow, Translations.JSColorChooser_YELLOW, false, 2, 4);
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_BLACK);
    this.addComponent(label, 2, 6, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);
    this.addSlider(this.cyanSlider, this.cyanSpinner, 0, 255, 2, 1);
    this.addSlider(this.magentaSlider, this.magentaSpinner, 0, 255, 2, 3);
    this.addSlider(this.yellowSlider, this.yellowSpinner, 0, 255, 2, 5);
    this.addSlider(this.blackSlider, this.blackSpinner, 0, 255, 2, 7);
    this.addSpinner(this.cyanSpinner, this.cyanSlider, 0, 255, 3, 0);
    this.addSpinner(this.magentaSpinner, this.magentaSlider, 0, 255, 3, 2);
    this.addSpinner(this.yellowSpinner, this.yellowSlider, 0, 255, 3, 4);
    this.addSpinner(this.blackSpinner, this.blackSlider, 0, 255, 3, 6);
    this.drawAll();
  }

   getSelectedColor() {
    let cmyk = new Array();
    let rgb = new Array();
    cmyk[0] = this.cyanSlider.getValue();
    cmyk[1] = this.magentaSlider.getValue();
    cmyk[2] = this.yellowSlider.getValue();
    cmyk[3] = this.blackSlider.getValue();
    Color.CMYKtoRGB(cmyk, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let cmyk = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoCMYK(rgb, cmyk);
    this.setColor(cmyk[0], cmyk[1], cmyk[2], cmyk[3], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorCMYKPanel.SQUARE_SIZE, JSColorCMYKPanel.SQUARE_SIZE);
    let data = imageData.data;
    let cmyk = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorCMYKPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorCMYKPanel.SQUARE_SIZE; x++) {
        if (this.cyan.isSelected()) {
          cmyk[0] = this.cyanSlider.getValue();
          cmyk[1] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[2] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
        } else if (this.magenta.isSelected()) {
          cmyk[0] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[1] = this.magentaSlider.getValue();
          cmyk[2] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
        } else if (this.yellow.isSelected()) {
          cmyk[0] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[1] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[2] = this.yellowSlider.getValue();
        }
        cmyk[3] = this.blackSlider.getValue();
        Color.CMYKtoRGB(cmyk, rgb);
        let pos = ((JSColorCMYKPanel.SQUARE_SIZE - y) * JSColorCMYKPanel.SQUARE_SIZE + x) * 4;
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
    if (this.cyan.isSelected()) {
      x = this.magentaSpinner.getValue() / 255;
      y = this.yellowSpinner.getValue() / 255;
    } else if (this.magenta.isSelected()) {
      x = this.cyanSpinner.getValue() / 255;
      y = this.yellowSpinner.getValue() / 255;
    } else if (this.yellow.isSelected()) {
      x = this.cyanSpinner.getValue() / 255;
      y = this.magentaSpinner.getValue() / 255;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorCMYKPanel.RECT_WIDTH, JSColorCMYKPanel.RECT_HEIGHT);
    let data = imageData.data;
    let cmyk = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorCMYKPanel.RECT_HEIGHT; y++) {
      if (this.cyan.isSelected()) {
        cmyk[0] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
        cmyk[1] = 0;
        cmyk[2] = 0;
      } else if (this.magenta.isSelected()) {
        cmyk[0] = 0;
        cmyk[1] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
        cmyk[2] = 0;
      } else if (this.yellow.isSelected()) {
        cmyk[0] = 0;
        cmyk[1] = 0;
        cmyk[2] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
      }
      cmyk[3] = this.blackSlider.getValue();
      Color.CMYKtoRGB(cmyk, rgb);
      for (let x = 0; x < JSColorCMYKPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorCMYKPanel.RECT_HEIGHT - y) * JSColorCMYKPanel.RECT_WIDTH + x) * 4;
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
    if (this.cyan.isSelected()) {
      y = this.cyanSpinner.getValue() / 255;
    } else if (this.magenta.isSelected()) {
      y = this.magentaSpinner.getValue() / 255;
    } else if (this.yellow.isSelected()) {
      y = this.yellowSpinner.getValue() / 255;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.magenta.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.yellow.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.magenta.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.yellow.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    }
  }

   setColor(c, m, y, k, call, adjusting) {
    this.cyanSlider.setValue(c);
    this.cyanSpinner.setValue(c);
    this.magentaSlider.setValue(m);
    this.magentaSpinner.setValue(m);
    this.yellowSlider.setValue(y);
    this.yellowSpinner.setValue(y);
    this.blackSlider.setValue(k);
    this.blackSpinner.setValue(k);
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
