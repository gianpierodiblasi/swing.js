/**
 * The java.awt.GridBagConstraints clone
 *
 * @author gianpiero.diblasi
 */
class GridBagConstraints {

  static  RELATIVE = -1;

  static  REMAINDER = 0;

  static  NONE = 0;

  static  BOTH = 1;

  static  HORIZONTAL = 2;

  static  VERTICAL = 3;

  static  CENTER = 10;

  static  NORTH = 11;

  static  NORTHEAST = 12;

  static  EAST = 13;

  static  SOUTHEAST = 14;

  static  SOUTH = 15;

  static  SOUTHWEST = 16;

  static  WEST = 17;

  static  NORTHWEST = 18;

  static  PAGE_START = 19;

  static  PAGE_END = 20;

  static  LINE_START = 21;

  static  LINE_END = 22;

  static  FIRST_LINE_START = 23;

  static  FIRST_LINE_END = 24;

  static  LAST_LINE_START = 25;

  static  LAST_LINE_END = 26;

  static  BASELINE = 0x100;

  static  BASELINE_LEADING = 0x200;

  static  BASELINE_TRAILING = 0x300;

  static  ABOVE_BASELINE = 0x400;

  static  ABOVE_BASELINE_LEADING = 0x500;

  static  ABOVE_BASELINE_TRAILING = 0x600;

  static  BELOW_BASELINE = 0x700;

  static  BELOW_BASELINE_LEADING = 0x800;

  static  BELOW_BASELINE_TRAILING = 0x900;

   gridx = 0;

   gridy = 0;

   gridwidth = 0;

   gridheight = 0;

   weightx = 0.0;

   weighty = 0.0;

   anchor = 0;

   fill = 0;

   insets = null;

   ipadx = 0;

   ipady = 0;

  /**
   * Creates the object
   */
  constructor() {
    this.gridx = GridBagConstraints.RELATIVE;
    this.gridy = GridBagConstraints.RELATIVE;
    this.gridwidth = 1;
    this.gridheight = 1;
    this.weightx = 0;
    this.weighty = 0;
    this.anchor = GridBagConstraints.CENTER;
    this.fill = GridBagConstraints.NONE;
    this.insets = new Insets(0, 0, 0, 0);
    this.ipadx = 0;
    this.ipady = 0;
  }

  /**
   * Returns a constraint value by key
   *
   * @param key The key (options are: "gridx", "gridy", "gridwidth",
   * "gridheight", "weightx", "weighty", "anchor", "fill", "ipadx" and "ipady")
   * @return The value
   */
   get(key) {
    switch(key) {
      case "gridx":
        return this.gridx;
      case "gridy":
        return this.gridy;
      case "gridwidth":
        return this.gridwidth;
      case "gridheight":
        return this.gridheight;
      case "weightx":
        return this.weightx;
      case "weighty":
        return this.weighty;
      case "anchor":
        return this.anchor;
      case "fill":
        return this.fill;
      case "ipadx":
        return this.ipadx;
      case "ipady":
        return this.ipady;
      default:
        return 0;
    }
  }
}
