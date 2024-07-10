package javascript.swing.colorchooser;

import def.js.Array;
import javascript.awt.BoxLayout;
import javascript.awt.Color;
import javascript.awt.GridLayout;
import javascript.awt.event.ActionEvent;
import javascript.awt.event.ActionListener;
import javascript.swing.JSButton;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The panel to show the color history
 *
 * @author gianpiero.diblasi
 */
public class JSColorHistoryPanel extends JSPanel {

  private Color color;
  private final Array<ActionListener> listeners = new Array<>();

  /**
   * Creates the object
   */
  public JSColorHistoryPanel() {
    super();
    this.setLayout(new GridLayout(8, 6, 5, 5));
    this.reload();
  }

  /**
   * Reloads the color history
   */
  public void reload() {
    this.clearContent();
    Color.getHistory().forEach(element -> this.addButton(element));
  }

  private void addButton(Color c) {
    JSColorPreview colorPreview = new JSColorPreview();
    colorPreview.getStyle().width = "100%";
    colorPreview.getStyle().height = "100%";
    colorPreview.setColor(c);

    JSButton button = new JSButton();
    button.setTooltip(c.red + ", " + c.green + ", " + c.blue + ", " + c.alpha);
    button.appendChild(colorPreview);
    button.getStyle().padding = "0px";
    button.getStyle().width = "100%";
    button.getStyle().height = "100%";
    button.getStyle().border = "2px solid transparent";
    button.getStyle().background = "transparent";

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
