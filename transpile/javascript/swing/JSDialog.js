/**
 * The javax.swing.JDialog clone
 *
 * @author gianpiero.diblasi
 */
class JSDialog extends JSComponent {

   title = new JSLabel();

   close = new JSButton();

   contentPane = new JSPanel();

   listeners = new Array();

  constructor() {
    super(document.createElement("dialog"));
    this.cssAddClass("jsdialog");
    this.addEventListener("close", event => this.onclose());
    this.appendNodeChild(document.createElement("article"));
    let header = document.createElement("header");
    header.classList.add("jsdialog-header");
    this.appendNodeChildInTree("article", header);
    let panel = new JSPanel();
    panel.setLayout(new BorderLayout(0, 0));
    panel.add(this.title, BorderLayout.CENTER);
    panel.add(this.close, BorderLayout.EAST);
    this.close.addActionListener(event => this.setVisible(false));
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
      this.invoke("close");
    } else {
      this.invoke("showModal");
    }
  }

  /**
   * Adds a listener of window closed
   *
   * @param listener The listener
   */
   addWindowClosedListener(listener) {
    this.listeners.push(listener);
  }

   onclose() {
    let event = new WindowEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.windowClosed(event);
      }
    });
  }
}
