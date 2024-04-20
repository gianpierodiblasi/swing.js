package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Number;
import javascript.swing.plaf.LookAndFeel;
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

  /**
   * Clone of javax.swing.JSProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
  public void setStringPainted(boolean b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setString
   *
   * @param string The string to paint
   */
  public void setString(String string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
  public void setOrientation(int orientation) {
    this.orientation = orientation;
    this.element.classList.remove("jprogressbar-horizontal");
    this.element.classList.remove("jprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");

    switch (orientation) {
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
