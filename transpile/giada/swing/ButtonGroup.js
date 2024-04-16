/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
class ButtonGroup {

   name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

   add(button) {
    button.element.querySelector("[type=radio]").setAttribute("name", this.name);
  }
}
