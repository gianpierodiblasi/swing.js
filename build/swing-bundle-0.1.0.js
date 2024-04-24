document.addEventListener("click", (event) => document.querySelectorAll("details").forEach(detail => !detail.contains(event.target) ? detail.removeAttribute("open") : ""));
/**
 * The java.awt.Color clone
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
/**
 * The java.awt.event.ActionEvent clone
 *
 * @author gianpiero.diblasi
 */
class ActionEvent {
}
/**
 * The java.awt.event.ActionListener clone
 *
 * @author gianpiero.diblasi
 */
class ActionListener {

  /**
   * Clone of java.awt.event.ActionListener.actionPerformed
   *
   * @param event The event
   */
   actionPerformed(event) {
  }
}
/**
 * The java.awt.GridBagConstraints clone
 *
 * @author gianpiero.diblasi
 */
class GridBagConstraints {

  static  RELATIVE = -1;

  static  REMAINDER = 0;

  static  NONE = 0;

  static  BOTH = 1;

  static  HORIZONTAL = 2;

  static  VERTICAL = 3;

  static  CENTER = 10;

  static  NORTH = 11;

  static  NORTHEAST = 12;

  static  EAST = 13;

  static  SOUTHEAST = 14;

  static  SOUTH = 15;

  static  SOUTHWEST = 16;

  static  WEST = 17;

  static  NORTHWEST = 18;

  static  PAGE_START = 19;

  static  PAGE_END = 20;

  static  LINE_START = 21;

  static  LINE_END = 22;

  static  FIRST_LINE_START = 23;

  static  FIRST_LINE_END = 24;

  static  LAST_LINE_START = 25;

  static  LAST_LINE_END = 26;

  static  BASELINE = 0x100;

  static  BASELINE_LEADING = 0x200;

  static  BASELINE_TRAILING = 0x300;

  static  ABOVE_BASELINE = 0x400;

  static  ABOVE_BASELINE_LEADING = 0x500;

  static  ABOVE_BASELINE_TRAILING = 0x600;

  static  BELOW_BASELINE = 0x700;

  static  BELOW_BASELINE_LEADING = 0x800;

  static  BELOW_BASELINE_TRAILING = 0x900;

   gridx = 0;

   gridy = 0;

   gridwidth = 0;

   gridheight = 0;

   weightx = 0.0;

   weighty = 0.0;

   anchor = 0;

   fill = 0;

   insets = null;

   ipadx = 0;

   ipady = 0;

  constructor() {
    this.gridx = GridBagConstraints.RELATIVE;
    this.gridy = GridBagConstraints.RELATIVE;
    this.gridwidth = 1;
    this.gridheight = 1;
    this.weightx = 0;
    this.weighty = 0;
    this.anchor = GridBagConstraints.CENTER;
    this.fill = GridBagConstraints.NONE;
    this.insets = new Insets(0, 0, 0, 0);
    this.ipadx = 0;
    this.ipady = 0;
  }

  /**
   * Returns a constraint value by key
   *
   * @param key The key (options are: "gridx", "gridy", "gridwidth",
   * "gridheight", "weightx", "weighty", "anchor", "fill", "ipadx" and "ipady")
   * @return The value
   */
   get(key) {
    switch(key) {
      case "gridx":
        return this.gridx;
      case "gridy":
        return this.gridy;
      case "gridwidth":
        return this.gridwidth;
      case "gridheight":
        return this.gridheight;
      case "weightx":
        return this.weightx;
      case "weighty":
        return this.weighty;
      case "anchor":
        return this.anchor;
      case "fill":
        return this.fill;
      case "ipadx":
        return this.ipadx;
      case "ipady":
        return this.ipady;
      default:
        return 0;
    }
  }
}
/**
 * The java.awt.Insets clone
 *
 * @author gianpiero.diblasi
 */
class Insets {

   top = 0;

   left = 0;

   bottom = 0;

   right = 0;

  constructor(top, left, bottom, right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }
}
/**
 * The java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
class LayoutManager {

  /**
   * Sets the panel managed by this layout manager
   *
   * @param panel The panel
   */
   setPanel(panel) {
  }

  /**
   * Resets the panel managed by this layout manager (all custom configurations
   * will be removed)
   *
   * @param panel The panel
   */
   resetPanel(panel) {
  }

  /**
   * Add a component in a panel
   *
   * @param panel The panel
   * @param component The component
   * @param constraints The constraints
   */
   addInPanel(panel, component, constraints) {
  }
}
/**
 * The java.awt.BorderLayout clone
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
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("borderlayout");
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("borderlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.cssAddClass((constraints).toLowerCase());
    component.getStyle().setProperty("grid-area", (constraints).toLowerCase());
  }
}
/**
 * The java.awt.BoxLayout clone
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
    super();
    this.axis = axis;
  }

   setPanel(panel) {
    panel.cssAddClass("boxlayout");
    switch(this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.getStyle().flexDirection = "row";
        panel.getStyle().alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.getStyle().flexDirection = "column";
        panel.getStyle().alignItems = "flex-start";
        break;
    }
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("boxlayout");
    panel.getStyle().flexDirection = "";
    panel.getStyle().alignItems = "";
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
  }
}
/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
class CardLayout extends LayoutManager {

   hGap = 0;

   vGap = 0;

  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("cardlayout");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("cardlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.setAttribute("card", constraints);
    component.setAttribute("old-display", component.getStyle().display);
    if (panel.getChildCount() > 1) {
      component.getStyle().display = "none";
    }
    component.getStyle().flexGrow = "1";
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
   show(parent, name) {
    for (let index = 0; index < parent.getChildCount(); index++) {
      parent.getChilStyleByIndex(index).display = "none";
    }
    parent.getChilStyleByQuery("[card=" + name + "]").display = parent.getChildAttributeByQuery("[card=" + name + "]", "old-display");
  }
}
/**
 * The java.awt.FlowLayout clone
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
    super();
    this.align = align;
    this.hGap = typeof hGap === "undefined" ? 5 : hGap;
    this.vGap = typeof vGap === "undefined" ? 5 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("flowlayout");
    switch(this.align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        panel.getStyle().justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        panel.getStyle().justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        panel.getStyle().justifyContent = "flex-end";
        break;
    }
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("flowlayout");
    panel.getStyle().justifyContent = "";
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }
}
/**
 * The java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridBagLayout extends LayoutManager {

   columnWidths = null;

   rowHeights = null;

   gridTemplateAreas = new Array();

   constraintsArray = new Array();

   position = 1;

  constructor() {
    super();
  }

   setPanel(panel) {
    panel.cssAddClass("gridbaglayout");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("gridbaglayout");
    panel.getStyle().removeProperty("grid-template");
    panel.getStyle().removeProperty("grid-template-areas");
    panel.getStyle().removeProperty("grid-template-rows");
    panel.getStyle().removeProperty("grid-template-columns");
  }

   addInPanel(panel, component, constraints) {
    this.constraintsArray.push(constraints);
    panel.appendChild(component);
    panel.getStyle().setProperty("grid-template-areas", this.setGridTemplateAreas(constraints));
    panel.getStyle().setProperty("grid-template-rows", this.getWeight(this.gridTemplateAreas, "gridy", "gridheight", "weighty", this.rowHeights));
    panel.getStyle().setProperty("grid-template-columns", this.gridTemplateAreas.length > 0 ? this.getWeight(this.gridTemplateAreas[0], "gridx", "gridwidth", "weightx", this.columnWidths) : "");
    this.setComponent(component, constraints);
  }

   setGridTemplateAreas(constraint) {
    for (let y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array());
    }
    let maxX = 0;
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      maxX = Math.max(maxX, this.gridTemplateAreas[y].length);
    }
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      for (let x = this.gridTemplateAreas[y].length; x < Math.max(maxX, constraint.gridx + constraint.gridwidth); x++) {
        this.gridTemplateAreas[y].push(".");
      }
    }
    for (let y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      let array = this.gridTemplateAreas[y];
      for (let x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
        array[x] = "p" + this.position;
      }
    }
    let gta = "";
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      let row = "";
      for (let x = 0; x < this.gridTemplateAreas[y].length; x++) {
        row += this.gridTemplateAreas[y][x] + " ";
      }
      gta += "\"" + row + "\"\n";
    }
    return gta;
  }

   getWeight(array, keyAxis, keySize, keyWeight, fixedSize) {
    let gridTemplate = new Array();
    for (let index = 0; index < array.length; index++) {
      gridTemplate.push(0.0);
    }
    for (let index = 1; index <= array.length; index++) {
      let gridsize = index;
      this.constraintsArray.filter(constraint => constraint.get(keySize) === gridsize).forEach(constraint => {
        let ok = false;
        for (let index2 = constraint.get(keyAxis); index2 < constraint.get(keyAxis) + constraint.get(keySize); index2++) {
          ok |= gridTemplate[index2] >= constraint.get(keyWeight);
        }
        if (!ok) {
          gridTemplate[constraint.get(keyAxis) + constraint.get(keySize) - 1] = constraint.get(keyWeight);
        }
      });
    }
    let gt = "";
    for (let index = 0; index < gridTemplate.length; index++) {
      if (fixedSize && fixedSize[index]) {
        gt += fixedSize[index] + "px ";
      } else {
        gt += gridTemplate[index] === 0.0 ? "auto " : gridTemplate[index] + "fr ";
      }
    }
    return gt;
  }

   setComponent(component, constraints) {
    component.getStyle().setProperty("grid-area", "p" + this.position);
    this.position++;
    switch(constraints.anchor) {
      case GridBagConstraints.CENTER:
      case GridBagConstraints.BASELINE:
      case GridBagConstraints.ABOVE_BASELINE:
      case GridBagConstraints.BELOW_BASELINE:
        component.getStyle().setProperty("place-self", "center center");
        break;
      case GridBagConstraints.NORTH:
      case GridBagConstraints.PAGE_START:
        component.getStyle().setProperty("place-self", "start center");
        break;
      case GridBagConstraints.NORTHEAST:
      case GridBagConstraints.FIRST_LINE_END:
        component.getStyle().setProperty("place-self", "start end");
        break;
      case GridBagConstraints.EAST:
      case GridBagConstraints.LINE_END:
      case GridBagConstraints.BASELINE_TRAILING:
      case GridBagConstraints.ABOVE_BASELINE_TRAILING:
      case GridBagConstraints.BELOW_BASELINE_TRAILING:
        component.getStyle().setProperty("place-self", "center end");
        break;
      case GridBagConstraints.SOUTHEAST:
      case GridBagConstraints.LAST_LINE_END:
        component.getStyle().setProperty("place-self", "end end");
        break;
      case GridBagConstraints.SOUTH:
      case GridBagConstraints.PAGE_END:
        component.getStyle().setProperty("place-self", "end center");
        break;
      case GridBagConstraints.SOUTHWEST:
      case GridBagConstraints.LAST_LINE_START:
        component.getStyle().setProperty("place-self", "end start");
        break;
      case GridBagConstraints.WEST:
      case GridBagConstraints.LINE_START:
      case GridBagConstraints.BASELINE_LEADING:
      case GridBagConstraints.ABOVE_BASELINE_LEADING:
      case GridBagConstraints.BELOW_BASELINE_LEADING:
        component.getStyle().setProperty("place-self", "center start");
        break;
      case GridBagConstraints.NORTHWEST:
      case GridBagConstraints.FIRST_LINE_START:
        component.getStyle().setProperty("place-self", "start start");
        break;
    }
    switch(constraints.fill) {
      case GridBagConstraints.NONE:
        break;
      case GridBagConstraints.BOTH:
        component.getStyle().setProperty("place-self", "stretch stretch");
        break;
      case GridBagConstraints.HORIZONTAL:
        component.getStyle().setProperty("justify-self", "stretch");
        break;
      case GridBagConstraints.VERTICAL:
        component.getStyle().setProperty("place-self", "stretch");
        break;
    }
    component.getStyle().margin = constraints.insets.top + "px " + constraints.insets.right + "px " + constraints.insets.bottom + "px " + constraints.insets.left + " px";
    component.getStyle().padding = constraints.ipady + "px " + constraints.ipadx + "px";
  }
}
/**
 * The java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridLayout extends LayoutManager {

   rows = 0;

   cols = 0;

   hGap = 0;

   vGap = 0;

  constructor(rows, cols, hGap, vGap) {
    super();
    this.rows = rows;
    this.cols = cols;
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("gridlayout");
    let gridTemplate = "";
    for (let row = 1; row <= this.rows; row++) {
      let gridTemplateRow = "";
      for (let col = 1; col <= this.cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * this.cols + col) + " ";
      }
      gridTemplate += "\"" + gridTemplateRow + "\" 1fr\n";
    }
    gridTemplate += "/";
    for (let col = 1; col <= this.cols; col++) {
      gridTemplate += " 1fr";
    }
    panel.getStyle().setProperty("grid-template", gridTemplate);
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("gridlayout");
    panel.getStyle().removeProperty("grid-template");
    panel.getStyle().removeProperty("gap");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.getStyle().setProperty("grid-area", "p" + panel.getChildCount());
  }
}
/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
class ButtonGroup {

   name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

   count = 0;

  /**
   * Clone of javax.swing.ButtonGroup.add
   *
   * @param button The button
   */
   add(button) {
    button.setChildAttributeByQuery("[type=radio]", "name", this.name);
    this.count++;
  }

  /**
   * Clone of javax.swing.ButtonGroup.getButtonCount
   *
   * @return the button count
   */
   getButtonCount() {
    return this.count;
  }
}
/**
 * The javax.swing.event.ChangeEvent clone
 *
 * @author gianpiero.diblasi
 */
class ChangeEvent {
}
/**
 * The javax.swing.event.ChangeListener clone
 *
 * @author gianpiero.diblasi
 */
class ChangeListener {

  /**
   * Clone of javax.swing.event.ChangeListener.stateChanged
   *
   * @param event The event
   */
   stateChanged(event) {
  }
}
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
   * Removes an attribute of the HTML element
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
   * Clears the text content of a child of the HTML element
   *
   * @param query The query selector
   */
   clearChildContentByQuery(query) {
    this.element.querySelector(query).textContent = "";
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
/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JSComponent {

   listeners = new Array();

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  constructor(element) {
    super(element);
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
   */
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
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JSButton extends AbstractButton {

  constructor() {
    super(document.createElement("button"));
    this.cssAddClass("jsbutton");
    this.addEventListener("click", (event) => this.onclick());
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }
}
/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JSCheckBox extends AbstractButton {

   checkbox = null;

   text = null;

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jscheckbox");
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) => this.onclick();
    this.appendNodeChild(this.checkbox);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JCheckBox.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JCheckBox.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JCheckBox.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.checkbox.checked = selected;
  }

  /**
   * Clone of javax.swing.JCheckBox.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.checkbox.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.checkbox.removeAttribute("disabled");
    } else {
      this.checkbox.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JSComboBox extends AbstractButton {

   modelAndRenderer = null;

  constructor() {
    super(document.createElement("details"));
    this.cssAddClass("jscombobox");
    this.appendNodeChild(document.createElement("summary"));
    this.appendNodeChild(document.createElement("ul"));
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
   getSelectedItem() {
    return this.modelAndRenderer.getSelectedElement();
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @param object The selected item
   */
   setSelectedItem(object) {
    this.modelAndRenderer.setSelectedElement(object);
  }

  /**
   * Sets the model
   *
   * @param modelAndRenderer The model
   */
   setModelAndRenderer(modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setComboBox(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
   getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
class JSRadioButton extends AbstractButton {

   radiobutton = null;

   text = null;

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jsradiobutton");
    this.radiobutton = document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) => this.onclick();
    this.appendNodeChild(this.radiobutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Set this radiobutton as a toggle
   */
   setToggle() {
    this.setAttribute("role", "toggle");
  }

  /**
   * Clone of javax.swing.JRadioButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JRadioButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JRadioButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.radiobutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JRadioButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.radiobutton.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
class JSToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jstogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) => this.onclick();
    this.appendNodeChild(this.togglebutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JToggleButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.togglebutton.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.togglebutton.removeAttribute("disabled");
    } else {
      this.togglebutton.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.Box.Filler clone
 *
 * @author gianpiero.diblasi
 */
class Filler extends JSComponent {

  constructor(min, pref, max) {
    super(document.createElement("span"));
    this.cssAddClass("jscomponent-box-filler");
    this.getStyle().minWidth = min.width + "px";
    this.getStyle().minHeight = min.height + "px";
    this.getStyle().width = pref.width + "px";
    this.getStyle().height = pref.height + "px";
    this.getStyle().maxWidth = max.width + "px";
    this.getStyle().maxHeight = max.height + "px";
    if (min.width === 0 && min.height === 0 && pref.width === 0 && pref.height === 0) {
      this.getStyle().flexGrow = "1";
    }
  }
}
/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JSFrame extends JSComponent {

   contentPane = new JSPanel();

  constructor() {
    super(document.querySelector("body"));
    this.cssAddClass("jsframe");
    this.appendChild(this.contentPane);
    this.contentPane.setLayout(new BorderLayout(0, 0));
  }

  /**
   * Clone of javax.swing.JFrame.setTitle
   *
   * @param title The title
   */
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

  /**
   * Clone of javax.swing.JFrame.getContentPane
   *
   * @return The content pane
   */
   getContentPane() {
    return this.contentPane;
  }
}
/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JSLabel extends JSComponent {

  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jslabel");
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }
}
/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JSPanel extends JSComponent {

   layoutManager = null;

  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jspanel");
    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

  /**
   * Clone of javax.swing.JPanel.setLayout
   *
   * @param layoutManager The layout manager
   */
   setLayout(layoutManager) {
    if (this.layoutManager) {
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

  /**
   * Clone of javax.swing.JPanel.getLayout
   *
   * @return The layout manager
   */
   getLayout() {
    return this.layoutManager;
  }

  /**
   * Clone of javax.swing.JPanel.add
   *
   * @param component The component
   * @param constraints The constraints
   */
   add(component, constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
/**
 * The javax.swing.JTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
class JSTabbedPane extends JSPanel {

  static  TOP = 1;

  static  LEFT = 2;

  static  BOTTOM = 3;

  static  RIGHT = 4;

  static  START = 0;

  static  CENTER = 1;

  static  END = 2;

   tabs = null;

   tabsN = new JSComponent(document.createElement("nav"));

   tabsS = new JSComponent(document.createElement("nav"));

   tabsE = new JSComponent(document.createElement("nav"));

   tabsW = new JSComponent(document.createElement("nav"));

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

  constructor() {
    super();
    this.cssAddClass("jstabbedpane");
    this.setLayout(new BorderLayout(0, 0));
    this.createTab(this.tabsN);
    this.add(this.tabsN, BorderLayout.NORTH);
    this.createTab(this.tabsS);
    this.add(this.tabsS, BorderLayout.SOUTH);
    this.createTab(this.tabsE);
    this.add(this.tabsE, BorderLayout.EAST);
    this.createTab(this.tabsW);
    this.add(this.tabsW, BorderLayout.WEST);
    this.tabs = this.tabsN;
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
  }

   createTab(tab) {
    let ul = document.createElement("ul");
    ul.appendChild(this.createLI());
    ul.appendChild(this.createLI());
    tab.appendNodeChild(ul);
  }

   createLI() {
    let li = document.createElement("li");
    li.style.flexGrow = "1";
    li.style.display = "none";
    return li;
  }

  /**
   * Clone of javax.swing.JTabbedPane.setTabPlacement
   *
   * @param tabPlacement The tab placement
   */
   setTabPlacement(tabPlacement) {
    this.tabPlacement = tabPlacement;
    switch(this.tabPlacement) {
      case JSTabbedPane.TOP:
        this.tabs = this.tabsN;
        break;
      case JSTabbedPane.BOTTOM:
        this.tabs = this.tabsS;
        break;
      case JSTabbedPane.LEFT:
        this.tabs = this.tabsW;
        break;
      case JSTabbedPane.RIGHT:
        this.tabs = this.tabsE;
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.getTabPlacement
   *
   * @return The tab placement
   */
   getTabPlacement() {
    return this.tabPlacement;
  }

  /**
   * Sets the tab alignment
   *
   * @param align The alignment (START, CENTER, END)
   */
   setAlign(align) {
    this.tabs.getChilStyleByQuery("nav ul li:first-child").display = "none";
    this.tabs.getChilStyleByQuery("nav ul li:last-child").display = "none";
    switch(align) {
      case JSTabbedPane.START:
        break;
      case JSTabbedPane.CENTER:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        this.tabs.getChilStyleByQuery("nav ul li:last-child").removeProperty("display");
        break;
      case JSTabbedPane.END:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.addTab
   *
   * @param title The tab title
   * @param component The added component
   */
   addTab(title, component) {
    let button = new JSRadioButton();
    button.setText(title);
    button.setSelected(this.tabsGroup.getButtonCount() === 0);
    button.addActionListener((event) => this.contentLayout.show(this.content, title));
    this.tabs.insertNodeBeforeInTree("nav ul", document.createElement("li"), "nav ul li:last-child");
    this.tabs.appendChildInTree("nav ul li:nth-last-child(2)", button);
    this.tabsGroup.add(button);
    this.content.add(component, title);
  }
}
/**
 * The javax.swing.JProgressBar clone
 *
 * @author gianpiero.diblasi
 */
class JSProgressBar extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   label = null;

   progress = null;

   min = 0;

   max = 100;

   value = 0;

   orientation = JSProgressBar.HORIZONTAL;

   indeterminate = false;

   stringPainted = false;

   string = "";

  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsprogressbar");
    this.cssAddClass("jsprogressbar-horizontal");
    this.label = document.createElement("label");
    this.label.textContent = "0%";
    this.label.style.minWidth = "0%";
    this.appendNodeChild(this.label);
    this.progress = document.createElement("div");
    this.progress.style.height = "1.7rem";
    this.appendNodeChild(this.progress);
  }

  /**
   * Clone of javax.swing.JProgressBar.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
   setIndeterminate(b) {
    this.indeterminate = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
   setStringPainted(b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setString
   *
   * @param string The string to paint
   */
   setString(string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsprogressbar-horizontal");
    this.cssRemoveClass("jsprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.cssAddClass("jsprogressbar-horizontal");
        this.progress.style.height = "1.7rem";
        break;
      case JSProgressBar.VERTICAL:
        this.cssAddClass("jsprogressbar-vertical");
        this.progress.style.width = "1.7rem";
        break;
    }
    this.setProgress();
  }

   setProgress() {
    let valuePerc = new Number(100 * (this.value - this.min) / (this.max - this.min));
    switch(this.orientation) {
      case JSProgressBar.HORIZONTAL:
        this.label.style.minWidth = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
      case JSProgressBar.VERTICAL:
        this.label.style.minHeight = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
    }
    this.label.textContent = this.string ? this.string : (valuePerc.toFixed() + "%");
    this.label.style.visibility = this.indeterminate || !this.stringPainted ? "hidden" : "visible";
    if (this.stringPainted && this.string) {
      this.label.style.background = "linear-gradient(to right, var(--main-action-color) " + valuePerc + "%, var(--main-color) " + valuePerc + "%)";
      this.label.style.setProperty("background-clip", "text");
      this.label.style.setProperty("-webkit-text-fill-color", "transparent");
    } else {
      this.label.style.removeProperty("background");
      this.label.style.removeProperty("background-clip");
      this.label.style.removeProperty("-webkit-text-fill-color");
    }
    if (this.indeterminate) {
      this.cssAddClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "jsprogressbar";
    } else {
      this.cssRemoveClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "none";
      switch(this.orientation) {
        case JSProgressBar.HORIZONTAL:
          this.progress.style.width = valuePerc + "%";
          break;
        case JSProgressBar.VERTICAL:
          this.progress.style.height = valuePerc + "%";
          break;
      }
    }
  }
}
/**
 * The javax.swing.JSlider clone
 *
 * @author gianpiero.diblasi
 */
class JSSlider extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   modelAndRenderer = null;

   orientation = 0;

   majorTickSpacing = 0;

   paintTicks = false;

   paintLabels = false;

   valueIsAdjusting = false;

   listeners = new Array();

   slider = null;

   dataList = null;

   dataListID = "DataList_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsslider");
    this.cssAddClass("jsslider-horizontal");
    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.oninput = (event) => this.onchange(true);
    this.slider.onchange = (event) => this.onchange(false);
    this.appendNodeChild(this.slider);
    this.dataList = document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.appendNodeChild(this.dataList);
    let div = document.createElement("div");
    div.style.display = "none";
    this.appendNodeChild(div);
  }

  /**
   * Clone of javax.swing.JSlider.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
    return null;
  }

  /**
   * Clone of javax.swing.JSlider.getValueIsAdjusting
   *
   * @return true if value is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Clone of javax.swing.JSlider.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.slider.setAttribute("max", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.slider.setAttribute("min", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsslider-horizontal");
    this.cssRemoveClass("jsslider-vertical");
    switch(orientation) {
      case JSSlider.HORIZONTAL:
        this.cssAddClass("jsslider-horizontal");
        break;
      case JSSlider.VERTICAL:
        this.cssAddClass("jsslider-vertical");
        break;
    }
  }

  /**
   * Clone of javax.swing.JSlider.getOrientation
   *
   * @return The orientation
   */
   getOrientation() {
    return this.orientation;
  }

  /**
   * Clone of javax.swing.JSlider.setInverted
   *
   * @param b true to invert the slider, false otherwise
   */
   setInverted(b) {
    if (b) {
      this.cssAddClass("jsslider-inverted");
    } else {
      this.cssRemoveClass("jsslider-inverted");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTrack
   *
   * @param b true to paint the track, false otherwise
   */
   setPaintTrack(b) {
    if (b) {
      this.slider.classList.remove("no-paint-track");
    } else {
      this.slider.classList.add("no-paint-track");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.slider.setAttribute("value", "" + value);
  }

  /**
   * Clone of javax.swing.JSlider.getValue
   *
   * @return The value
   */
   getValue() {
    return (this.slider).valueAsNumber;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.slider.removeAttribute("disabled");
    } else {
      this.slider.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setMajorTickSpacing
   *
   * @param value The value
   */
   setMajorTickSpacing(value) {
    this.majorTickSpacing = value;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTicks
   *
   * @param b true to paint the ticks, false otherwise
   */
   setPaintTicks(b) {
    this.paintTicks = b;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintLabels
   *
   * @param b true to paint the labels, false otherwise
   */
   setPaintLabels(b) {
    this.paintLabels = b;
    this.setDatalist();
  }

   setDatalist() {
    if (!this.modelAndRenderer) {
      this.dataList.textContent = "";
      this.dataList.style.display = "none";
      if (this.paintTicks && this.majorTickSpacing) {
        if (this.paintLabels) {
          this.dataList.style.display = "flex";
        }
        for (let tick = parseInt(this.slider.getAttribute("min")); tick <= parseInt(this.slider.getAttribute("max")); tick += this.majorTickSpacing) {
          let option = document.createElement("option");
          option.setAttribute("value", "" + tick);
          option.setAttribute("label", "" + tick);
          switch(this.orientation) {
            case JSSlider.HORIZONTAL:
              this.dataList.appendChild(option);
              break;
            case JSSlider.VERTICAL:
              this.dataList.prepend(option);
              break;
          }
        }
      }
    }
  }

  /**
   * Sets the model. When a model is set the following methods have no effect:
   * <ul>
   * <li>setMaximum</li>
   * <li>setMinimum</li>
   * <li>setMajorTickSpacing</li>
   * <li>setPaintTicks</li>
   * <li>setPaintLabels</li>
   * </ul>
   *
   * @param modelAndRenderer The model
   */
   setModelAndRenderer(modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setSlider(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
   getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSSpinner extends JSComponent {

   input = document.createElement("input");

   up = document.createElement("button");

   down = document.createElement("button");

   run = false;

   rand = 0.0;

   listeners = new Array();

  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsspinner");
    this.input.setAttribute("type", "number");
    this.input.setAttribute("value", "0");
    this.input.style.setProperty("grid-area", "num");
    this.input.oninput = (event) => this.onchange();
    this.appendNodeChild(this.input);
    this.up.textContent = "\u25B2";
    this.up.style.setProperty("grid-area", "up");
    this.up.onmousedown = (event) => this.spin(true);
    this.up.onmouseup = (event) => this.run = false;
    this.appendNodeChild(this.up);
    this.down.textContent = "\u25BC";
    this.down.style.setProperty("grid-area", "down");
    this.down.onmousedown = (event) => this.spin(false);
    this.down.onmouseup = (event) => this.run = false;
    this.appendNodeChild(this.down);
  }

   spin(isUp) {
    if (this.run) {
      return null;
    } else if (isUp) {
      this.input.stepUp();
    } else {
      this.input.stepDown();
    }
    this.run = true;
    this.spinAgain(isUp, 250);
    return null;
  }

   spinAgain(isUp, delay) {
    this.rand = Math.random();
    let rnd = this.rand;
    setTimeout(() => {
      if (!this.run || rnd !== this.rand) {
      } else if (isUp) {
        this.input.stepUp();
        this.spinAgain(isUp, 25);
      } else {
        this.input.stepDown();
        this.spinAgain(isUp, 25);
      }
    }, delay);
  }

  /**
   * Clone of javax.swing.JSpinner.setModel
   *
   * @param model The model
   */
   setModel(model) {
    model.setJSSpinner(this);
  }

  /**
   * Clone of javax.swing.JSpinner.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
    return null;
  }

  /**
   * Clone of javax.swing.JSpinner.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.input.valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return this.input.valueAsNumber;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.input.removeAttribute("disabled");
      this.up.removeAttribute("disabled");
      this.down.removeAttribute("disabled");
    } else {
      this.input.setAttribute("disabled", "disabled");
      this.up.setAttribute("disabled", "disabled");
      this.down.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractComboBoxModelAndRenderer {

   combobox = null;

   selected = null;

   elements = new Array();

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
   setComboBox(combobox) {
    this.combobox = combobox;
    this.combobox.appendNodeChildInTree("summary", this.render(null));
    this.elements.forEach(element => this.addOption(element));
    this.combobox.clearChildContentByQuery("summary");
    this.combobox.appendNodeChildInTree("summary", this.render(this.selected));
  }

  /**
   * Returns the selected element
   *
   * @return The selected element
   */
   getSelectedElement() {
    return this.selected;
  }

   setSelectedElement(element) {
    this.selected = null;
    this.elements.forEach(el => {
      try {
        this.selected = el.compareTo(element) ? this.selected : el;
      } catch (ex) {
        this.selected = el === element ? el : this.selected;
      }
    });
    if (this.combobox) {
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(this.selected));
    }
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
   addElement(element) {
    this.elements.push(element);
    if (this.combobox) {
      this.addOption(element);
    }
  }

   addOption(element) {
    let li = document.createElement("li");
    li.appendChild(this.render(element));
    li.onclick = (event) => {
      this.selected = element;
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(element));
      this.combobox.removeAttribute("open");
      this.combobox.onclick();
      return null;
    };
    this.combobox.appendNodeChildInTree("ul", li);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @return The renderer element
   */
   render(element) {
  }
}
/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element) {
    let label = document.createElement("label");
    label.textContent = element ? element.toString() : "";
    return label;
  }
}
/**
 * The abstract object to model and render a slider
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractSliderModelAndRenderer {

   slider = null;

   renderByDataList = false;

   elements = new Array();

  /**
   * Creates the object
   *
   * @param renderByDataList true if this object uses the datalist tag to render
   * data, false otherwise
   */
  constructor(renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
   getElementAt(index) {
    return this.elements[index];
  }

  /**
   * Sets the slider managed by this model
   *
   * @param slider The combobox
   */
   setSlider(slider) {
    this.slider = slider;
    this.setDatalist();
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
   addElement(element) {
    this.elements.push(element);
    if (this.slider) {
      this.setDatalist();
    }
  }

   setDatalist() {
    this.slider.setValue(0);
    this.slider.setMinimum(0);
    this.slider.setMaximum(this.elements.length - 1);
    this.slider.clearChildContentByQuery("datalist");
    this.slider.getChilStyleByQuery("datalist").display = this.renderByDataList ? "flex" : "none";
    this.slider.clearChildContentByQuery("div");
    this.slider.getChilStyleByQuery("div").display = !this.renderByDataList ? "flex" : "none";
    this.elements.forEach((element, index, array) => {
      let option = document.createElement("option");
      option.setAttribute("value", "" + index);
      let rendered = this.render(element, this.slider);
      if (this.renderByDataList) {
        option.setAttribute("label", rendered);
      } else {
        switch(this.slider.getOrientation()) {
          case JSSlider.HORIZONTAL:
            this.slider.appendNodeChildInTree("div", rendered);
            break;
          case JSSlider.VERTICAL:
            this.slider.prependNodeChildInTree("div", rendered);
            break;
        }
      }
      switch(this.slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          this.slider.appendNodeChildInTree("datalist", option);
          break;
        case JSSlider.VERTICAL:
          this.slider.prependNodeChildInTree("datalist", option);
          break;
      }
    });
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param slider The slider
   * @return The renderer element
   */
   render(element, slider) {
  }
}
/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  constructor() {
    super(true);
  }

   render(element, slider) {
    return element.toString();
  }
}
/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
class HTMLImageSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  constructor() {
    super(false);
  }

   render(element, slider) {
    let img = element.produce();
    img.onload = (event) => {
      switch(slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          slider.getChilStyleByQuery("input").marginLeft = (img.width / 2) + "px";
          slider.getChilStyleByQuery("input").marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          slider.getChilStyleByQuery("input").marginTop = (img.height / 2) + "px";
          slider.getChilStyleByQuery("input").marginBottom = (img.height / 2) + "px";
          break;
      }
      return null;
    };
    return img;
  }
}
/**
 * The javax.swing.SpinnerNumberModel clone
 *
 * @author gianpiero.diblasi
 */
class SpinnerNumberModel {

   value = 0.0;

   minimum = 0.0;

   maximum = 0.0;

   stepSize = 0.0;

  constructor(value, minimum, maximum, stepSize) {
    this.value = value;
    this.minimum = minimum;
    this.maximum = maximum;
    this.stepSize = stepSize;
  }

  /**
   * Sets the spinner managed by this model
   *
   * @param spinner The spinner
   */
   setJSSpinner(spinner) {
    spinner.setChildAttributeByQuery("input", "value", "" + this.value);
    spinner.setChildAttributeByQuery("input", "max", "" + this.maximum);
    spinner.setChildAttributeByQuery("input", "min", "" + this.minimum);
    spinner.setChildAttributeByQuery("input", "step", "" + this.stepSize);
  }
}
/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
class SwingJS {

  static  CURRENT = new SwingJS();

   _darkMode = false;

   _fontFamily = null;

   _fontSize = 0;

   _mainColor = null;

   _mainBGColor = null;

   _mainActionColor = null;

   _mainActionBGColor = null;

  /**
   * Converts "any" javax.swing.JComponent in the corresponding
   * javascript.swing.JSComponent. This method is useful when developing in
   * Java, whene developing in JavaScript this method is useless
   *
   * @param <T> The return type
   * @param component The original java component
   * @return The javascript component
   */
  static  convert(component) {
    return component;
  }

  /**
   * Returns the singleton instance of SwingJS
   *
   * @return The singleton instance of SwingJS
   */
  static  instance() {
    return SwingJS.CURRENT;
  }

  /**
   * Sets the dark mode
   *
   * @param b true to set the dark mode, false otherwise
   * @return The SwingJS instance (for chaining)
   */
   darkMode(b) {
    this._darkMode = b;
    return this;
  }

  /**
   * Sets the global font family, to complete the setting the <i>build</i>
   * method has to be called
   *
   * @param fontFamily The font family
   * @return The SwingJS instance (for chaining)
   */
   fontFamily(fontFamily) {
    this._fontFamily = fontFamily;
    return this;
  }

  /**
   * Sets the global font size, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param fontSize The font size
   * @return The SwingJS instance (for chaining)
   */
   fontSize(fontSize) {
    this._fontSize = fontSize;
    return this;
  }

  /**
   * Sets the global main color, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
   mainColor(color) {
    this._mainColor = color;
    return this;
  }

  /**
   * Sets the global main background color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
   mainBGColor(color) {
    this._mainBGColor = color;
    return this;
  }

  /**
   * Sets the global main action Action color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
   mainActionColor(color) {
    this._mainActionColor = color;
    return this;
  }

  /**
   * Sets the global main action background color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
   mainActionBGColor(color) {
    this._mainActionBGColor = color;
    return this;
  }

  /**
   * Builds the new global style
   */
   build() {
    if (this._darkMode) {
      document.documentElement.classList.add("dark-mode");
    }
    let style = document.createElement("style");
    style.textContent = ":root {\n" + (this._fontFamily ? "  --font-family: " + this._fontFamily + " !important;\n" : "") + (this._fontSize ? "  --font-size: " + this._fontSize + "px !important;\n" : "") + (this._mainColor ? "  --main-color: " + this._mainColor + " !important;\n" : "") + (this._mainBGColor ? "  --main-bgcolor: " + this._mainBGColor + " !important;\n" : "") + (this._mainActionColor ? "  --main-action-color: " + this._mainActionColor + " !important;\n" : "") + (this._mainActionBGColor ? "  --main-action-bgcolor: " + this._mainActionBGColor + " !important;\n" : "") + "}";
    document.head.appendChild(style);
  }

  constructor() {
  }
}
/**
 * The abstract object able to produce an HTML image element based on a value
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class AbstractHTMLImageProducer {

   value = null;

  /**
   * Creates the object
   *
   * @param value The value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Produces an HTML image element
   *
   * @return An HTML image element
   */
   produce() {
  }

  /**
   * Returns the value
   *
   * @return The value
   */
   getValue() {
    return this.value;
  }
}
/**
 * The default implementation of the AbstractHTMLImageProducer based on an
 * source (URL, base64, etc.)
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class DefaultHTMLImageProducer extends AbstractHTMLImageProducer {

   src = null;

  /**
   * Creates the object
   *
   * @param value The value
   * @param src The source of the HTML image element (URL, base64, etc.)
   */
  constructor(value, src) {
    super(value);
    this.src = src;
  }

   produce() {
    let img = document.createElement("img");
    img.src = this.src;
    return img;
  }
}
