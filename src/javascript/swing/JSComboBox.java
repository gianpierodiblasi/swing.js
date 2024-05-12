package javascript.swing;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.awt.event.ActionEvent;
import javascript.awt.event.ActionListener;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import simulation.dom.$DOMRect;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JSComboBox<T extends Comparable<T>> extends JSComponent {

  private final Array<ActionListener> listeners = new Array<>();
  private AbstractComboBoxModelAndRenderer<T> modelAndRenderer;

  @SuppressWarnings("StringEquality")
  public JSComboBox() {
    super(document.createElement("details"));

    this.cssAddClass("jscombobox");
    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.getChilStyleByQuery("ul").visibility = "visible";

        $DOMRect rect = this.invokeInTree("ul", "getBoundingClientRect()");
        $DOMRect rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");

        if (rectSummary.left + rect.width < document.body.scrollWidth) {
          this.getChilStyleByQuery("ul").left = rectSummary.left + "px";
        } else if (rectSummary.right - rect.width > 0) {
          this.getChilStyleByQuery("ul").left = (rectSummary.right - rect.width) + "px";
        } else {
          this.getChilStyleByQuery("ul").left = "auto";
          this.getChilStyleByQuery("ul").right = "5px";
        }

        if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
          this.getChilStyleByQuery("ul").top = rectSummary.bottom + "px";
        } else if (rectSummary.top - rect.height > 0) {
          this.getChilStyleByQuery("ul").top = "calc("+(rectSummary.top - rect.height) + "px - 1rem)";
        } else {
          this.getChilStyleByQuery("ul").top = "auto";
          this.getChilStyleByQuery("ul").bottom = "5px";
        }
      } else {
        this.getChilStyleByQuery("ul").removeProperty("visibility");
        this.getChilStyleByQuery("ul").removeProperty("top");
        this.getChilStyleByQuery("ul").removeProperty("left");
        this.getChilStyleByQuery("ul").removeProperty("bottom");
        this.getChilStyleByQuery("ul").removeProperty("right");
      }
    });

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
   * Clone of javax.swing.JComboBox.addActionListener
   *
   * @param listener The listener
   */
  public void addActionListener(ActionListener listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
   */
  public Object onclick() {
    ActionEvent event = new ActionEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }

  @Override
  public void setEnabled(boolean b) {
    super.setEnabled(b);

    if (b) {
      this.removeAttribute("tabIndex");
    } else {
      this.setAttribute("tabIndex", "-1");
    }
  }
}
