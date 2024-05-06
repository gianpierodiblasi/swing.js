package javascript.swing;

import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;

/**
 *
 * @author gianpiero.diblasi
 */
public class JSColorExtraTab1Panel extends JSAbstractColorExtraTabPanel {

  private Color color = new Color(0, 0, 0, 255);

  public JSColorExtraTab1Panel() {
    super();

    JSButton button = new JSButton();
    button.setText("GRAY");
    button.addActionListener(event -> {
      this.color = this.color.gray();
      this.onchange();
    });
    this.add(button, null);
  }

  @Override
  public Color getSelectedColor() {
    return this.color;
  }

  @Override
  public void setSelectedColor(Color color) {
    this.color = color;
  }

  @Override
  public boolean getValueIsAdjusting() {
    return false;
  }

}
