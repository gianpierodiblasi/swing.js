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
 * The panel to show swatch colors
 *
 * @author gianpiero.diblasi
 */
public class JSColorSwatchesPanel extends JSPanel {
  
  private Color color;
  private final Array<ActionListener> listeners = new Array<>();

  /**
   * Creates the object
   */
  public JSColorSwatchesPanel() {
    super();
    this.setLayout(new GridLayout(9, 31, 1, 1));
    
    for (int index = 0; index < JSColorSwatchesPanel.rawValues.length; index += 3) {
      this.addButton(new Color(JSColorSwatchesPanel.rawValues.$get(index), JSColorSwatchesPanel.rawValues.$get(index + 1), JSColorSwatchesPanel.rawValues.$get(index + 2), 255));
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
  
  private final static Array<Integer> rawValues = new Array<>(
          255, 255, 255, // first row.
          204, 255, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          204, 204, 255,
          255, 204, 255,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 204, 204,
          255, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 255, 204,
          204, 204, 204, // second row.
          153, 255, 255,
          153, 204, 255,
          153, 153, 255,
          153, 153, 255,
          153, 153, 255,
          153, 153, 255,
          153, 153, 255,
          153, 153, 255,
          153, 153, 255,
          204, 153, 255,
          255, 153, 255,
          255, 153, 204,
          255, 153, 153,
          255, 153, 153,
          255, 153, 153,
          255, 153, 153,
          255, 153, 153,
          255, 153, 153,
          255, 153, 153,
          255, 204, 153,
          255, 255, 153,
          204, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 153,
          153, 255, 204,
          204, 204, 204, // third row
          102, 255, 255,
          102, 204, 255,
          102, 153, 255,
          102, 102, 255,
          102, 102, 255,
          102, 102, 255,
          102, 102, 255,
          102, 102, 255,
          153, 102, 255,
          204, 102, 255,
          255, 102, 255,
          255, 102, 204,
          255, 102, 153,
          255, 102, 102,
          255, 102, 102,
          255, 102, 102,
          255, 102, 102,
          255, 102, 102,
          255, 153, 102,
          255, 204, 102,
          255, 255, 102,
          204, 255, 102,
          153, 255, 102,
          102, 255, 102,
          102, 255, 102,
          102, 255, 102,
          102, 255, 102,
          102, 255, 102,
          102, 255, 153,
          102, 255, 204,
          153, 153, 153, // fourth row
          51, 255, 255,
          51, 204, 255,
          51, 153, 255,
          51, 102, 255,
          51, 51, 255,
          51, 51, 255,
          51, 51, 255,
          102, 51, 255,
          153, 51, 255,
          204, 51, 255,
          255, 51, 255,
          255, 51, 204,
          255, 51, 153,
          255, 51, 102,
          255, 51, 51,
          255, 51, 51,
          255, 51, 51,
          255, 102, 51,
          255, 153, 51,
          255, 204, 51,
          255, 255, 51,
          204, 255, 51,
          153, 255, 51,
          102, 255, 51,
          51, 255, 51,
          51, 255, 51,
          51, 255, 51,
          51, 255, 102,
          51, 255, 153,
          51, 255, 204,
          153, 153, 153, // Fifth row
          0, 255, 255,
          0, 204, 255,
          0, 153, 255,
          0, 102, 255,
          0, 51, 255,
          0, 0, 255,
          51, 0, 255,
          102, 0, 255,
          153, 0, 255,
          204, 0, 255,
          255, 0, 255,
          255, 0, 204,
          255, 0, 153,
          255, 0, 102,
          255, 0, 51,
          255, 0, 0,
          255, 51, 0,
          255, 102, 0,
          255, 153, 0,
          255, 204, 0,
          255, 255, 0,
          204, 255, 0,
          153, 255, 0,
          102, 255, 0,
          51, 255, 0,
          0, 255, 0,
          0, 255, 51,
          0, 255, 102,
          0, 255, 153,
          0, 255, 204,
          102, 102, 102, // sixth row
          0, 204, 204,
          0, 204, 204,
          0, 153, 204,
          0, 102, 204,
          0, 51, 204,
          0, 0, 204,
          51, 0, 204,
          102, 0, 204,
          153, 0, 204,
          204, 0, 204,
          204, 0, 204,
          204, 0, 204,
          204, 0, 153,
          204, 0, 102,
          204, 0, 51,
          204, 0, 0,
          204, 51, 0,
          204, 102, 0,
          204, 153, 0,
          204, 204, 0,
          204, 204, 0,
          204, 204, 0,
          153, 204, 0,
          102, 204, 0,
          51, 204, 0,
          0, 204, 0,
          0, 204, 51,
          0, 204, 102,
          0, 204, 153,
          0, 204, 204,
          102, 102, 102, // seventh row
          0, 153, 153,
          0, 153, 153,
          0, 153, 153,
          0, 102, 153,
          0, 51, 153,
          0, 0, 153,
          51, 0, 153,
          102, 0, 153,
          153, 0, 153,
          153, 0, 153,
          153, 0, 153,
          153, 0, 153,
          153, 0, 153,
          153, 0, 102,
          153, 0, 51,
          153, 0, 0,
          153, 51, 0,
          153, 102, 0,
          153, 153, 0,
          153, 153, 0,
          153, 153, 0,
          153, 153, 0,
          153, 153, 0,
          102, 153, 0,
          51, 153, 0,
          0, 153, 0,
          0, 153, 51,
          0, 153, 102,
          0, 153, 153,
          0, 153, 153,
          51, 51, 51, // eigth row
          0, 102, 102,
          0, 102, 102,
          0, 102, 102,
          0, 102, 102,
          0, 51, 102,
          0, 0, 102,
          51, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 102,
          102, 0, 51,
          102, 0, 0,
          102, 51, 0,
          102, 102, 0,
          102, 102, 0,
          102, 102, 0,
          102, 102, 0,
          102, 102, 0,
          102, 102, 0,
          102, 102, 0,
          51, 102, 0,
          0, 102, 0,
          0, 102, 51,
          0, 102, 102,
          0, 102, 102,
          0, 102, 102,
          0, 0, 0, // ninth row
          0, 51, 51,
          0, 51, 51,
          0, 51, 51,
          0, 51, 51,
          0, 51, 51,
          0, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 51,
          51, 0, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          51, 51, 0,
          0, 51, 0,
          0, 51, 51,
          0, 51, 51,
          0, 51, 51,
          0, 51, 51,
          51, 51, 51);
}
