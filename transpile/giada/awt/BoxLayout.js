/**
 * The java.awt.BoxLayout clone
 *
 * @author gianpiero.diblasi
 */
class BoxLayout extends LayoutManager {

  static  X_AXIS = 0;

  static  Y_AXIS = 1;

  static  LINE_AXIS = 2;

  static  PAGE_AXIS = 3;

   axis = 0;

  constructor(target, axis) {
    super();
    this.axis = axis;
  }

   setPanel(panel) {
    panel.element.classList.add("boxlayout");
    switch(this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.element.style.flexDirection = "row";
        panel.element.style.alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.element.style.flexDirection = "column";
        panel.element.style.alignItems = "flex-start";
        break;
    }
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("boxlayout");
    panel.element.style.flexDirection = "";
    panel.element.style.alignItems = "";
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
  }
}
