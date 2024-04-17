package giada.swing;

import static def.dom.Globals.document;
import giada.swing.plaf.LookAndFeel;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JButton extends AbstractButton {

  public JButton() {
    super();

    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) -> this.onclick();
    
    if ($exists(LookAndFeel.CURRENT)) {
      LookAndFeel.CURRENT.styleJButton(this);
    }
  }

  public void setText(String text) {
    this.element.textContent = text;
  }
}
