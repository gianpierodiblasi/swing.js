package javascript.swing;

import def.dom.Element;
import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.awt.BorderLayout;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
public class JSFrame extends JSComponent {

  private final JSPanel contentPane = new JSPanel();

  /**
   * Creates the object
   */
  public JSFrame() {
    super((HTMLElement) document.querySelector("body"));

    this.cssAddClass("jsframe");
    this.appendChild(this.contentPane);
    this.contentPane.setLayout(new BorderLayout(0, 0));
  }

  /**
   * Clone of javax.swing.JFrame.setTitle
   *
   * @param title The title
   */
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

  /**
   * Clone of javax.swing.JFrame.getContentPane
   *
   * @return The content pane
   */
  public JSPanel getContentPane() {
    return this.contentPane;
  }
}
