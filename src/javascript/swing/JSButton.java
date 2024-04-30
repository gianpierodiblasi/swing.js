package javascript.swing;

import static def.dom.Globals.document;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JSButton extends AbstractButton {

  public JSButton() {
    super(document.createElement("button"));

    this.cssAddClass("jsbutton");
    this.addEventListener("click", event -> this.onclick());
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.setContent(text);
  }

  /**
   * Clone of javax.swing.JButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
  public void setContentAreaFilled(boolean b) {
    if (b) {
      this.cssRemoveClass("jsbutton-outline");
    } else {
      this.cssAddClass("jsbutton-outline");
    }
  }
}
