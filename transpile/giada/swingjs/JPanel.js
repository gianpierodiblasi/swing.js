/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

   layoutManager = new FlowLayout();

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
  }

   setLayout(layoutManager) {
    this.layoutManager = layoutManager;
  }

   add(component, constraints) {
  }
}
