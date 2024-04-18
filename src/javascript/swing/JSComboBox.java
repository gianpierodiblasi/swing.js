package javascript.swing;

import static def.dom.Globals.document;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import javascript.swing.plaf.LookAndFeel;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JSComboBox<T> extends AbstractButton {

  public final static String MODEL_AND_RENDERER = "model-and-renderer";

  private AbstractComboBoxModelAndRenderer<T> modelAndRenderer;

  public JSComboBox() {
    super();

    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onchange = (event) -> this.onclick();

    LookAndFeel.CURRENT.styleJSComboBox(this);
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
  public Object getSelectedItem() {
    return this.modelAndRenderer.getElementAt((($HTMLElement) this.element).selectedIndex);
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
}
