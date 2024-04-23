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
   * Clone of javax.swing.JComponent.setEnabled
   *
   * @param b true to enable the button, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
    }
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
   * Returns the style of the HTML element
   *
   * @return The style of the HTML element
   */
   getStyle() {
    return this.element.style;
  }

  /**
   * Sets an attribute of the HTML element
   *
   * @param key The attribute key
   * @param value The attribute value
   */
   setAttribute(key, value) {
    this.element.setAttribute(key, value);
  }

  /**
   * Returns an attribute of the HTML element
   *
   * @param key The attribute key
   * @return The attribute value
   */
   getAttribute(key) {
    return this.element.getAttribute(key);
  }

  /**
   * Clears the text content of the HTML element
   */
   clearContent() {
    this.element.textContent = "";
  }

  /**
   * Sets the text content of the HTML element
   *
   * @param content The text content of this component
   */
   setContent(content) {
    this.element.textContent = content;
  }

  /**
   * Adds an event listener
   *
   * @param event The event
   * @param listener The listener
   */
   addEventListener(event, listener) {
    this.element.addEventListener(event, listener);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param component The child component
   */
   appendChild(component) {
    this.element.appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param node The node
   */
   appendNodeChild(node) {
    this.element.appendChild(node);
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param index The child index
   * @return The style of a child of the HTML element
   */
   getChilStyleByIndex(index) {
    return (this.element.childNodes.item(index)).style;
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param query The query selector
   * @return The style of a child of the HTML element
   */
   getChilStyleByQuery(query) {
    return (this.element.querySelector(query)).style;
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByIndex(index, key, value) {
    (this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByQuery(query, key, value) {
    this.element.querySelector(query).setAttribute(key, value);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByIndex(index, key) {
    return (this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByQuery(query, key) {
    return this.element.querySelector(query).getAttribute(key);
  }

  /**
   * Returns the child count of the HTML element
   *
   * @return The child count of the HTML element
   */
   getChildCount() {
    return this.element.childElementCount;
  }
}
