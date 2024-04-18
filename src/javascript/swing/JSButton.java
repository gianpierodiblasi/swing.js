package javascript.swing;

import static def.dom.Globals.document;
import javascript.swing.plaf.LookAndFeel;

/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
public class JSButton extends AbstractButton {

  public JSButton() {
    super();

    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) -> this.onclick();
    
    LookAndFeel.CURRENT.styleJSButton(this);
  }

  /**
   * Clone of javax.swing.JButton.setText
   * @param text The text
   */
  public void setText(String text) {
    this.element.textContent = text;
  }
}
