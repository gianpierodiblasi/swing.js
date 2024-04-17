/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSpinner extends JComponent {

   listeners = new Array();

  constructor() {
    super();
    this.element = document.createElement("input");
    this.element.setAttribute("type", "number");
    this.element.classList.add("jspinner");
    this.element.oninput = (event) => this.onchange();
    (this.element).valueAsNumber = 0;
  }

   setModel(model) {
    model.setJSpinner(this);
  }

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

   setValue(value) {
    (this.element).valueAsNumber = value;
  }

   getValue() {
    return (this.element).valueAsNumber;
  }
}
