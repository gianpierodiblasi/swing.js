package javascript.swing.MnR;

import def.dom.HTMLElement;
import javascript.swing.JSSlider;

/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class DefaultSliderModelAndRenderer<T> extends AbstractSliderModelAndRenderer<T> {

  public DefaultSliderModelAndRenderer() {
    super(true);
  }

  @Override
  protected void render(T element, JSSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option) {
    option.setAttribute("label", element.toString());
  }
}
