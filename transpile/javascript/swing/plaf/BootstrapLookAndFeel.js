/**
 * The Bootstrap LookAndFeel
 *
 * @author gianpiero.diblasi
 */
class BootstrapLookAndFeel extends LookAndFeel {

   dark = false;

   size = null;

  /**
   * Creates the Look&amp;Feel
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  static  create(dark, referenceFile) {
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
  static  createSmall(dark, referenceFile) {
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
  static  createLarge(dark, referenceFile) {
    return new BootstrapLookAndFeel(dark, "lg", referenceFile);
  }

  constructor(dark, size, referenceFile) {
    super();
    this.dark = typeof dark === "undefined" ? false : dark;
    this.size = size;
    if (typeof referenceFile === "undefined" || referenceFile) {
      let link = document.createElement("link");
      link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
      // link = document.createElement("link");
      // link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
      // link.setAttribute("rel", "stylesheet");
      // document.head.appendChild(link);
      let script = document.createElement("script");
      script.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
      document.head.appendChild(script);
    }
    if (this.dark) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

   getDescription() {
    return "Bootstrap LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.size === "sm" ? "Small" : this.size === "lg" ? "Large" : "");
  }

   styleJSButton(button) {
    button.cssAddClass("btn");
    button.cssAddClass("btn-primary");
    if (this.size) {
      button.cssAddClass("btn-" + this.size);
    }
  }

   styleJSCheckBox(checkbox) {
    this.setCheckAndRadio(checkbox);
  }

   styleJSLabel(label) {
    this.setSize(label);
  }

   styleJSRadioButton(radiobutton) {
    this.setCheckAndRadio(radiobutton);
  }

   setCheckAndRadio(component) {
    let input = component.element.querySelector("input");
    input.classList.add("form-check-input");
    switch(input.getAttribute("role")) {
      case "switch":
        input.style.marginRight = "0.5em";
        component.cssAddClass("form-switch");
        this.setSize(component);
        break;
      case "toggle":
        input.classList.add("btn-check");
        component.cssAddClass("btn");
        component.cssAddClass("btn-primary");
        if (this.size) {
          component.cssAddClass("btn-" + this.size);
        }
        break;
      default:
        input.style.marginRight = "0.5em";
        this.setSize(component);
        break;
    }
  }

   styleJSSpinner(spinner) {
    spinner.element.style.width = "auto";
    spinner.cssAddClass("form-control");
    if (this.size) {
      spinner.cssAddClass("form-control-" + this.size);
    }
  }

   setSize(component) {
    switch(this.size) {
      case "sm":
        component.element.style.fontSize = "14px";
        break;
      case "lg":
        component.element.style.fontSize = "20px";
        break;
    }
  }
}
