/**
 * The javax.swing.DefaultComboBoxModel clone
 *
 * @author gianpiero.diblasi
 * @param <E> The element type
 */
class DefaultComboBoxModel {

   comboBox = null;

   addElement(element) {
    let option = document.createElement("option");
    option.setAttribute("value", element.toString());
    option.textContent = element.toString();
    this.comboBox.element.appendChild(option);
  }

   setComboBox(comboBox) {
    this.comboBox = comboBox;
  }
}
