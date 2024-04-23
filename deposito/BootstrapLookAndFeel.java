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
public class BootstrapLookAndFeel  {

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
}
