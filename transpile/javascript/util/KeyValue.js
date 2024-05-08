/**
 * A key/value object
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
class KeyValue extends Comparable {

   key = null;

   value = null;

  /**
   * Creates the object
   *
   * @param key The key
   * @param value The value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

   compareTo(other) {
    return this.key.compareTo(other.key);
  }
}
