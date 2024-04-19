package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import javascript.swing.plaf.LookAndFeel;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
public class JSToggleButton extends AbstractButton {

  private final $HTMLElement togglebutton;
  private final Text text;

  public JSToggleButton() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jtogglebutton");

    this.togglebutton = ($HTMLElement) document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) -> this.onclick();
    this.togglebutton.setAttribute("role", "toggle");
    this.element.appendChild(this.togglebutton);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);

    LookAndFeel.CURRENT.styleJSToggleButton(this);
  }

  /**
   * Clone of javax.swing.JToggleButton.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
  public void setSelected(boolean selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
  public boolean isSelected() {
    return this.togglebutton.checked;
  }
  
  /**
   * Clone of javax.swing.JToggleButton.setEnabled
   *
   * @param b true to enable the togglebutton, false otherwise
   */
  public void setEnabled(boolean b) {
    if (b) {
      this.togglebutton.removeAttribute("disabled");
    } else {
      this.togglebutton.setAttribute("disabled", "disabled");
    }
  }
}
