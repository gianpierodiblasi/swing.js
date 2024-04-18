package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
public class GridLayout implements LayoutManager {

  private final int rows;
  private final int cols;
  private final int hGap;
  private final int vGap;

  public GridLayout(int rows, int cols, int hGap, int vGap) {
    super();

    this.rows = rows;
    this.cols = cols;
    this.hGap = $typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.element.classList.add("gridlayout");

    String gridTemplate = "";
    for (int row = 1; row <= this.rows; row++) {
      String gridTemplateRow = "";
      for (int col = 1; col <= this.cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * this.cols + col) + " ";
      }
      gridTemplate += "\"" + gridTemplateRow + "\" 1fr\n";
    }
    gridTemplate += "/";
    for (int col = 1; col <= this.cols; col++) {
      gridTemplate += " 1fr";
    }

    panel.element.style.setProperty("grid-template", gridTemplate);
    panel.element.style.setProperty("row-gap", this.vGap + "px");
    panel.element.style.setProperty("column-gap", this.hGap + "px");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridlayout");
    panel.element.style.removeProperty("grid-template");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("row-gap");
    panel.element.style.removeProperty("column-gap");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.element.appendChild(component.element);
    component.element.style.setProperty("grid-area", "p" + panel.element.childElementCount);
  }
}
