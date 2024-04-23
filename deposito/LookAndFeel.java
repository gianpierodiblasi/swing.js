package javascript.swing.plaf;

import javascript.swing.JSButton;
import javascript.swing.JSCheckBox;
import javascript.swing.JSComboBox;
import javascript.swing.JSComponent;
import javascript.swing.JSDialog;
import javascript.swing.JSLabel;
import javascript.swing.JSProgressBar;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.JSTabbedPane;
import javascript.swing.JSToggleButton;

public abstract class LookAndFeel {
  /**
   * Applies the style to a combobox
   *
   * @param combobox The combobox
   */
  public abstract void styleJSComboBox(JSComboBox<?> combobox);

  /**
   * Applies the style to a dialog
   *
   * @param dialog The dialog
   */
  public abstract void styleJSDialog(JSDialog dialog);

  /**
   * Applies the style to a label
   *
   * @param label The label
   */
  public abstract void styleJSLabel(JSLabel label);

  /**
   * Applies the style to a progressbar
   *
   * @param progressbar The progressbar
   */
  public abstract void styleJSProgressBar(JSProgressBar progressbar);

  /**
   * Applies the style to a radiobutton
   *
   * @param radiobutton The radiobutton
   */
  public abstract void styleJSRadioButton(JSRadioButton radiobutton);

  /**
   * Applies the style to a slider
   *
   * @param slider The slider
   */
  public abstract void styleJSSlider(JSSlider slider);

  /**
   * Applies the style to a spinner
   *
   * @param spinner The spinner
   */
  public abstract void styleJSSpinner(JSSpinner spinner);

  /**
   * Applies the style to a tabbedpane
   *
   * @param tabbedpane The tabbedpane
   * @param tab The added tab
   * @param component The added component
   */
  public abstract void styleJSTabbedPane(JSTabbedPane tabbedpane, JSRadioButton tab, JSComponent component);

  /**
   * Applies the style to a togglebutton
   *
   * @param togglebutton The togglebutton
   */
  public abstract void styleJSToggleButton(JSToggleButton togglebutton);
}
