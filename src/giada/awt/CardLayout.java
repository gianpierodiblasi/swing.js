package giada.awt;

import def.dom.Element;
import def.dom.HTMLElement;
import giada.swing.JPanel;
import simulation.js.$Globals;

/**
 * the java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
public class CardLayout extends LayoutManager {

  public final int hGap;
  public final int vGap;

  public CardLayout(int hGap, int vGap) {
    super("cardlayout");

    this.hGap = $Globals.$typeof(hGap, "undefined") ? 0 : hGap;
    this.vGap = $Globals.$typeof(vGap, "undefined") ? 0 : vGap;
  }

  public void show(JPanel parent, String name) {
    for (int index = 0; index < parent.element.childElementCount; index++) {
      ((HTMLElement) parent.element.childNodes.$get(index)).style.display = "none";
    }

    Element element = parent.element.querySelector("[card=\"" + name + "\"]");
    ((HTMLElement) element).style.display = element.getAttribute("old-display");
  }
}
