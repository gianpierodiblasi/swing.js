/**
 * The panel to show a limited set of swatch colors
 *
 * @author gianpiero.diblasi
 */
class JSColorMiniSwatchesPanel extends JSAbstractColorSwatchesPanel {

  /**
   * Creates the object
   */
  constructor() {
    super(1, 13, JSColorMiniSwatchesPanel.rawValues);
  }

  static  rawValues = new Array(// white
  255, // white
  255, // white
  255, // light gray
  204, // light gray
  204, // light gray
  204, // gray
  136, // gray
  136, // gray
  136, // dark gray
  68, // dark gray
  68, // dark gray
  68, // black
  0, // black
  0, // black
  0, // red
  255, // red
  0, // red
  0, // green
  0, // green
  255, // green
  0, // blue
  0, // blue
  0, // blue
  255, // cyan
  0, // cyan
  255, // cyan
  255, // magenta
  255, // magenta
  0, // magenta
  255, // yellow
  255, // yellow
  255, // yellow
  0, // pink
  255, // pink
  175, // pink
  175, // orange
  255, // orange
  102, // orange
  0);
}
