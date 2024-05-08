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
    component.getStyle().margin = constraints.insets.top + "px " + constraints.insets.right + "px " + constraints.insets.bottom + "px " + constraints.insets.left + "px";
    // component.getStyle().padding = constraints.ipady + "px " + constraints.ipadx + "px";
  }
}
