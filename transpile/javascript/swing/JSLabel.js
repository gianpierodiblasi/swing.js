/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JSLabel extends JSComponent {

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jlabel");
    LookAndFeel.CURRENT.styleJSLabel(this);
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
   setText(text) {
    this.element.textContent = text;
  }
}
