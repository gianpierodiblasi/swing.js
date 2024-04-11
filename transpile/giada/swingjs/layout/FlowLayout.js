/**
 * the java.awt.FlowLayout clone
 *
 * @author gianpiero.diblasi
 */
class FlowLayout extends LayoutManager {

  static  LEFT = 0;

  static  CENTER = 1;

  static  RIGHT = 2;

  static  LEADING = 3;

   align = 0;

   hGap = 0;

   vGap = 0;

  constructor(align, hGap, vGap) {
    super("flowlayout");
    this.align = align;
    this.hGap = hGap;
    this.vGap = vGap;
  }
}
