package javascript.swing;

import javascript.util.DefaultHTMLImageProducer;
import simulation.dom.$Image;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame3HTMLImageProducer extends DefaultHTMLImageProducer<String> {

  public TestJFrame3HTMLImageProducer(String value, String src) {
    super(value, src);
  }

  @Override
  public $Image produce() {
    $Image img = super.produce();
    switch (this.getValue()) {
      case "A":
        break;
      case "B":
        img.style.transform = "rotate(15deg) scale(0.8)";
        break;
      case "C":
        img.style.filter = "drop-shadow(2px 4px 6px black)";
        break;
      case "D":
        break;
    }
    return img;
  }
}
