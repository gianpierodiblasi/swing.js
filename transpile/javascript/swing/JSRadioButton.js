/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
class JSRadioButton extends AbstractButton {

   radiobutton = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jradiobutton");
    this.radiobutton = document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) => this.onclick();
    this.element.appendChild(this.radiobutton);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this checkbox as a switch
   */
   setSwitch() {
    this.element.querySelector("input").setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this radiobutton as a toggle
   */
   setToggle() {
    this.element.querySelector("input").setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Clone of javax.swing.JRadioButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JRadioButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.radiobutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JRadioButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.radiobutton.checked;
  }
}
