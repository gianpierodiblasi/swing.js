package javascript.awt;

import def.js.Array;
import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import static simulation.js.$Globals.$exists;

/**
 * The java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
public class GridBagLayout implements LayoutManager {

  public Array<Double> columnWidths;
  public Array<Double> rowHeights;

  private final Array<Array<String>> gridTemplateAreas = new Array<>();
  private final Array<GridBagConstraints> constraintsArray = new Array<>();

  private int position = 1;

  public GridBagLayout() {
    super();
  }

  @Override
  public void setPanel(JSPanel panel) {
    panel.element.classList.add("gridbaglayout");
  }

  @Override
  public void resetPanel(JSPanel panel) {
    panel.element.textContent = "";
    panel.element.classList.remove("gridbaglayout");
    panel.element.style.removeProperty("grid-template");
    panel.element.style.removeProperty("grid-template-areas");
    panel.element.style.removeProperty("grid-template-rows");
    panel.element.style.removeProperty("grid-template-columns");
  }

  @Override
  public void addInPanel(JSPanel panel, JSComponent component, Object constraints) {
    this.constraintsArray.push((GridBagConstraints) constraints);

    panel.element.appendChild(component.element);
    panel.element.style.setProperty("grid-template-areas", this.setGridTemplateAreas((GridBagConstraints) constraints));
    panel.element.style.setProperty("grid-template-rows", this.getWeight(this.gridTemplateAreas, "gridy", "gridheight", "weighty", this.rowHeights));
    panel.element.style.setProperty("grid-template-columns", this.gridTemplateAreas.length > 0 ? this.getWeight(this.gridTemplateAreas.$get(0), "gridx", "gridwidth", "weightx", this.columnWidths) : "");

    this.setComponent(component, (GridBagConstraints) constraints);
  }

  @SuppressWarnings("unchecked")
  private String setGridTemplateAreas(GridBagConstraints constraint) {
    for (int y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array<>());
    }

    int maxX = 0;
    for (int y = 0; y < this.gridTemplateAreas.length; y++) {
      maxX = Math.max(maxX, this.gridTemplateAreas.$get(y).length);
    }

    for (int y = 0; y < this.gridTemplateAreas.length; y++) {
      for (int x = this.gridTemplateAreas.$get(y).length; x < Math.max(maxX, constraint.gridx + constraint.gridwidth); x++) {
        this.gridTemplateAreas.$get(y).push(".");
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

  private String getWeight(Array<?> array, String keyAxis, String keySize, String keyWeight, Array<Double> fixedSize) {
    Array<Double> gridTemplate = new Array<>();
    for (int index = 0; index < array.length; index++) {
      gridTemplate.push(0.0);
    }

    for (int index = 1; index <= array.length; index++) {
      final double gridsize = index;
      this.constraintsArray.filter(constraint -> constraint.get(keySize) == gridsize).forEach(constraint -> {
        boolean ok = false;
        for (int index2 = (int) constraint.get(keyAxis); index2 < constraint.get(keyAxis) + constraint.get(keySize); index2++) {
          ok |= gridTemplate.$get(index2) >= constraint.get(keyWeight);
        }
        if (!ok) {
          gridTemplate.$set((int) constraint.get(keyAxis) + (int) constraint.get(keySize) - 1, constraint.get(keyWeight));
        }
      });
    }

    String gt = "";
    for (int index = 0; index < gridTemplate.length; index++) {
      if ($exists(fixedSize) && $exists(fixedSize.$get(index))) {
        gt += fixedSize.$get(index) + "px ";
      } else {
        gt += gridTemplate.$get(index) == 0.0 ? "auto " : gridTemplate.$get(index) + "fr ";
      }
    }
    return gt;
  }

  private void setComponent(JSComponent component, GridBagConstraints constraints) {
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
