/**
 * the java.awt.event.ActionListener clone
 *
 * @author gianpiero.diblasi
 */
class ActionListener {

   actionPerformed(event) {
  }
}
/**
 * the java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
class LayoutManager {

   css = null;

  constructor(css) {
    this.css = css;
  }
}
/**
 * the java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
class BorderLayout extends LayoutManager {

  static  NORTH = "North";

  static  SOUTH = "South";

  static  EAST = "East";

  static  WEST = "West";

  static  CENTER = "Center";

  static  BEFORE_FIRST_LINE = BorderLayout.NORTH;

  static  AFTER_LAST_LINE = BorderLayout.SOUTH;

  static  BEFORE_LINE_BEGINS = BorderLayout.WEST;

  static  AFTER_LINE_ENDS = BorderLayout.EAST;

  static  PAGE_START = BorderLayout.BEFORE_FIRST_LINE;

  static  PAGE_END = BorderLayout.AFTER_LAST_LINE;

  static  LINE_START = BorderLayout.BEFORE_LINE_BEGINS;

  static  LINE_END = BorderLayout.AFTER_LINE_ENDS;

   hGap = 0;

   vGap = 0;

  constructor(hGap, vGap) {
    super("borderlayout");
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }
}
/**
 * the java.awt.BoxLayout clone
 *
 * @author gianpiero.diblasi
 */
class BoxLayout extends LayoutManager {

  static  X_AXIS = 0;

  static  Y_AXIS = 1;

  static  LINE_AXIS = 2;

  static  PAGE_AXIS = 3;

   axis = 0;

  constructor(target, axis) {
    super("boxlayout");
    this.axis = axis;
  }
}
/**
 * the java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
class CardLayout extends LayoutManager {

   hGap = 0;

   vGap = 0;

  constructor(hGap, vGap) {
    super("cardlayout");
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   show(parent, name) {
    for (let index = 0; index < parent.element.childElementCount; index++) {
      (parent.element.childNodes[index]).style.display = "none";
    }
    let element = parent.element.querySelector("[card=\"" + name + "\"]");
    (element).style.display = element.getAttribute("old-display");
  }
}
/**
 * the java.awt.FlowLayout clone
 *
 * @author gianpiero.diblasi
 */
class FlowLayout extends LayoutManager {

  static  LEFT = 0;

  static  CENTER = 1;

  static  RIGHT = 2;

  static  LEADING = 3;

  static  TRAILING = 4;

   align = 0;

   hGap = 0;

   vGap = 0;

  constructor(align, hGap, vGap) {
    super("flowlayout");
    this.align = align;
    this.hGap = typeof hGap === "undefined" ? 5 : hGap;
    this.vGap = typeof vGap === "undefined" ? 5 : vGap;
  }
}
/**
 * the java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridBagLayout extends LayoutManager {

  constructor() {
    super("gridbaglayout");
  }
}
/**
 * the java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridLayout extends LayoutManager {

   rows = 0;

   cols = 0;

   hGap = 0;

   vGap = 0;

  constructor(rows, cols, hGap, vGap) {
    super("gridlayout");
    this.rows = rows;
    this.cols = cols;
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }
}
/**
 * the java.awt.event.ActionEvent clone
 *
 * @author gianpiero.diblasi
 */
class ActionEvent {
}
/**
 * the java.awt.Color clone
 *
 * @author gianpiero.diblasi
 */
class Color {

   red = 0;

   green = 0;

   blue = 0;

  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}
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
/**
 * The javax.swing.Box clone
 *
 * @author gianpiero.diblasi
 */
class Box extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("span");
    this.element.classList.add("jcomponent-box");
  }
}
/**
 * The javax.swing.Box.Filler clone
 *
 * @author gianpiero.diblasi
 */
class Filler extends JComponent {

  constructor(min, pref, max) {
    super();
    this.element = document.createElement("span");
    this.element.classList.add("jcomponent-box-filler");
    this.element.style.minWidth = min.width + "px";
    this.element.style.minHeight = min.height + "px";
    this.element.style.width = pref.width + "px";
    this.element.style.height = pref.height + "px";
    this.element.style.maxWidth = max.width + "px";
    this.element.style.maxHeight = max.height + "px";
    if (min.width === 0 && min.height === 0 && pref.width === 0 && pref.height === 0) {
      this.element.style.flexGrow = "1";
    }
  }
}
/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends JComponent {

   listeners = new Array();

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) => this.onclick();
  }

   setText(text) {
    this.element.textContent = text;
  }

   addActionListener(listener) {
    this.listeners.push(listener);
  }

   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }
}
/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JFrame extends JComponent {

   contentPane = new JPanel();

  constructor() {
    super();
    this.contentPane.element.classList.remove("jpanel");
    this.contentPane.element.classList.add("jframe");
    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.element = document.querySelector("body");
    this.element.textContent = "";
    this.element.appendChild(this.contentPane.element);
  }

   setTitle(title) {
    if (title) {
      let tag = document.querySelector("title");
      if (!tag) {
        tag = document.createElement("title");
        document.getElementsByTagName("head")[0].appendChild(tag);
      }
      tag.textContent = title;
    }
  }

   getContentPane() {
    return this.contentPane;
  }
}
/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JPanel extends JComponent {

   layoutManager = null;

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

   setLayout(layoutManager) {
    this.purgeOldLayout();
    this.layoutManager = layoutManager;
    this.element.classList.add(this.layoutManager.css);
    switch(this.layoutManager.css) {
      case "borderlayout":
        this.setBorderLayout();
        break;
      case "flowlayout":
        this.setFlowLayout();
        break;
      case "gridlayout":
        this.setGridLayout();
        break;
      case "boxlayout":
        this.setBoxLayout();
        break;
      case "cardlayout":
        break;
      case "gridbaglayout":
        break;
    }
  }

   purgeOldLayout() {
    if (this.layoutManager) {
      this.element.textContent = "";
      this.element.classList.remove(this.layoutManager.css);
      // flow
      this.element.style.justifyContent = "";
      // grid
      this.element.style.removeProperty("grid-template-areas");
      this.element.style.removeProperty("row-gap");
      this.element.style.removeProperty("column-gap");
      // box
      this.element.style.flexDirection = "";
      this.element.style.alignItems = "";
    }
  }

   setBorderLayout() {
    let middle = document.createElement("div");
    middle.classList.add("borderlayout-middle");
    this.element.appendChild(middle);
  }

   setFlowLayout() {
    switch((this.layoutManager).align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        this.element.style.justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        this.element.style.justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        this.element.style.justifyContent = "flex-end";
        break;
    }
  }

   setGridLayout() {
    let gridTemplateAreas = "";
    for (let row = 1; row <= (this.layoutManager).rows; row++) {
      let gridTemplateRow = "";
      for (let col = 1; col <= (this.layoutManager).cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * (this.layoutManager).cols + col) + " ";
      }
      gridTemplateAreas += "\"" + gridTemplateRow + "\"\n";
    }
    this.element.style.setProperty("grid-template-areas", gridTemplateAreas);
    this.element.style.setProperty("row-gap", (this.layoutManager).hGap + "px");
    this.element.style.setProperty("column-gap", (this.layoutManager).hGap + "px");
  }

   setBoxLayout() {
    switch((this.layoutManager).axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        this.element.style.flexDirection = "row";
        this.element.style.alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        this.element.style.flexDirection = "column";
        this.element.style.alignItems = "flex-start";
        break;
    }
  }

   getLayout() {
    return this.layoutManager;
  }

   add(component, constraints) {
    switch(this.layoutManager.css) {
      case "borderlayout":
        this.addInBorderLayout(component, constraints);
        break;
      case "flowlayout":
        this.addInFlowLayout(component, constraints);
        break;
      case "gridlayout":
        this.addInGridLayout(component, constraints);
        break;
      case "boxlayout":
        this.addInBoxLayout(component, constraints);
        break;
      case "cardlayout":
        this.addInCardLayout(component, constraints);
        break;
    }
  }

   addInBorderLayout(component, constraints) {
    component.element.classList.add("borderlayout-" + (constraints).toLowerCase());
    switch((constraints)) {
      case BorderLayout.NORTH:
        this.element.appendChild(component.element);
        component.element.style.marginBottom = (this.layoutManager).vGap + "px";
        break;
      case BorderLayout.SOUTH:
        this.element.appendChild(component.element);
        component.element.style.marginTop = (this.layoutManager).vGap + "px";
        break;
      case BorderLayout.WEST:
        this.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginRight = (this.layoutManager).hGap + "px";
        break;
      case BorderLayout.CENTER:
        this.element.querySelector(".borderlayout-middle").appendChild(component.element);
        break;
      case BorderLayout.EAST:
        this.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginLeft = (this.layoutManager).hGap + "px";
        break;
    }
  }

   addInFlowLayout(component, constraints) {
    this.element.appendChild(component.element);
    component.element.style.marginLeft = (this.layoutManager).hGap + "px";
    component.element.style.marginRight = (this.layoutManager).hGap + "px";
    component.element.style.marginTop = (this.layoutManager).vGap + "px";
    component.element.style.marginBottom = (this.layoutManager).vGap + "px";
  }

   addInGridLayout(component, constraints) {
    this.element.appendChild(component.element);
    component.element.style.setProperty("grid-area", "p" + this.element.childElementCount);
  }

   addInBoxLayout(component, constraints) {
    this.element.appendChild(component.element);
  }

   addInCardLayout(component, constraints) {
    this.element.appendChild(component.element);
    component.element.setAttribute("card", constraints);
    component.element.setAttribute("old-display", component.element.style.display);
    if (this.element.childElementCount > 1) {
      component.element.style.display = "none";
    }
    component.element.style.flexGrow = "1";
    component.element.style.marginLeft = (this.layoutManager).hGap + "px";
    component.element.style.marginRight = (this.layoutManager).hGap + "px";
    component.element.style.marginTop = (this.layoutManager).vGap + "px";
    component.element.style.marginBottom = (this.layoutManager).vGap + "px";
  }
}
/**
 * The java.awt.Dimension clone
 *
 * @author gianpiero.diblasi
 */
class Dimension {

   width = 0;

   height = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
