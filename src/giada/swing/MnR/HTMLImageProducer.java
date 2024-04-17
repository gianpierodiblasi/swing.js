package giada.swing.MnR;

import simulation.dom.$Image;

/**
 * The interface of an object able to produce an HTML image element to use in an
 * AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The value type of the AbstractSliderModelAndRenderer
 */
public interface HTMLImageProducer<T> {

  public $Image produce();

  public T getValue();
}
