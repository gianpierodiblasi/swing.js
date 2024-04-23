/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JSComboBox extends AbstractButton {

   modelAndRenderer = null;

  constructor() {
    super(document.createElement("details"));
    this.cssAddClass("jscombobox");
    this.appendNodeChild(document.createElement("summary"));
    this.appendNodeChild(document.createElement("ul"));
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
  // public Object getSelectedItem() {
  // return null;
  // //    return this.modelAndRenderer.getElementAt((($HTMLElement) this.element).selectedIndex);
  // }
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
