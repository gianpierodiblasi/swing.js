package giada.swingjs;

import static def.dom.Globals.document;
import def.dom.HTMLElement;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JPanel extends JComponent {

  private final HTMLElement panel;

  public JPanel() {
    super();

    this.panel = document.createElement("div");
    this.panel.classList.add("jpanel");
  }
}
