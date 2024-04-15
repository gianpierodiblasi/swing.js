/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JLabel extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jlabel");
  }

   setText(text) {
    this.element.textContent = text;
  }
}
