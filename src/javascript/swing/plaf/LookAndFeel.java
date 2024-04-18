package javascript.swing.plaf;

import javascript.swing.JSButton;
import javascript.swing.JSCheckBox;
import javascript.swing.JSLabel;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSpinner;

/**
 * The abstract object of any implementation able to redefine the look and feel
 * of all components. It is mandatory to set a Look&amp;Feel before the creation
 * of the first component; the default Look&amp;Feel is the BootstrapLookAndFeel
 * which can be set in this way
 * <code>LookAndFeel.CURRENT = BootstrapLookAndFeel.create()</code>
 *
 * @author gianpiero.diblasi
 * @see javascript.swing.plaf.BootstrapLookAndFeel
 */
public abstract class LookAndFeel {

  public static LookAndFeel CURRENT;

  /**
   * Returns the description of this Look&amp;Feel
   *
   * @return The description of this Look&amp;Feel
   */
  public abstract String getDescription();

  /**
   * Applies the style to a button
   *
   * @param button The button
   */
  public abstract void styleJSButton(JSButton button);

  /**
   * Applies the style to a checkbox
   *
   * @param checkbox The checkbox
   */
  public abstract void styleJSCheckBox(JSCheckBox checkbox);

  /**
   * Applies the style to a label
   *
   * @param label The label
   */
  public abstract void styleJSLabel(JSLabel label);

  /**
   * Applies the style to a radiobutton
   *
   * @param radiobutton The radiobutton
   */
  public abstract void styleJSRadioButton(JSRadioButton radiobutton);
  
  /**
   * Applies the style to a spinner
   *
   * @param spinner The spinner
   */
  public abstract void styleJSSpinner(JSSpinner spinner);
}
