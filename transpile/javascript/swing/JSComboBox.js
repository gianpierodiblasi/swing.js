/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JSComboBox extends AbstractButton {

  static  MODEL_AND_RENDERER = "model-and-renderer";

   modelAndRenderer = null;

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onchange = (event) => this.onclick();
    LookAndFeel.CURRENT.styleJSComboBox(this);
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
   getSelectedItem() {
    return this.modelAndRenderer.getElementAt((this.element).selectedIndex);
  }

  /**
   * Sets the model
   *
   * @param modelAndRenderer The model
   */
   setModelAndRenderer(modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setComboBox(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
   getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
