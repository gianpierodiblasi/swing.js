/**
 * The abstract object of any implementation able to redefine the look and feel
 * of all components. It is mandatory to set a Look&amp;Feel before the creation
 * of the first component; the default Look&amp;Feel is the DefaultLookAndFeel
 * which can be set in this way
 * <code>LookAndFeel.CURRENT = new DefaultLookAndFeel()</code>; the API provides
 * other Look&amp;Feels called BootstrapLookAndFeel (using the Bootstrap
 * library) and PicoLookAndFeel (using the Pico library) which can be set (for
 * example) in this way
 * <code>LookAndFeel.CURRENT = BootstrapLookAndFeel.create()</code> and
 * <code>LookAndFeel.CURRENT = new PicoLookAndFeel()</code>
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

  /**
   * Applies the style to a checkbox
   *
   * @param checkbox The checkbox
   */
   styleJSCheckBox(checkbox) {
  }

  /**
   * Applies the style to a combobox
   *
   * @param combobox The combobox
   */
   styleJSComboBox(combobox) {
  }

  /**
   * Applies the style to a label
   *
   * @param label The label
   */
   styleJSLabel(label) {
  }

  /**
   * Applies the style to a progressbar
   *
   * @param progressbar The progressbar
   */
   styleJSProgressBar(progressbar) {
  }

  /**
   * Applies the style to a radiobutton
   *
   * @param radiobutton The radiobutton
   */
   styleJSRadioButton(radiobutton) {
  }

  /**
   * Applies the style to a slider
   *
   * @param slider The slider
   */
   styleJSSlider(slider) {
  }

  /**
   * Applies the style to a spinner
   *
   * @param spinner The spinner
   */
   styleJSSpinner(spinner) {
  }

  /**
   * Applies the style to a tabbedpane
   *
   * @param tabbedpane The tabbedpane
   * @param tab The added tab
   * @param component The added component
   */
   styleJSTabbedPane(tabbedpane, tab, component) {
  }

  /**
   * Applies the style to a togglebutton
   *
   * @param togglebutton The togglebutton
   */
   styleJSToggleButton(togglebutton) {
  }
}
