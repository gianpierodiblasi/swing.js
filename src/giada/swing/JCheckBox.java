package giada.swing;

import def.dom.Element;
import static def.dom.Globals.document;
import def.dom.Text;

/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
public class JCheckBox extends JComponent {

  private final Element checkbox;
  private final Text text;

  public JCheckBox() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");

    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.element.appendChild(this.checkbox);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
  }

  public void setText(String text) {
    this.text.textContent = text;
  }
}
