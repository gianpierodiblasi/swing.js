/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JSButton extends AbstractButton {

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) => this.onclick();
  }

  /**
   * Clone of javax.swing.JButton.setText
   * @param text The text
   */
   setText(text) {
    this.element.textContent = text;
  }
}
