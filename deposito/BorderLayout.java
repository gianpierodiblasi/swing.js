package giada.awt;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import giada.swing.JComponent;
import giada.swing.JPanel;
import static simulation.js.$Globals.$typeof;

/**
 * The java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
public class BorderLayout implements LayoutManager {

  public static final String NORTH = "North";
  public static final String SOUTH = "South";
  public static final String EAST = "East";
  public static final String WEST = "West";
  public static final String CENTER = "Center";

  public static final String BEFORE_FIRST_LINE = BorderLayout.NORTH;
  public static final String AFTER_LAST_LINE = BorderLayout.SOUTH;
  public static final String BEFORE_LINE_BEGINS = BorderLayout.WEST;
  public static final String AFTER_LINE_ENDS = BorderLayout.EAST;
  public static final String PAGE_START = BorderLayout.BEFORE_FIRST_LINE;
  public static final String PAGE_END = BorderLayout.AFTER_LAST_LINE;
  public static final String LINE_START = BorderLayout.BEFORE_LINE_BEGINS;
  public static final String LINE_END = BorderLayout.AFTER_LINE_ENDS;

  private final int hGap;
  private final int vGap;

  public BorderLayout(int hGap, int vGap) {
    super();

    this.hGap = $typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JPanel panel) {
    HTMLElement middle = document.createElement("div");
    middle.classList.add("borderlayout-middle");
    
    panel.element.appendChild(middle);
    panel.element.classList.add("borderlayout");
  }

  @Override
  public void resetPanel(JPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("borderlayout");
  }

  @Override
  public void addInPanel(JPanel panel, JComponent component, Object constraints) {
    component.element.classList.add("borderlayout-" + ((String) constraints).toLowerCase());

    switch (((String) constraints)) {
      case BorderLayout.NORTH:
        panel.element.appendChild(component.element);
        component.element.style.marginBottom = this.vGap + "px";
        break;
      case BorderLayout.SOUTH:
        panel.element.appendChild(component.element);
        component.element.style.marginTop = this.vGap + "px";
        break;
      case BorderLayout.WEST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginRight = this.hGap + "px";
        break;
      case BorderLayout.CENTER:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        break;
      case BorderLayout.EAST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginLeft = this.hGap + "px";
        break;
    }
  }
}
