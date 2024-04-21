/**
 * The Pico LookAndFeel
 *
 * @author gianpiero.diblasi
 */
class PicoLookAndFeel extends LookAndFeel {

  static  RED = "red";

  static  PINK = "pink";

  static  FUCHSIA = "fuchsia";

  static  PURPLE = "purple";

  static  VIOLET = "violet";

  static  INDIGO = "indigo";

  static  BLUE = "blue";

  static  AZURE = "";

  static  CYAN = "cyan";

  static  JADE = "jade";

  static  GREEN = "green";

  static  LIME = "lime";

  static  YELLOW = "yellow";

  static  AMBER = "amber";

  static  PUMPKIN = "pumpkin";

  static  ORANGE = "orange";

  static  SAND = "sand";

  static  GREY = "grey";

  static  ZINC = "zinc";

  static  SLATE = "slate";

   dark = false;

   theme = null;

  /**
   * Creates the object
   *
   * @param theme The theme (use the constants of this class)
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the CSS file
   */
  constructor(theme, dark, referenceFile) {
    super();
    document.body.classList.add("picolaf");
    this.dark = typeof dark === "undefined" ? false : dark;
    this.theme = theme ? theme + "." : "";
    if (typeof referenceFile === "undefined" || referenceFile) {
      let link = document.createElement("link");
      link.setAttribute("href", "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico." + this.theme + "min.css");
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
    }
    document.documentElement.setAttribute("data-theme", this.dark ? "dark" : "light");
  }

   getDescription() {
    return "Pico LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.theme ? this.theme.toUpperCase().replace(".", "") : "AZURE");
  }

   styleJSButton(button) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSCheckBox(checkbox) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSComboBox(combobox) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSLabel(label) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSProgressBar(progressbar) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSRadioButton(radiobutton) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSSlider(slider) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSSpinner(spinner) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSTabbedPane(tabbedpane, tab, component) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }

   styleJSToggleButton(togglebutton) {
    // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    throw new UnsupportedOperationException("Not supported yet.");
  }
}
