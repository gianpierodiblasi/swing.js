package javascript.util;

import static def.js.Globals.eval;

/**
 * A key/value object
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
public class KeyValue<K extends Comparable<K>, V> implements Comparable<KeyValue<K, V>> {

  public K key;
  public V value;

  /**
   * Creates the object
   *
   * @param key The key
   * @param value The value
   */
  public KeyValue(K key, V value) {
    super();

    this.key = key;
    this.value = value;
  }

  @Override
  public int compareTo(KeyValue<K, V> other) {
    try {
      return this.key.compareTo(other.key);
    } catch (Exception ex) {
      int result = 0;
      eval("result = this.key < other.key ? -1 : this.key > other.key ? +1 : 0");
      return result;
    }
  }
}
