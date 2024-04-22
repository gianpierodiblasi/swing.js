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
  }

   styleJSCheckBox(checkbox) {
  }

   styleJSComboBox(combobox) {
  }

   styleJSDialog(dialog) {
  }

   styleJSLabel(label) {
  }

   styleJSProgressBar(progressbar) {
  }

   styleJSRadioButton(radiobutton) {
  }

   styleJSSlider(slider) {
  }

   styleJSSpinner(spinner) {
  }

   styleJSTabbedPane(tabbedpane, tab, component) {
    let selector = null;
    switch(tabbedpane.getTabPlacement()) {
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
    let tabs = tabbedpane.element.querySelector(selector + " ul");
    let input = tab.element.querySelector("input");
    input.style.display = "none";
    if (input.checked) {
      tab.cssAddClass("active");
    }
    input.addEventListener("change", (event) => {
      tabs.querySelector(".jradiobutton.active").classList.remove("active");
      tab.cssAddClass("active");
    });
  }

   styleJSToggleButton(togglebutton) {
  }
}
