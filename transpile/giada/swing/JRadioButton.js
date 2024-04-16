/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
class JRadioButton extends AbstractButton {

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
  }

   setText(text) {
    this.text.textContent = text;
  }

   getText() {
    return this.text.textContent;
  }

   setSelected(selected) {
    this.radiobutton.checked = selected;
  }

   isSelected() {
    return this.radiobutton.checked;
  }
}
