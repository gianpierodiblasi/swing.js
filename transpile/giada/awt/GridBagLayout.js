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
    panel.element.appendChild(component.element);
    panel.element.style.setProperty("grid-template-areas", this.setGridTemplateAreas(constraints));
    // panel.element.style.setProperty("grid-template-rows", this.setGridTemplateRows((GridBagConstraints) constraints));
    // panel.element.style.setProperty("grid-template-columns", this.setGridTemplateColumns((GridBagConstraints) constraints));
    this.setComponent(component, constraints);
  }

   setGridTemplateAreas(constraint) {
    for (let y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array());
    }
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      for (let x = this.gridTemplateAreas[y].length; x < constraint.gridx + constraint.gridwidth; x++) {
        this.gridTemplateAreas[y].push("p0");
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

   setGridTemplateRows(constraint) {
    for (let y = this.gridTemplateRows.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateRows.push(0.0);
    }
    for (let y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateRows[y] = Math.min(this.gridTemplateRows[y], constraint.weighty);
    }
    let gtr = "";
    for (let y = 0; y < this.gridTemplateRows.length; y++) {
      gtr += this.gridTemplateRows[y] === 0.0 ? "auto " : this.gridTemplateRows[y] + "fr ";
    }
    return gtr;
  }

   setGridTemplateColumns(constraint) {
    for (let x = this.gridTemplateColumns.length; x < constraint.gridx + constraint.gridwidth; x++) {
      this.gridTemplateColumns.push(0.0);
    }
    for (let x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
      this.gridTemplateColumns[x] = Math.min(this.gridTemplateColumns[x], constraint.weightx);
    }
    let gtc = "";
    for (let x = 0; x < this.gridTemplateColumns.length; x++) {
      gtc += this.gridTemplateColumns[x] === 0.0 ? "auto " : this.gridTemplateColumns[x] + "fr ";
    }
    return gtc;
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
  }
}
