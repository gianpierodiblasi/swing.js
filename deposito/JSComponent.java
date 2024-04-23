package javascript.swing;

import def.dom.DOMTokenList;
import def.dom.HTMLElement;
import javascript.awt.Color;

/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
public class JSComponent {

  public HTMLElement element;

  /**
   * Clone of javax.swing.JComponent.setBackground
   *
   * @param color The color
   */
  public void setBackground(Color color) {
    this.element.style.backgroundColor = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
  }

  /**
   * Sets the ID of the HTML element
   *
   * @param id The ID of the HTML element
   */
  public void setID(String id) {
    this.element.id = id;
  }

  /**
   * Returns the ID of the HTML element
   *
   * @return The ID of the HTML element
   */
  public String getID() {
    return this.element.id;
  }

  /**
   * Adds a CSS class to the class list of the HTML element
   *
   * @param cl The class to add
   */
  public void cssAddClass(String cl) {
    this.element.classList.add(cl);
  }

  /**
   * Removes a CSS class from the class list of the HTML element
   *
   * @param cl The class to remove
   */
  public void cssRemoveClass(String cl) {
    this.element.classList.remove(cl);
  }

  /**
   * Toggles a CSS class in the class list of the HTML element (if the class is
   * set removes it, otherwise adds it)
   *
   * @param cl The class to toggle
   */
  public void cssToggleClass(String cl) {
    this.element.classList.toggle(cl);
  }

  /**
   * Returns the class list of the HTML element
   *
   * @return The class list of the HTML element
   */
  public DOMTokenList cssClassList() {
    return this.element.classList;
  }
}
