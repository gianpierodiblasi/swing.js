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

  public JComboBox() {
    super();

    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onclick = (event) -> this.onclick();
  }

  public void setModel(DefaultComboBoxModel<T> model) {
    model.setComboBox(this);
  }

  public Object getSelectedItem() {
    return (($HTMLElement) this.element).value;
  }
}
