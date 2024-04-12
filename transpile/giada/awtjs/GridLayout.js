/**
 * the java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridLayout extends LayoutManager {

   rows = 0;

   cols = 0;

   hGap = 0;

   vGap = 0;

  constructor(rows, cols, hGap, vGap) {
    super("gridlayout");
    this.rows = rows;
    this.cols = cols;
    this.hGap = hGap;
    this.vGap = vGap;
  }
}
