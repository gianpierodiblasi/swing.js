/**
 * The java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
class BorderLayout extends LayoutManager {

  static  NORTH = "North";

  static  SOUTH = "South";

  static  EAST = "East";

  static  WEST = "West";

  static  CENTER = "Center";

  static  BEFORE_FIRST_LINE = BorderLayout.NORTH;

  static  AFTER_LAST_LINE = BorderLayout.SOUTH;

  static  BEFORE_LINE_BEGINS = BorderLayout.WEST;

  static  AFTER_LINE_ENDS = BorderLayout.EAST;

  static  PAGE_START = BorderLayout.BEFORE_FIRST_LINE;

  static  PAGE_END = BorderLayout.AFTER_LAST_LINE;

  static  LINE_START = BorderLayout.BEFORE_LINE_BEGINS;

  static  LINE_END = BorderLayout.AFTER_LINE_ENDS;

   hGap = 0;

   vGap = 0;

  /**
   * Creates the object
   *
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("borderlayout");
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("borderlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.cssAddClass((constraints).toLowerCase());
    component.getStyle().setProperty("grid-area", (constraints).toLowerCase());
  }
}
