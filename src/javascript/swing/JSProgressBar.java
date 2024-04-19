package javascript.swing;

import static def.dom.Globals.document;
import javascript.swing.plaf.LookAndFeel;

/**
 * The javax.swing.JSProgressBar clone
 *
 * @author gianpiero.diblasi
 */
public class JSProgressBar extends JSComponent {

  public static final int HORIZONTAL = 0;
  public static final int VERTICAL = 1;

  private int min;
  private int max = 100;
  private int value;
  private boolean indeterminate;

  public JSProgressBar() {
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
  public void setMaximum(int value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setMinimum
   *
   * @param value The value
   */
  public void setMinimum(int value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setValue
   *
   * @param value The value
   */
  public void setValue(int value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
  public void setIndeterminate(boolean b) {
    this.indeterminate = b;
    this.setProgress();
  }

  private void setProgress() {
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
  public void setOrientation(int orientation) {
    this.element.classList.remove("jprogressbar-horizontal");
    this.element.classList.remove("jprogressbar-vertical");
    this.element.style.removeProperty("width");
    this.element.style.removeProperty("height");

    switch (orientation) {
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
