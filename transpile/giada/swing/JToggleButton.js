/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
class JToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jtogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) => this.onclick();
    this.element.appendChild(this.togglebutton);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
  }

   setText(text) {
    this.text.textContent = text;
  }

   setSelected(selected) {
    this.togglebutton.checked = selected;
  }

   isSelected() {
    return this.togglebutton.checked;
  }
}
