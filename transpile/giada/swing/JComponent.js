/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
class JComponent {

   element = null;

  static  CLASS_LIST = "class-list";

  static  ADD_CLASS_LIST = "add-class-list";

  static  REMOVE_CLASS_LIST = "remove-class-list";

  static  TOGGLE_CLASS_LIST = "toggle-class-list";

   clientProperties = new Array();

  constructor() {
  }

   setBackground(color) {
    this.element.style.backgroundColor = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
  }

  /**
   * Special use case: this method sets the name of the component to the
   * specified string, the name is used also as ID of the HTML element
   *
   * @param name The ID of the HTML element
   */
   setName(name) {
    this.element.id = name;
  }

  /**
   * Special use case: this method gets the name of the component, the name is
   * also the ID of the HTML element
   *
   * @return The ID of the HTML element
   */
   getName() {
    return this.element.id;
  }

  /**
   * Special use case: in general this method adds an arbitrary key/value
   * "client property" to this component, with the following exceptions:
   * <p>
   * 1. if <i>key</i> = "class-list" (or the constant value
   * <i>JComponent.CLASS_LIST</i>) then this method throws an exception (the key
   * is a reserved word and cannot be used</p>
   * <p>
   * 2. if <i>key</i> = "add-class-list" (or the constant value
   * <i>JComponent.ADD_CLASS_LIST</i>) then this method adds the <i>value</i>
   * parameter to the class list of the HTML element</p>
   * <p>
   * 3. if <i>key</i> = "remove-class-list" (or the constant value
   * <i>JComponent.REMOVE_CLASS_LIST</i>) then this method removes the
   * <i>value</i> parameter from the class list of the HTML element</p>
   * <p>
   * 4. if <i>key</i> = "toggle-class-list" (or the constant value
   * <i>JComponent.TOGGLE_CLASS_LIST</i>) then this method toggles the
   * <i>value</i> parameter in the class list of the HTML element (if
   * <i>value</i> is set removes it, otherwise adds it)</p>
   *
   * @param key The key
   * @param value The value
   */
   putClientProperty(key, value) {
    if (JComponent.CLASS_LIST === key) {
      throw new Exception("key = " + key + " is a reserved word and cannot be used");
    } else if (JComponent.ADD_CLASS_LIST === key) {
      this.element.classList.add(value);
    } else if (JComponent.REMOVE_CLASS_LIST === key) {
      this.element.classList.remove(value);
    } else if (JComponent.TOGGLE_CLASS_LIST === key) {
      this.element.classList.toggle(value);
    } else {
      this.clientProperties[key] = value;
    }
  }

  /**
   * Special use case: in general this method returns the value of the property
   * with the specified key, but if <i>key</i> = "class-list" (or the constant
   * value <i>JComponent.CLASS_LIST</i>) then this method returns the class list
   * of the HTML element
   *
   * @param key The key
   * @return The value
   */
   getClientProperty(key) {
    return this.clientProperties[key];
  }
}
