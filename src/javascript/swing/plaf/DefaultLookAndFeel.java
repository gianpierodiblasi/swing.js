package javascript.swing.plaf;

import static def.dom.Globals.document;
import javascript.swing.JSButton;
import javascript.swing.JSCheckBox;
import javascript.swing.JSComboBox;
import javascript.swing.JSLabel;
import javascript.swing.JSProgressBar;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.JSTabbedPane;
import javascript.swing.JSToggleButton;

/**
 * The Default LookAndFeel
 *
 * @author gianpiero.diblasi
 */
public class DefaultLookAndFeel extends LookAndFeel {

  /**
   * Creates the object
   */
  public DefaultLookAndFeel() {
    super();
    document.body.classList.add("defaultlaf");
  }

  @Override
  @SuppressWarnings("StringEquality")
  public String getDescription() {
    return "Default LookAndFeel";
  }

  @Override
  public void styleJSButton(JSButton button) {
  }

  @Override
  @SuppressWarnings("StringEquality")
  public void styleJSCheckBox(JSCheckBox checkbox) {
  }

  @Override
  public void styleJSComboBox(JSComboBox<?> combobox) {
  }

  @Override
  public void styleJSLabel(JSLabel label) {
  }

  @Override
  public void styleJSProgressBar(JSProgressBar progressbar) {
  }

  @Override
  @SuppressWarnings("StringEquality")
  public void styleJSRadioButton(JSRadioButton radiobutton) {
  }

  @Override
  public void styleJSSlider(JSSlider slider) {
  }

  @Override
  public void styleJSSpinner(JSSpinner spinner) {
  }

  @Override
  public void styleJSTabbedPane(JSTabbedPane tabbedpane) {
  }

  @Override
  public void styleJSToggleButton(JSToggleButton togglebutton) {
  }
}
