package javascript.swing.MnR;

import javascript.swing.JSSlider;
import javascript.util.AbstractHTMLImageProducer;
import simulation.dom.$Image;

/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
public class HTMLImageSliderModelAndRenderer<T extends AbstractHTMLImageProducer<S>, S> extends AbstractSliderModelAndRenderer<T> {

  /**
   * Creates the object
   */
  public HTMLImageSliderModelAndRenderer() {
    super(false);
  }

  @Override
  protected Object render(T element, JSSlider slider) {
    $Image img = element.produce();
    img.addEventListener("load", event -> {
      switch (slider.getOrientation()) {
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
