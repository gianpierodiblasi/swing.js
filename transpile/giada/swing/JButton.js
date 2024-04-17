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
    if (LookAndFeel.CURRENT) {
      LookAndFeel.CURRENT.styleJButton(this);
    }
  }

   setText(text) {
    this.element.textContent = text;
  }
}
