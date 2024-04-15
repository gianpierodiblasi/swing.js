/**
 * The java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridLayout extends LayoutManager {

   rows = 0;

   cols = 0;

   hGap = 0;

   vGap = 0;

  constructor(rows, cols, hGap, vGap) {
    super();
    this.rows = rows;
    this.cols = cols;
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.element.classList.add("gridlayout");
    let gridTemplateAreas = "";
    for (let row = 1; row <= this.rows; row++) {
      let gridTemplateRow = "";
      for (let col = 1; col <= this.cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * this.cols + col) + " ";
      }
      gridTemplateAreas += "\"" + gridTemplateRow + "\"\n";
    }
    panel.element.style.setProperty("grid-template-areas", gridTemplateAreas);
    panel.element.style.setProperty("row-gap", this.hGap + "px");
    panel.element.style.setProperty("column-gap", this.hGap + "px");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridlayout");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("row-gap");
    panel.element.style.removeProperty("column-gap");
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
    component.element.style.setProperty("grid-area", "p" + panel.element.childElementCount);
  }
}
