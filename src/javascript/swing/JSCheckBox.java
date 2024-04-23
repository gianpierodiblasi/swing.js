package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
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
    super(document.createElement("label"));

    this.cssAddClass("jscheckbox");

    this.checkbox = ($HTMLElement) document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) -> this.onclick();
    this.appendNodeChild(this.checkbox);

    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Set this checkbox as a switch; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
  public void setSwitch() {
//    this.checkbox.setAttribute("role", "switch");
  }

  /**
   * Set this checkbox as a toggle; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
  public void setToggle() {
//    this.checkbox.setAttribute("role", "toggle");
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

  @Override
  public void setEnabled(boolean b) {
    super.setEnabled(b);

    if (b) {
      this.checkbox.removeAttribute("disabled");
    } else {
      this.checkbox.setAttribute("disabled", "disabled");
    }
  }
}
