/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element) {
    let label = document.createElement("label");
    label.textContent = element ? element.toString() : "";
    return label;
  }
}
