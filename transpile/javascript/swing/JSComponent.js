/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
class JSComponent {

   element = null;

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  constructor(element) {
    this.element = element;
  }

  /**
   * Clone of javax.swing.JComponent.setBackground
   *
   * @param color The color
   */
   setBackground(color) {
    this.element.style.backgroundColor = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
  }

  /**
   * Sets the ID of the HTML element
   *
   * @param id The ID of the HTML element
   */
   setID(id) {
    this.element.id = id;
  }

  /**
   * Returns the ID of the HTML element
   *
   * @return The ID of the HTML element
   */
   getID() {
    return this.element.id;
  }

  /**
   * Adds a CSS class to the class list of the HTML element
   *
   * @param cl The class to add
   */
   cssAddClass(cl) {
    this.element.classList.add(cl);
  }

  /**
   * Removes a CSS class from the class list of the HTML element
   *
   * @param cl The class to remove
   */
   cssRemoveClass(cl) {
    this.element.classList.remove(cl);
  }

  /**
   * Toggles a CSS class in the class list of the HTML element (if the class is
   * set removes it, otherwise adds it)
   *
   * @param cl The class to toggle
   */
   cssToggleClass(cl) {
    this.element.classList.toggle(cl);
  }

  /**
   * Returns the class list of the HTML element
   *
   * @return The class list of the HTML element
   */
   cssClassList() {
    return this.element.classList;
  }

  /**
   * Adds a child to this component
   *
   * @param component The child component
   */
   appendChild(component) {
    this.element.appendChild(component.element);
  }

  /**
   * Returns the child count
   *
   * @return The child count
   */
   getChildCount() {
    return this.element.childElementCount;
  }

  /**
   * Returns the style of this component
   *
   * @return The style of this component
   */
   getStyle() {
    return this.element.style;
  }

  /**
   * Clears the text content of this component
   */
   clearContent() {
    this.element.textContent = "";
  }

  /**
   * Sets the text content of this component
   *
   * @param content The text content of this component
   */
   setContent(content) {
    this.element.textContent = content;
  }
}
