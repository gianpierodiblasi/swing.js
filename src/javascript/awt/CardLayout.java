package javascript.awt;

import def.js.Array;
import def.js.Date;
import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$typeof;
import static simulation.js.$Globals.parseInt;

/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
public class CardLayout implements LayoutManager {

  private final int hGap;
  private final int vGap;
  private final Array<String> cardMapping = new Array<>();

  /**
   * Creates the object
   *
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
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

    String name = (String) constraints;
    String mapping = "Card_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());
    this.cardMapping.$set(name, mapping);

    component.setAttribute("card", mapping);
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

    String mapping = this.cardMapping.$get(name);
    parent.getChilStyleByQuery("[card=\"" + mapping + "\"]").display = parent.getChildAttributeByQuery("[card=\"" + mapping + "\"]", "old-display");
  }
}
