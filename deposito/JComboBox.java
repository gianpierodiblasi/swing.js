package giada.swing;

import static def.dom.Globals.document;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JComboBox<T> extends AbstractButton {
  
  public final static String MODEL_AND_RENDERER = "model-and-renderer";
  
  AbstractComboBoxModelAndRenderer<T> modelAndRenderer;
  
  public JComboBox() {
    super();
    
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onclick = (event) -> this.onclick();
  }

//  public Object getSelectedItem() {
//    return (($HTMLElement) this.element).value;
//  }
  /**
   * Special use case: in general this method calls
   * <i>super.putClientProperty</i> implementation, with the following
   * exception: if <i>key</i> = "model-and-renderer" (or the constant value
   * <i>JComboBox.MODEL_AND_RENDERER</i>) then this method sets an object able
   * to model and render this JComboBox
   *
   * @param key The key
   * @param value The value
   */
  @Override
  @SuppressWarnings("unchecked")
  public void putClientProperty(Object key, Object value) throws Exception {
    if (JComboBox.MODEL_AND_RENDERER == key) {
      this.modelAndRenderer = (AbstractComboBoxModelAndRenderer<T>) value;
      this.modelAndRenderer.setComboBox(this);
    } else {
      super.putClientProperty(key, value);
    }
  }
}
