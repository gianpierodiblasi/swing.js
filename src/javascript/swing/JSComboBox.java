package javascript.swing;

import static def.dom.Globals.console;
import static def.dom.Globals.document;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import javascript.util.AbstractHTMLImageProducer;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JSComboBox<T extends Comparable<T>> extends AbstractButton {

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
  public Object getSelectedItem() {
    return this.modelAndRenderer.getSelectedElement();
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @param object The selected item
   */
  @SuppressWarnings("unchecked")
  public void setSelectedItem(Object object) {
    this.modelAndRenderer.setSelectedElement((T) object);
  }

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

  /**
   * JSComboBox does not manage icons
   *
   * @param producer
   */
  @Override
  public void setIcon(AbstractHTMLImageProducer<?> producer) {
    console.error("JSComboBox does not manage icons");
  }
}
