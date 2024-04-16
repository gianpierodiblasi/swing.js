package giada.swing;

/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class DefaultComboBoxModelAndRenderer<T> extends AbstractComboBoxModelAndRenderer<T> {

  @Override
  String render(T element) {
    return element.toString();
  }
}
