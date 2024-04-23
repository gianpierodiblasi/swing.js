package javascript.swing;

import static def.dom.Globals.document;
import javascript.swing.plaf.LookAndFeel;

/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
public class JSLabel extends JSComponent {

  public JSLabel() {
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
  public void setText(String text) {
    this.element.textContent = text;
  }
}
