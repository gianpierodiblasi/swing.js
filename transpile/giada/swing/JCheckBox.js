/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JCheckBox extends AbstractButton {

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
  }

   setText(text) {
    this.text.textContent = text;
  }

   setSelected(selected) {
    this.checkbox.checked = selected;
  }

   isSelected() {
    return this.checkbox.checked;
  }
}
