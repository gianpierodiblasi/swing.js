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
        middle.classList.add("middle");
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
    }
  }

   add(component, constraints) {
    switch(this.layoutManager.css) {
      case "borderlayout":
        switch((constraints)) {
          case BorderLayout.NORTH:
          case BorderLayout.SOUTH:
            this.element.appendChild(component.element);
            break;
          case BorderLayout.WEST:
          case BorderLayout.CENTER:
          case BorderLayout.EAST:
            this.element.querySelector(".middle").appendChild(component.element);
            break;
        }
        component.element.classList.add((constraints).toLowerCase());
        component.element.style.marginLeft = (this.layoutManager).hGap + "px";
        component.element.style.marginRight = (this.layoutManager).hGap + "px";
        component.element.style.marginTop = (this.layoutManager).vGap + "px";
        component.element.style.marginBottom = (this.layoutManager).vGap + "px";
        break;
      case "flowlayout":
        this.element.appendChild(component.element);
        component.element.style.marginLeft = (this.layoutManager).hGap + "px";
        component.element.style.marginRight = (this.layoutManager).hGap + "px";
        component.element.style.marginTop = (this.layoutManager).vGap + "px";
        component.element.style.marginBottom = (this.layoutManager).vGap + "px";
        break;
    }
  }
}
