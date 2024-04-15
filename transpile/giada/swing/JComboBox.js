/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JComboBox extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
  }
}
