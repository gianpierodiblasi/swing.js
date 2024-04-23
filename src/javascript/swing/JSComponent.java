package javascript.swing;

import def.dom.CSSStyleDeclaration;
import def.dom.DOMTokenList;
import def.dom.Element;
import def.dom.HTMLElement;
import javascript.awt.Color;

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

  /**
   * Returns the style of the HTML element
   *
   * @return The style of the HTML element
   */
  public CSSStyleDeclaration getStyle() {
    return this.element.style;
  }

  /**
   * Sets an attribute of the HTML element
   *
   * @param key The attribute key
   * @param value The attribute value
   */
  public void setAttribute(String key, String value) {
    this.element.setAttribute(key, value);
  }

  /**
   * Returns an attribute of the HTML element
   *
   * @param key The attribute key
   * @return The attribute value
   */
  public String getAttribute(String key) {
    return this.element.getAttribute(key);
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
   * Adds a child to the HTML element
   *
   * @param component The child component
   */
  public void appendChild(JSComponent component) {
    this.element.appendChild(component.element);
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param index The child index
   * @return The style of a child of the HTML element
   */
  public CSSStyleDeclaration getChilStyle(int index) {
    return ((HTMLElement) this.element.childNodes.item(index)).style;
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param query The query selector
   * @return The style of a child of the HTML element
   */
  public CSSStyleDeclaration queryChilStyle(String query) {
    return ((HTMLElement) this.element.querySelector(query)).style;
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
  public void setChildAttribute(int index, String key, String value) {
    ((Element) this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
  public String getChildAttribute(int index, String key) {
    return ((Element) this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
  public String queryChildAttribute(String query, String key) {
    return this.element.querySelector(query).getAttribute(key);
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
