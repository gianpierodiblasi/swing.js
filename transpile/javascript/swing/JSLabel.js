/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JSLabel extends JSComponent {

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jslabel");
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }
}
