package javascript.swing.colorchooser;

import def.js.Array;

/**
 * The panel to show a limited set of swatch colors
 *
 * @author gianpiero.diblasi
 */
public class JSColorMiniSwatchesPanel extends JSAbstractColorSwatchesPanel {

  /**
   * Creates the object
   */
  public JSColorMiniSwatchesPanel() {
    super(1, 13, JSColorMiniSwatchesPanel.rawValues);
  }

  private final static Array<Integer> rawValues = new Array<>(
          255, 255, 255, // white
          204, 204, 204, // light gray
          136, 136, 136, // gray
          68, 68, 68, // dark gray
          0, 0, 0, // black
          255, 0, 0, // red
          0, 255, 0, // green
          0, 0, 255, // blue
          0, 255, 255, // cyan
          255, 0, 255, // magenta
          255, 255, 0, // yellow
          255, 175, 175, // pink
          255, 102, 0 // orange    
  );
}
