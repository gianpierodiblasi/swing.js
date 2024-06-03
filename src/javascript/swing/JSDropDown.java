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
   */
  @SuppressWarnings("StringEquality")
  public JSDropDown() {
    super(document.createElement("details"));
    this.cssAddClass("jsdropdown");
    this.appendNodeChild(document.createElement("summary"));
    
    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.getChilStyleByQuery("*:nth-child(2)").visibility = "visible";

        $DOMRect rect = this.invokeInTree("*:nth-child(2)", "getBoundingClientRect()");
        $DOMRect rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");

        if (rectSummary.left + rect.width < document.body.scrollWidth) {
          this.getChilStyleByQuery("*:nth-child(2)").left = rectSummary.left + "px";
        } else if (rectSummary.right - rect.width > 0) {
          this.getChilStyleByQuery("*:nth-child(2)").left = (rectSummary.right - rect.width) + "px";
        } else {
          this.getChilStyleByQuery("*:nth-child(2)").left = "auto";
          this.getChilStyleByQuery("*:nth-child(2)").right = "5px";
        }

        if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
          this.getChilStyleByQuery("*:nth-child(2)").top = rectSummary.bottom + "px";
        } else if (rectSummary.top - rect.height > 0) {
          this.getChilStyleByQuery("*:nth-child(2)").top = "calc(" + (rectSummary.top - rect.height) + "px - 1rem)";
        } else {
          this.getChilStyleByQuery("*:nth-child(2)").top = "auto";
          this.getChilStyleByQuery("*:nth-child(2)").bottom = "5px";
        }
      } else {
        this.getChilStyleByQuery("*:nth-child(2)").removeProperty("visibility");
        this.getChilStyleByQuery("*:nth-child(2)").removeProperty("top");
        this.getChilStyleByQuery("*:nth-child(2)").removeProperty("left");
        this.getChilStyleByQuery("*:nth-child(2)").removeProperty("bottom");
        this.getChilStyleByQuery("*:nth-child(2)").removeProperty("right");
      }
    });
  }

}
