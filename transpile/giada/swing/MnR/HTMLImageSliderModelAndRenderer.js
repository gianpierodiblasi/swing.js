/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class HTMLImageSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  constructor() {
    super(false);
  }

   render(element, slider, dataList, noDataList, option) {
    let img = element.produce();
    img.onload = (event) => {
      (slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
      (slider.element.querySelector("input")).style.marginRight = (img.height / 2) + "px";
      return null;
    };
    noDataList.appendChild(img);
  }
}
