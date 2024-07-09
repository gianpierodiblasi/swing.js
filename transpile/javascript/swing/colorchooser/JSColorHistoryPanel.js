/**
 * The panel to show the color history
 *
 * @author gianpiero.diblasi
 */
class JSColorHistoryPanel extends JSPanel {

   color = null;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
    this.getStyle().overflowY = "scroll";
    Color.getHistory().forEach(element => this.addButton(element));
  }

   addButton(c) {
    let colorPreview = new JSColorPreview();
    colorPreview.getStyle().minWidth = "10rem";
    colorPreview.setColor(c);
    let button = new JSButton();
    button.setTooltip(c.red + ", " + c.green + ", " + c.blue + "," + c.alpha);
    button.appendChild(colorPreview);
    button.getStyle().padding = "0px";
    button.getStyle().border = "2px solid transparent";
    button.getStyle().background = "transparent";
    button.addActionListener(event => {
      this.color = c;
      this.onclick();
    });
    this.add(button, null);
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    return this.color;
  }

  /**
   * Adds an action listener
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
  }
}
