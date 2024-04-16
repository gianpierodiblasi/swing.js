package giada.swing;

import def.js.Date;
import static simulation.js.$Globals.parseInt;

/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
public class ButtonGroup {
  
  private final String name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());
  
  public void add(AbstractButton button) {
    button.element.querySelector("[type=radio]").setAttribute("name", this.name);
  }
}
