/**
 * The javax.swing.JProgressBar clone
 *
 * @author gianpiero.diblasi
 */
class JSProgressBar extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   label = null;

   progress = null;

   min = 0;

   max = 100;

   value = 0;

   orientation = JSProgressBar.HORIZONTAL;

   indeterminate = false;

   stringPainted = false;

   string = "";

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jprogressbar");
    this.element.style.display = "grid";
    this.element.style.setProperty("justify-items", "left");
    this.element.style.alignItems = "center";
    this.label = document.createElement("label");
    this.label.style.minWidth = "0%";
    this.label.style.color = "white";
    this.label.style.textAlign = "center";
    this.label.style.visibility = "hidden";
    this.label.style.setProperty("grid-column-start", "1");
    this.label.style.setProperty("grid-row-start", "1");
    this.label.textContent = "0%";
    this.element.appendChild(this.label);
    this.progress = document.createElement("progress");
    this.progress.style.width = "100%";
    this.progress.setAttribute("max", "" + this.max);
    this.progress.setAttribute("value", "" + this.value);
    this.progress.style.zIndex = "-1";
    this.progress.style.setProperty("grid-column-start", "1");
    this.progress.style.setProperty("grid-row-start", "1");
    this.element.appendChild(this.progress);
    LookAndFeel.CURRENT.styleJSProgressBar(this);
  }

  /**
   * Clone of javax.swing.JSProgressBar.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
   setIndeterminate(b) {
    this.indeterminate = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
   setStringPainted(b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setString
   *
   * @param string The string to paint
   */
   setString(string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.element.classList.remove("jprogressbar-horizontal");
    this.element.classList.remove("jprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.element.classList.add("jprogressbar-horizontal");
        this.progress.style.width = "100%";
        break;
      case JSProgressBar.VERTICAL:
        this.element.classList.add("jprogressbar-vertical");
        this.progress.style.height = "100%";
        break;
    }
    this.setProgress();
  }

   setProgress() {
    let valuePerc = new Number(100 * (this.value - this.min) / (this.max - this.min));
    switch(this.orientation) {
      case JSProgressBar.HORIZONTAL:
        this.label.style.minWidth = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
      case JSProgressBar.VERTICAL:
        this.label.style.minHeight = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
    }
    this.label.textContent = this.string ? this.string : (valuePerc.toFixed() + "%");
    this.label.style.visibility = this.indeterminate || !this.stringPainted ? "hidden" : "visible";
    if (this.stringPainted && this.string) {
      this.label.style.background = "linear-gradient(to right, white " + valuePerc + "%, black " + valuePerc + "%)";
      this.label.style.setProperty("background-clip", "text");
      this.label.style.setProperty("-webkit-text-fill-color", "transparent");
    } else {
      this.label.style.removeProperty("background");
      this.label.style.removeProperty("background-clip");
      this.label.style.removeProperty("-webkit-text-fill-color");
    }
    this.progress.setAttribute("max", "" + (this.max - this.min));
    this.progress.setAttribute("value", "" + (this.value - this.min));
    if (this.indeterminate) {
      this.progress.removeAttribute("value");
    }
  }
}
