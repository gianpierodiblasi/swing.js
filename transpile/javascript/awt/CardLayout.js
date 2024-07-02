/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
class CardLayout extends LayoutManager {

   hGap = 0;

   vGap = 0;

   cardMapping = new Array();

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
    panel.cssAddClass("cardlayout");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("cardlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    let name = constraints;
    let mapping = "Card_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());
    this.cardMapping[name] = mapping;
    component.setAttribute("card", mapping);
    component.setAttribute("old-display", component.getStyle().display);
    if (panel.getChildCount() > 1) {
      component.getStyle().display = "none";
    }
    component.getStyle().flexGrow = "1";
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
   show(parent, name) {
    for (let index = 0; index < parent.getChildCount(); index++) {
      parent.getChilStyleByIndex(index).display = "none";
    }
    let mapping = this.cardMapping[name];
    parent.getChilStyleByQuery("[card=\"" + mapping + "\"]").display = parent.getChildAttributeByQuery("[card=\"" + mapping + "\"]", "old-display");
  }
}
