package giada.awtjs;

/**
 * the java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
public class GridLayout extends LayoutManager {

  public final int rows;
  public final int cols;
  public final int hGap;
  public final int vGap;

  public GridLayout(int rows, int cols, int hGap, int vGap) {
    super("gridlayout");

    this.rows = rows;
    this.cols = cols;
    this.hGap = hGap;
    this.vGap = vGap;
  }
}
