/**
 * The abstract panel to show swatch colors
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorSwatchesPanel extends JSPanel {

   color = null;

   listeners = new Array();

  /**
   * Creates the object
   *
   * @param rows The row count
   * @param columns The column count
   * @param rawValues The raw color values
   */
  constructor(rows, columns, rawValues) {
    super();
    this.setLayout(new GridLayout(rows, columns, 1, 1));
    for (let index = 0; index < rawValues.length; index += 3) {
      this.addButton(new Color(rawValues[index], rawValues[index + 1], rawValues[index + 2], 255));
    }
  }

   addButton(c) {
    let button = new JSButton();
    button.setBackground(c);
    button.setTooltip(c.red + ", " + c.green + ", " + c.blue);
    button.getStyle().borderColor = c.getRGB_HEX();
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
