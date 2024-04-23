/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractComboBoxModelAndRenderer {

   combobox = null;

   elements = new Array();

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
   getElementAt(index) {
    return this.elements[index];
  }

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
   setComboBox(combobox) {
    this.combobox = combobox;
    this.combobox.appendNodeChildInTree("summary", this.render(null));
    this.elements.forEach(element => this.addOption(element));
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
   addElement(element) {
    this.elements.push(element);
    if (this.combobox) {
      this.addOption(element);
    }
  }

   addOption(element) {
    let li = document.createElement("li");
    li.appendChild(this.render(element));
    this.combobox.appendNodeChildInTree("ul", li);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @return The renderer element
   */
   render(element) {
  }
}
