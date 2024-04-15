package giada.swing;

import static def.dom.Globals.document;

/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public class JComboBox<T> extends JComponent {

  public JComboBox() {
    super();

    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
  }
}
