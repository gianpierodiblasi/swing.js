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
import javascript.swing.JSToggleButton;
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
  @SuppressWarnings("StringEquality")
  public void styleJSCheckBox(JSCheckBox checkbox) {
    this.setCheckAndRadio(checkbox);
  }

  @Override
  public void styleJSComboBox(JSComboBox<?> combobox) {
    combobox.element.style.width = "auto";
    combobox.cssAddClass("form-select");

    if ($exists(this.size)) {
      combobox.cssAddClass("form-select-" + this.size);
    }
  }

  @Override
  public void styleJSLabel(JSLabel label) {
    this.setSize(label.element);
  }

  @Override
  public void styleJSProgressBar(JSProgressBar progressbar) {
    switch (this.size) {
      case "sm":
        progressbar.element.style.fontSize = "31px";
        break;
      case "lg":
        progressbar.element.style.fontSize = "40px";
        break;
      default:
        progressbar.element.style.fontSize = "34px";
        break;
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  public void styleJSRadioButton(JSRadioButton radiobutton) {
    this.setCheckAndRadio(radiobutton);
  }

  @Override
  public void styleJSSlider(JSSlider slider) {
    this.setSize((HTMLElement) slider.element.querySelector("datalist"));
  }

  @Override
  public void styleJSSpinner(JSSpinner spinner) {
    spinner.element.style.width = "auto";
    spinner.cssAddClass("form-control");

    if ($exists(this.size)) {
      spinner.cssAddClass("form-control-" + this.size);
    }
  }

  @Override
  public void styleJSToggleButton(JSToggleButton togglebutton) {
    this.setCheckAndRadio(togglebutton);
  }

  private void setCheckAndRadio(JSComponent component) {
    HTMLElement input = (HTMLElement) component.element.querySelector("input");
    input.classList.add("form-check-input");

    switch (input.getAttribute("role")) {
      case "switch":
        input.style.marginRight = "0.5em";
        component.cssAddClass("form-switch");
        this.setSize(component.element);
        break;
      case "toggle":
        input.classList.add("btn-check");
        component.cssAddClass("btn");
        component.cssAddClass("btn-primary");
        if ($exists(this.size)) {
          component.cssAddClass("btn-" + this.size);
        }
        break;
      default:
        input.style.marginRight = "0.5em";
        this.setSize(component.element);
        break;
    }
  }

  private void setSize(HTMLElement element) {
    switch (this.size) {
      case "sm":
        element.style.fontSize = "14px";
        break;
      case "lg":
        element.style.fontSize = "20px";
        break;
    }
  }
}
