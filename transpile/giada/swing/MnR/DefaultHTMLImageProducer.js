/**
 * The default implementation of the HTMLImageProducer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
class DefaultHTMLImageProducer extends HTMLImageProducer {

   value = null;

   src = null;

  constructor(value, src) {
    super();
    this.value = value;
    this.src = src;
  }

   produce() {
    let img = document.createElement("img");
    img.src = this.src;
    return img;
  }

   getValue() {
    return this.value;
  }
}
