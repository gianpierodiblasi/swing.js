/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JCheckBox extends JComponent {

   checkbox = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");
    this.checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    this.element.appendChild(checkbox);
    this.text = document.createTextNode("");
    this.element.appendChild(text);
  }

   setText(text) {
    this.text.textContent = text;
  }
}
