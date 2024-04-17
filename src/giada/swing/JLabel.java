package giada.swing;

import static def.dom.Globals.document;
import giada.swing.plaf.LookAndFeel;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
public class JLabel extends JComponent {

  public JLabel() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jlabel");
    
    if ($exists(LookAndFeel.CURRENT)) {
      LookAndFeel.CURRENT.styleJLabel(this);
    }
  }

  public void setText(String text) {
    this.element.textContent = text;
  }
}
