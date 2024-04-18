package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import javascript.swing.plaf.LookAndFeel;
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
    super();

    this.element = document.createElement("label");
    this.element.classList.add("jradiobutton");

    this.radiobutton = ($HTMLElement) document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) -> this.onclick();
    this.element.appendChild(this.radiobutton);

    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this checkbox as a switch
   */
  public void setSwitch() {
    this.radiobutton.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }
  
  /**
   * Set this radiobutton as a toggle
   */
  public void setToggle() {
    this.radiobutton.setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
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
}
