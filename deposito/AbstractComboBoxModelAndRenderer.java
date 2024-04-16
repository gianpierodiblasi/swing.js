package giada.swing;

import def.dom.Element;
import static def.dom.Globals.document;
import def.js.Array;

/**
 * The abstract class to model and render a combobox
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
  }

  public void addElement(T element) {
    Element option = document.createElement("option");
    option.textContent = this.render(element);

    this.combobox.element.appendChild(option);
  }

  abstract String render(T element);
}
