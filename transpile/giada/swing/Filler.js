/**
 * The javax.swing.Box.Filler clone
 *
 * @author gianpiero.diblasi
 */
class Filler extends JComponent {

  constructor(min, pref, max) {
    super();
    this.element = document.createElement("span");
    this.element.classList.add("jcomponent-box-filler");
    this.element.style.minWidth = min.width + "px";
    this.element.style.minHeight = min.height + "px";
    this.element.style.width = pref.width + "px";
    this.element.style.height = pref.height + "px";
    this.element.style.maxWidth = max.width + "px";
    this.element.style.maxHeight = max.height + "px";
    if (min.width === 0 && min.height === 0 && pref.width === 0 && pref.height === 0) {
      this.element.style.flexGrow = "1";
    }
  }
}
