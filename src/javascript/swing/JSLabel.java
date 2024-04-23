package javascript.swing;

import static def.dom.Globals.document;

/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
public class JSLabel extends JSComponent {

  public JSLabel() {
    super(document.createElement("label"));
    this.cssAddClass("jslabel");
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.setContent(text);
  }
}
