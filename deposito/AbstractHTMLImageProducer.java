package giada.swing.MnR;

import simulation.dom.$Image;

/**
 * The abstract object able to produce an HTML image element to use in an
 * AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
public abstract class AbstractHTMLImageProducer<T> {

  private final T value;

  public AbstractHTMLImageProducer(T value) {
    this.value = value;
  }

  public abstract $Image produce();

  public T getValue() {
    return this.value;
  }
}
