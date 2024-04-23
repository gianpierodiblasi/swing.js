/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
class JSRadioButton extends AbstractButton {

   radiobutton = null;

   text = null;

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jsradiobutton");
    this.radiobutton = document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) => this.onclick();
    this.appendNodeChild(this.radiobutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Set this radiobutton as a toggle
   */
   setToggle() {
    // this.radiobutton.setAttribute("role", "toggle");
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

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }
}
