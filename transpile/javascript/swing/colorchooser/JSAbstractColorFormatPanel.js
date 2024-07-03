/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorFormatPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   square = new JSComponent(document.createElement("canvas"));

  /**
   * The rendering context of the square
   */
   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

  /**
   * The rendering context of the rect
   */
   ctxRect = this.rect.invoke("getContext('2d')");

   listeners = new Array();

   squareDown = false;

   rectDown = false;

   valueIsAdjusting = false;

  /**
   * The square size
   */
  static  SQUARE_SIZE = 180;

  /**
   * the rect width
   */
  static  RECT_WIDTH = 25;

  /**
   * The rect height
   */
  static  RECT_HEIGHT = 180;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.setLayout(new GridBagLayout());
    this.square.setProperty("width", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mouseenter", event => this.squareEvent(event, "enter"));
    this.square.addEventListener("mouseleave", event => this.squareEvent(event, "leave"));
    this.square.addEventListener("mousedown", event => this.squareEvent(event, "down"));
    this.square.addEventListener("mousemove", event => this.squareEvent(event, "move"));
    this.square.addEventListener("mouseup", event => this.squareEvent(event, "up"));
    this.add(this.square, new GBC(0, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mouseenter", event => this.rectEvent(event, "enter"));
    this.rect.addEventListener("mouseleave", event => this.rectEvent(event, "leave"));
    this.rect.addEventListener("mousedown", event => this.rectEvent(event, "down"));
    this.rect.addEventListener("mousemove", event => this.rectEvent(event, "move"));
    this.rect.addEventListener("mouseup", event => this.rectEvent(event, "up"));
    this.add(this.rect, new GBC(1, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
  }

  /**
   * Adds a radio button
   *
   * @param radio The radio button
   * @param text The text
   * @param selected true to select the radio button, false otherwise
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addRadio(radio, text, selected, gridx, gridy) {
    this.buttonGroup.add(radio);
    radio.setText(text);
    radio.setSelected(selected);
    radio.addActionListener(event => this.drawAll());
    this.add(radio, new GBC(gridx, gridy).a(GBC.WEST));
  }

  /**
   * Adds a slider
   *
   * @param slider The slider
   * @param spinner The connected spinner
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addSlider(slider, spinner, value, max, gridx, gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event => this.sliderToSpinner(slider, spinner));
    this.add(slider, new GBC(gridx, gridy).w(2).f(GBC.HORIZONTAL).wx(1));
  }

  /**
   * Adds a spinner
   *
   * @param spinner The spinner
   * @param slider The connected slider
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addSpinner(spinner, slider, value, max, gridx, gridy) {
    spinner.setModel(new SpinnerNumberModel(value, 0, max, 1));
    spinner.getStyle().minWidth = "3rem";
    spinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    spinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    spinner.addChangeListener(event => this.spinnerToSlider(spinner, slider));
    this.add(spinner, new GBC(gridx, gridy).a(GBC.EAST));
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

  /**
   * Draws all objects
   */
   drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  /**
   * Draws the square
   */
   drawSquare() {
  }

  /**
   * Draws the square selector
   */
   drawSquareSelector() {
  }

  /**
   * Draws the circle selector
   *
   * @param x The x-axis coordinate
   * @param y The y-axis coordinate
   */
   drawCircle(x, y) {
    this.ctxSquare.lineWidth = 3;
    let dash = new Array();
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.strokeStyle = this.getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
    dash.push(2.5, 2.5);
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.strokeStyle = this.getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

  /**
   * Draws the rect
   */
   drawRect() {
  }

  /**
   * Draws the rect selector
   */
   drawRectSelector() {
  }

  /**
   * Draws the line
   *
   * @param y The y-axis coordinate
   */
   drawLine(y) {
    this.ctxRect.lineWidth = 3;
    let dash = new Array();
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.strokeStyle = this.getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
    dash.push(2.5, 2.5);
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.strokeStyle = this.getStrokeStyle("white");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
  }

  /**
   * Manages a mouse event on the square
   *
   * @param event The mouse event
   * @param type The event type
   */
   squareEvent(event, type) {
  }

  /**
   * Checks if a mouse event can be managed on the square
   *
   * @param event The mouse event
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
   canDoItSquare(event, type) {
    switch(type) {
      case "enter":
        this.squareDown = event.buttons === 1;
        return this.squareDown;
      case "down":
        this.squareDown = true;
        return this.squareDown;
      case "move":
        return this.squareDown;
      case "up":
        this.squareDown = false;
        return !this.squareDown;
      case "leave":
        this.squareDown = false;
        return this.squareDown;
      default:
        return false;
    }
  }

  /**
   * Manages a mouse event on the rect
   *
   * @param event The mouse event
   * @param type The event type
   */
   rectEvent(event, type) {
  }

  /**
   * Checks if a mouse event can be managed on the rect
   *
   * @param event The mouse event
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
   canDoItRect(event, type) {
    switch(type) {
      case "enter":
        this.rectDown = event.buttons === 1;
        return this.rectDown;
      case "down":
        this.rectDown = true;
        return this.rectDown;
      case "move":
        return this.rectDown;
      case "up":
        this.rectDown = false;
        return !this.rectDown;
      case "leave":
        this.rectDown = false;
        return this.rectDown;
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

  /**
   * To call to invoke a change event
   *
   * @param b true if the value is adjusting, false otherwise
   */
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
