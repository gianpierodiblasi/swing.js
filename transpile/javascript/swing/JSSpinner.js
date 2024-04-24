/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSSpinner extends JSComponent {

   input = document.createElement("input");

   up = document.createElement("button");

   down = document.createElement("button");

   run = false;

   rand = 0.0;

   listeners = new Array();

  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsspinner");
    this.input.setAttribute("type", "number");
    this.input.setAttribute("value", "0");
    this.input.style.setProperty("grid-area", "num");
    this.input.oninput = (event) => this.onchange();
    this.appendNodeChild(this.input);
    this.up.textContent = "\u25B2";
    this.up.style.setProperty("grid-area", "up");
    this.up.onmousedown = (event) => this.spin(true);
    this.up.onmouseup = (event) => this.run = false;
    this.appendNodeChild(this.up);
    this.down.textContent = "\u25BC";
    this.down.style.setProperty("grid-area", "down");
    this.down.onmousedown = (event) => this.spin(false);
    this.down.onmouseup = (event) => this.run = false;
    this.appendNodeChild(this.down);
  }

   spin(isUp) {
    if (this.run) {
      return null;
    } else if (isUp) {
      this.input.stepUp();
    } else {
      this.input.stepDown();
    }
    this.run = true;
    this.spinAgain(isUp, 250);
    return null;
  }

   spinAgain(isUp, delay) {
    this.rand = Math.random();
    let rnd = this.rand;
    setTimeout(() => {
      if (!this.run || rnd !== this.rand) {
      } else if (isUp) {
        this.input.stepUp();
        this.spinAgain(isUp, 25);
      } else {
        this.input.stepDown();
        this.spinAgain(isUp, 25);
      }
    }, delay);
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
    this.input.valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return this.input.valueAsNumber;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.input.removeAttribute("disabled");
      this.up.removeAttribute("disabled");
      this.down.removeAttribute("disabled");
    } else {
      this.input.setAttribute("disabled", "disabled");
      this.up.setAttribute("disabled", "disabled");
      this.down.setAttribute("disabled", "disabled");
    }
  }
}
