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

  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    let middle = document.createElement("div");
    middle.classList.add("borderlayout-middle");
    panel.element.appendChild(middle);
    panel.element.classList.add("borderlayout");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("borderlayout");
  }

   addInPanel(panel, component, constraints) {
    component.element.classList.add("borderlayout-" + (constraints).toLowerCase());
    switch((constraints)) {
      case BorderLayout.NORTH:
        panel.element.appendChild(component.element);
        component.element.style.marginBottom = this.vGap + "px";
        break;
      case BorderLayout.SOUTH:
        panel.element.appendChild(component.element);
        component.element.style.marginTop = this.vGap + "px";
        break;
      case BorderLayout.WEST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginRight = this.hGap + "px";
        break;
      case BorderLayout.CENTER:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        break;
      case BorderLayout.EAST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginLeft = this.hGap + "px";
        break;
    }
  }
}
