/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
class JSToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jstogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) => this.onclick();
    this.appendNodeChild(this.togglebutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JToggleButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.togglebutton.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.togglebutton.removeAttribute("disabled");
    } else {
      this.togglebutton.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JToggleButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jstogglebutton-outline");
    } else {
      this.cssAddClass("jstogglebutton-outline");
    }
  }

  /**
   * Sets the icon
   *
   * @param producer The icon producer
   */
   setIcon(producer) {
    this.prependNodeChild(producer.produce());
  }
}
