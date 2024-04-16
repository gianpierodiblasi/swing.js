package giada.swing;

import static def.dom.Globals.document;

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
  }

  public void setText(String text) {
    this.element.textContent = text;
  }
}
