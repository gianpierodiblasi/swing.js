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
    super(document.createElement("div"));
    this.cssAddClass("jsprogressbar");
    this.cssAddClass("jsprogressbar-horizontal");
    this.label = document.createElement("label");
    this.label.textContent = "0%";
    this.label.style.minWidth = "0%";
    this.appendNodeChild(this.label);
    this.progress = document.createElement("div");
    this.progress.style.height = "1.7rem";
    this.appendNodeChild(this.progress);
  }

  /**
   * Clone of javax.swing.JProgressBar.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
   setIndeterminate(b) {
    this.indeterminate = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
   setStringPainted(b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setString
   *
   * @param string The string to paint
   */
   setString(string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsprogressbar-horizontal");
    this.cssRemoveClass("jsprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.cssAddClass("jsprogressbar-horizontal");
        this.progress.style.height = "1.7rem";
        break;
      case JSProgressBar.VERTICAL:
        this.cssAddClass("jsprogressbar-vertical");
        this.progress.style.width = "1.7rem";
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
      this.label.style.background = "linear-gradient(to right, var(--main-action-color) " + valuePerc + "%, var(--main-color) " + valuePerc + "%)";
      this.label.style.setProperty("background-clip", "text");
      this.label.style.setProperty("-webkit-text-fill-color", "transparent");
    } else {
      this.label.style.removeProperty("background");
      this.label.style.removeProperty("background-clip");
      this.label.style.removeProperty("-webkit-text-fill-color");
    }
    if (this.indeterminate) {
      this.cssAddClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "jsprogressbar";
    } else {
      this.cssRemoveClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "none";
      switch(this.orientation) {
        case JSProgressBar.HORIZONTAL:
          this.getStyle().background = "linear-gradient(to right, var(--main-action-bgcolor) " + valuePerc + "%, var(--main-bgcolor) " + valuePerc + "%)";
          this.progress.style.width = valuePerc + "%";
          break;
        case JSProgressBar.VERTICAL:
          this.getStyle().background = "linear-gradient(to bottom, var(--main-action-bgcolor) " + valuePerc + "%, var(--main-bgcolor) " + valuePerc + "%)";
          this.progress.style.height = valuePerc + "%";
          break;
      }
    }
  }
}
