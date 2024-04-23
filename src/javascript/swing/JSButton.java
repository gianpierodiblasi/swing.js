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
    this.addEventListener("click", (event) -> this.onclick());
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.setContent(text);
  }
}
