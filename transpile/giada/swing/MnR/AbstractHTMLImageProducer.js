/**
 * The abstract object able to produce an HTML image element to use in an
 * AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
class AbstractHTMLImageProducer {

   value = null;

  constructor(value) {
    this.value = value;
  }

   produce() {
  }

   getValue() {
    return this.value;
  }
}
