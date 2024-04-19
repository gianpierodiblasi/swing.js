/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
class JSToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jtogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) => this.onclick();
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
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.togglebutton.checked;
  }

  /**
   * Clone of javax.swing.JToggleButton.setEnabled
   *
   * @param b true to enable the togglebutton, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.togglebutton.removeAttribute("disabled");
    } else {
      this.togglebutton.setAttribute("disabled", "disabled");
    }
  }
}
