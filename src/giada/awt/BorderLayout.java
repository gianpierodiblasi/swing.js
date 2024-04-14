package giada.awt;

import simulation.js.$Globals;

/**
 * the java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
public class BorderLayout extends LayoutManager {

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

  public final int hGap;
  public final int vGap;

  public BorderLayout(int hGap, int vGap) {
    super("borderlayout");

    this.hGap = $Globals.$typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $Globals.$typeof(vGap, "undefined") ? 0 : vGap;
  }
}
