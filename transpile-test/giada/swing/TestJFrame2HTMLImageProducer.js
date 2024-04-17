/**
 * @author gianpiero.diblasi
 */
class TestJFrame2HTMLImageProducer extends DefaultHTMLImageProducer {

  constructor(value, src) {
    super(value, src);
  }

   produce() {
    let img = super.produce();
    switch(this.getValue()) {
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
