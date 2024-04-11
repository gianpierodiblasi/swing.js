/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
  }

   setLayout(layoutManager) {
  }

   add(component, constraints) {
  }
}
