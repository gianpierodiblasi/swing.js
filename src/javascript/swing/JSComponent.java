package javascript.swing;

import def.dom.CSSStyleDeclaration;
import def.dom.DOMTokenList;
import def.dom.Element;
import def.dom.EventListener;
import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.dom.Node;
import static def.js.Globals.eval;
import javascript.awt.Color;
import simulation.dom.$HTMLElement;

/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
public class JSComponent {

  private final HTMLElement element;

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  public JSComponent(HTMLElement element) {
    this.element = element;
  }

  /**
   * Clone of javax.swing.JComponent.setBackground
   *
   * @param color The color
   */
  public void setBackground(Color color) {
    this.element.style.backgroundColor = color.getRGB_HEX();
  }

  /**
   * Clone of javax.swing.JComponent.setEnabled
   *
   * @param b true to enable the button, false otherwise
   */
  public void setEnabled(boolean b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Invokes a method of the HTML element
   *
   * @param method The method name
   */
  public void invoke(String method) {
    eval("this.element." + method + "();");
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

  /**
   * Returns the style of the HTML element
   *
   * @return The style of the HTML element
   */
  public CSSStyleDeclaration getStyle() {
    return this.element.style;
  }

  /**
   * Sets a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key the property key
   * @param value The property value
   */
  public void setProperty(String key, String value) {
    this.element.$set(key, value);
  }

  /**
   * Returns a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The property key
   * @return The property value
   */
  public String getProperty(String key) {
    return this.element.$get(key);
  }

  /**
   * Sets an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @param value The attribute value
   */
  public void setAttribute(String key, String value) {
    this.element.setAttribute(key, value);
  }

  /**
   * Returns an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @return The attribute value
   */
  public String getAttribute(String key) {
    return this.element.getAttribute(key);
  }

  /**
   * Removes an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   */
  public void removeAttribute(String key) {
    this.element.removeAttribute(key);
  }

  /**
   * Clears the text content of the HTML element
   */
  public void clearContent() {
    this.element.textContent = "";
  }

  /**
   * Sets the text content of the HTML element
   *
   * @param content The text content of this component
   */
  public void setContent(String content) {
    this.element.textContent = content;
  }

  /**
   * Adds an event listener
   *
   * @param event The event
   * @param listener The listener
   */
  public void addEventListener(String event, EventListener listener) {
    this.element.addEventListener(event, listener);
  }

  /**
   * Adds the HTML element to the BODY element
   */
  public void appendInBody() {
    document.querySelector("body").appendChild(this.element);
  }

  /**
   * Removes the HTML element from the BODY element
   */
  public void removeFromBody() {
    document.querySelector("body").removeChild(this.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param component The child component
   */
  public void appendChild(JSComponent component) {
    this.element.appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param node The node
   */
  public void appendNodeChild(Node node) {
    this.element.appendChild(node);
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param component The child component
   * @param query The query selector
   */
  public void insertBefore(JSComponent component, String query) {
    this.element.insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param node The node
   * @param query The query selector
   */
  public void insertNodeBefore(Node node, String query) {
    this.element.insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param component The child component
   */
  public void prependChild(JSComponent component) {
    (($HTMLElement) this.element).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param node The node
   */
  public void prependNodeChild(Node node) {
    (($HTMLElement) this.element).prepend(node);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
  public void appendChildInTree(String query, JSComponent component) {
    this.element.querySelector(query).appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
  public void appendNodeChildInTree(String query, Node node) {
    this.element.querySelector(query).appendChild(node);
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param component The child component
   * @param query The query selector
   */
  public void insertBeforeInTree(String queryInTree, JSComponent component, String query) {
    this.element.querySelector(queryInTree).insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param node The node
   * @param query The query selector
   */
  public void insertNodeBeforeInTree(String queryInTree, Node node, String query) {
    this.element.querySelector(queryInTree).insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
  public void prependChildInTree(String query, JSComponent component) {
    (($HTMLElement) this.element.querySelector(query)).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
  public void prependNodeChildInTree(String query, Node node) {
    (($HTMLElement) this.element.querySelector(query)).prepend(node);
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param index The child index
   * @return The style of a child of the HTML element
   */
  public CSSStyleDeclaration getChilStyleByIndex(int index) {
    return ((HTMLElement) this.element.childNodes.item(index)).style;
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param query The query selector
   * @return The style of a child of the HTML element
   */
  public CSSStyleDeclaration getChilStyleByQuery(String query) {
    return ((HTMLElement) this.element.querySelector(query)).style;
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
  public void setChildAttributeByIndex(int index, String key, String value) {
    ((Element) this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @param value The attribute value
   */
  public void setChildAttributeByQuery(String query, String key, String value) {
    this.element.querySelector(query).setAttribute(key, value);
  }

  /**
   * Returns an attribute of a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
  public String getChildAttributeByIndex(int index, String key) {
    return ((Element) this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute of a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
  public String getChildAttributeByQuery(String query, String key) {
    return this.element.querySelector(query).getAttribute(key);
  }

  /**
   * Clears the text content of a child of the HTML element
   *
   * @param query The query selector
   */
  public void clearChildContentByQuery(String query) {
    this.element.querySelector(query).textContent = "";
  }

  /**
   * Adds an event listener to a child of the HTML element
   *
   * @param query The query selector
   * @param event The event
   * @param listener The listener
   */
  public void addChildEventListenerByQuery(String query, String event, EventListener listener) {
    this.element.querySelector(query).addEventListener(event, listener);
  }

  /**
   * Returns the child count of the HTML element
   *
   * @return The child count of the HTML element
   */
  public double getChildCount() {
    return this.element.childElementCount;
  }
}
