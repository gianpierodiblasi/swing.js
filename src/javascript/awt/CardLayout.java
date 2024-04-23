package javascript.awt;

import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
public class CardLayout implements LayoutManager {

  private final int hGap;
  private final int vGap;

  public CardLayout(int hGap, int vGap) {
    super();

    this.hGap = $typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.cssAddClass("cardlayout");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.clearContent();
    panel.cssRemoveClass("cardlayout");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.appendChild(component);

    component.setAttribute("card", (String) constraints);
    component.setAttribute("old-display", component.getStyle().display);
    if (panel.getChildCount() > 1) {
      component.getStyle().display = "none";
    }
    component.getStyle().flexGrow = "1";
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
  public void show(JSPanel parent, String name) {
    for (int index = 0; index < parent.getChildCount(); index++) {
      parent.getChilStyleByIndex(index).display = "none";
    }
    parent.getChilStyleByQuery("[card=" + name + "]").display = parent.getChildAttributeByQuery("[card=" + name + "]", "old-display");
  }
}
