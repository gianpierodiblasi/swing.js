package giada.swingjs;

import static def.dom.Globals.document;
import def.dom.HTMLElement;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JButton extends JComponent {

  private final HTMLElement button;

  public JButton() {
    super();

    this.button = document.createElement("button");
    this.button.classList.add("jframe");
  }
}
