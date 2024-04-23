/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSSpinner extends JSComponent {

   listeners = new Array();

  constructor() {
    super(document.createElement("input"));
    this.setAttribute("type", "number");
    this.setAttribute("value", "0");
    this.cssAddClass("jsspinner");
    this.addEventListener("input", (event) => this.onchange());
  }

  /**
   * Clone of javax.swing.JSpinner.setModel
   *
   * @param model The model
   */
   setModel(model) {
    model.setJSSpinner(this);
  }

  /**
   * Clone of javax.swing.JSpinner.addChangeListener
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
    return null;
  }

  /**
   * Clone of javax.swing.JSpinner.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.setAttribute("value", "" + value);
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return parseFloat(this.getAttribute("value"));
  }
}
