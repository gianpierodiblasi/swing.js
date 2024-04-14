/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

   layoutManager = null;

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

   setLayout(layoutManager) {
    if (this.layoutManager) {
      this.element.textContent = "";
      this.element.classList.remove(this.layoutManager.css);
      // flow
      this.element.style.justifyContent = "";
      // grid
      this.element.style.removeProperty("grid-template-areas");
      this.element.style.removeProperty("row-gap");
      this.element.style.removeProperty("column-gap");
      // box
      this.element.style.flexDirection = "";
      this.element.style.alignItems = "";
    }
    this.layoutManager = layoutManager;
    this.element.classList.add(this.layoutManager.css);
    switch(this.layoutManager.css) {
      case "borderlayout":
        let middle = document.createElement("div");
        middle.classList.add("borderlayout-middle");
        this.element.appendChild(middle);
        break;
      case "flowlayout":
        switch((this.layoutManager).align) {
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
        let gridTemplateAreas = "";
        for (let row = 1; row <= (this.layoutManager).rows; row++) {
          let gridTemplateRow = "";
          for (let col = 1; col <= (this.layoutManager).cols; col++) {
            gridTemplateRow += "p" + ((row - 1) * (this.layoutManager).cols + col) + " ";
          }
          gridTemplateAreas += "\"" + gridTemplateRow + "\"\n";
        }
        this.element.style.setProperty("grid-template-areas", gridTemplateAreas);
        this.element.style.setProperty("row-gap", (this.layoutManager).hGap + "px");
        this.element.style.setProperty("column-gap", (this.layoutManager).hGap + "px");
        break;
      case "boxlayout":
        switch((this.layoutManager).axis) {
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

   getLayout() {
    return this.layoutManager;
  }

   add(component, constraints) {
    switch(this.layoutManager.css) {
      case "borderlayout":
        component.element.classList.add("borderlayout-" + (constraints).toLowerCase());
        switch((constraints)) {
          case BorderLayout.NORTH:
            this.element.appendChild(component.element);
            component.element.style.marginBottom = (this.layoutManager).vGap + "px";
            break;
          case BorderLayout.SOUTH:
            this.element.appendChild(component.element);
            component.element.style.marginTop = (this.layoutManager).vGap + "px";
            break;
          case BorderLayout.WEST:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            component.element.style.marginRight = (this.layoutManager).hGap + "px";
            break;
          case BorderLayout.CENTER:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.EAST:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            component.element.style.marginLeft = (this.layoutManager).hGap + "px";
            break;
        }
        break;
      case "flowlayout":
        this.element.appendChild(component.element);
        component.element.style.marginLeft = (this.layoutManager).hGap + "px";
        component.element.style.marginRight = (this.layoutManager).hGap + "px";
        component.element.style.marginTop = (this.layoutManager).vGap + "px";
        component.element.style.marginBottom = (this.layoutManager).vGap + "px";
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
        component.element.setAttribute("card", constraints);
        component.element.setAttribute("old-display", component.element.style.display);
        if (this.element.childElementCount > 1) {
          component.element.style.display = "none";
        }
        component.element.style.flexGrow = "1";
        component.element.style.marginLeft = (this.layoutManager).hGap + "px";
        component.element.style.marginRight = (this.layoutManager).hGap + "px";
        component.element.style.marginTop = (this.layoutManager).vGap + "px";
        component.element.style.marginBottom = (this.layoutManager).vGap + "px";
        break;
    }
  }
}
