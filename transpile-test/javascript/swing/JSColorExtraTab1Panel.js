/**
 * @author gianpiero.diblasi
 */
class JSColorExtraTab1Panel extends JSAbstractColorExtraTabPanel {

   color = new Color(0, 0, 0, 255);

  constructor() {
    super();
    let button = new JSButton();
    button.setText("GRAY");
    button.addActionListener(event => {
      this.color = this.color.gray();
      this.onchange();
    });
    this.add(button, null);
  }

   getSelectedColor() {
    return this.color;
  }

   setSelectedColor(color) {
    this.color = color;
  }

   getValueIsAdjusting() {
    return false;
  }
}
