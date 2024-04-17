package giada.swing;

import static def.dom.Globals.document;
import def.js.Array;
import giada.swing.MnR.AbstractComboBoxModelAndRenderer;
import giada.swing.event.ChangeEvent;
import giada.swing.event.ChangeListener;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
public class JSpinner extends JComponent {

  private final Array<ChangeListener> listeners = new Array<>();

  public JSpinner() {
    super();

    this.element = document.createElement("input");
    this.element.setAttribute("type", "number");
    this.element.classList.add("jspinner");
    this.element.oninput = (event) -> this.onchange();
    (($HTMLElement) this.element).valueAsNumber = 0;
  }

  public void setModel(SpinnerNumberModel model) {
    model.setJSpinner(this);
  }

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

  public void setValue(double value) {
    (($HTMLElement) this.element).valueAsNumber = value;
  }

  public double getValue() {
    return (($HTMLElement) this.element).valueAsNumber;
  }
}
