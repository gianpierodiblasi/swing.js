package giada.swing;

import giada.swing.MnR.AbstractSliderModelAndRenderer;
import static def.dom.Globals.document;
import def.dom.HTMLElement;
import simulation.dom.$Image;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame2SliderModelAndRenderer extends AbstractSliderModelAndRenderer<String> {

  public TestJFrame2SliderModelAndRenderer() {
    super(false);
  }

  @Override
  protected void render(String element, JSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option) {
    ((HTMLElement) slider.element.querySelector("input")).style.marginLeft = "20px";
    ((HTMLElement) slider.element.querySelector("input")).style.marginRight = "20px";

    $Image img = ($Image) document.createElement("img");
    img.src = "../../swing.png";
    switch (element) {
      case "A":
        break;
      case "B":
        img.style.transform = "rotate(15deg) scale(0.8)";
        break;
      case "C":
        img.style.filter = "drop-shadow(2px 4px 6px black)";
        break;
    }

    noDataList.appendChild(img);
  }
}
