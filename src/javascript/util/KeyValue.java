package javascript.util;

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
    this.key = key;
    this.value = value;
  }

  @Override
  public int compareTo(KeyValue<K, V> other) {
    return this.key.compareTo(other.key);
  }
}
