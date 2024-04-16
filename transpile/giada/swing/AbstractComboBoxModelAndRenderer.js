/**
 * The abstract class to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractComboBoxModelAndRenderer {

   combobox = null;

   elements = new Array();

   getElementAt(index) {
    return this.elements[index];
  }

   setComboBox(combobox) {
    this.combobox = combobox;
  }

   addElement(element) {
    let option = document.createElement("option");
    option.textContent = this.render(element);
    this.combobox.element.appendChild(option);
  }

   render(element) {
  }
}
