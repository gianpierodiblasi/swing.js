package javascript.swing;

import static def.dom.Globals.document;
import simulation.dom.$DOMRect;

/**
 * The abstract component for dropdown objects
 *
 * @author gianpiero.diblasi
 */
public abstract class JSDropDown extends JSComponent {

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

    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.getChilStyleByQuery(dropDownContentSelector).visibility = "visible";

        $DOMRect rect = this.invokeInTree(dropDownContentSelector, "getBoundingClientRect()");
        $DOMRect rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");

        if (rectSummary.left + rect.width < document.body.scrollWidth) {
          this.getChilStyleByQuery(dropDownContentSelector).left = rectSummary.left + "px";
        } else if (rectSummary.right - rect.width > 0) {
          this.getChilStyleByQuery(dropDownContentSelector).left = (rectSummary.right - rect.width) + "px";
        } else {
          this.getChilStyleByQuery(dropDownContentSelector).left = "auto";
          this.getChilStyleByQuery(dropDownContentSelector).right = "5px";
        }

        if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
          this.getChilStyleByQuery(dropDownContentSelector).top = rectSummary.bottom + "px";
        } else if (rectSummary.top - rect.height > 0) {
          this.getChilStyleByQuery(dropDownContentSelector).top = "calc(" + (rectSummary.top - rect.height) + "px - 1rem)";
        } else {
          this.getChilStyleByQuery(dropDownContentSelector).top = "auto";
          this.getChilStyleByQuery(dropDownContentSelector).bottom = "5px";
        }
      } else {
        this.getChilStyleByQuery(dropDownContentSelector).removeProperty("visibility");
        this.getChilStyleByQuery(dropDownContentSelector).removeProperty("top");
        this.getChilStyleByQuery(dropDownContentSelector).removeProperty("left");
        this.getChilStyleByQuery(dropDownContentSelector).removeProperty("bottom");
        this.getChilStyleByQuery(dropDownContentSelector).removeProperty("right");
      }
    });
  }

}
