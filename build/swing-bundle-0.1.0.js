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

   setPanel(panel) {
  }

   resetPanel(panel) {
  }

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
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      for (let x = this.gridTemplateAreas[y].length; x < constraint.gridx + constraint.gridwidth; x++) {
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
    component.element.style.marginTop = constraints.insets.top + "px";
    component.element.style.marginBottom = constraints.insets.bottom + "px";
    component.element.style.marginLeft = constraints.insets.left + "px";
    component.element.style.marginRight = constraints.insets.right + "px";
    component.element.style.paddingTop = constraints.ipady + "px";
    component.element.style.paddingBottom = constraints.ipady + "px";
    component.element.style.paddingLeft = constraints.ipadx + "px";
    component.element.style.paddingRight = constraints.ipadx + "px";
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
    let gridTemplateAreas = "";
    for (let row = 1; row <= this.rows; row++) {
      let gridTemplateRow = "";
      for (let col = 1; col <= this.cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * this.cols + col) + " ";
      }
      gridTemplateAreas += "\"" + gridTemplateRow + "\"\n";
    }
    panel.element.style.setProperty("grid-template-areas", gridTemplateAreas);
    panel.element.style.setProperty("row-gap", this.hGap + "px");
    panel.element.style.setProperty("column-gap", this.hGap + "px");
  }

   resetPanel(panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridlayout");
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
 * The javax.swing.DefaultComboBoxModel clone
 *
 * @author gianpiero.diblasi
 * @param <E> The element type
 */
class DefaultComboBoxModel {

   comboBox = null;

   addElement(element) {
    let option = document.createElement("option");
    option.setAttribute("value", element.toString());
    option.textContent = element.toString();
    this.comboBox.element.appendChild(option);
  }

   setComboBox(comboBox) {
    this.comboBox = comboBox;
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
   * is a reserved word and cannot be used)</p>
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
   * @throws java.lang.Exception thrown if <i>key</i> = "class-list" (or the
   * constant value <i>JComponent.CLASS_LIST</i>)
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
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JComponent {

   listeners = new Array();

  constructor() {
    super();
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
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JButton extends AbstractButton {

  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("jbutton");
    this.element.onclick = (event) => this.onclick();
  }

   setText(text) {
    this.element.textContent = text;
  }
}
/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JCheckBox extends AbstractButton {

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
  }

   setText(text) {
    this.text.textContent = text;
  }

   setSelected(selected) {
    this.checkbox.checked = selected;
  }

   isSelected() {
    return this.checkbox.checked;
  }
}
/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JComboBox extends AbstractButton {

  constructor() {
    super();
    this.element = document.createElement("select");
    this.element.classList.add("jcombobox");
    this.element.onclick = (event) => this.onclick();
  }

   setModel(model) {
    model.setComboBox(this);
  }

   getSelectedItem() {
    return (this.element).value;
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
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JLabel extends JComponent {

  constructor() {
    super();
    this.element = document.createElement("label");
    this.element.classList.add("jlabel");
  }

   setText(text) {
    this.element.textContent = text;
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
    if (this.layoutManager) {
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

   getLayout() {
    return this.layoutManager;
  }

   add(component, constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
