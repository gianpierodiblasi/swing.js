package javascript.swing.plaf;

import def.dom.Element;
import static def.dom.Globals.document;
import def.dom.HTMLElement;
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
import simulation.dom.$HTMLElement;
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
    document.body.classList.add("bootstraplaf");
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
    combobox.cssAddClass("form-select");

    if ($exists(this.size)) {
      combobox.cssAddClass("form-select-" + this.size);
    }
  }

  @Override
  public void styleJSDialog(JSDialog dialog) {
    switch (this.size) {
      case "sm":
        ((HTMLElement) dialog.element.querySelector(".jdialog-header label")).style.fontSize = "18px";
        break;
      case "lg":
        ((HTMLElement) dialog.element.querySelector(".jdialog-header label")).style.fontSize = "24px";
        break;
      default:
        ((HTMLElement) dialog.element.querySelector(".jdialog-header label")).style.fontSize = "20px";
        break;
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
        ((HTMLElement) progressbar.element.querySelector("progress")).style.fontSize = "31px";
        break;
      case "lg":
        ((HTMLElement) progressbar.element.querySelector("progress")).style.fontSize = "40px";
        break;
      default:
        ((HTMLElement) progressbar.element.querySelector("progress")).style.fontSize = "34px";
        break;
    }

    this.setSize((HTMLElement) progressbar.element.querySelector("label"));
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
    spinner.cssAddClass("form-control");

    if ($exists(this.size)) {
      spinner.cssAddClass("form-control-" + this.size);
    }
  }

  @Override
  public void styleJSTabbedPane(JSTabbedPane tabbedpane, JSRadioButton tab, JSComponent component) {
    String selector = null;
    switch (tabbedpane.getTabPlacement()) {
      case JSTabbedPane.TOP:
        selector = ".borderlayout-north";
        break;
      case JSTabbedPane.BOTTOM:
        selector = ".borderlayout-south";
        break;
      case JSTabbedPane.LEFT:
        selector = ".borderlayout-west";
        break;
      case JSTabbedPane.RIGHT:
        selector = ".borderlayout-east";
        break;
    }

    Element tabs = tabbedpane.element.querySelector(selector + " ul");
    tabs.classList.add("nav");
    tabs.classList.add("nav-tabs");

    tab.element.parentElement.classList.add("nav-item");
    tab.element.classList.add("nav-link");

    $HTMLElement input = ($HTMLElement) tab.element.querySelector("input");
    input.style.display = "none";
    if (input.checked) {
      tab.cssAddClass("active");
    }

    input.addEventListener("change", (event) -> {
      tabs.querySelector(".jradiobutton.active").classList.remove("active");
      tab.cssAddClass("active");
    });
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
