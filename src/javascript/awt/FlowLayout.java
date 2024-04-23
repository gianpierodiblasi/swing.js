package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The java.awt.FlowLayout clone
 *
 * @author gianpiero.diblasi
 */
public class FlowLayout implements LayoutManager {

  public static final int LEFT = 0;
  public static final int CENTER = 1;
  public static final int RIGHT = 2;
  public static final int LEADING = 3;
  public static final int TRAILING = 4;

  private final int align;
  private final int hGap;
  private final int vGap;

  public FlowLayout(int align, int hGap, int vGap) {
    super();

    this.align = align;
    this.hGap = $typeof(hGap, "undefined") ? 5 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 5 : vGap;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.cssAddClass("flowlayout");

    switch (this.align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        panel.getStyle().justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        panel.getStyle().justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        panel.getStyle().justifyContent = "flex-end";
        break;
    }
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.clearContent();
    panel.cssRemoveClass("flowlayout");
    panel.getStyle().justifyContent = "";
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.appendChild(component);
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }
}
