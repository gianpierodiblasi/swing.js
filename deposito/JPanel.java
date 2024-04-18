package giada.swing;

import static def.dom.Globals.document;
import giada.awt.FlowLayout;
import giada.awt.LayoutManager;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JPanel extends JComponent {

  private LayoutManager layoutManager;

  public JPanel() {
    super();
    
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");

    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

  public void setLayout(LayoutManager layoutManager) {
    if ($exists(this.layoutManager)) {
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

  public LayoutManager getLayout() {
    return this.layoutManager;
  }

  public void add(JComponent component, Object constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
