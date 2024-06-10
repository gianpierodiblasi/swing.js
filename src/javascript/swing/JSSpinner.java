package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Array;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$typeof;
import static simulation.js.$Globals.setTimeout;

/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
public class JSSpinner extends JSComponent {

  private final $HTMLElement input = ($HTMLElement) document.createElement("input");
  private final HTMLElement up = document.createElement("button");
  private final HTMLElement down = document.createElement("button");

  private boolean run;
  private double rand;
  private boolean valueIsAdjusting;

  private final Array<ChangeListener> listeners = new Array<>();

  /**
   * Creates the object
   */
  public JSSpinner() {
    super(document.createElement("div"));
    this.cssAddClass("jsspinner");

    this.input.setAttribute("type", "number");
    this.input.setAttribute("value", "0");
    this.input.style.setProperty("grid-area", "num");
    this.input.addEventListener("input", event -> this.onchange(true));
    this.input.addEventListener("change", event -> this.onchange(false));
    this.appendNodeChild(this.input);

    this.up.textContent = "\u25B2";
    this.up.style.setProperty("grid-area", "up");
    this.up.tabIndex = -1;
    this.up.addEventListener("mousedown", event -> this.spin(true));
    this.up.addEventListener("mouseup", event -> this.run = false);
    this.up.addEventListener("mouseleave", event -> this.run = false);
    this.appendNodeChild(this.up);

    this.down.textContent = "\u25BC";
    this.down.style.setProperty("grid-area", "down");
    this.down.tabIndex = -1;
    this.down.addEventListener("mousedown", event -> this.spin(false));
    this.down.addEventListener("mouseup", event -> this.run = false);
    this.down.addEventListener("mouseleave", event -> this.run = false);
    this.appendNodeChild(this.down);
  }

  private void spin(boolean isUp) {
    if (this.run) {
      return;
    } else if (isUp) {
      this.input.stepUp();
    } else {
      this.input.stepDown();
    }

    this.run = true;
    this.spinAgain(isUp, 250);
  }

  private void spinAgain(boolean isUp, int delay) {
    this.rand = Math.random();
    double rnd = this.rand;
    setTimeout(() -> {
      if (!this.run || rnd != this.rand) {
        this.onchange(false);
      } else if (isUp) {
        this.input.stepUp();
        this.onchange(true);
        this.spinAgain(isUp, 25);
      } else {
        this.input.stepDown();
        this.onchange(true);
        this.spinAgain(isUp, 25);
      }
    }, delay);
  }

  /**
   * Clone of javax.swing.JSpinner.setModel
   *
   * @param model The model
   */
  public void setModel(SpinnerNumberModel model) {
    model.setJSSpinner(this);
  }

  /**
   * Clone of javax.swing.JSpinner.addChangeListener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private void onchange(boolean b) {
    this.valueIsAdjusting = b;
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Clone of javax.swing.JSpinner.setValue
   *
   * @param value The value
   */
  public void setValue(double value) {
    this.input.valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
  public double getValue() {
    return this.input.valueAsNumber;
  }

  /**
   * Clone of javax.swing.JSpinner.getValueIsAdjusting
   *
   * @return true if value is adjusting, false otherwise
   */
  public boolean getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  @Override
  public void setEnabled(boolean b) {
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
