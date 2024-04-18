package javascript.util;

import static def.dom.Globals.document;
import simulation.dom.$Image;

/**
 * The default implementation of the AbstractHTMLImageProducer based on an
 * source (URL, base64, etc.)
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
public class DefaultHTMLImageProducer<T> extends AbstractHTMLImageProducer<T> {

  private final String src;

  /**
   * Creates the object
   *
   * @param value The value
   * @param src The source of the HTML image element (URL, base64, etc.)
   */
  public DefaultHTMLImageProducer(T value, String src) {
    super(value);
    this.src = src;
  }

  @Override
  public $Image produce() {
    $Image img = ($Image) document.createElement("img");
    img.src = this.src;
    return img;
  }
}
