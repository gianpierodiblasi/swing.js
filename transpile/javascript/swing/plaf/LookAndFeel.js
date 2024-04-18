/**
 * The abstract object of any implementation able to redefine the look and feel
 * of all components. It is mandatory to set a Look&amp;Feel before the creation of
 * the first component; the default Look&amp;Feel is the BootstrapLookAndFeel which
 * can be set in this way
 * <code>LookAndFeel.CURRENT = BootstrapLookAndFeel.create()</code>
 *
 * @author gianpiero.diblasi
 * @see javascript.swing.plaf.BootstrapLookAndFeel
 */
class LookAndFeel {

  static  CURRENT = null;

  /**
   * Returns the description of this Look&amp;Feel
   *
   * @return The description of this Look&amp;Feel
   */
   getDescription() {
  }

  /**
   * Applies the style to a button
   *
   * @param button The button
   */
   styleJSButton(button) {
  }
  // public abstract void styleJLabel(JLabel label);
}
