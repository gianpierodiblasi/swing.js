package javascript.swing;

import javascript.util.DefaultHTMLImageProducer;
import simulation.dom.$Image;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame2HTMLImageProducer extends DefaultHTMLImageProducer<String> {

  public TestJFrame2HTMLImageProducer(String value, String src) {
    super(value, src);
  }

  @Override
  public $Image produce() {
    $Image img = super.produce();
    img.width = 20;
    img.height = 20;
    return img;
  }
}
