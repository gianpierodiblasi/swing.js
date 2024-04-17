/**
 * The abstract object to model and render a combobox
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
    this.elements.forEach(element => this.addOption(element));
  }

   addElement(element) {
    this.elements.push(element);
    if (this.combobox) {
      this.addOption(element);
    }
  }

   addOption(element) {
    let option = document.createElement("option");
    option.textContent = this.render(element);
    this.combobox.element.appendChild(option);
  }

   render(element) {
  }
}
