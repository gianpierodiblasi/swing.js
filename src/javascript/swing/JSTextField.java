package javascript.swing;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.awt.event.ActionEvent;
import javascript.awt.event.ActionListener;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JTextField clone
 *
 * @author gianpiero.diblasi
 */
public class JSTextField extends JSComponent {

  private final Array<ActionListener> listeners = new Array<>();

  public JSTextField() {
    super(document.createElement("input"));

    this.cssAddClass("jstextfield");
    this.setAttribute("type", "text");
    this.addEventListener("input", (event) -> this.onclick());
  }

  /**
   * Clone of javax.swing.JTextField.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.setProperty("value", text);
  }

  /**
   * Clone of javax.swing.JSTextField.getText
   *
   * @return The text
   */
  public String getText() {
    return this.getProperty("value");
  }

  /**
   * Clone of javax.swing.JTextField.getText
   *
   * @param b true to make the textfield editable, false otherwise
   */
  public void setEditable(boolean b) {
    if (b) {
      this.removeAttribute("readonly");
    } else {
      this.setAttribute("readonly", "readonly");
    }
  }

  /**
   * Clone of javax.swing.JTextField.addActionListener, this listener is
   * triggered whenever the text changes
   *
   * @param listener The listener
   */
  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  private Object onclick() {
    ActionEvent event = new ActionEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }
}
