package giada.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import giada.awt.BorderLayout;
import giada.awt.BoxLayout;
import giada.awt.CardLayout;
import giada.awt.FlowLayout;
import giada.awt.GridLayout;
import giada.awt.LayoutManager;
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
      this.element.textContent = "";
      this.element.classList.remove(this.layoutManager.css);

      //flow
      this.element.style.justifyContent = "";
      //grid
      this.element.style.removeProperty("grid-template-areas");
      this.element.style.removeProperty("row-gap");
      this.element.style.removeProperty("column-gap");
      //box
      this.element.style.flexDirection = "";
      this.element.style.alignItems = "";
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
            this.element.style.justifyContent = "flex-start";
            break;
          case FlowLayout.CENTER:
            this.element.style.justifyContent = "center";
            break;
          case FlowLayout.RIGHT:
          case FlowLayout.TRAILING:
            this.element.style.justifyContent = "flex-end";
            break;
        }
        break;
      case "gridlayout":
        String gridTemplateAreas = "";
        for (int row = 1; row <= ((GridLayout) this.layoutManager).rows; row++) {
          String gridTemplateRow = "";
          for (int col = 1; col <= ((GridLayout) this.layoutManager).cols; col++) {
            gridTemplateRow += "p" + ((row - 1) * ((GridLayout) this.layoutManager).cols + col) + " ";
          }
          gridTemplateAreas += "\"" + gridTemplateRow + "\"\n";
        }
        this.element.style.setProperty("grid-template-areas", gridTemplateAreas);
        this.element.style.setProperty("row-gap", ((GridLayout) this.layoutManager).hGap + "px");
        this.element.style.setProperty("column-gap", ((GridLayout) this.layoutManager).hGap + "px");
        break;
      case "boxlayout":
        switch (((BoxLayout) this.layoutManager).axis) {
          case BoxLayout.LINE_AXIS:
          case BoxLayout.X_AXIS:
            this.element.style.flexDirection = "row";
            this.element.style.alignItems = "center";
            break;
          case BoxLayout.PAGE_AXIS:
          case BoxLayout.Y_AXIS:
            this.element.style.flexDirection = "column";
            this.element.style.alignItems = "flex-start";
            break;
        }
        break;
      case "cardlayout":
        break;
    }
  }

  public LayoutManager getLayout() {
    return this.layoutManager;
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
            this.element.appendChild(component.element);
            component.element.style.marginTop = ((BorderLayout) this.layoutManager).vGap + "px";
            break;
          case BorderLayout.WEST:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            component.element.style.marginRight = ((BorderLayout) this.layoutManager).hGap + "px";
            break;
          case BorderLayout.CENTER:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.EAST:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            component.element.style.marginLeft = ((BorderLayout) this.layoutManager).hGap + "px";
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
      case "gridlayout":
        this.element.appendChild(component.element);
        component.element.style.setProperty("grid-area", "p" + this.element.childElementCount);
        break;
      case "boxlayout":
        this.element.appendChild(component.element);
        break;
      case "cardlayout":
        this.element.appendChild(component.element);

        component.element.setAttribute("card", (String) constraints);
        component.element.setAttribute("old-display", component.element.style.display);
        if (this.element.childElementCount > 1) {
          component.element.style.display = "none";
        }
        component.element.style.flexGrow = "1";
        component.element.style.marginLeft = ((CardLayout) this.layoutManager).hGap + "px";
        component.element.style.marginRight = ((CardLayout) this.layoutManager).hGap + "px";
        component.element.style.marginTop = ((CardLayout) this.layoutManager).vGap + "px";
        component.element.style.marginBottom = ((CardLayout) this.layoutManager).vGap + "px";
        break;
    }
  }
}
