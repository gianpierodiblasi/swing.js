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
    button.setChildAttributeByQuery("[type=radio]", "name", this.name);
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
