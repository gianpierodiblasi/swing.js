package javascript.swing;

import def.dom.HTMLElement;
import def.js.Array;
import javascript.awt.event.ActionEvent;
import javascript.awt.event.ActionListener;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
public abstract class AbstractButton extends JSComponent {

  private final Array<ActionListener> listeners = new Array<>();

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  public AbstractButton(HTMLElement element) {
    super(element);
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
   *
   * @param listener The listener
   */
  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
   */
  public Object onclick() {
    ActionEvent event = new ActionEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }
}
