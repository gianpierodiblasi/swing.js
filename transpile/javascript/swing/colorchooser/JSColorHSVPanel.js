/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSVPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   satutationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   value = new JSRadioButton();

   valueSlider = new JSSlider();

   valueSpinner = new JSSpinner();

   square = new JSComponent(document.createElement("canvas"));

   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

   ctxRect = this.rect.invoke("getContext('2d')");

  static  SQUARE_SIZE = 180;

  static  RECT_WIDTH = 25;

  static  RECT_HEIGHT = 180;

  constructor() {
    super();
    let gridBagConstraints = null;
    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.value);
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
    this.value.setText(Translations.JSColorChooser_VALUE);
    this.value.addActionListener(event => this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.value, gridBagConstraints);
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
    this.valueSlider.setValue(100);
    this.valueSlider.getStyle().minWidth = "20rem";
    this.valueSlider.addChangeListener(event => this.sliderToSpinner(this.valueSlider, this.valueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.valueSlider, gridBagConstraints);
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
    this.valueSpinner.setModel(new SpinnerNumberModel(100, 0, 100, 1));
    this.valueSpinner.getStyle().minWidth = "3rem";
    this.valueSpinner.addChangeListener(event => this.spinnerToSlider(this.valueSpinner, this.valueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.valueSpinner, gridBagConstraints);
    this.square.setProperty("width", "" + JSColorHSVPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorHSVPanel.SQUARE_SIZE);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.square, gridBagConstraints);
    this.rect.setProperty("width", "" + JSColorHSVPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorHSVPanel.RECT_HEIGHT);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 1;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.rect, gridBagConstraints);
    this.drawAll();
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.drawAll();
  }

   drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
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
    let dash = new Array();
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSVPanel.SQUARE_SIZE, (1 - y) * JSColorHSVPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
    dash.push(2.5, 2.5);
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSVPanel.SQUARE_SIZE, (1 - y) * JSColorHSVPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorHSVPanel.RECT_WIDTH, JSColorHSVPanel.RECT_HEIGHT);
    let data = imageData.data;
    let hsv = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSVPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsv[0] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[1] = 1.0;
        hsv[2] = 1.0;
      } else if (this.saturation.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[2] = 1.0;
      } else if (this.value.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = 1.0;
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
    let dash = new Array();
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSVPanel.RECT_WIDTH, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
    dash.push(2.5, 2.5);
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSVPanel.RECT_WIDTH, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("white");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
  }

   getStrokeStyle(style) {
    return style;
  }
}
