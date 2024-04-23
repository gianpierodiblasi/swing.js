package javascript.swing;

import static def.dom.Globals.document;
import def.js.Array;
import static def.js.Globals.parseFloat;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
public class JSSpinner extends JSComponent {

  private final Array<ChangeListener> listeners = new Array<>();

  public JSSpinner() {
    super(document.createElement("input"));
    this.setAttribute("type", "number");
    this.setAttribute("value", "0");
    this.cssAddClass("jsspinner");
    this.addEventListener("input", (event) -> this.onchange());
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

  private Object onchange() {
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
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
  public void setValue(double value) {
    this.setAttribute("value", "" + value);
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
  public double getValue() {
    return parseFloat(this.getAttribute("value"));
  }
}
