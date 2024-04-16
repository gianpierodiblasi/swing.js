package giada.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
public class JCheckBox extends AbstractButton {

  private final $HTMLElement checkbox;
  private final Text text;

  public JCheckBox() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");

    this.checkbox = ($HTMLElement) document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) -> this.onclick();
    this.element.appendChild(this.checkbox);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
  }

  public void setText(String text) {
    this.text.textContent = text;
  }

  public void setSelected(boolean selected) {
    this.checkbox.checked = selected;
  }

  public boolean isSelected() {
    return this.checkbox.checked;
  }
}
