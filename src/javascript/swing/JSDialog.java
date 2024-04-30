package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.awt.BorderLayout;

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
    super(document.createElement("dialog"));

    this.cssAddClass("jsdialog");

    this.appendNodeChild(document.createElement("article"));

    HTMLElement header = document.createElement("header");
    header.classList.add("jsdialog-header");
    this.appendNodeChildInTree("article", header);

    JSPanel panel = new JSPanel();
    panel.setLayout(new BorderLayout(0, 0));
    panel.add(this.title, BorderLayout.CENTER);
    panel.add(this.close, BorderLayout.EAST);
    this.close.addActionListener(event -> this.setVisible(false));
    this.appendChildInTree("header", panel);

    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.contentPane.cssAddClass("jsdialog-content");
    this.appendChildInTree("article", this.contentPane);

    this.appendInBody();
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
      this.invoke("close");
    } else {
      this.invoke("showModal");
    }
  }
}
