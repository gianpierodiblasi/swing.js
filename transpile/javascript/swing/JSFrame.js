/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JSFrame extends JSComponent {

   contentPane = new JSPanel();

  constructor() {
    super();
    this.contentPane.element.classList.remove("jpanel");
    this.contentPane.element.classList.add("jframe");
    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.element = document.querySelector("body");
    this.element.textContent = "";
    this.element.appendChild(this.contentPane.element);
  }

  /**
   * Clone of javax.swing.JFrame.setTitle
   *
   * @param title The title
   */
   setTitle(title) {
    if (title) {
      let tag = document.querySelector("title");
      if (!tag) {
        tag = document.createElement("title");
        document.getElementsByTagName("head")[0].appendChild(tag);
      }
      tag.textContent = title;
    }
  }

  /**
   * Clone of javax.swing.JFrame.getContentPane
   *
   * @return The content pane
   */
   getContentPane() {
    return this.contentPane;
  }
}
