/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JSComboBox extends JSDropDown {

   listeners = new Array();

   modelAndRenderer = null;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.cssAddClass("jscombobox");
    this.appendNodeChild(document.createElement("ul"));
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
   getSelectedItem() {
    return this.modelAndRenderer.getSelectedElement();
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @param object The selected item
   */
   setSelectedItem(object) {
    this.modelAndRenderer.setSelectedElement(object);
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

  /**
   * Clone of javax.swing.JComboBox.addActionListener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
   */
   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.removeAttribute("tabIndex");
    } else {
      this.setAttribute("tabIndex", "-1");
    }
  }
}
