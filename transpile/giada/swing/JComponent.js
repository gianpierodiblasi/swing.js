/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
class JComponent {

   element = null;

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
   * Special use case: this method sets the ID of the HTML element
   *
   * @param name The ID of the HTML element
   */
   setName(name) {
    this.element.id = name;
  }

  /**
   * Special use case: this method gets the ID of the HTML element
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
   * 1. if <i>key</i> = "add-class-list" (or the constant value
   * <i>JComponent.ADD_CLASS_LIST</i>) then this method adds the <i>value</i>
   * parameter to the class list of the HTML element</p>
   * <p>
   * 2. if <i>key</i> = "remove-class-list" (or the constant value
   * <i>JComponent.REMOVE_CLASS_LIST</i>) then this method removes the
   * <i>value</i> parameter from the class list of the HTML element</p>
   * <p>
   * 3. if <i>key</i> = "toggle-class-list" (ore the constant value
   * <i>JComponent.TOGGLE_CLASS_LIST</i>) then this method toggles the
   * <i>value</i> parameter in the class list of the HTML element (if
   * <i>value</i> is set removes it, otherwise adds it)</p>
   *
   * @param key The key
   * @param value The value
   */
   putClientProperty(key, value) {
    if (JComponent.ADD_CLASS_LIST === key) {
      this.element.classList.add(value);
    } else if (JComponent.REMOVE_CLASS_LIST === key) {
      this.element.classList.remove(value);
    } else if (JComponent.TOGGLE_CLASS_LIST === key) {
      this.element.classList.toggle(value);
    } else {
      this.clientProperties[key] = value;
    }
  }

   getClientProperty(key) {
    return this.clientProperties[key];
  }
}
