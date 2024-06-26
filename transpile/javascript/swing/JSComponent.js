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
    this.element.style.backgroundColor = color.getRGB_HEX();
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
   * Invokes a method of the HTML element
   *
   * @param <T> The type of the return value
   * @param method The method name (with parenthesis)
   * @return The return value of the method
   */
   invoke(method) {
    let result = null;
    eval("result = this.element." + method + ";");
    return result;
  }

  /**
   * Invokes a method of an child of the HTML element
   *
   * @param <T> The type of the return value
   * @param query The query selector
   * @param method The method name (with parenthesis)
   * @return The return value of the method
   */
   invokeInTree(query, method) {
    let result = null;
    eval("result = this.element.querySelector('" + query + "')." + method + ";");
    return result;
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
   * Sets a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key the property key
   * @param value The property value
   */
   setProperty(key, value) {
    this.element[key] = value;
  }

  /**
   * Returns a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The property key
   * @return The property value
   */
   getProperty(key) {
    return this.element[key];
  }

  /**
   * Sets an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @param value The attribute value
   */
   setAttribute(key, value) {
    this.element.setAttribute(key, value);
  }

  /**
   * Returns an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @return The attribute value
   */
   getAttribute(key) {
    return this.element.getAttribute(key);
  }

  /**
   * Removes an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   */
   removeAttribute(key) {
    this.element.removeAttribute(key);
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
   * Adds the HTML element to the BODY element
   */
   appendInBody() {
    document.querySelector("body").appendChild(this.element);
  }

  /**
   * Removes the HTML element from the BODY element
   */
   removeFromBody() {
    document.querySelector("body").removeChild(this.element);
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
   * insert a child to the HTML element before another child
   *
   * @param component The child component
   * @param query The query selector
   */
   insertBefore(component, query) {
    this.element.insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param node The node
   * @param query The query selector
   */
   insertNodeBefore(node, query) {
    this.element.insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param component The child component
   */
   prependChild(component) {
    (this.element).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param node The node
   */
   prependNodeChild(node) {
    (this.element).prepend(node);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
   appendChildInTree(query, component) {
    this.element.querySelector(query).appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
   appendNodeChildInTree(query, node) {
    this.element.querySelector(query).appendChild(node);
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param component The child component
   * @param query The query selector
   */
   insertBeforeInTree(queryInTree, component, query) {
    this.element.querySelector(queryInTree).insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param node The node
   * @param query The query selector
   */
   insertNodeBeforeInTree(queryInTree, node, query) {
    this.element.querySelector(queryInTree).insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
   prependChildInTree(query, component) {
    (this.element.querySelector(query)).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
   prependNodeChildInTree(query, node) {
    (this.element.querySelector(query)).prepend(node);
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
   * Returns a property of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The property key
   * @return The property value
   */
   getChildPropertyByQuery(query, key) {
    return this.element.querySelector(query)[key];
  }

  /**
   * Sets a property of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The property key
   * @param value The property value
   */
   setChildPropertyByQuery(query, key, value) {
    let el = this.element.querySelector(query);
    el[key] = value;
  }

  /**
   * Sets an attribute of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByIndex(index, key, value) {
    (this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Sets an attribute of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByQuery(query, key, value) {
    this.element.querySelector(query).setAttribute(key, value);
  }

  /**
   * Returns an attribute of a child of the HTML element (for example
   * <i>value</i> is a property, <i>readonly</i> is an attribute)
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByIndex(index, key) {
    return (this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute of a child of the HTML element (for example
   * <i>value</i> is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByQuery(query, key) {
    return this.element.querySelector(query).getAttribute(key);
  }

  /**
   * Removes an attribute of a child the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   */
   removeChildAttributeByQuery(query, key) {
    this.element.querySelector(query).removeAttribute(key);
  }

  /**
   * Clears the text content of a child of the HTML element
   *
   * @param query The query selector
   */
   clearChildContentByQuery(query) {
    this.element.querySelector(query).textContent = "";
  }

  /**
   * Adds an event listener to a child of the HTML element
   *
   * @param query The query selector
   * @param event The event
   * @param listener The listener
   */
   addChildEventListenerByQuery(query, event, listener) {
    this.element.querySelector(query).addEventListener(event, listener);
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
