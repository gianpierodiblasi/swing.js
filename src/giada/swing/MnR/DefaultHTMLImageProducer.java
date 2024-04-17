package giada.swing.MnR;

import static def.dom.Globals.document;
import simulation.dom.$Image;

/**
 * The default implementation of the HTMLImageProducer
 *
 * @author gianpiero.diblasi
 */
public class DefaultHTMLImageProducer implements HTMLImageProducer {

  private final String src;

  public DefaultHTMLImageProducer(String src) {
    super();
    this.src = src;
  }

  @Override
  public $Image produce() {
    $Image img = ($Image) document.createElement("img");
    img.src = this.src;
    return img;
  }
}
