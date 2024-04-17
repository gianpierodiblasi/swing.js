/**
 * The default implementation of the HTMLImageProducer
 *
 * @author gianpiero.diblasi
 */
class DefaultHTMLImageProducer extends HTMLImageProducer {

   src = null;

  constructor(src) {
    super();
    this.src = src;
  }

   produce() {
    let img = document.createElement("img");
    img.src = this.src;
    return img;
  }
}
