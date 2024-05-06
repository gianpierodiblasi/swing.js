package javascript.swing;

import def.js.Object;
import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;
import javascript.swing.colorchooser.JSColorPanel;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;

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
   * @param extraTabs An key/value object of extra tabs (it can be null), key =
   * title, value = an instance of JSAbstractColorExtraTabPanel
   * @param response The function to call on close
   */
  public static void showDialog(String title, Color color, boolean opacityVisible, Object extraTabs, $Apply_1_Void<Color> response) {
    JSColorPanel panel = new JSColorPanel();
    if ($exists(color)) {
      panel.setSelectedColor(color);
    }
    panel.setOpacityVisible(opacityVisible);
    if ($exists(extraTabs)) {
      Object.keys(extraTabs).forEach(key -> {
        panel.addExtraTab("" + key, (JSAbstractColorExtraTabPanel) extraTabs.$get(key));
      });
    }
    
    JSOptionPane.showInputDialog(panel, title, (changeListener) -> panel.addChangeListener(changeListener), () -> true, res -> {
      if (res == JSOptionPane.OK_OPTION) {
        response.$apply(panel.getSelectedColor());
      }
    });
  }
}
