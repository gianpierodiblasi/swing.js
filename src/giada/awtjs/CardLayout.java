package giada.awtjs;

import simulation.js.$Globals;

/**
 * the java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
public class CardLayout extends LayoutManager {

  public final int hGap;
  public final int vGap;

  public CardLayout(int hGap, int vGap) {
    super("flowlayout");

    this.hGap = $Globals.$typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $Globals.$typeof(vGap, "undefined") ? 0 : vGap;
  }
}
