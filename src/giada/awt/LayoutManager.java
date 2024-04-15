package giada.awt;

import giada.swing.JComponent;
import giada.swing.JPanel;

/**
 * The java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
public interface LayoutManager {

  public abstract void setPanel(JPanel panel);

  public abstract void resetPanel(JPanel panel);

  public abstract void addInPanel(JPanel panel, JComponent component, Object constraints);
}
