package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
public class JSRadioButton extends AbstractButton {

  private final $HTMLElement radiobutton;
  private final Text text;

  public JSRadioButton() {
    super(document.createElement("label"));

    this.cssAddClass("jsradiobutton");

    this.radiobutton = ($HTMLElement) document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) -> this.onclick();
    this.appendNodeChild(this.radiobutton);

    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Set this radiobutton as a toggle
   */
  public void setToggle() {
    this.setAttribute("role", "toggle");
  }

  /**
   * Clone of javax.swing.JRadioButton.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JRadioButton.getText
   *
   * @return The text
   */
  public String getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JRadioButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
  public void setSelected(boolean selected) {
    this.radiobutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JRadioButton.isSelected
   *
   * @return true if selected, false otherwise
   */
  public boolean isSelected() {
    return this.radiobutton.checked;
  }

  @Override
  public void setEnabled(boolean b) {
    super.setEnabled(b);

    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }
}
