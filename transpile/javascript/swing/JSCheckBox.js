/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JSCheckBox extends AbstractButton {

   checkbox = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) => this.onclick();
    this.element.appendChild(this.checkbox);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a switch; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setSwitch() {
    this.checkbox.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a toggle; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setToggle() {
    this.checkbox.setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Clone of javax.swing.JCheckBox.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JCheckBox.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.checkbox.checked = selected;
  }

  /**
   * Clone of javax.swing.JCheckBox.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.checkbox.checked;
  }

  /**
   * Clone of javax.swing.JCheckBox.setEnabled
   *
   * @param b true to enable the checkbox, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.checkbox.removeAttribute("disabled");
    } else {
      this.checkbox.setAttribute("disabled", "disabled");
    }
  }
}
