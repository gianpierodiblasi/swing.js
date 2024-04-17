/**
 * The Bootstrap LookAndFeel; Bootstrap JS and CSS files will be automatically
 * referenced
 *
 * @author gianpiero.diblasi
 */
class BootstrapLookAndFeel extends LookAndFeel {

   dark = false;

   size = null;

  static  create(dark) {
    return new BootstrapLookAndFeel(dark, "");
  }

  static  createSmall(dark) {
    return new BootstrapLookAndFeel(dark, "sm");
  }

  static  createLarge(dark) {
    return new BootstrapLookAndFeel(dark, "lg");
  }

  constructor(dark, size) {
    super();
    this.dark = dark;
    this.size = size;
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
    if (dark) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

   getDescription() {
    return "Bootstrap LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.size === "sm" ? "Small" : this.size === "lg" ? "Large" : "");
  }

   styleJButton(button) {
    button.element.classList.add("btn");
    button.element.classList.add("btn-primary");
    if (this.size) {
      button.element.classList.add("btn-" + this.size);
    }
  }

   styleJLabel(label) {
    switch(this.size) {
      case "sm":
        label.element.style.fontSize = "14px";
        break;
      case "lg":
        label.element.style.fontSize = "20px";
        break;
    }
  }
}
