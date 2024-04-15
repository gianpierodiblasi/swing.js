package giada.awt;

import def.js.Array;
import giada.swing.JComponent;
import giada.swing.JPanel;

/**
 * The java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
public class GridBagLayout implements LayoutManager {

  private final Array<Array<String>> gridTemplateAreas = new Array<>();
  private final Array<Double> gridTemplateRows = new Array<>();
  private final Array<Double> gridTemplateColumns = new Array<>();

  private int position = 1;

  public GridBagLayout() {
    super();
  }

  @Override
  public void setPanel(JPanel panel) {
    panel.element.classList.add("gridbaglayout");
  }

  @Override
  public void resetPanel(JPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridbaglayout");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("grid-template-rows");
    panel.element.style.removeProperty("grid-template-columns");
  }

  @Override
  public void addInPanel(JPanel panel, JComponent component, Object constraints) {
    panel.element.appendChild(component.element);
    panel.element.style.setProperty("grid-template-areas", this.setGridTemplateAreas((GridBagConstraints) constraints));
    panel.element.style.setProperty("grid-template-rows", this.setGridTemplateRows((GridBagConstraints) constraints));
    panel.element.style.setProperty("grid-template-columns", this.setGridTemplateColumns((GridBagConstraints) constraints));

    this.setComponent(component, (GridBagConstraints) constraints);
  }

  @SuppressWarnings("unchecked")
  private String setGridTemplateAreas(GridBagConstraints constraint) {
    for (int y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array<>());
    }

    for (int y = 0; y < this.gridTemplateAreas.length; y++) {
      for (int x = this.gridTemplateAreas.$get(y).length; x < constraint.gridx + constraint.gridwidth; x++) {
        this.gridTemplateAreas.$get(y).push("p0");
      }
    }

    for (int y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      Array<String> array = this.gridTemplateAreas.$get(y);
      for (int x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
        array.$set(x, "p" + this.position);
      }
    }

    String gta = "";
    for (int y = 0; y < this.gridTemplateAreas.length; y++) {
      String row = "";
      for (int x = 0; x < this.gridTemplateAreas.$get(y).length; x++) {
        row += this.gridTemplateAreas.$get(y).$get(x) + " ";
      }
      gta += "\"" + row + "\"\n";
    }
    return gta;
  }

  private String setGridTemplateRows(GridBagConstraints constraint) {
    for (int y = this.gridTemplateRows.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateRows.push(0.0);
    }

    for (int y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateRows.$set(y, Math.min(this.gridTemplateRows.$get(y), constraint.weighty));
    }

    String gtr = "";
    for (int y = 0; y < this.gridTemplateRows.length; y++) {
      gtr += this.gridTemplateRows.$get(y) == 0.0 ? "auto " : this.gridTemplateRows.$get(y) + "fr ";
    }
    return gtr;
  }

  private String setGridTemplateColumns(GridBagConstraints constraint) {
    for (int x = this.gridTemplateColumns.length; x < constraint.gridx + constraint.gridwidth; x++) {
      this.gridTemplateColumns.push(0.0);
    }

    for (int x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
      this.gridTemplateColumns.$set(x, Math.min(this.gridTemplateColumns.$get(x), constraint.weightx));
    }

    String gtc = "";
    for (int x = 0; x < this.gridTemplateColumns.length; x++) {
      gtc += this.gridTemplateColumns.$get(x) == 0.0 ? "auto " : this.gridTemplateColumns.$get(x) + "fr ";
    }
    return gtc;
  }

  private void setComponent(JComponent component, GridBagConstraints constraints) {
    component.element.style.setProperty("grid-area", "p" + this.position);
    this.position++;

    switch (constraints.anchor) {
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

    switch (constraints.fill) {
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
