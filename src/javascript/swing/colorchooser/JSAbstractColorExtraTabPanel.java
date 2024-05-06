package javascript.swing.colorchooser;

import def.js.Array;
import javascript.awt.Color;
import javascript.swing.JSPanel;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import static simulation.js.$Globals.$typeof;

/**
 * The abstract panel to add extra tabs to the JSColorPanel
 *
 * @author gianpiero.diblasi
 */
public abstract class JSAbstractColorExtraTabPanel extends JSPanel {

  private final Array<ChangeListener> listeners = new Array<>();

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public abstract Color getSelectedColor();

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public abstract void setSelectedColor(Color color);

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
  public abstract boolean getValueIsAdjusting();

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  protected void onchange() {
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }
}
