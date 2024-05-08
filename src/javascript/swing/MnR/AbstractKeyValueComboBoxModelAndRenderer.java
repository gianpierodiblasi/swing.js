package javascript.swing.MnR;

import javascript.util.KeyValue;

/**
 * The abstract key/value implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
public abstract class AbstractKeyValueComboBoxModelAndRenderer<K extends Comparable<K>, V> extends AbstractComboBoxModelAndRenderer<KeyValue<K, V>> {
}
