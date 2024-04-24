/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  constructor() {
    super(true);
  }

   render(element) {
    return element.toString();
  }
}
