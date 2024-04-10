/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JFrame extends JComponent {

  constructor() {
    let div = document.createElement("div");
    div.classList.add("jframe");
    document.querySelector("body").appendChild(div);
  }
}
