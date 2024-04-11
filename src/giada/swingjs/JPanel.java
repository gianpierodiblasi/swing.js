package giada.swingjs;

import static def.dom.Globals.document;
import giada.swingjs.layout.FlowLayout;
import giada.swingjs.layout.LayoutManager;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JPanel extends JComponent {

  private LayoutManager layoutManager = new FlowLayout();

  public JPanel() {
    super();

    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
  }

  public void setLayout(LayoutManager layoutManager) {
    this.layoutManager = layoutManager;
  }

  public void add(JComponent component, Object constraints) {
  }
}
