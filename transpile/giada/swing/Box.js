/**
 * The javax.swing.Box clone
 *
 * @author gianpiero.diblasi
 */
class Box extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("span");
    this.element.classList.add("jcomponent-box");
  }
}
