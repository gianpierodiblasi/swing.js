/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
class CardLayout extends LayoutManager {

   hGap = 0;

   vGap = 0;

  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.element.classList.add("cardlayout");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("cardlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
    component.element.setAttribute("card", constraints);
    component.element.setAttribute("old-display", component.element.style.display);
    if (panel.element.childElementCount > 1) {
      component.element.style.display = "none";
    }
    component.element.style.flexGrow = "1";
    component.element.style.marginLeft = this.hGap + "px";
    component.element.style.marginRight = this.hGap + "px";
    component.element.style.marginTop = this.vGap + "px";
    component.element.style.marginBottom = this.vGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
   show(parent, name) {
    for (let index = 0; index < parent.element.childElementCount; index++) {
      (parent.element.childNodes[index]).style.display = "none";
    }
    let element = parent.element.querySelector("[card=\"" + name + "\"]");
    (element).style.display = element.getAttribute("old-display");
  }
}
