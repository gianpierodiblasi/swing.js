package giada.swing;

import static def.dom.Globals.document;

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
  }

  public void setText(String text) {
    this.element.textContent = text;
  }
}
