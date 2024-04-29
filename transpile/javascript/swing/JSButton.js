/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JSButton extends AbstractButton {

  constructor() {
    super(document.createElement("button"));
    this.cssAddClass("jsbutton");
    this.addEventListener("click", (event) => this.onclick());
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }

  /**
   * Clone of javax.swing.JButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jsbutton-outline");
    } else {
      this.cssAddClass("jsbutton-outline");
    }
  }
}
