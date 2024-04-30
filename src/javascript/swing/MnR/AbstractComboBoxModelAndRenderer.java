package javascript.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.dom.Node;
import def.js.Array;
import javascript.swing.JSComboBox;
import static simulation.js.$Globals.$exists;

/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public abstract class AbstractComboBoxModelAndRenderer<T extends Comparable<T>> {

  private JSComboBox<T> combobox;
  private T selected;
  private final Array<T> elements = new Array<>();

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
  public void setComboBox(JSComboBox<T> combobox) {
    this.combobox = combobox;
    this.combobox.appendNodeChildInTree("summary", this.render(null));
    this.elements.forEach(element -> this.addOption(element));

    this.combobox.clearChildContentByQuery("summary");
    this.combobox.appendNodeChildInTree("summary", this.render(this.selected));
  }

  /**
   * Returns the selected element
   *
   * @return The selected element
   */
  public T getSelectedElement() {
    return this.selected;
  }

  public void setSelectedElement(T element) {
    this.selected = null;
    this.elements.forEach(el -> {
      try {
        this.selected = $exists(el.compareTo(element)) ? this.selected : el;
      } catch (Exception ex) {
        this.selected = el == element ? el : this.selected;
      }
    });

    if ($exists(this.combobox)) {
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(this.selected));
    }
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
    HTMLElement li = document.createElement("li");
    li.appendChild(this.render(element));
    li.onclick = event -> {
      this.selected = element;
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(element));
      this.combobox.removeAttribute("open");
      this.combobox.onclick();
      return null;
    };

    this.combobox.appendNodeChildInTree("ul", li);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @return The renderer element
   */
  protected abstract Node render(T element);
}
