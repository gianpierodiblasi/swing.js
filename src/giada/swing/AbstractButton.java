package giada.swing;

import def.js.Array;
import giada.awt.event.ActionEvent;
import giada.awt.event.ActionListener;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
public abstract class AbstractButton extends JComponent {

  private final Array<ActionListener> listeners = new Array<>();

  public AbstractButton() {
    super();
  }

  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  protected Object onclick() {
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
