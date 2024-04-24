package javascript.util;

import simulation.dom.$Image;

/**
 * The abstract object able to produce an HTML image element based on a value
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
public abstract class AbstractHTMLImageProducer<T> {

  private final T value;

  /**
   * Creates the object
   *
   * @param value The value
   */
  public AbstractHTMLImageProducer(T value) {
    this.value = value;
  }

  /**
   * Produces an HTML image element
   *
   * @return An HTML image element
   */
  public abstract $Image produce();

  /**
   * Returns the value
   *
   * @return The value
   */
  public T getValue() {
    return this.value;
  }
}
