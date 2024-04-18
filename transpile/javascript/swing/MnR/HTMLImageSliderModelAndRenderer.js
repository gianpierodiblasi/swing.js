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

   render(element, slider, dataList, noDataList, option) {
    let img = element.produce();
    img.onload = (event) => {
      switch(slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          (slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
          (slider.element.querySelector("input")).style.marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          (slider.element.querySelector("input")).style.marginTop = (img.height / 2) + "px";
          (slider.element.querySelector("input")).style.marginBottom = (img.height / 2) + "px";
          break;
      }
      return null;
    };
    switch(slider.getOrientation()) {
      case JSSlider.HORIZONTAL:
        noDataList.appendChild(img);
        break;
      case JSSlider.VERTICAL:
        (noDataList).prepend(img);
        break;
    }
  }
}
