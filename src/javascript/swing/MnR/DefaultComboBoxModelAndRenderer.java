package javascript.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.dom.Node;
import static simulation.js.$Globals.$exists;

/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class DefaultComboBoxModelAndRenderer<T extends Comparable<T>> extends AbstractComboBoxModelAndRenderer<T> {

  @Override
  protected Node render(T element) {
    HTMLElement label = document.createElement("label");
    label.textContent = $exists(element) ? element.toString() : "";
    return label;
  }
}
