package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.awt.BorderLayout;
import javascript.swing.plaf.LookAndFeel;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JDialog clone
 *
 * @author gianpiero.diblasi
 */
public class JSDialog extends JSComponent {

  private final JSLabel title = new JSLabel();
  private final JSButton close = new JSButton();
  private final JSPanel contentPane = new JSPanel();
  
  public JSDialog() {
    super();

    this.close.addActionListener((event) -> this.setVisible(false));

    JSPanel panel = new JSPanel();
    panel.setLayout(new BorderLayout(0, 0));
    panel.add(this.title, BorderLayout.CENTER);
    panel.add(this.close, BorderLayout.EAST);

    HTMLElement header = document.createElement("header");
    header.classList.add("jdialog-header");
    header.appendChild(panel.element);

    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.contentPane.cssAddClass("jdialog-content");

    this.element = document.createElement("dialog");
    this.element.classList.add("jdialog");

    HTMLElement article = document.createElement("article");
    article.appendChild(header);
    article.appendChild(this.contentPane.element);
    this.element.appendChild(article);

    document.querySelector("body").appendChild(this.element);

    LookAndFeel.CURRENT.styleJSDialog(this);
  }

  /**
   * Clone of javax.swing.JDialog.setTitle
   *
   * @param title The title
   */
  public void setTitle(String title) {
    this.title.setText(title);
  }

  /**
   * Clone of javax.swing.JDialog.getContentPane
   *
   * @return The content pane
   */
  public JSPanel getContentPane() {
    return this.contentPane;
  }

  /**
   * Clone of javax.swing.JDialog.setVisible
   *
   * @param b true to show the dialog, false otherwise
   */
  public void setVisible(boolean b) {
    if (!b) {
      (($HTMLElement) this.element).close();
    } else {
      (($HTMLElement) this.element).showModal();
    }
  }
}
