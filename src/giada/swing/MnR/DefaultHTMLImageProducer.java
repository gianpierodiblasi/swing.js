package giada.swing.MnR;

import static def.dom.Globals.document;
import simulation.dom.$Image;

/**
 * The default implementation of the AbstractHTMLImageProducer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
public class DefaultHTMLImageProducer<T> extends AbstractHTMLImageProducer<T> {

  private final String src;

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
