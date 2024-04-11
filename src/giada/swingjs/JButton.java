package giada.swingjs;

import static def.dom.Globals.document;
import def.js.Array;
import giada.swingjs.event.ActionEvent;
import giada.swingjs.event.ActionListener;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JButton extends JComponent {

  private final Array<ActionListener> listeners = new Array<>();

  public JButton() {
    super();

    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) -> this.onclick();
  }

  public void setText(String text) {
    this.element.textContent = text;
  }

  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  private Object onclick() {
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
