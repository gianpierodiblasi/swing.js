package javascript.swing.plaf;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.swing.JSButton;
import javascript.swing.JSCheckBox;
import javascript.swing.JSComboBox;
import javascript.swing.JSComponent;
import javascript.swing.JSLabel;
import javascript.swing.JSProgressBar;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.JSTabbedPane;
import javascript.swing.JSToggleButton;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The Pico LookAndFeel
 *
 * @author gianpiero.diblasi
 */
public class PicoLookAndFeel extends LookAndFeel {

  public final static String RED = "red";
  public final static String PINK = "pink";
  public final static String FUCHSIA = "fuchsia";
  public final static String PURPLE = "purple";
  public final static String VIOLET = "violet";
  public final static String INDIGO = "indigo";
  public final static String BLUE = "blue";
  public final static String AZURE = "";
  public final static String CYAN = "cyan";
  public final static String JADE = "jade";
  public final static String GREEN = "green";
  public final static String LIME = "lime";
  public final static String YELLOW = "yellow";
  public final static String AMBER = "amber";
  public final static String PUMPKIN = "pumpkin";
  public final static String ORANGE = "orange";
  public final static String SAND = "sand";
  public final static String GREY = "grey";
  public final static String ZINC = "zinc";
  public final static String SLATE = "slate";

  private final boolean dark;
  private final String theme;

  /**
   * Creates the object
   *
   * @param theme The theme (use the constants of this class)
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the CSS file
   */
  public PicoLookAndFeel(String theme, boolean dark, boolean referenceFile) {
    super();
    document.body.classList.add("picolaf");
    this.dark = $typeof(dark, "undefined") ? false : dark;
    this.theme = $exists(theme) ? theme + "." : "";

    if ($typeof(referenceFile, "undefined") || referenceFile) {
      HTMLElement link = document.createElement("link");
      link.setAttribute("href", "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico." + this.theme + "min.css");
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
    }

    document.documentElement.setAttribute("data-theme", this.dark ? "dark" : "light");
  }

  @Override
  public String getDescription() {
    return "Pico LookAndFeel " + (this.dark ? "Dark " : "Light ") + ($exists(this.theme) ? this.theme.toUpperCase().replace(".", "") : "AZURE");
  }

  @Override
  public void styleJSButton(JSButton button) {
  }

  @Override
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
  public void styleJSRadioButton(JSRadioButton radiobutton) {
  }

  @Override
  public void styleJSSlider(JSSlider slider) {
  }

  @Override
  public void styleJSSpinner(JSSpinner spinner) {
  }

  @Override
  public void styleJSTabbedPane(JSTabbedPane tabbedpane, JSRadioButton tab, JSComponent component) {
  }

  @Override
  public void styleJSToggleButton(JSToggleButton togglebutton) {
  }
}
