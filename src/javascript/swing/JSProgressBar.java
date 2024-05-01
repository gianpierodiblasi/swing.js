package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Number;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JProgressBar clone
 *
 * @author gianpiero.diblasi
 */
public class JSProgressBar extends JSComponent {

  public static final int HORIZONTAL = 0;
  public static final int VERTICAL = 1;

  private final HTMLElement label;
  private final HTMLElement progress;

  private int min;
  private int max = 100;
  private int value;
  private int orientation = JSProgressBar.HORIZONTAL;
  private boolean indeterminate;
  private boolean stringPainted;
  private String string = "";

  public JSProgressBar() {
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
  public void setMaximum(int value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setMinimum
   *
   * @param value The value
   */
  public void setMinimum(int value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setValue
   *
   * @param value The value
   */
  public void setValue(int value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
  public void setIndeterminate(boolean b) {
    this.indeterminate = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
  public void setStringPainted(boolean b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setString
   *
   * @param string The string to paint
   */
  public void setString(String string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
  public void setOrientation(int orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsprogressbar-horizontal");
    this.cssRemoveClass("jsprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");

    switch (orientation) {
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

  private void setProgress() {
    Number valuePerc = new Number(100 * (this.value - this.min) / (this.max - this.min));
    switch (this.orientation) {
      case JSProgressBar.HORIZONTAL:
        this.label.style.minWidth = (this.stringPainted && $exists(this.string) ? 100 : valuePerc) + "%";
        break;
      case JSProgressBar.VERTICAL:
        this.label.style.minHeight = (this.stringPainted && $exists(this.string) ? 100 : valuePerc) + "%";
        break;
    }
    this.label.textContent = $exists(this.string) ? this.string : (valuePerc.toFixed() + "%");
    this.label.style.visibility = this.indeterminate || !this.stringPainted ? "hidden" : "visible";
    if (this.stringPainted && $exists(this.string)) {
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
      switch (this.orientation) {
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
