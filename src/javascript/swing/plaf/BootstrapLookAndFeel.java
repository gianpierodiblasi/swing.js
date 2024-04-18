package javascript.swing.plaf;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.swing.JSButton;
import javascript.swing.JSLabel;
import javascript.swing.JSSpinner;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The Bootstrap LookAndFeel
 *
 * @author gianpiero.diblasi
 */
public class BootstrapLookAndFeel extends LookAndFeel {

  private final boolean dark;
  private final String size;

  /**
   * Creates the Look&amp;Feel
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  public static LookAndFeel create(boolean dark, boolean referenceFile) {
    return new BootstrapLookAndFeel(dark, "", referenceFile);
  }

  /**
   * Creates the Look&amp;Feel with small components
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  public static LookAndFeel createSmall(boolean dark, boolean referenceFile) {
    return new BootstrapLookAndFeel(dark, "sm", referenceFile);
  }

  /**
   * Creates the Look&amp;Feel with large components
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  public static LookAndFeel createLarge(boolean dark, boolean referenceFile) {
    return new BootstrapLookAndFeel(dark, "lg", referenceFile);
  }

  private BootstrapLookAndFeel(boolean dark, String size, boolean referenceFile) {
    super();
    this.dark = $typeof(dark, "undefined") ? false : dark;
    this.size = size;

    if ($typeof(referenceFile, "undefined") || referenceFile) {
      HTMLElement link = document.createElement("link");
      link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
//    link = document.createElement("link");
//    link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
//    link.setAttribute("rel", "stylesheet");
//    document.head.appendChild(link);
      HTMLElement script = document.createElement("script");
      script.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
      document.head.appendChild(script);
    }

    if (this.dark) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  public String getDescription() {
    return "Bootstrap LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.size == "sm" ? "Small" : this.size == "lg" ? "Large" : "");
  }

  @Override
  public void styleJSButton(JSButton button) {
    button.cssAddClass("btn");
    button.cssAddClass("btn-primary");

    if ($exists(this.size)) {
      button.cssAddClass("btn-" + this.size);
    }
  }

  @Override
  public void styleJSLabel(JSLabel label) {
    switch (this.size) {
      case "sm":
        label.element.style.fontSize = "14px";
        break;
      case "lg":
        label.element.style.fontSize = "20px";
        break;
    }
  }

  @Override
  public void styleJSSpinner(JSSpinner spinner) {
    spinner.element.style.width = "auto";
    spinner.cssAddClass("form-control");

    if ($exists(this.size)) {
      spinner.cssAddClass("form-control-" + this.size);
    }
  }
}
