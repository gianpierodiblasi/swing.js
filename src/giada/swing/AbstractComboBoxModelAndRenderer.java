package giada.swing;

import def.dom.Element;
import static def.dom.Globals.document;
import def.js.Array;
import static simulation.js.$Globals.$exists;

/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public abstract class AbstractComboBoxModelAndRenderer<T> {

  private JComboBox<T> combobox;
  private final Array<T> elements = new Array<>();

  T getElementAt(int index) {
    return this.elements.$get(index);
  }

  void setComboBox(JComboBox<T> combobox) {
    this.combobox = combobox;
    this.elements.forEach(element -> this.addOption(element));
  }

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

  abstract String render(T element);
}
