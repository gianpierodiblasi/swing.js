/**
 * The default implementation of the AbstractHTMLImageProducer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
class DefaultHTMLImageProducer extends AbstractHTMLImageProducer {

   src = null;

  constructor(value, src) {
    super(value);
    this.src = src;
  }

   produce() {
    let img = document.createElement("img");
    img.src = this.src;
    return img;
  }
}
