package javascript.swing.MnR;

import def.dom.Element;
import static def.dom.Globals.document;
import def.js.Array;
import javascript.swing.JSComboBox;
import static simulation.js.$Globals.$exists;

/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public abstract class AbstractComboBoxModelAndRenderer<T> {

  private JSComboBox<T> combobox;
  private final Array<T> elements = new Array<>();

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
  public T getElementAt(int index) {
    return this.elements.$get(index);
  }

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
  public void setComboBox(JSComboBox<T> combobox) {
    this.combobox = combobox;
    this.elements.forEach(element -> this.addOption(element));
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
  @SuppressWarnings("unchecked")
  public void addElement(T element) {
    this.elements.push(element);
    if ($exists(this.combobox)) {
      this.addOption(element);
    }
  }

  private void addOption(T element) {
    Element option = document.createElement("option");
    option.textContent = this.render(element);
    this.combobox.element.appendChild(option);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @return The renderer element
   */
  protected abstract String render(T element);
}
