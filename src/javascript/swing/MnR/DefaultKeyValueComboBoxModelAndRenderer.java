package javascript.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.dom.Node;
import javascript.util.KeyValue;
import static simulation.js.$Globals.$exists;

/**
 * The default key/value implementation of the
 * AbstractKeyValueComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
public class DefaultKeyValueComboBoxModelAndRenderer<K extends Comparable<K>, V> extends AbstractComboBoxModelAndRenderer<KeyValue<K, V>> {

  @Override
  protected Node render(KeyValue<K, V> element, boolean inlist) {
    HTMLElement label = document.createElement("label");
    label.textContent = $exists(element) ? element.value.toString() : "";
    return label;
  }
}
