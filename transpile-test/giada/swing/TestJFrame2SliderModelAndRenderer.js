/**
 * @author gianpiero.diblasi
 */
class TestJFrame2SliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  constructor() {
    super(false);
  }

   render(element, slider, dataList, noDataList, option) {
    (slider.element.querySelector("input")).style.marginLeft = "20px";
    (slider.element.querySelector("input")).style.marginRight = "20px";
    let img = document.createElement("img");
    img.src = "../../swing.png";
    switch(element) {
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
