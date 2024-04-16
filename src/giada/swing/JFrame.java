package giada.swing;

import def.dom.Element;
import static def.dom.Globals.document;
import def.dom.HTMLElement;
import giada.awt.BorderLayout;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
public class JFrame extends JComponent {

  private final JPanel contentPane = new JPanel();

  public JFrame() {
    super();

    this.contentPane.element.classList.remove("jpanel");
    this.contentPane.element.classList.add("jframe");
    this.contentPane.setLayout(new BorderLayout(0, 0));

    this.element = (HTMLElement) document.querySelector("body");
    this.element.textContent = "";
    this.element.appendChild(this.contentPane.element);
  }

  public void setTitle(String title) {
    if ($exists(title)) {
      Element tag = document.querySelector("title");
      if (!$exists(tag)) {
        tag = document.createElement("title");
        document.getElementsByTagName("head").$get(0).appendChild(tag);
      }
      tag.textContent = title;
    }
  }

  public JPanel getContentPane() {
    return this.contentPane;
  }
}
