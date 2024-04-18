package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import javascript.swing.plaf.LookAndFeel;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
public class JSCheckBox extends AbstractButton {

  private final $HTMLElement checkbox;
  private final Text text;

  public JSCheckBox() {
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");

    this.checkbox = ($HTMLElement) document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) -> this.onclick();
    this.element.appendChild(this.checkbox);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);

    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a switch
   */
  public void setSwitch() {
    this.checkbox.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a toggle
   */
  public void setToggle() {
    this.checkbox.setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }
  
  /**
   * Clone of javax.swing.JCheckBox.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JCheckBox.setSelected
   *
   * @param selected true to select, false otherwise
   */
  public void setSelected(boolean selected) {
    this.checkbox.checked = selected;
  }

  /**
   * Clone of javax.swing.JCheckBox.isSelected
   *
   * @return true if selected, false otherwise
   */
  public boolean isSelected() {
    return this.checkbox.checked;
  }
}
