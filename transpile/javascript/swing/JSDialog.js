/**
 * The javax.swing.JDialog clone
 *
 * @author gianpiero.diblasi
 */
class JSDialog extends JSComponent {

   title = new JSLabel();

   close = new JSButton();

   contentPane = new JSPanel();

  constructor() {
    super();
    this.close.addActionListener((event) => this.setVisible(false));
    let panel = new JSPanel();
    panel.setLayout(new BorderLayout(0, 0));
    panel.add(this.title, BorderLayout.CENTER);
    panel.add(this.close, BorderLayout.EAST);
    let header = document.createElement("header");
    header.classList.add("jdialog-header");
    header.appendChild(panel.element);
    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.contentPane.cssAddClass("jdialog-content");
    this.element = document.createElement("dialog");
    this.element.classList.add("jdialog");
    let article = document.createElement("article");
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
   setTitle(title) {
    this.title.setText(title);
  }

  /**
   * Clone of javax.swing.JDialog.getContentPane
   *
   * @return The content pane
   */
   getContentPane() {
    return this.contentPane;
  }

  /**
   * Clone of javax.swing.JDialog.setVisible
   *
   * @param b true to show the dialog, false otherwise
   */
   setVisible(b) {
    if (!b) {
      (this.element).close();
    } else {
      (this.element).showModal();
    }
  }
}
