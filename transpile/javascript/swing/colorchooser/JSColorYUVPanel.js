/**
 * The panel to show colors in YUV format
 *
 * @author gianpiero.diblasi
 */
class JSColorYUVPanel extends JSAbstractColorFormatPanel {

   y = new JSRadioButton();

   ySlider = new JSSlider();

   ySpinner = new JSSpinner();

   u = new JSRadioButton();

   uSlider = new JSSlider();

   uSpinner = new JSSpinner();

   v = new JSRadioButton();

   vSlider = new JSSlider();

   vSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.y, "Y", true, 2, 0);
    this.addRadio(this.u, "U", false, 2, 2);
    this.addRadio(this.v, "V", false, 2, 4);
    this.addSlider(this.ySlider, this.ySpinner, 0, 100, 2, 1);
    this.addSlider(this.uSlider, this.uSpinner, 0, 100, 2, 3);
    this.addSlider(this.vSlider, this.vSpinner, 0, 100, 2, 5);
    this.addSpinner(this.ySpinner, this.ySlider, 0, 100, 3, 0);
    this.addSpinner(this.uSpinner, this.uSlider, 0, 100, 3, 2);
    this.addSpinner(this.vSpinner, this.vSlider, 100, 100, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    let yuv = new Array();
    let rgb = new Array();
    yuv[0] = this.ySpinner.getValue() / 100;
    yuv[1] = this.uSpinner.getValue() / 100;
    yuv[2] = this.vSpinner.getValue() / 100;
    Color.YUVtoRGB(yuv, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let yuv = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoYUV(rgb, yuv);
    this.setColor(100 * yuv[0], 100 * yuv[1], 100 * yuv[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorYUVPanel.SQUARE_SIZE, JSColorYUVPanel.SQUARE_SIZE);
    let data = imageData.data;
    let yuv = new Array();
    let rgb = new Array();
    for (let yy = 0; yy < JSColorYUVPanel.SQUARE_SIZE; yy++) {
      for (let xx = 0; xx < JSColorYUVPanel.SQUARE_SIZE; xx++) {
        if (this.y.isSelected()) {
          yuv[0] = this.ySpinner.getValue() / 100;
          yuv[1] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[2] = yy / JSColorYUVPanel.SQUARE_SIZE;
        } else if (this.u.isSelected()) {
          yuv[0] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[1] = this.uSpinner.getValue() / 100;
          yuv[2] = yy / JSColorYUVPanel.SQUARE_SIZE;
        } else if (this.v.isSelected()) {
          yuv[0] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[1] = yy / JSColorYUVPanel.SQUARE_SIZE;
          yuv[2] = this.vSpinner.getValue() / 100;
        }
        Color.YUVtoRGB(yuv, rgb);
        let pos = ((JSColorYUVPanel.SQUARE_SIZE - yy) * JSColorYUVPanel.SQUARE_SIZE + xx) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let xx = 0, yy = 0;
    if (this.y.isSelected()) {
      xx = this.uSpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.uSpinner.getValue() / 100;
    }
    this.drawCircle(xx, yy);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorYUVPanel.RECT_WIDTH, JSColorYUVPanel.RECT_HEIGHT);
    let data = imageData.data;
    let yuv = new Array();
    let rgb = new Array();
    for (let yy = 0; yy < JSColorYUVPanel.RECT_HEIGHT; yy++) {
      if (this.y.isSelected()) {
        yuv[0] = yy / JSColorYUVPanel.RECT_HEIGHT;
        yuv[1] = this.uSpinner.getValue() / 100;
        yuv[2] = this.vSpinner.getValue() / 100;
      } else if (this.u.isSelected()) {
        yuv[0] = this.ySpinner.getValue() / 100;
        yuv[1] = yy / JSColorYUVPanel.RECT_HEIGHT;
        yuv[2] = this.vSpinner.getValue() / 100;
      } else if (this.v.isSelected()) {
        yuv[0] = this.ySpinner.getValue() / 100;
        yuv[1] = this.uSpinner.getValue() / 100;
        yuv[2] = yy / JSColorYUVPanel.RECT_HEIGHT;
      }
      Color.YUVtoRGB(yuv, rgb);
      for (let xx = 0; xx < JSColorYUVPanel.RECT_WIDTH; xx++) {
        let pos = ((JSColorYUVPanel.RECT_HEIGHT - yy) * JSColorYUVPanel.RECT_WIDTH + xx) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let yy = 0;
    if (this.y.isSelected()) {
      yy = this.ySpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      yy = this.uSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      yy = this.vSpinner.getValue() / 100;
    }
    this.drawLine(yy);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.u.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.v.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), this.vSpinner.getValue(), true, type !== "up");
    } else if (this.u.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type !== "up");
    } else if (this.v.isSelected()) {
      this.setColor(this.ySpinner.getValue(), this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(y, u, v, call, adjusting) {
    this.ySlider.setValue(parseInt(y));
    this.ySpinner.setValue(parseInt(y));
    this.uSlider.setValue(parseInt(u));
    this.uSpinner.setValue(parseInt(u));
    this.vSlider.setValue(parseInt(v));
    this.vSpinner.setValue(parseInt(v));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
