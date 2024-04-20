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
    let middle = document.createElement("div");
    middle.classList.add("borderlayout-middle");
    panel.element.appendChild(middle);
    panel.element.classList.add("borderlayout");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("borderlayout");
  }

   addInPanel(panel, component, constraints) {
    component.element.classList.add("borderlayout-" + (constraints).toLowerCase());
    switch((constraints)) {
      case BorderLayout.NORTH:
        panel.element.appendChild(component.element);
        component.element.style.marginBottom = this.vGap + "px";
        break;
      case BorderLayout.SOUTH:
        panel.element.appendChild(component.element);
        component.element.style.marginTop = this.vGap + "px";
        break;
      case BorderLayout.WEST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginRight = this.hGap + "px";
        break;
      case BorderLayout.CENTER:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        break;
      case BorderLayout.EAST:
        panel.element.querySelector(".borderlayout-middle").appendChild(component.element);
        component.element.style.marginLeft = this.hGap + "px";
        break;
    }
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
    panel.element.classList.add("boxlayout");
    switch(this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.element.style.flexDirection = "row";
        panel.element.style.alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.element.style.flexDirection = "column";
        panel.element.style.alignItems = "flex-start";
        break;
    }
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("boxlayout");
    panel.element.style.flexDirection = "";
    panel.element.style.alignItems = "";
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
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
    panel.element.classList.add("cardlayout");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("cardlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
    component.element.setAttribute("card", constraints);
    component.element.setAttribute("old-display", component.element.style.display);
    if (panel.element.childElementCount > 1) {
      component.element.style.display = "none";
    }
    component.element.style.flexGrow = "1";
    component.element.style.marginLeft = this.hGap + "px";
    component.element.style.marginRight = this.hGap + "px";
    component.element.style.marginTop = this.vGap + "px";
    component.element.style.marginBottom = this.vGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
   show(parent, name) {
    for (let index = 0; index < parent.element.childElementCount; index++) {
      (parent.element.childNodes[index]).style.display = "none";
    }
    let element = parent.element.querySelector("[card=\"" + name + "\"]");
    (element).style.display = element.getAttribute("old-display");
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
    panel.element.classList.add("flowlayout");
    switch(this.align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        panel.element.style.justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        panel.element.style.justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        panel.element.style.justifyContent = "flex-end";
        break;
    }
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("flowlayout");
    panel.element.style.justifyContent = "";
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
    component.element.style.marginLeft = this.hGap + "px";
    component.element.style.marginRight = this.hGap + "px";
    component.element.style.marginTop = this.vGap + "px";
    component.element.style.marginBottom = this.vGap + "px";
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
    panel.element.classList.add("gridbaglayout");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridbaglayout");
    panel.element.style.removeProperty("grid-template");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("grid-template-rows");
    panel.element.style.removeProperty("grid-template-columns");
  }

   addInPanel(panel, component, constraints) {
    this.constraintsArray.push(constraints);
    panel.element.appendChild(component.element);
    panel.element.style.setProperty("grid-template-areas", this.setGridTemplateAreas(constraints));
    panel.element.style.setProperty("grid-template-rows", this.getWeight(this.gridTemplateAreas, "gridy", "gridheight", "weighty", this.rowHeights));
    panel.element.style.setProperty("grid-template-columns", this.gridTemplateAreas.length > 0 ? this.getWeight(this.gridTemplateAreas[0], "gridx", "gridwidth", "weightx", this.columnWidths) : "");
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
    component.element.style.setProperty("grid-area", "p" + this.position);
    this.position++;
    switch(constraints.anchor) {
      case GridBagConstraints.CENTER:
      case GridBagConstraints.BASELINE:
      case GridBagConstraints.ABOVE_BASELINE:
      case GridBagConstraints.BELOW_BASELINE:
        component.element.style.setProperty("justify-self", "center");
        component.element.style.setProperty("align-self", "center");
        break;
      case GridBagConstraints.NORTH:
      case GridBagConstraints.PAGE_START:
        component.element.style.setProperty("justify-self", "center");
        component.element.style.setProperty("align-self", "start");
        break;
      case GridBagConstraints.NORTHEAST:
      case GridBagConstraints.FIRST_LINE_END:
        component.element.style.setProperty("justify-self", "end");
        component.element.style.setProperty("align-self", "start");
        break;
      case GridBagConstraints.EAST:
      case GridBagConstraints.LINE_END:
      case GridBagConstraints.BASELINE_TRAILING:
      case GridBagConstraints.ABOVE_BASELINE_TRAILING:
      case GridBagConstraints.BELOW_BASELINE_TRAILING:
        component.element.style.setProperty("justify-self", "end");
        component.element.style.setProperty("align-self", "center");
        break;
      case GridBagConstraints.SOUTHEAST:
      case GridBagConstraints.LAST_LINE_END:
        component.element.style.setProperty("justify-self", "end");
        component.element.style.setProperty("align-self", "end");
        break;
      case GridBagConstraints.SOUTH:
      case GridBagConstraints.PAGE_END:
        component.element.style.setProperty("justify-self", "center");
        component.element.style.setProperty("align-self", "end");
        break;
      case GridBagConstraints.SOUTHWEST:
      case GridBagConstraints.LAST_LINE_START:
        component.element.style.setProperty("justify-self", "start");
        component.element.style.setProperty("align-self", "end");
        break;
      case GridBagConstraints.WEST:
      case GridBagConstraints.LINE_START:
      case GridBagConstraints.BASELINE_LEADING:
      case GridBagConstraints.ABOVE_BASELINE_LEADING:
      case GridBagConstraints.BELOW_BASELINE_LEADING:
        component.element.style.setProperty("justify-self", "start");
        component.element.style.setProperty("align-self", "center");
        break;
      case GridBagConstraints.NORTHWEST:
      case GridBagConstraints.FIRST_LINE_START:
        component.element.style.setProperty("justify-self", "start");
        component.element.style.setProperty("align-self", "start");
        break;
    }
    switch(constraints.fill) {
      case GridBagConstraints.NONE:
        break;
      case GridBagConstraints.BOTH:
        component.element.style.setProperty("justify-self", "stretch");
        component.element.style.setProperty("align-self", "stretch");
        break;
      case GridBagConstraints.HORIZONTAL:
        component.element.style.setProperty("justify-self", "stretch");
        break;
      case GridBagConstraints.VERTICAL:
        component.element.style.setProperty("align-self", "stretch");
        break;
    }
    // component.element.style.marginTop = constraints.insets.top + "px";
    // component.element.style.marginBottom = constraints.insets.bottom + "px";
    // component.element.style.marginLeft = constraints.insets.left + "px";
    // component.element.style.marginRight = constraints.insets.right + "px";
    // component.element.style.paddingTop = constraints.ipady + "px";
    // component.element.style.paddingBottom = constraints.ipady + "px";
    // component.element.style.paddingLeft = constraints.ipadx + "px";
    // component.element.style.paddingRight = constraints.ipadx + "px";
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
    panel.element.classList.add("gridlayout");
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
    panel.element.style.setProperty("grid-template", gridTemplate);
    panel.element.style.setProperty("row-gap", this.vGap + "px");
    panel.element.style.setProperty("column-gap", this.hGap + "px");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridlayout");
    panel.element.style.removeProperty("grid-template");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("row-gap");
    panel.element.style.removeProperty("column-gap");
  }

   addInPanel(panel, component, constraints) {
    panel.element.appendChild(component.element);
    component.element.style.setProperty("grid-area", "p" + panel.element.childElementCount);
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
    button.element.querySelector("[type=radio]").setAttribute("name", this.name);
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
}
/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JSComponent {

   listeners = new Array();

  constructor() {
    super();
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
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
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) => this.onclick();
    LookAndFeel.CURRENT.styleJSButton(this);
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.element.textContent = text;
  }

  /**
   * Clone of javax.swing.JButton.setEnabled
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
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jcheckbox");
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.onchange = (event) => this.onclick();
    this.element.appendChild(this.checkbox);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a switch; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setSwitch() {
    this.checkbox.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
  }

  /**
   * Set this checkbox as a toggle; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setToggle() {
    this.checkbox.setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSCheckBox(this);
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

  /**
   * Clone of javax.swing.JCheckBox.setEnabled
   *
   * @param b true to enable the checkbox, false otherwise
   */
   setEnabled(b) {
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

  static  MODEL_AND_RENDERER = "model-and-renderer";

   modelAndRenderer = null;

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onchange = (event) => this.onclick();
    LookAndFeel.CURRENT.styleJSComboBox(this);
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
   getSelectedItem() {
    return this.modelAndRenderer.getElementAt((this.element).selectedIndex);
  }

  /**
   * Clone of javax.swing.JComboBox.setEnabled
   *
   * @param b true to enable the combobox, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
    }
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
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jradiobutton");
    this.radiobutton = document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.onchange = (event) => this.onclick();
    this.element.appendChild(this.radiobutton);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this radiobutton as a switch; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setSwitch() {
    this.radiobutton.setAttribute("role", "switch");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
  }

  /**
   * Set this radiobutton as a toggle; the result depends on the used
   * Look&amp;Feel, with the DefaultLookAndFeel it will be not change
   */
   setToggle() {
    this.radiobutton.setAttribute("role", "toggle");
    LookAndFeel.CURRENT.styleJSRadioButton(this);
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

  /**
   * Clone of javax.swing.JRadioButton.setEnabled
   *
   * @param b true to enable the radiobutton, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.JToggleButton clone; the visual appearance depends on the
 * used Look&amp;Feel, with the DefaultLookAndFeel it will be rendered as a
 * checkbox
 *
 * @author gianpiero.diblasi
 */
class JSToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jtogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.onchange = (event) => this.onclick();
    this.togglebutton.setAttribute("role", "toggle");
    this.element.appendChild(this.togglebutton);
    this.text = document.createTextNode("");
    this.element.appendChild(this.text);
    LookAndFeel.CURRENT.styleJSToggleButton(this);
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

  /**
   * Clone of javax.swing.JToggleButton.setEnabled
   *
   * @param b true to enable the togglebutton, false otherwise
   */
   setEnabled(b) {
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
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JSFrame extends JSComponent {

   contentPane = new JSPanel();

  constructor() {
    super();
    this.contentPane.element.classList.remove("jpanel");
    this.contentPane.element.classList.add("jframe");
    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.element = document.querySelector("body");
    this.element.textContent = "";
    this.element.appendChild(this.contentPane.element);
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
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jlabel");
    LookAndFeel.CURRENT.styleJSLabel(this);
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
   setText(text) {
    this.element.textContent = text;
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
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jpanel");
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

   tabsN = new JSPanel();

   tabsS = new JSPanel();

   tabsE = new JSPanel();

   tabsW = new JSPanel();

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

  constructor() {
    super();
    this.cssAddClass("jtabbedpane");
    this.setLayout(new BorderLayout(0, 0));
    this.tabsN.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabsN, BorderLayout.NORTH);
    this.tabsS.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabsS, BorderLayout.SOUTH);
    this.tabsE.setLayout(new BoxLayout(this.tabsE, BoxLayout.Y_AXIS));
    this.add(this.tabsE, BorderLayout.EAST);
    this.tabsW.setLayout(new BoxLayout(this.tabsW, BoxLayout.Y_AXIS));
    this.add(this.tabsW, BorderLayout.WEST);
    this.tabs = this.tabsN;
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
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
    this.tabs.add(button, null);
    this.tabsGroup.add(button);
    this.content.add(component, title);
    LookAndFeel.CURRENT.styleJSTabbedPane(this, button, component);
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

   min = 0;

   max = 100;

   value = 0;

   indeterminate = false;

  constructor() {
    super();
    this.element = document.createElement("progress");
    this.element.style.width = "auto";
    this.element.setAttribute("max", "" + this.max);
    this.element.setAttribute("value", "" + this.value);
    this.element.classList.add("jprogressbar");
    LookAndFeel.CURRENT.styleJSProgressBar(this);
  }

  /**
   * Clone of javax.swing.JSProgressBar.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JSProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
   setIndeterminate(b) {
    this.indeterminate = b;
    this.setProgress();
  }

   setProgress() {
    this.element.setAttribute("max", "" + (this.max - this.min));
    this.element.setAttribute("value", "" + (this.value - this.min));
    if (this.indeterminate) {
      this.element.removeAttribute("value");
    }
  }

  /**
   * Clone of javax.swing.JSProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.element.classList.remove("jprogressbar-horizontal");
    this.element.classList.remove("jprogressbar-vertical");
    this.element.style.removeProperty("width");
    this.element.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.element.classList.add("jprogressbar-horizontal");
        this.element.style.width = "auto";
        break;
      case JSProgressBar.VERTICAL:
        this.element.classList.add("jprogressbar-vertical");
        this.element.style.height = "auto";
        break;
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
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jslider");
    this.element.classList.add("jslider-horizontal");
    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.oninput = (event) => this.onchange(true);
    this.slider.onchange = (event) => this.onchange(false);
    this.element.appendChild(this.slider);
    this.dataList = document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.element.appendChild(this.dataList);
    let div = document.createElement("div");
    div.style.display = "none";
    this.element.appendChild(div);
    LookAndFeel.CURRENT.styleJSSlider(this);
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
    this.element.classList.remove("jslider-horizontal");
    this.element.classList.remove("jslider-vertical");
    switch(orientation) {
      case JSSlider.HORIZONTAL:
        this.element.classList.add("jslider-horizontal");
        break;
      case JSSlider.VERTICAL:
        this.element.classList.add("jslider-vertical");
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
      this.element.classList.add("jslider-inverted");
    } else {
      this.element.classList.remove("jslider-inverted");
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

  /**
   * Clone of javax.swing.JSlider.setEnabled
   *
   * @param b true to enable the slider, false otherwise
   */
   setEnabled(b) {
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

   listeners = new Array();

  constructor() {
    super();
    this.element = document.createElement("input");
    this.element.setAttribute("type", "number");
    this.element.classList.add("jspinner");
    this.element.oninput = (event) => this.onchange();
    (this.element).valueAsNumber = 0;
    LookAndFeel.CURRENT.styleJSSpinner(this);
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
    (this.element).valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return (this.element).valueAsNumber;
  }

  /**
   * Clone of javax.swing.JSpinner.setEnabled
   *
   * @param b true to enable the spinner, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
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

   elements = new Array();

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
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
   setComboBox(combobox) {
    this.combobox = combobox;
    this.elements.forEach(element => this.addOption(element));
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
    let option = document.createElement("option");
    option.textContent = this.render(element);
    this.combobox.element.appendChild(option);
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
    return element.toString();
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
    let dataList = this.slider.element.querySelector("datalist");
    dataList.textContent = "";
    dataList.style.display = this.renderByDataList ? "flex" : "none";
    let noDataList = this.slider.element.querySelector("div");
    noDataList.textContent = "";
    noDataList.style.display = !this.renderByDataList ? "flex" : "none";
    this.elements.forEach((element, index, array) => {
      let option = document.createElement("option");
      option.setAttribute("value", "" + index);
      this.render(element, this.slider, dataList, noDataList, option);
      switch(this.slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          dataList.appendChild(option);
          break;
        case JSSlider.VERTICAL:
          dataList.prepend(option);
          break;
      }
    });
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param slider The slider
   * @param dataList The datalist tag
   * @param noDataList The div tag
   * @param option The option tag
   */
   render(element, slider, dataList, noDataList, option) {
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

   render(element, slider, dataList, noDataList, option) {
    option.setAttribute("label", element.toString());
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

   render(element, slider, dataList, noDataList, option) {
    let img = element.produce();
    img.onload = (event) => {
      switch(slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          (slider.element.querySelector("input")).style.marginLeft = (img.width / 2) + "px";
          (slider.element.querySelector("input")).style.marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          (slider.element.querySelector("input")).style.marginTop = (img.height / 2) + "px";
          (slider.element.querySelector("input")).style.marginBottom = (img.height / 2) + "px";
          break;
      }
      return null;
    };
    switch(slider.getOrientation()) {
      case JSSlider.HORIZONTAL:
        noDataList.appendChild(img);
        break;
      case JSSlider.VERTICAL:
        (noDataList).prepend(img);
        break;
    }
  }
}
/**
 * The abstract object of any implementation able to redefine the look and feel
 * of all components. It is mandatory to set a Look&amp;Feel before the creation
 * of the first component; the default Look&amp;Feel is the DefaultLookAndFeel
 * which can be set in this way
 * <code>LookAndFeel.CURRENT = new DefaultLookAndFeel()</code>; the API provides
 * a second Look&amp;Feel called BootstrapLookAndFeel (and using the Bootstrap
 * library) which can be set (for example) in this way
 * <code>LookAndFeel.CURRENT = BootstrapLookAndFeel.create()</code>
 *
 * @author gianpiero.diblasi
 * @see javascript.swing.plaf.BootstrapLookAndFeel
 */
class LookAndFeel {

  static  CURRENT = null;

  /**
   * Returns the description of this Look&amp;Feel
   *
   * @return The description of this Look&amp;Feel
   */
   getDescription() {
  }

  /**
   * Applies the style to a button
   *
   * @param button The button
   */
   styleJSButton(button) {
  }

  /**
   * Applies the style to a checkbox
   *
   * @param checkbox The checkbox
   */
   styleJSCheckBox(checkbox) {
  }

  /**
   * Applies the style to a combobox
   *
   * @param combobox The combobox
   */
   styleJSComboBox(combobox) {
  }

  /**
   * Applies the style to a label
   *
   * @param label The label
   */
   styleJSLabel(label) {
  }

  /**
   * Applies the style to a progressbar
   *
   * @param progressbar The progressbar
   */
   styleJSProgressBar(progressbar) {
  }

  /**
   * Applies the style to a radiobutton
   *
   * @param radiobutton The radiobutton
   */
   styleJSRadioButton(radiobutton) {
  }

  /**
   * Applies the style to a slider
   *
   * @param slider The slider
   */
   styleJSSlider(slider) {
  }

  /**
   * Applies the style to a spinner
   *
   * @param spinner The spinner
   */
   styleJSSpinner(spinner) {
  }

  /**
   * Applies the style to a tabbedpane
   *
   * @param tabbedpane The tabbedpane
   * @param tab The added tab
   * @param component The added component
   */
   styleJSTabbedPane(tabbedpane, tab, component) {
  }

  /**
   * Applies the style to a togglebutton
   *
   * @param togglebutton The togglebutton
   */
   styleJSToggleButton(togglebutton) {
  }
}
/**
 * The Bootstrap LookAndFeel
 *
 * @author gianpiero.diblasi
 */
class BootstrapLookAndFeel extends LookAndFeel {

   dark = false;

   size = null;

  /**
   * Creates the Look&amp;Feel
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  static  create(dark, referenceFile) {
    return new BootstrapLookAndFeel(dark, "", referenceFile);
  }

  /**
   * Creates the Look&amp;Feel with small components
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  static  createSmall(dark, referenceFile) {
    return new BootstrapLookAndFeel(dark, "sm", referenceFile);
  }

  /**
   * Creates the Look&amp;Feel with large components
   *
   * @param dark true to apply a dark theme, false otherwise
   * @param referenceFile true to automatically reference the JS and CSS files
   * in the HTML head tag, false otherwise (the files will be manually addded)
   * @return The Look&amp;Feel
   */
  static  createLarge(dark, referenceFile) {
    return new BootstrapLookAndFeel(dark, "lg", referenceFile);
  }

  constructor(dark, size, referenceFile) {
    super();
    document.body.classList.add("bootstraplaf");
    this.dark = typeof dark === "undefined" ? false : dark;
    this.size = size;
    if (typeof referenceFile === "undefined" || referenceFile) {
      let link = document.createElement("link");
      link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
      // link = document.createElement("link");
      // link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
      // link.setAttribute("rel", "stylesheet");
      // document.head.appendChild(link);
      let script = document.createElement("script");
      script.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
      document.head.appendChild(script);
    }
    if (this.dark) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

   getDescription() {
    return "Bootstrap LookAndFeel " + (this.dark ? "Dark " : "Light ") + (this.size === "sm" ? "Small" : this.size === "lg" ? "Large" : "");
  }

   styleJSButton(button) {
    button.cssAddClass("btn");
    button.cssAddClass("btn-primary");
    if (this.size) {
      button.cssAddClass("btn-" + this.size);
    }
  }

   styleJSCheckBox(checkbox) {
    this.setCheckAndRadio(checkbox);
  }

   styleJSComboBox(combobox) {
    combobox.element.style.width = "auto";
    combobox.cssAddClass("form-select");
    if (this.size) {
      combobox.cssAddClass("form-select-" + this.size);
    }
  }

   styleJSLabel(label) {
    this.setSize(label.element);
  }

   styleJSProgressBar(progressbar) {
    switch(this.size) {
      case "sm":
        progressbar.element.style.fontSize = "31px";
        break;
      case "lg":
        progressbar.element.style.fontSize = "40px";
        break;
      default:
        progressbar.element.style.fontSize = "34px";
        break;
    }
  }

   styleJSRadioButton(radiobutton) {
    this.setCheckAndRadio(radiobutton);
  }

   styleJSSlider(slider) {
    this.setSize(slider.element.querySelector("datalist"));
  }

   styleJSSpinner(spinner) {
    spinner.element.style.width = "auto";
    spinner.cssAddClass("form-control");
    if (this.size) {
      spinner.cssAddClass("form-control-" + this.size);
    }
  }

   styleJSTabbedPane(tabbedpane, tab, component) {
    let selector = null;
    switch(tabbedpane.getTabPlacement()) {
      case JSTabbedPane.TOP:
        selector = ".borderlayout-north";
        break;
      case JSTabbedPane.BOTTOM:
        selector = ".borderlayout-south";
        break;
      case JSTabbedPane.LEFT:
        selector = ".borderlayout-west";
        break;
      case JSTabbedPane.RIGHT:
        selector = ".borderlayout-east";
        break;
    }
    let tabs = tabbedpane.element.querySelector(selector);
    tabs.classList.add("nav");
    tabs.classList.add("nav-tabs");
    tab.element.classList.add("nav-link");
    tab.element.style.cursor = "pointer";
    let input = tab.element.querySelector("input");
    input.style.display = "none";
    if (input.checked) {
      tab.cssAddClass("active");
    }
    input.addEventListener("change", (event) => {
      tabs.querySelector(".jradiobutton.active").classList.remove("active");
      tab.cssAddClass("active");
    });
  }

   styleJSToggleButton(togglebutton) {
    this.setCheckAndRadio(togglebutton);
  }

   setCheckAndRadio(component) {
    let input = component.element.querySelector("input");
    input.classList.add("form-check-input");
    switch(input.getAttribute("role")) {
      case "switch":
        input.style.marginRight = "0.5em";
        component.cssAddClass("form-switch");
        this.setSize(component.element);
        break;
      case "toggle":
        input.classList.add("btn-check");
        component.cssAddClass("btn");
        component.cssAddClass("btn-primary");
        if (this.size) {
          component.cssAddClass("btn-" + this.size);
        }
        break;
      default:
        input.style.marginRight = "0.5em";
        this.setSize(component.element);
        break;
    }
  }

   setSize(element) {
    switch(this.size) {
      case "sm":
        element.style.fontSize = "14px";
        break;
      case "lg":
        element.style.fontSize = "20px";
        break;
    }
  }
}
/**
 * The Default LookAndFeel
 *
 * @author gianpiero.diblasi
 */
class DefaultLookAndFeel extends LookAndFeel {

  constructor() {
    super();
    document.body.classList.add("defaultlaf");
  }

   getDescription() {
    return "Default LookAndFeel";
  }

   styleJSButton(button) {
  }

   styleJSCheckBox(checkbox) {
  }

   styleJSComboBox(combobox) {
  }

   styleJSLabel(label) {
  }

   styleJSProgressBar(progressbar) {
  }

   styleJSRadioButton(radiobutton) {
  }

   styleJSSlider(slider) {
  }

   styleJSSpinner(spinner) {
  }

   styleJSTabbedPane(tabbedpane, tab, component) {
  }

   styleJSToggleButton(togglebutton) {
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
    spinner.element.setAttribute("value", "" + this.value);
    spinner.element.setAttribute("max", "" + this.maximum);
    spinner.element.setAttribute("min", "" + this.minimum);
    spinner.element.setAttribute("step", "" + this.stepSize);
  }
}
/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
class SwingJS {

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
