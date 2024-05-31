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

  /**
   * Creates the object
   *
   * @param rows The row count
   * @param cols The column count
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  public GridLayout(int rows, int cols, int hGap, int vGap) {
    super();

    this.rows = rows;
    this.cols = cols;
    this.hGap = $typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.cssAddClass("gridlayout");

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

    panel.getStyle().setProperty("grid-template", gridTemplate);
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.clearContent();
    panel.cssRemoveClass("gridlayout");
    panel.getStyle().removeProperty("grid-template");
    panel.getStyle().removeProperty("gap");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.appendChild(component);
    component.getStyle().setProperty("grid-area", "p" + panel.getChildCount());
  }
}
