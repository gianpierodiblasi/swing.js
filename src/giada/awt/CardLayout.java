package giada.awt;

import def.dom.Element;
import def.dom.HTMLElement;
import giada.swing.JComponent;
import giada.swing.JPanel;
import simulation.js.$Globals;

/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
public class CardLayout implements LayoutManager {

  public final int hGap;
  public final int vGap;

  public CardLayout(int hGap, int vGap) {
    super();

    this.hGap = $Globals.$typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $Globals.$typeof(vGap, "undefined") ? 0 : vGap;
  }

  @Override
  public void setPanel(JPanel panel) {
    panel.element.classList.add("cardlayout");
  }

  @Override
  public void resetPanel(JPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("cardlayout");
  }

  @Override
  public void addInPanel(JPanel panel, JComponent component, Object constraints) {
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

  public void show(JPanel parent, String name) {
    for (int index = 0; index < parent.element.childElementCount; index++) {
      ((HTMLElement) parent.element.childNodes.$get(index)).style.display = "none";
    }

    Element element = parent.element.querySelector("[card=\"" + name + "\"]");
    ((HTMLElement) element).style.display = element.getAttribute("old-display");
  }
}
