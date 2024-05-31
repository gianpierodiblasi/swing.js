package javascript.swing;

import static def.dom.Globals.document;
import javascript.awt.FlowLayout;
import javascript.awt.LayoutManager;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JSPanel extends JSComponent {

  private LayoutManager layoutManager;

  /**
   * Creates the object
   */
  public JSPanel() {
    super(document.createElement("div"));

    this.cssAddClass("jspanel");
    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

  /**
   * Clone of javax.swing.JPanel.setLayout
   *
   * @param layoutManager The layout manager
   */
  public void setLayout(LayoutManager layoutManager) {
    if ($exists(this.layoutManager)) {
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

  /**
   * Clone of javax.swing.JPanel.getLayout
   *
   * @return The layout manager
   */
  public LayoutManager getLayout() {
    return this.layoutManager;
  }

  /**
   * Clone of javax.swing.JPanel.add
   *
   * @param component The component
   * @param constraints The constraints
   */
  public void add(JSComponent component, Object constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
