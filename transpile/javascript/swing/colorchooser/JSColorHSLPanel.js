/**
 * The panel to show colors in HSL format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSLPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   satutationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   lightness = new JSRadioButton();

   lightnessSlider = new JSSlider();

   lightnessSpinner = new JSSpinner();

   square = new JSComponent(document.createElement("canvas"));

   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

   ctxRect = this.rect.invoke("getContext('2d')");

   listeners = new Array();

   squareDown = false;

   rectDown = false;

  static  SQUARE_SIZE = 180;

  static  RECT_WIDTH = 25;

  static  RECT_HEIGHT = 180;

  constructor() {
    super();
    let gridBagConstraints = null;
    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.lightness);
    this.hue.setText(Translations.JSColorChooser_HUE);
    this.hue.setSelected(true);
    this.hue.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.hue, gridBagConstraints);
    this.saturation.setText(Translations.JSColorChooser_SATURATION);
    this.saturation.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.saturation, gridBagConstraints);
    this.lightness.setText(Translations.JSColorChooser_LIGHTNESS);
    this.lightness.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.lightness, gridBagConstraints);
    this.hueSlider.setMaximum(360);
    this.hueSlider.setValue(0);
    this.hueSlider.getStyle().minWidth = "20rem";
    this.hueSlider.addChangeListener(event => this.sliderToSpinner(this.hueSlider, this.hueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.hueSlider, gridBagConstraints);
    this.satutationSlider.setValue(0);
    this.satutationSlider.getStyle().minWidth = "20rem";
    this.satutationSlider.addChangeListener(event => this.sliderToSpinner(this.satutationSlider, this.saturationSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.satutationSlider, gridBagConstraints);
    this.lightnessSlider.setValue(100);
    this.lightnessSlider.getStyle().minWidth = "20rem";
    this.lightnessSlider.addChangeListener(event => this.sliderToSpinner(this.lightnessSlider, this.lightnessSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.lightnessSlider, gridBagConstraints);
    this.hueSpinner.setModel(new SpinnerNumberModel(0, 0, 360, 1));
    this.hueSpinner.getStyle().minWidth = "3rem";
    this.hueSpinner.addChangeListener(event => this.spinnerToSlider(this.hueSpinner, this.hueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.hueSpinner, gridBagConstraints);
    this.saturationSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.saturationSpinner.getStyle().minWidth = "3rem";
    this.saturationSpinner.addChangeListener(event => this.spinnerToSlider(this.saturationSpinner, this.satutationSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.saturationSpinner, gridBagConstraints);
    this.lightnessSpinner.setModel(new SpinnerNumberModel(100, 0, 100, 1));
    this.lightnessSpinner.getStyle().minWidth = "3rem";
    this.lightnessSpinner.addChangeListener(event => this.spinnerToSlider(this.lightnessSpinner, this.lightnessSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.lightnessSpinner, gridBagConstraints);
    this.square.setProperty("width", "" + JSColorHSLPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorHSLPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mousedown", event => this.squareEvent(event, "down"));
    this.square.addEventListener("mousemove", event => this.squareEvent(event, "move"));
    this.square.addEventListener("mouseup", event => this.squareEvent(event, "up"));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.square, gridBagConstraints);
    this.rect.setProperty("width", "" + JSColorHSLPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorHSLPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event => this.rectEvent(event, "down"));
    this.rect.addEventListener("mousemove", event => this.rectEvent(event, "move"));
    this.rect.addEventListener("mouseup", event => this.rectEvent(event, "up"));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 1;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.rect, gridBagConstraints);
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
    this.setColor(360 * hsl[0], 100 * hsl[1], 100 * hsl[2], false);
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
    this.onchange();
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.drawAll();
    this.onchange();
  }

   drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
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
    let dash = new Array();
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSLPanel.SQUARE_SIZE, (1 - y) * JSColorHSLPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
    dash.push(2.5, 2.5);
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSLPanel.SQUARE_SIZE, (1 - y) * JSColorHSLPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
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
    let dash = new Array();
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSLPanel.RECT_WIDTH, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
    dash.push(2.5, 2.5);
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSLPanel.RECT_WIDTH, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("white");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
  }

   squareEvent(event, type) {
    let doit = false;
    switch(type) {
      case "down":
        this.squareDown = true;
        doit = true;
        break;
      case "move":
        doit = this.squareDown;
        break;
      case "up":
        this.squareDown = false;
        doit = true;
        break;
    }
    if (!doit) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    } else if (this.lightness.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true);
    }
  }

   rectEvent(event, type) {
    let doit = false;
    switch(type) {
      case "down":
        this.rectDown = true;
        doit = true;
        break;
      case "move":
        doit = this.rectDown;
        break;
      case "up":
        this.rectDown = false;
        doit = true;
        break;
    }
    if (!doit) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.lightnessSpinner.getValue(), true);
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true);
    } else if (this.lightness.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    }
  }

   setColor(h, s, l, call) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));
    this.satutationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));
    this.lightnessSlider.setValue(parseInt(l));
    this.lightnessSpinner.setValue(parseInt(l));
    this.drawAll();
    if (call) {
      this.onchange();
    }
  }

   getStrokeStyle(style) {
    return style;
  }
}
