/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JComboBox extends AbstractButton {

  static  MODEL_AND_RENDERER = "model-and-renderer";

   modelAndRenderer = null;

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onchange = (event) => this.onclick();
  }

   getSelectedItem() {
    return this.modelAndRenderer.getElementAt((this.element).selectedIndex);
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
   putClientProperty(key, value) {
    if (JComboBox.MODEL_AND_RENDERER === key) {
      this.modelAndRenderer = value;
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
   getClientProperty(key) {
    if (JComboBox.MODEL_AND_RENDERER === key) {
      return this.modelAndRenderer;
    } else {
      return super.getClientProperty(key);
    }
  }
}
