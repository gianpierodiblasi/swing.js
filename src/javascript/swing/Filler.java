package javascript.swing;

import static def.dom.Globals.document;
import javascript.awt.Dimension;

/**
 * The javax.swing.Box.Filler clone
 *
 * @author gianpiero.diblasi
 */
public class Filler extends JSComponent {

  /**
   * Creates the object
   *
   * @param min The mininum dimension
   * @param pref The preferred dimension
   * @param max The maximum dimension
   */
  public Filler(Dimension min, Dimension pref, Dimension max) {
    super(document.createElement("span"));

    this.cssAddClass("jscomponent-box-filler");

    this.getStyle().minWidth = min.width + "px";
    this.getStyle().minHeight = min.height + "px";
    this.getStyle().width = pref.width + "px";
    this.getStyle().height = pref.height + "px";
    this.getStyle().maxWidth = max.width + "px";
    this.getStyle().maxHeight = max.height + "px";

    if (min.width == 0 && min.height == 0 && pref.width == 0 && pref.height == 0) {
      this.getStyle().flexGrow = "1";
    }
  }
}
