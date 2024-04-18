package javascript.awt;

import def.dom.Element;
import def.dom.HTMLElement;
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
    panel.element.classList.add("cardlayout");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("cardlayout");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    panel.element.appendChild(component.element);

    component.element.setAttribute("card", (String) constraints);
    component.element.setAttribute("old-display", component.element.style.display);
    if (panel.element.childElementCount > 1) {
      component.element.style.display = "none";
    }
    component.element.style.flexGrow = "1";
    component.element.style.marginLeft = this.hGap + "px";
    component.element.style.marginRight = this.hGap + "px";
    component.element.style.marginTop = this.vGap + "px";
    component.element.style.marginBottom = this.vGap + "px";
  }

  public void show(JSPanel parent, String name) {
    for (int index = 0; index < parent.element.childElementCount; index++) {
      ((HTMLElement) parent.element.childNodes.$get(index)).style.display = "none";
    }

    Element element = parent.element.querySelector("[card=\"" + name + "\"]");
    ((HTMLElement) element).style.display = element.getAttribute("old-display");
  }
}
