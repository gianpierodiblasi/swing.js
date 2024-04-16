/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends AbstractButton {

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) => this.onclick();
  }

   setText(text) {
    this.element.textContent = text;
  }
}
