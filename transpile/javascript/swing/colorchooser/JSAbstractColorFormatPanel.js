/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorFormatPanel extends JSPanel {

   square = new JSComponent(document.createElement("canvas"));

   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

   ctxRect = this.rect.invoke("getContext('2d')");

   listeners = new Array();

  static  SQUARE_SIZE = 180;

  static  RECT_WIDTH = 25;

  static  RECT_HEIGHT = 180;

  constructor() {
    super();
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
  }

   drawSquareSelector() {
  }

   drawRect() {
  }

   drawRectSelector() {
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

   getStrokeStyle(style) {
    return style;
  }
}
