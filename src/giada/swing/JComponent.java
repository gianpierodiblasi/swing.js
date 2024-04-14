package giada.swing;

import def.dom.HTMLElement;
import giada.awt.Color;

/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
public class JComponent {

  HTMLElement element;

  public JComponent() {
  }

  public void setBackground(Color color) {
    this.element.style.backgroundColor = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
  }
}
