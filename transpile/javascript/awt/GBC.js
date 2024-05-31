/**
 * Utility object to simplify the use of the GridBagConstraints object
 *
 * @author gianpiero.diblasi
 */
class GBC extends GridBagConstraints {

  /**
   * Creates the object
   *
   * @param gridx The gridx
   * @param gridy The gridy
   */
  constructor(gridx, gridy) {
    super();
    this.gridx = gridx;
    this.gridy = gridy;
  }

  /**
   * Sets the grid width
   *
   * @param gridwidth The grid width
   * @return This object
   */
   w(gridwidth) {
    this.gridwidth = gridwidth;
    return this;
  }

  /**
   * Sets the grid height
   *
   * @param gridheight The grid height
   * @return This object
   */
   h(gridheight) {
    this.gridheight = gridheight;
    return this;
  }

  /**
   * Sets the grid size
   *
   * @param gridwidth The grid width
   * @param gridheight The grid height
   * @return This object
   */
   wh(gridwidth, gridheight) {
    this.gridwidth = gridwidth;
    this.gridheight = gridheight;
    return this;
  }

  /**
   * Sets the x weight
   *
   * @param weightx The x weight
   * @return This object
   */
   wx(weightx) {
    this.weightx = weightx;
    return this;
  }

  /**
   * Sets the y weight
   *
   * @param weighty The y weight
   * @return This object
   */
   wy(weighty) {
    this.weighty = weighty;
    return this;
  }

  /**
   * Sets the weight
   *
   * @param weightx The x weight
   * @param weighty The y weight
   * @return This object
   */
   wxy(weightx, weighty) {
    this.weightx = weightx;
    this.weighty = weighty;
    return this;
  }

  /**
   * Sets the anchor
   *
   * @param anchor The anchor
   * @return This object
   */
   a(anchor) {
    this.anchor = anchor;
    return this;
  }

  /**
   * Sets the fill direction
   *
   * @param fill The fill direction
   * @return This object
   */
   f(fill) {
    this.fill = fill;
    return this;
  }

  /**
   * Sets the insets
   *
   * @param top The spacing to use on top
   * @param left The spacing to use to the left
   * @param bottom The spacing to use on the bottom
   * @param right The spacing to use to the right
   * @return This object
   */
   i(top, left, bottom, right) {
    this.insets = new Insets(top, left, bottom, right);
    return this;
  }
}
