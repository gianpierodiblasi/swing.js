/**
 * The default key/value implementation of the
 * AbstractKeyValueComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
class DefaultKeyValueComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element) {
    let label = document.createElement("label");
    label.textContent = element ? element.value.toString() : "";
    return label;
  }
}
