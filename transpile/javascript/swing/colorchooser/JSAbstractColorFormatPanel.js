/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorFormatPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   square = new JSComponent(document.createElement("canvas"));

   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

   ctxRect = this.rect.invoke("getContext('2d')");

   listeners = new Array();

   squareDown = false;

   rectDown = false;

   valueIsAdjusting = false;

  static  SQUARE_SIZE = 180;

  static  RECT_WIDTH = 25;

  static  RECT_HEIGHT = 180;

  constructor() {
    super();
    this.setLayout(new GridBagLayout());
    this.square.setProperty("width", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mousedown", event => this.squareEvent(event, "down"));
    this.square.addEventListener("mousemove", event => this.squareEvent(event, "move"));
    this.square.addEventListener("mouseup", event => this.squareEvent(event, "up"));
    this.addComponent(this.square, 0, 0, 1, 7, GridBagConstraints.CENTER, GridBagConstraints.NONE, 0, 0, new Insets(0, 0, 0, 5));
    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event => this.rectEvent(event, "down"));
    this.rect.addEventListener("mousemove", event => this.rectEvent(event, "move"));
    this.rect.addEventListener("mouseup", event => this.rectEvent(event, "up"));
    this.addComponent(this.rect, 1, 0, 1, 7, GridBagConstraints.CENTER, GridBagConstraints.NONE, 0, 0, new Insets(0, 0, 0, 5));
  }

   addRadio(radio, text, selected, gridx, gridy) {
    this.buttonGroup.add(radio);
    radio.setText(text);
    radio.setSelected(selected);
    radio.addActionListener(event => this.drawAll());
    this.addComponent(radio, gridx, gridy, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);
  }

   addSlider(slider, spinner, value, max, gridx, gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event => this.sliderToSpinner(slider, spinner));
    this.addComponent(slider, gridx, gridy, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);
  }

   addSpinner(spinner, slider, value, max, gridx, gridy) {
    spinner.setModel(new SpinnerNumberModel(value, 0, max, 1));
    spinner.getStyle().minWidth = "3rem";
    spinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    spinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    spinner.addChangeListener(event => this.spinnerToSlider(spinner, slider));
    this.addComponent(spinner, gridx, gridy, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);
  }

   addComponent(component, gridx, gridy, gridwidth, gridheight, anchor, fill, weightx, weighty, insets) {
    let gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = gridx;
    gridBagConstraints.gridy = gridy;
    gridBagConstraints.gridwidth = gridwidth;
    gridBagConstraints.gridheight = gridheight;
    gridBagConstraints.anchor = anchor;
    gridBagConstraints.fill = fill;
    gridBagConstraints.weightx = weightx;
    gridBagConstraints.weighty = weighty;
    if (insets) {
      gridBagConstraints.insets = insets;
    }
    this.add(component, gridBagConstraints);
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
    this.onchange(slider.getValueIsAdjusting());
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.drawAll();
    this.onchange(spinner.getValueIsAdjusting());
  }

   drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

   drawSquare() {
  }

   drawSquareSelector() {
  }

   drawCircle(x, y) {
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
  }

   drawRectSelector() {
  }

   drawLine(y) {
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
  }

   canDoItSquare(type) {
    switch(type) {
      case "down":
        this.squareDown = true;
        return true;
      case "move":
        return this.squareDown;
      case "up":
        this.squareDown = false;
        return true;
      default:
        return false;
    }
  }

   rectEvent(event, type) {
  }

   canDoItRect(type) {
    switch(type) {
      case "down":
        this.rectDown = true;
        return true;
      case "move":
        return this.rectDown;
      case "up":
        this.rectDown = false;
        return true;
      default:
        return false;
    }
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
  }

   getStrokeStyle(style) {
    return style;
  }
}
