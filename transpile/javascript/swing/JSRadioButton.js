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
   * Set this radiobutton as a switch; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setSwitch() {
    this.radiobutton.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this radiobutton as a toggle; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setToggle() {
    this.radiobutton.setAttribute("role", "toggle");
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
   * Clone of javax.swing.JRadioButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
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

  /**
   * Clone of javax.swing.JRadioButton.setEnabled
   *
   * @param b true to enable the radiobutton, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }
}
