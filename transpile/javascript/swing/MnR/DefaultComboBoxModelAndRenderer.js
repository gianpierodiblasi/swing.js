/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element) {
    return element.toString();
  }
}
