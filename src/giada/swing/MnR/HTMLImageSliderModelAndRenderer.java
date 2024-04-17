package giada.swing.MnR;

import def.dom.HTMLElement;
import giada.swing.JSlider;
import simulation.dom.$Image;

/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class HTMLImageSliderModelAndRenderer<T extends HTMLImageProducer> extends AbstractSliderModelAndRenderer<T> {

  public HTMLImageSliderModelAndRenderer() {
    super(false);
  }

  @Override
  protected void render(T element, JSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option) {
    $Image img = element.produce();
    img.onload = (event) -> {
      ((HTMLElement) slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
      ((HTMLElement) slider.element.querySelector("input")).style.marginRight = (img.height / 2) + "px";
      return null;
    };
    noDataList.appendChild(img);
  }
}
