/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JComboBox extends AbstractButton {

  static  MODEL_AND_RENDERER = "model-and-renderer";

  // AbstractComboBoxModelAndRenderer<T> modelAndRenderer;
  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onclick = (event) => this.onclick();
  }

  // public Object getSelectedItem() {
  // return (($HTMLElement) this.element).value;
  // }
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
   putClientProperty(key, value) {
    // if (JComboBox.MODEL_AND_RENDERER == key) {
    // this.modelAndRenderer = (AbstractComboBoxModelAndRenderer<T>) value;
    // this.modelAndRenderer.setComboBox(this);
    // } else {
    // super.putClientProperty(key, value);
    // }
  }
}
