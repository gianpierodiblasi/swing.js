package javascript.swing;

import static def.dom.Globals.document;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JSComboBox<T> extends AbstractButton {

  private AbstractComboBoxModelAndRenderer<T> modelAndRenderer;

  public JSComboBox() {
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
//  public Object getSelectedItem() {
//    return null;
////    return this.modelAndRenderer.getElementAt((($HTMLElement) this.element).selectedIndex);
//  }
  /**
   * Sets the model
   *
   * @param modelAndRenderer The model
   */
  public void setModelAndRenderer(AbstractComboBoxModelAndRenderer<T> modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setComboBox(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
  public AbstractComboBoxModelAndRenderer<T> getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
