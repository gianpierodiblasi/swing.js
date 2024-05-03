/**
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
class JSColorRGBPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   red = new JSRadioButton();

   redSlider = new JSSlider();

   redSpinner = new JSSpinner();

   green = new JSRadioButton();

   greenSlider = new JSSlider();

   greenSpinner = new JSSpinner();

   blue = new JSRadioButton();

   blueSlider = new JSSlider();

   blueSpinner = new JSSpinner();

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
    this.buttonGroup.add(this.red);
    this.buttonGroup.add(this.green);
    this.buttonGroup.add(this.blue);
    this.red.setText(Translations.JSColorChooser_RED);
    this.red.setSelected(true);
    this.red.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.red, gridBagConstraints);
    this.green.setText(Translations.JSColorChooser_GREEN);
    this.green.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.green, gridBagConstraints);
    this.blue.setText(Translations.JSColorChooser_BLUE);
    this.blue.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.blue, gridBagConstraints);
    this.redSlider.setMaximum(255);
    this.redSlider.setValue(0);
    this.redSlider.getStyle().minWidth = "20rem";
    this.redSlider.addChangeListener(event => this.sliderToSpinner(this.redSlider, this.redSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.redSlider, gridBagConstraints);
    this.greenSlider.setMaximum(255);
    this.greenSlider.setValue(0);
    this.greenSlider.getStyle().minWidth = "20rem";
    this.greenSlider.addChangeListener(event => this.sliderToSpinner(this.greenSlider, this.greenSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.greenSlider, gridBagConstraints);
    this.blueSlider.setMaximum(255);
    this.blueSlider.setValue(0);
    this.blueSlider.getStyle().minWidth = "20rem";
    this.blueSlider.addChangeListener(event => this.sliderToSpinner(this.blueSlider, this.blueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.blueSlider, gridBagConstraints);
    this.redSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.redSpinner.getStyle().minWidth = "3rem";
    this.redSpinner.addChangeListener(event => this.spinnerToSlider(this.redSpinner, this.redSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.redSpinner, gridBagConstraints);
    this.greenSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.greenSpinner.getStyle().minWidth = "3rem";
    this.greenSpinner.addChangeListener(event => this.spinnerToSlider(this.greenSpinner, this.greenSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.greenSpinner, gridBagConstraints);
    this.blueSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.blueSpinner.getStyle().minWidth = "3rem";
    this.blueSpinner.addChangeListener(event => this.spinnerToSlider(this.blueSpinner, this.blueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.blueSpinner, gridBagConstraints);
    this.square.setProperty("width", "" + JSColorRGBPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorRGBPanel.SQUARE_SIZE);
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
    this.rect.setProperty("width", "" + JSColorRGBPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorRGBPanel.RECT_HEIGHT);
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
    return new Color(this.redSlider.getValue(), this.greenSlider.getValue(), this.blueSlider.getValue(), 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    this.setColor(color.red, color.green, color.blue, false);
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
    let dash = new Array();
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
    dash.push(2.5, 2.5);
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorRGBPanel.RECT_WIDTH, JSColorRGBPanel.RECT_HEIGHT);
    let data = imageData.data;
    let rgb = new Array();
    for (let y = 0; y < JSColorRGBPanel.RECT_HEIGHT; y++) {
      if (this.red.isSelected()) {
        rgb[0] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[1] = 0;
        rgb[2] = 0;
      } else if (this.green.isSelected()) {
        rgb[0] = 0;
        rgb[1] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[2] = 0;
      } else if (this.blue.isSelected()) {
        rgb[0] = 0;
        rgb[1] = 0;
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
    let dash = new Array();
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
    dash.push(2.5, 2.5);
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
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
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true);
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
    } else if (this.red.isSelected()) {
      this.setColor(parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), this.blueSlider.getValue(), true);
    } else if (this.green.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true);
    } else if (this.blue.isSelected()) {
      this.setColor(this.redSlider.getValue(), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    }
  }

   setColor(r, g, b, call) {
    this.redSlider.setValue(r);
    this.redSpinner.setValue(r);
    this.greenSlider.setValue(g);
    this.greenSpinner.setValue(g);
    this.blueSlider.setValue(b);
    this.blueSpinner.setValue(b);
    this.drawAll();
    if (call) {
      this.onchange();
    }
  }

   getStrokeStyle(style) {
    return style;
  }
}
