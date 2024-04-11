/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

   layoutManager = new FlowLayout(FlowLayout.CENTER, 5, 5);

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
  }

   setLayout(layoutManager) {
    this.layoutManager = layoutManager;
    this.element.classList.add(this.layoutManager.css);
    switch(this.layoutManager.css) {
      case "borderlayout":
        this.element.style.paddingLeft = "" + (this.layoutManager).hGap;
        this.element.style.paddingRight = "" + (this.layoutManager).hGap;
        this.element.style.paddingTop = "" + (this.layoutManager).vGap;
        this.element.style.paddingBottom = "" + (this.layoutManager).vGap;
        break;
      case "flowlayout":
        this.element.style.paddingLeft = "" + (this.layoutManager).hGap;
        this.element.style.paddingRight = "" + (this.layoutManager).hGap;
        this.element.style.paddingTop = "" + (this.layoutManager).vGap;
        this.element.style.paddingBottom = "" + (this.layoutManager).vGap;
        break;
    }
  }

   add(component, constraints) {
    this.element.appendChild(component.element);
    switch(this.layoutManager.css) {
      case "BorderLayout":
        this.element.classList.add((constraints).toLowerCase());
        break;
      case "flowlayout":
        break;
    }
  }
}
