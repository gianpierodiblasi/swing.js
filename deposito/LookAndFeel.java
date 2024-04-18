package giada.swing.plaf;

import giada.swing.JButton;
import giada.swing.JLabel;

/**
 * The abstract object of any implementation able to redefine the look and feel
 * of all components
 *
 * @author gianpiero.diblasi
 */
public abstract class LookAndFeel {

  public static LookAndFeel CURRENT;

  public abstract String getDescription();
  
  public abstract void styleJButton(JButton button);
  
  public abstract void styleJLabel(JLabel label);
}
