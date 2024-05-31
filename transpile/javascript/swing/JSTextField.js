/**
 * The javax.swing.JTextField clone
 *
 * @author gianpiero.diblasi
 */
class JSTextField extends JSComponent {

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("input"));
    this.cssAddClass("jstextfield");
    this.setAttribute("type", "text");
    this.addEventListener("input", event => this.onclick());
  }

  /**
   * Clone of javax.swing.JTextField.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setProperty("value", text);
  }

  /**
   * Clone of javax.swing.JSTextField.getText
   *
   * @return The text
   */
   getText() {
    return this.getProperty("value");
  }

  /**
   * Clone of javax.swing.JTextField.getText
   *
   * @param b true to make the textfield editable, false otherwise
   */
   setEditable(b) {
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
   addActionListener(listener) {
    this.listeners.push(listener);
  }

   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }
}
