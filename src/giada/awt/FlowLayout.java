package giada.awt;

import simulation.js.$Globals;

/**
 * The java.awt.FlowLayout clone
 *
 * @author gianpiero.diblasi
 */
public class FlowLayout extends LayoutManager {

  public static final int LEFT = 0;
  public static final int CENTER = 1;
  public static final int RIGHT = 2;
  public static final int LEADING = 3;
  public static final int TRAILING = 4;

  public final int align;
  public final int hGap;
  public final int vGap;

  public FlowLayout(int align, int hGap, int vGap) {
    super("flowlayout");

    this.align = align;
    this.hGap = $Globals.$typeof(hGap, "undefined") ? 5 : hGap;
    this.vGap = $Globals.$typeof(vGap, "undefined") ? 5 : vGap;
  }
}
