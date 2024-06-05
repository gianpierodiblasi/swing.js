package javascript.swing;

import static def.dom.Globals.document;
import simulation.dom.$DOMRect;

/**
 * The abstract component for dropdown objects
 *
 * @author gianpiero.diblasi
 */
public abstract class JSDropDown extends JSComponent {

  private final String dropDownContentSelector;

  /**
   * Creates the object
   *
   * @param dropDownContentSelector The CSS selector to select the content
   * inside the dropdown
   */
  @SuppressWarnings("StringEquality")
  public JSDropDown(String dropDownContentSelector) {
    super(document.createElement("details"));
    this.cssAddClass("jsdropdown");
    this.appendNodeChild(document.createElement("summary"));

    this.dropDownContentSelector = dropDownContentSelector;

    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.computePopupPosition();
      } else {
        this.resetPopupPosition();
      }
    });
  }

  /**
   * Computes the popup position
   */
  protected void computePopupPosition() {
    this.resetPopupPosition();
    this.getChilStyleByQuery(this.dropDownContentSelector).visibility = "visible";

    $DOMRect rect = this.invokeInTree(this.dropDownContentSelector, "getBoundingClientRect()");
    $DOMRect rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");

    if (rectSummary.left + rect.width < document.body.scrollWidth) {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = rectSummary.left + "px";
    } else if (rectSummary.right - rect.width > 0) {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = (rectSummary.right - rect.width) + "px";
    } else {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = "auto";
      this.getChilStyleByQuery(this.dropDownContentSelector).right = "5px";
    }

    if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = rectSummary.bottom + "px";
    } else if (rectSummary.top - rect.height > 0) {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = "calc(" + (rectSummary.top - rect.height) + "px - 1rem)";
    } else {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = "auto";
      this.getChilStyleByQuery(this.dropDownContentSelector).bottom = "5px";
    }
  }

  private void resetPopupPosition() {
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("visibility");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("top");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("left");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("bottom");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("right");
  }
}
