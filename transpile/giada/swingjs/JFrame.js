/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JFrame extends JComponent {

   contentPane = new JPanel();

  constructor() {
    super();
    this.contentPane.element.classList.remove("jpanel");
    this.contentPane.element.classList.add("jframe");
    this.contentPane.setLayout(new BorderLayout());
    this.element = document.querySelector("body");
    this.element.textContent = "";
    this.element.appendChild(this.contentPane.element);
  }

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

   getContentPane() {
    return this.contentPane;
  }
}
