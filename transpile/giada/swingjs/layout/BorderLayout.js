/**
 * the java.awt.BorderLayout clone
 * @author gianpiero.diblasi
 */
class BorderLayout extends LayoutManager {

  static  NORTH = "North";

  static  SOUTH = "South";

  static  EAST = "East";

  static  WEST = "West";

  static  CENTER = "Center";

  static  BEFORE_FIRST_LINE = "First";

  static  AFTER_LAST_LINE = "Last";

  static  BEFORE_LINE_BEGINS = "Before";

  static  AFTER_LINE_ENDS = "After";

  static  PAGE_START = BorderLayout.BEFORE_FIRST_LINE;

  static  PAGE_END = BorderLayout.AFTER_LAST_LINE;

  static  LINE_START = BorderLayout.BEFORE_LINE_BEGINS;

  static  LINE_END = BorderLayout.AFTER_LINE_ENDS;

  constructor() {
    super();
  }
}
