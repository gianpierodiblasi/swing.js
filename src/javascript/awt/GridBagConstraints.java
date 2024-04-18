package javascript.awt;

/**
 * The java.awt.GridBagConstraints clone
 *
 * @author gianpiero.diblasi
 */
public class GridBagConstraints {

  public static final int RELATIVE = -1;
  public static final int REMAINDER = 0;

  public static final int NONE = 0;
  public static final int BOTH = 1;
  public static final int HORIZONTAL = 2;
  public static final int VERTICAL = 3;

  public static final int CENTER = 10;
  public static final int NORTH = 11;
  public static final int NORTHEAST = 12;
  public static final int EAST = 13;
  public static final int SOUTHEAST = 14;
  public static final int SOUTH = 15;
  public static final int SOUTHWEST = 16;
  public static final int WEST = 17;
  public static final int NORTHWEST = 18;

  public static final int PAGE_START = 19;
  public static final int PAGE_END = 20;
  public static final int LINE_START = 21;
  public static final int LINE_END = 22;
  public static final int FIRST_LINE_START = 23;
  public static final int FIRST_LINE_END = 24;
  public static final int LAST_LINE_START = 25;
  public static final int LAST_LINE_END = 26;

  public static final int BASELINE = 0x100;
  public static final int BASELINE_LEADING = 0x200;
  public static final int BASELINE_TRAILING = 0x300;
  public static final int ABOVE_BASELINE = 0x400;
  public static final int ABOVE_BASELINE_LEADING = 0x500;
  public static final int ABOVE_BASELINE_TRAILING = 0x600;
  public static final int BELOW_BASELINE = 0x700;
  public static final int BELOW_BASELINE_LEADING = 0x800;
  public static final int BELOW_BASELINE_TRAILING = 0x900;

  public int gridx;
  public int gridy;
  public int gridwidth;
  public int gridheight;

  public double weightx;
  public double weighty;
  public int anchor;
  public int fill;

  public Insets insets;
  public int ipadx;
  public int ipady;

  public GridBagConstraints() {
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
  public double get(String key) {
    switch (key) {
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
