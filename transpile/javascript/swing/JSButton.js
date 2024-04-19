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
    LookAndFeel.CURRENT.styleJSButton(this);
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.element.textContent = text;
  }

  /**
   * Clone of javax.swing.JButton.setEnabled
   *
   * @param b true to enable the button, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
    }
  }
}
