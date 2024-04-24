package javascript.swing.MnR;

/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class DefaultSliderModelAndRenderer<T> extends AbstractSliderModelAndRenderer<T> {

  public DefaultSliderModelAndRenderer() {
    super(true);
  }

  @Override
  protected Object render(T element) {
    return element.toString();
  }
}
