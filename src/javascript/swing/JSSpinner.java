package javascript.swing;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import javascript.swing.plaf.LookAndFeel;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
public class JSSpinner extends JSComponent {

  private final Array<ChangeListener> listeners = new Array<>();

  public JSSpinner() {
    super();

    this.element = document.createElement("input");
    this.element.setAttribute("type", "number");
    this.element.classList.add("jspinner");
    this.element.oninput = (event) -> this.onchange();
    (($HTMLElement) this.element).valueAsNumber = 0;
    
    LookAndFeel.CURRENT.styleJSSpinner(this);
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
    (($HTMLElement) this.element).valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
  public double getValue() {
    return (($HTMLElement) this.element).valueAsNumber;
  }
}
