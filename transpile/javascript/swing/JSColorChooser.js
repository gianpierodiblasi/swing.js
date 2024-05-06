/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser {

  constructor() {
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
  static  showDialog(title, color, opacityVisible, extraTabs, response) {
    let panel = new JSColorPanel();
    if (color) {
      panel.setSelectedColor(color);
    }
    panel.setOpacityVisible(opacityVisible);
    if (extraTabs) {
      Object.keys(extraTabs).forEach(key => {
        panel.addExtraTab("" + key, extraTabs[key]);
      });
    }
    JSOptionPane.showInputDialog(panel, title, (changeListener) => panel.addChangeListener(changeListener), () => true, res => {
      if (res === JSOptionPane.OK_OPTION) {
        response(panel.getSelectedColor());
      }
    });
  }
}
