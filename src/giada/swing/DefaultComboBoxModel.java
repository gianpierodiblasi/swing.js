package giada.swing;

import def.dom.Element;
import static def.dom.Globals.document;

/**
 * The javax.swing.DefaultComboBoxModel clone
 *
 * @author gianpiero.diblasi
 * @param <E> The element type
 */
public class DefaultComboBoxModel<E> {

  private JComboBox<E> comboBox;

  @SuppressWarnings("unchecked")
  public void addElement(E element) {
    Element option = document.createElement("option");
    option.setAttribute("value", element.toString());
    option.textContent = element.toString();
    
    this.comboBox.element.appendChild(option);
  }

  void setComboBox(JComboBox<E> comboBox) {
    this.comboBox = comboBox;
  }
}
