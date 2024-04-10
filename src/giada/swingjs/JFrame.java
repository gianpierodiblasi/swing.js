package giada.swingjs;

import static def.dom.Globals.document;
import def.dom.HTMLElement;

/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
public class JFrame extends JComponent {

  public JFrame() {
    HTMLElement div = document.createElement("div");
    div.classList.add("jframe");
    document.querySelector("body").appendChild(div);
  }
}
