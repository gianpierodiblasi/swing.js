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
      parent.getChilStyle(index).display = "none";
    }
    parent.queryChilStyle("[card=" + name + "]").display = parent.queryChildAttribute("[card=" + name + "]", "old-display");
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
   * Adds a child to the HTML element
   *
   * @param component The child component
   */
   appendChild(component) {
    this.element.appendChild(component.element);
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param index The child index
   * @return The style of a child of the HTML element
   */
   getChilStyle(index) {
    return (this.element.childNodes.item(index)).style;
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param query The query selector
   * @return The style of a child of the HTML element
   */
   queryChilStyle(query) {
    return (this.element.querySelector(query)).style;
  }

  /**
   * Sets an attribute of a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttribute(index, key, value) {
    (this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttribute(index, key) {
    return (this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute a child of the HTML element
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
   queryChildAttribute(query, key) {
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
    this._mainBGColor = color;
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
   * Builds the new global style
   */
   build() {
    if (this._darkMode) {
      document.documentElement.classList.add("dark-mode");
    }
    let style = document.createElement("style");
    style.textContent = ":root {\n" + (this._fontFamily ? "  --font-family: " + this._fontFamily + " !important;\n" : "") + (this._fontSize ? "  --font-size: " + this._fontSize + "px !important;\n" : "") + (this._mainColor ? "  --main-color: " + this._mainColor + " !important;\n" : "") + (this._mainBGColor ? "  --main-bgcolor: " + this._mainBGColor + " !important;\n" : "") + "}";
    document.head.appendChild(style);
  }

  constructor() {
  }
}
