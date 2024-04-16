package giada.awt;

import giada.swing.JComponent;
import giada.swing.JPanel;

/**
 * The java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
public interface LayoutManager {

  public void setPanel(JPanel panel);

  public void resetPanel(JPanel panel);

  public void addInPanel(JPanel panel, JComponent component, Object constraints);
}
