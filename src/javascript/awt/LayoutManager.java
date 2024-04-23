package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;

/**
 * The java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
public interface LayoutManager {

  /**
   * Sets the panel managed by this layout manager
   *
   * @param panel The panel
   */
  public void setPanel(JSPanel panel);

  /**
   * Resets the panel managed by this layout manager (all custom configurations
   * will be removed)
   *
   * @param panel The panel
   */
  public void resetPanel(JSPanel panel);

  /**
   * Add a component in a panel
   *
   * @param panel The panel
   * @param component The component
   * @param constraints The constraints
   */
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints);
}
