package giada.swing;

import static def.dom.Globals.document;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JComboBox<T> extends AbstractButton {

  public final static String MODEL_AND_RENDERER = "model-and-renderer";

  private AbstractComboBoxModelAndRenderer<T> modelAndRenderer;

  public JComboBox() {
    super();

    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onchange = (event) -> this.onclick();
  }

  public Object getSelectedItem() {
    return this.modelAndRenderer.getElementAt((($HTMLElement) this.element).selectedIndex);
  }

  /**
   * Special use case: in general this method calls the
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

  /**
   * Special use case: in general this method calls the
   * <i>super.getClientProperty</i> implementation, with the following
   * exception: if <i>key</i> = "model-and-renderer" (or the constant value
   * <i>JComboBox.MODEL_AND_RENDERER</i>) then this method gets an object able
   * to model and render this JComboBox
   *
   * @param key The key
   * @return The value
   */
  @Override
  public Object getClientProperty(Object key) {
    if (JComboBox.MODEL_AND_RENDERER == key) {
      return this.modelAndRenderer;
    } else {
      return super.getClientProperty(key);
    }
  }
}
