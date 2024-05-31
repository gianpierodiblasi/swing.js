/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  /**
   * Creates the object
   */
  constructor() {
    super(true);
  }

   render(element, slider) {
    return element.toString();
  }
}
