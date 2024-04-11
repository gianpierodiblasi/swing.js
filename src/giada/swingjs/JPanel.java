package giada.swingjs;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import giada.awtjs.BorderLayout;
import giada.awtjs.FlowLayout;
import giada.awtjs.LayoutManager;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JPanel extends JComponent {

  private LayoutManager layoutManager;

  public JPanel() {
    super();

    this.element = document.createElement("div");
    this.element.classList.add("jpanel");

    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

  public void setLayout(LayoutManager layoutManager) {
    if ($exists(this.layoutManager)) {
      this.element.classList.remove(this.layoutManager.css);
      this.element.style.textAlign = "";
      this.element.textContent = "";

    }

    this.layoutManager = layoutManager;
    this.element.classList.add(this.layoutManager.css);

    switch (this.layoutManager.css) {
      case "borderlayout":
        HTMLElement middle = document.createElement("div");
        middle.classList.add("borderlayout-middle");
        this.element.appendChild(middle);
        break;
      case "flowlayout":
        switch (((FlowLayout) this.layoutManager).align) {
          case FlowLayout.LEFT:
          case FlowLayout.LEADING:
            this.element.style.textAlign = "left";
            break;
          case FlowLayout.CENTER:
            this.element.style.textAlign = "center";
            break;
          case FlowLayout.RIGHT:
          case FlowLayout.TRAILING:
            this.element.style.textAlign = "right";
            break;
        }

        break;
    }
  }

  public void add(JComponent component, Object constraints) {
    switch (this.layoutManager.css) {
      case "borderlayout":
        component.element.classList.add("borderlayout-" + ((String) constraints).toLowerCase());

        switch (((String) constraints)) {
          case BorderLayout.NORTH:
            this.element.appendChild(component.element);
            component.element.style.marginBottom = ((BorderLayout) this.layoutManager).vGap + "px";
            break;
          case BorderLayout.SOUTH:
            component.element.style.marginTop = ((BorderLayout) this.layoutManager).vGap + "px";
            this.element.appendChild(component.element);
            break;
          case BorderLayout.WEST:
            component.element.style.marginLeft = ((BorderLayout) this.layoutManager).hGap + "px";
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.CENTER:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.EAST:
            component.element.style.marginRight = ((BorderLayout) this.layoutManager).hGap + "px";
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
        }

        break;
      case "flowlayout":
        this.element.appendChild(component.element);

        component.element.style.marginLeft = ((FlowLayout) this.layoutManager).hGap + "px";
        component.element.style.marginRight = ((FlowLayout) this.layoutManager).hGap + "px";
        component.element.style.marginTop = ((FlowLayout) this.layoutManager).vGap + "px";
        component.element.style.marginBottom = ((FlowLayout) this.layoutManager).vGap + "px";
        break;
    }
  }
}
