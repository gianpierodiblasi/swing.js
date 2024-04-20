package javascript.swing.MnR;

import def.dom.HTMLElement;
import javascript.swing.JSSlider;
import javascript.util.AbstractHTMLImageProducer;
import simulation.dom.$HTMLElement;
import simulation.dom.$Image;

/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
public class HTMLImageSliderModelAndRenderer<T extends AbstractHTMLImageProducer<S>, S> extends AbstractSliderModelAndRenderer<T> {

  public HTMLImageSliderModelAndRenderer() {
    super(false);
  }

  @Override
  protected void render(T element, JSSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option) {
    $Image img = element.produce();
    img.onload = (event) -> {
      switch (slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          ((HTMLElement) slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
          ((HTMLElement) slider.element.querySelector("input")).style.marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          ((HTMLElement) slider.element.querySelector("input")).style.marginTop = (img.height / 2) + "px";
          ((HTMLElement) slider.element.querySelector("input")).style.marginBottom = (img.height / 2) + "px";
          break;
      }
      return null;
    };

    switch (slider.getOrientation()) {
      case JSSlider.HORIZONTAL:
        noDataList.appendChild(img);
        break;
      case JSSlider.VERTICAL:
        (($HTMLElement) noDataList).prepend(img);
        break;
    }
  }
}
