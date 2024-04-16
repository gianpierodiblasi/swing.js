package giada.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
public class JRadioButton extends AbstractButton {

  private final $HTMLElement radiobutton;
  private final Text text;

  public JRadioButton() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jradiobutton");

    this.radiobutton = ($HTMLElement) document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) -> this.onclick();
    this.element.appendChild(this.radiobutton);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
  }

  public void setText(String text) {
    this.text.textContent = text;
  }

  public String getText() {
    return this.text.textContent;
  }

  public void setSelected(boolean selected) {
    this.radiobutton.checked = selected;
  }

  public boolean isSelected() {
    return this.radiobutton.checked;
  }
}
