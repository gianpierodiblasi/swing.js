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
      this.element.classList.remove(this.layoutManager.css);
      this.element.style.textAlign = "";
      this.element.textContent = "";
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
        break;
    }
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
            component.element.style.marginTop = (this.layoutManager).vGap + "px";
            this.element.appendChild(component.element);
            break;
          case BorderLayout.WEST:
            component.element.style.marginLeft = (this.layoutManager).hGap + "px";
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.CENTER:
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
            break;
          case BorderLayout.EAST:
            component.element.style.marginRight = (this.layoutManager).hGap + "px";
            this.element.querySelector(".borderlayout-middle").appendChild(component.element);
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
        let row = parseInt(this.element.childElementCount / (this.layoutManager).cols);
        let col = parseInt(this.element.childElementCount % (this.layoutManager).cols);
        console.log(this.element.childElementCount, row, col);
        // component.element.style.marginLeft = ((GridLayout) this.layoutManager).hGap + "px";
        // component.element.style.marginRight = ((GridLayout) this.layoutManager).hGap + "px";
        // component.element.style.marginTop = ((GridLayout) this.layoutManager).vGap + "px";
        // component.element.style.marginBottom = ((GridLayout) this.layoutManager).vGap + "px";
        break;
    }
  }
}
