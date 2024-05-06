package javascript.swing;

import def.js.Array;
import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;
import simulation.js.$Apply_1_Void;

/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
public class JSColorChooser {

  private JSColorChooser() {
  }

  /**
   * Shows a dialog to select the color
   *
   * @param title The title
   * @param color The initial color (it can be null)
   * @param opacityVisible true to make the opacity selectors visible, false
   * otherwise
   * @param extraTabs An array of extra tabs (it can be null)
   * @param response The function to call on close
   */
  public static void showDialog(String title, Color color, boolean opacityVisible, Array<JSAbstractColorExtraTabPanel> extraTabs, $Apply_1_Void<Color> response) {

  }
}
