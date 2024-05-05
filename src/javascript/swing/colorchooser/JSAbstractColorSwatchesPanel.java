package javascript.swing.colorchooser;

import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GridLayout;
import javascript.awt.event.ActionEvent;
import javascript.awt.event.ActionListener;
import javascript.swing.JSButton;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The abstract panel to show swatch colors
 *
 * @author gianpiero.diblasi
 */
public abstract class JSAbstractColorSwatchesPanel extends JSPanel {

  private Color color;
  private final Array<ActionListener> listeners = new Array<>();

  /**
   * Creates the object
   *
   * @param rows The row count
   * @param columns The column count
   * @param rawValues The raw color values
   */
  public JSAbstractColorSwatchesPanel(int rows, int columns, Array<Integer> rawValues) {
    super();
    this.setLayout(new GridLayout(rows, columns, 1, 1));

    for (int index = 0; index < rawValues.length; index += 3) {
      this.addButton(new Color(rawValues.$get(index), rawValues.$get(index + 1), rawValues.$get(index + 2), 255));
    }
  }

  private void addButton(Color c) {
    JSButton button = new JSButton();
    button.setBackground(c);
    button.setTooltip(c.red + ", " + c.green + ", " + c.blue);
    button.getStyle().borderColor = c.getRGB_HEX();
    button.addActionListener(event -> {
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
  public Color getSelectedColor() {
    return this.color;
  }

  /**
   * Adds an action listener
   *
   * @param listener The listener
   */
  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  private void onclick() {
    ActionEvent event = new ActionEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.actionPerformed(event);
      }
    });
  }
}
