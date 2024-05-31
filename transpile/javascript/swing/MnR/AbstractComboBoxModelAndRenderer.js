/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractComboBoxModelAndRenderer {

   combobox = null;

   selected = null;

   elements = new Array();

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
   setComboBox(combobox) {
    this.combobox = combobox;
    this.combobox.appendNodeChildInTree("summary", this.render(null, false));
    this.elements.forEach(element => this.addOption(element));
    this.combobox.clearChildContentByQuery("summary");
    this.combobox.appendNodeChildInTree("summary", this.render(this.selected, false));
  }

  /**
   * Returns the selected element
   *
   * @return The selected element
   */
   getSelectedElement() {
    return this.selected;
  }

  /**
   * Sets the selected element
   *
   * @param element The selected element
   */
   setSelectedElement(element) {
    this.selected = null;
    this.elements.forEach(el => {
      try {
        this.selected = el.compareTo(element) ? this.selected : el;
      } catch (ex) {
        this.selected = el === element ? el : this.selected;
      }
    });
    if (this.combobox) {
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(this.selected, false));
    }
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
    li.appendChild(this.render(element, true));
    li.addEventListener("click", event => {
      this.selected = element;
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(element, false));
      this.combobox.removeAttribute("open");
      this.combobox.invoke("querySelector('summary').focus()");
      this.combobox.onclick();
    });
    this.combobox.appendNodeChildInTree("ul", li);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param inlist true if the rendered element is added to the list, false
   * otherwise (the rendered element is used to show the selected value)
   * @return The renderer element
   */
   render(element, inlist) {
  }
}
