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
    super();
    this.key = key;
    this.value = value;
  }

   compareTo(other) {
    try {
      return this.key.compareTo(other.key);
    } catch (ex) {
      let result = 0;
      eval("result = this.key < other.key ? -1 : this.key > other.key ? +1 : 0");
      return result;
    }
  }
}
