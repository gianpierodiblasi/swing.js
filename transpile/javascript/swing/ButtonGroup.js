/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
class ButtonGroup {

   name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  /**
   * Adds a button to the group
   *
   * @param button The button
   */
   add(button) {
    button.element.querySelector("[type=radio]").setAttribute("name", this.name);
  }
}
