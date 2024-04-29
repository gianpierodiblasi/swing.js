/**
 * @author gianpiero.diblasi
 */
class TestJFrame2HTMLImageProducer extends DefaultHTMLImageProducer {

  constructor(value, src) {
    super(value, src);
  }

   produce() {
    let img = super.produce();
    img.width = 20;
    img.height = 20;
    return img;
  }
}
