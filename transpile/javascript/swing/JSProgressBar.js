/**
 * The javax.swing.JSProgressBar clone
 *
 * @author gianpiero.diblasi
 */
class JSProgressBar extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   min = 0;

   max = 100;

   value = 0;

   indeterminate = false;

  constructor() {
    super();
    this.element = document.createElement("progress");
    this.element.style.width = "auto";
    this.element.setAttribute("max", "" + this.max);
    this.element.setAttribute("value", "" + this.value);
    this.element.classList.add("jprogressbar");
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

   setProgress() {
    this.element.setAttribute("max", "" + (this.max - this.min));
    this.element.setAttribute("value", "" + (this.value - this.min));
    if (this.indeterminate) {
      this.element.removeAttribute("value");
    }
  }

  /**
   * Clone of javax.swing.JSProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.element.classList.remove("jprogressbar-horizontal");
    this.element.classList.remove("jprogressbar-vertical");
    this.element.style.removeProperty("width");
    this.element.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.element.classList.add("jprogressbar-horizontal");
        this.element.style.width = "auto";
        break;
      case JSProgressBar.VERTICAL:
        this.element.classList.add("jprogressbar-vertical");
        this.element.style.height = "auto";
        break;
    }
  }
}
