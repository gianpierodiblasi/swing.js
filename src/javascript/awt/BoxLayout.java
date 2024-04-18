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

  public BoxLayout(JSComponent target, int axis) {
    super();

    this.axis = axis;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.element.classList.add("boxlayout");

    switch (this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.element.style.flexDirection = "row";
        panel.element.style.alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.element.style.flexDirection = "column";
        panel.element.style.alignItems = "flex-start";
        break;
    }
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("boxlayout");
    panel.element.style.flexDirection = "";
    panel.element.style.alignItems = "";
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.element.appendChild(component.element);
  }
}
