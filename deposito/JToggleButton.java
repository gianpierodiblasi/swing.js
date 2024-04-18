package giada.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
public class JToggleButton extends AbstractButton {

  private final $HTMLElement togglebutton;
  private final Text text;

  public JToggleButton() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jtogglebutton");

    this.togglebutton = ($HTMLElement) document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) -> this.onclick();
    this.element.appendChild(this.togglebutton);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
  }

  public void setText(String text) {
    this.text.textContent = text;
  }

  public void setSelected(boolean selected) {
    this.togglebutton.checked = selected;
  }

  public boolean isSelected() {
    return this.togglebutton.checked;
  }
}
