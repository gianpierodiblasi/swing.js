package giada.swing.MnR;

import def.dom.HTMLElement;
import giada.swing.JSlider;
import simulation.dom.$Image;

/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
public class HTMLImageSliderModelAndRenderer<T extends HTMLImageProducer<S>, S> extends AbstractSliderModelAndRenderer<T> {

  public HTMLImageSliderModelAndRenderer() {
    super(false);
  }

  @Override
  protected void render(T element, JSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option) {
    $Image img = element.produce();
    img.onload = (event) -> {
      if (slider.element.classList.contains("jslider-horizontal")) {
        ((HTMLElement) slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
        ((HTMLElement) slider.element.querySelector("input")).style.marginRight = (img.width / 2) + "px";
      } else {
        ((HTMLElement) slider.element.querySelector("input")).style.marginTop = (img.height / 2) + "px";
        ((HTMLElement) slider.element.querySelector("input")).style.marginBottom = (img.height / 2) + "px";
      }

      return null;
    };
    noDataList.appendChild(img);
  }
}
