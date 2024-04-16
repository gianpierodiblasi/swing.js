package giada.awt;

import giada.swing.JComponent;
import giada.swing.JPanel;
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

  public final int align;
  public final int hGap;
  public final int vGap;

  public FlowLayout(int align, int hGap, int vGap) {
    super();

    this.align = align;
    this.hGap = $typeof(hGap, "undefined") ? 5 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 5 : vGap;
  }

  @Override
  public void setPanel(JPanel panel) {
    panel.element.classList.add("flowlayout");

    switch (this.align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        panel.element.style.justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        panel.element.style.justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        panel.element.style.justifyContent = "flex-end";
        break;
    }
  }

  @Override
  public void resetPanel(JPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("flowlayout");
    panel.element.style.justifyContent = "";
  }

  @Override
  public void addInPanel(JPanel panel, JComponent component, Object constraints) {
    panel.element.appendChild(component.element);

    component.element.style.marginLeft = this.hGap + "px";
    component.element.style.marginRight = this.hGap + "px";
    component.element.style.marginTop = this.vGap + "px";
    component.element.style.marginBottom = this.vGap + "px";
  }
}
