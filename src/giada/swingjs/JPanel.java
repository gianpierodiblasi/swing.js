package giada.swingjs;

import static def.dom.Globals.document;
import giada.swingjs.layout.BorderLayout;
import giada.swingjs.layout.FlowLayout;
import giada.swingjs.layout.LayoutManager;

/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
public class JPanel extends JComponent {

  private LayoutManager layoutManager = new FlowLayout(FlowLayout.CENTER, 5, 5);

  public JPanel() {
    super();

    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
  }

  public void setLayout(LayoutManager layoutManager) {
    this.layoutManager = layoutManager;
    this.element.classList.add(this.layoutManager.css);

    switch (this.layoutManager.css) {
      case "borderlayout":
        this.element.style.paddingLeft = ((BorderLayout) this.layoutManager).hGap + "px";
        this.element.style.paddingRight = ((BorderLayout) this.layoutManager).hGap + "px";
        this.element.style.paddingTop = ((BorderLayout) this.layoutManager).vGap + "px";
        this.element.style.paddingBottom = ((BorderLayout) this.layoutManager).vGap + "px";
        break;
      case "flowlayout":
        this.element.style.paddingLeft = ((FlowLayout) this.layoutManager).hGap + "px";
        this.element.style.paddingRight = ((FlowLayout) this.layoutManager).hGap + "px";
        this.element.style.paddingTop = ((FlowLayout) this.layoutManager).vGap + "px";
        this.element.style.paddingBottom = ((FlowLayout) this.layoutManager).vGap + "px";
        break;
    }
  }

  public void add(JComponent component, Object constraints) {
    this.element.appendChild(component.element);

    switch (this.layoutManager.css) {
      case "BorderLayout":
        this.element.classList.add(((String) constraints).toLowerCase());
        break;
      case "flowlayout":
        break;
    }
  }
}
