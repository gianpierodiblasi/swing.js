package giada.swing.plaf;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import giada.swing.JButton;
import giada.swing.JCheckBox;
import giada.swing.JLabel;
import giada.swing.JRadioButton;
import giada.swing.JToggleButton;
import static simulation.js.$Globals.$exists;

/**
 * The Bootstrap LookAndFeel; Bootstrap JS and CSS files will be automatically
 * referenced
 *
 * @author gianpiero.diblasi
 */
public class BootstrapLookAndFeel extends LookAndFeel {

  private final boolean dark;
  private final String size;

  public static LookAndFeel create(boolean dark) {
    return new BootstrapLookAndFeel(dark, "");
  }

  public static LookAndFeel createSmall(boolean dark) {
    return new BootstrapLookAndFeel(dark, "sm");
  }

  public static LookAndFeel createLarge(boolean dark) {
    return new BootstrapLookAndFeel(dark, "lg");
  }

  private BootstrapLookAndFeel(boolean dark, String size) {
    super();
    this.dark = dark;
    this.size = size;

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

    if (dark) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  public String getDescription() {
    return "Bootstrap LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.size == "sm" ? "Small" : this.size == "lg" ? "Large" : "");
  }

  @Override
  public void styleJButton(JButton button) {
    button.element.classList.add("btn");
    button.element.classList.add("btn-primary");

    if ($exists(this.size)) {
      button.element.classList.add("btn-" + this.size);
    }
  }

  @Override
  public void styleJLabel(JLabel label) {
    switch (this.size) {
      case "sm":
        label.element.style.fontSize = "14px";
        break;
      case "lg":
        label.element.style.fontSize = "20px";
        break;
    }
  }

  public void styleJCheckBoxAsButton(JCheckBox checkbox) {
  }

  public void styleJCheckBoxAsSwitch(JCheckBox checkbox) {
  }

  public void styleJRadioButtonAsButton(JRadioButton radiobutton) {
  }

  public void styleJRadioButtonAsSwitch(JRadioButton radiobutton) {
  }

  public void styleJToggleButtonAsSwitch(JToggleButton toggleButton) {
  }
}
