package javascript.swing;

import static def.dom.Globals.document;
import def.dom.Text;
import javascript.util.AbstractHTMLImageProducer;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
public class JSToggleButton extends AbstractButton {

  private final $HTMLElement togglebutton;
  private final Text text;

  public JSToggleButton() {
    super(document.createElement("label"));

    this.cssAddClass("jstogglebutton");

    this.togglebutton = ($HTMLElement) document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) -> this.onclick();
    this.appendNodeChild(this.togglebutton);

    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JToggleButton.setText
   *
   * @param text The text
   */
  public void setText(String text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.getText
   *
   * @return The text
   */
  public String getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
  public void setSelected(boolean selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
  public boolean isSelected() {
    return this.togglebutton.checked;
  }

  @Override
  public void setEnabled(boolean b) {
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
  public void setContentAreaFilled(boolean b) {
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
  public void setIcon(AbstractHTMLImageProducer<?> producer) {
    this.prependNodeChild(producer.produce());
  }
}
