/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JFrame extends JComponent {

  static  currentJFrame = null;

   contentPane = new JPanel();

  constructor() {
    super();
    let div = document.createElement("div");
    div.classList.add("jframe");
    document.querySelector("body").appendChild(div);
    JFrame.currentJFrame = this;
  }

   getContentPane() {
    return this.contentPane;
  }
}
