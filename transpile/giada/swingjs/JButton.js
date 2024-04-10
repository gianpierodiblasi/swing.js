/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends JComponent {

   button = null;

  constructor() {
    super();
    this.button = document.createElement("button");
    this.button.classList.add("jframe");
  }
}
