/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
class HTMLImageSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  /**
   * Creates the object
   */
  constructor() {
    super(false);
  }

   render(element, slider) {
    let img = element.produce();
    img.addEventListener("load", event => {
      switch(slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          slider.getChilStyleByQuery("input").marginLeft = (img.width / 2) + "px";
          slider.getChilStyleByQuery("input").marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          slider.getChilStyleByQuery("input").marginTop = (img.height / 2) + "px";
          slider.getChilStyleByQuery("input").marginBottom = (img.height / 2) + "px";
          break;
      }
    });
    return img;
  }
}
