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
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

   getLayout() {
    return this.layoutManager;
  }

   add(component, constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
