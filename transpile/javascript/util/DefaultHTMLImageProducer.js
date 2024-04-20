/**
 * The default implementation of the AbstractHTMLImageProducer based on an
 * source (URL, base64, etc.)
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class DefaultHTMLImageProducer extends AbstractHTMLImageProducer {

   src = null;

  /**
   * Creates the object
   *
   * @param value The value
   * @param src The source of the HTML image element (URL, base64, etc.)
   */
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
