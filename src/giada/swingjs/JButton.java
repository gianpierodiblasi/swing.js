package giada.swingjs;

import static def.dom.Globals.document;
import def.js.Array;
import giada.swingjs.event.ActionListener;

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
  }

  public void setText(String text) {
    this.element.textContent = text;
  }

  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }
}
