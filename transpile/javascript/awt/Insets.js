/**
 * The java.awt.Insets clone
 *
 * @author gianpiero.diblasi
 */
class Insets {

   top = 0;

   left = 0;

   bottom = 0;

   right = 0;

  /**
   * Creates the object
   *
   * @param top The top value
   * @param left The left value
   * @param bottom The bottom value
   * @param right The right value
   */
  constructor(top, left, bottom, right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }
}
