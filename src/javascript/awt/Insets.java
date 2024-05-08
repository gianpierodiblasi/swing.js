package javascript.awt;

/**
 * The java.awt.Insets clone
 *
 * @author gianpiero.diblasi
 */
public class Insets {

  public int top;
  public int left;
  public int bottom;
  public int right;

  /**
   * Creates the object
   *
   * @param top The top value
   * @param left The left value
   * @param bottom The bottom value
   * @param right The right value
   */
  public Insets(int top, int left, int bottom, int right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }
}
