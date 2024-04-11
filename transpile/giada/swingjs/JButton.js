/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends JComponent {

   listeners = new Array();

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
  }

   setText(text) {
    this.element.textContent = text;
  }

   addActionListener(listener) {
    this.listeners.push(listener);
  }
}
