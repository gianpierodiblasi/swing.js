/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

   panel = null;

  constructor() {
    super();
    this.panel = document.createElement("div");
    this.panel.classList.add("jpanel");
  }

   add(component, constraints) {
  }
}
