package giada.swingjs;

import static def.dom.Globals.document;
import def.dom.HTMLElement;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JButton extends JComponent {

  public JButton() {
    super();

    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
  }
}
