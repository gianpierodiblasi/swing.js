package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
public class BorderLayout implements LayoutManager {

  public static final String NORTH = "North";
  public static final String SOUTH = "South";
  public static final String EAST = "East";
  public static final String WEST = "West";
  public static final String CENTER = "Center";

  public static final String BEFORE_FIRST_LINE = BorderLayout.NORTH;
  public static final String AFTER_LAST_LINE = BorderLayout.SOUTH;
  public static final String BEFORE_LINE_BEGINS = BorderLayout.WEST;
  public static final String AFTER_LINE_ENDS = BorderLayout.EAST;
  public static final String PAGE_START = BorderLayout.BEFORE_FIRST_LINE;
  public static final String PAGE_END = BorderLayout.AFTER_LAST_LINE;
  public static final String LINE_START = BorderLayout.BEFORE_LINE_BEGINS;
  public static final String LINE_END = BorderLayout.AFTER_LINE_ENDS;

  private final int hGap;
  private final int vGap;

  public BorderLayout(int hGap, int vGap) {
    super();

    this.hGap = $typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.cssAddClass("borderlayout");
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.clearContent();
    panel.cssRemoveClass("borderlayout");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.appendChild(component);
    component.cssAddClass(((String) constraints).toLowerCase());
    component.getStyle().setProperty("grid-area", ((String) constraints).toLowerCase());
  }
}
