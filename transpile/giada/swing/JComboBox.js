/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JComboBox extends AbstractButton {

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onclick = (event) => this.onclick();
  }

   setModel(model) {
    model.setComboBox(this);
  }

   getSelectedItem() {
    return (this.element).value;
  }
}
