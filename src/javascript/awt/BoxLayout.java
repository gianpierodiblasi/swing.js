package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;

/**
 * The java.awt.BoxLayout clone
 *
 * @author gianpiero.diblasi
 */
public class BoxLayout implements LayoutManager {

  public static final int X_AXIS = 0;
  public static final int Y_AXIS = 1;
  public static final int LINE_AXIS = 2;
  public static final int PAGE_AXIS = 3;

  private final int axis;

  /**
   * Creates the object
   *
   * @param target The target component
   * @param axis The axis
   */
  public BoxLayout(JSComponent target, int axis) {
    super();

    this.axis = axis;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.cssAddClass("boxlayout");

    switch (this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.getStyle().flexDirection = "row";
        panel.getStyle().alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.getStyle().flexDirection = "column";
        panel.getStyle().alignItems = "flex-start";
        break;
    }
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.clearContent();
    panel.cssRemoveClass("boxlayout");
    panel.getStyle().flexDirection = "";
    panel.getStyle().alignItems = "";
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.appendChild(component);
  }
}
