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
    if (LookAndFeel.CURRENT) {
      LookAndFeel.CURRENT.styleJLabel(this);
    }
  }

   setText(text) {
    this.element.textContent = text;
  }
}
