/**
 * The java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridBagLayout extends LayoutManager {

   gridTemplateAreas = new Array();

   gridTemplateRows = new Array();

   gridTemplateColumns = new Array();

   position = 1;

  constructor() {
    super("gridbaglayout");
  }

   addConstraint(component, constraint) {
    this.setComponent(component, constraint);
    return this.setGrid(constraint);
  }

   setComponent(component, constraint) {
    component.element.style.setProperty("grid-area", "p" + this.position);
    switch(constraint.anchor) {
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
    switch(constraint.fill) {
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
  }

   setGrid(constraint) {
    for (let y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array());
    }
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      for (let x = this.gridTemplateAreas[y].length; x < constraint.gridx + constraint.gridwidth; x++) {
        this.gridTemplateAreas[y].push("p0");
      }
    }
    for (let y = this.gridTemplateRows.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateRows.push(0.0);
    }
    for (let x = this.gridTemplateColumns.length; x < constraint.gridx + constraint.gridwidth; x++) {
      this.gridTemplateColumns.push(0.0);
    }
    for (let y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      let array = this.gridTemplateAreas[y];
      for (let x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
        array[x] = "p" + this.position;
        this.gridTemplateColumns[x] = Math.min(this.gridTemplateColumns[x], constraint.weightx);
      }
      this.gridTemplateRows[y] = Math.min(this.gridTemplateRows[y], constraint.weighty);
    }
    this.position++;
    let gta = "";
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      let row = "";
      for (let x = 0; x < this.gridTemplateAreas[y].length; x++) {
        row += this.gridTemplateAreas[y][x] + " ";
      }
      gta += "\"" + row + "\"\n";
    }
    let gtr = "";
    for (let y = 0; y < this.gridTemplateRows.length; y++) {
      gtr += this.gridTemplateRows[y] === 0.0 ? "auto " : this.gridTemplateRows[y] + "fr ";
    }
    let gtc = "";
    for (let x = 0; x < this.gridTemplateColumns.length; x++) {
      gtc += this.gridTemplateColumns[x] === 0.0 ? "auto " : this.gridTemplateColumns[x] + "fr ";
    }
    let object = new Object();
    object["grid-template-areas"] = gta;
    object["grid-template-rows"] = gtr;
    object["grid-template-columns"] = gtc;
    return object;
  }
}
