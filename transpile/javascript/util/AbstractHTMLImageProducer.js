/**
 * The abstract object able to produce an HTML image element based on a value
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class AbstractHTMLImageProducer {

   value = null;

  /**
   * Creates the object
   *
   * @param value The value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Produces an HTML image element
   *
   * @return An HTML image element
   */
   produce() {
  }

  /**
   * Returns the value
   *
   * @return The value
   */
   getValue() {
    return this.value;
  }
}
