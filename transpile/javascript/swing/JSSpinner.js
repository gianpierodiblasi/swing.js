/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSSpinner extends JSComponent {

   listeners = new Array();

  constructor() {
    super();
    this.element = document.createElement("input");
    this.element.setAttribute("type", "number");
    this.element.classList.add("jspinner");
    this.element.oninput = (event) => this.onchange();
    (this.element).valueAsNumber = 0;
    LookAndFeel.CURRENT.styleJSSpinner(this);
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
    (this.element).valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return (this.element).valueAsNumber;
  }
}
