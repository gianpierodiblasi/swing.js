package javascript.swing;

import def.js.Date;
import static simulation.js.$Globals.parseInt;

/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
public class ButtonGroup {

  private final String name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());
  private int count;

  /**
   * Clone of javax.swing.ButtonGroup.add
   *
   * @param button The button
   */
  public void add(JSRadioButton button) {
    button.element.querySelector("[type=radio]").setAttribute("name", this.name);
    this.count++;
  }

  /**
   * Clone of javax.swing.ButtonGroup.getButtonCount
   *
   * @return the button count
   */
  public int getButtonCount() {
    return this.count;
  }
}
