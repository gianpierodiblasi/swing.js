/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
  }
}
