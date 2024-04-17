/**
 * The abstract object to model and render a slider
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractSliderModelAndRenderer {

   slider = null;

   renderByDataList = false;

   elements = new Array();

  constructor(renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

   getElementAt(index) {
    return this.elements[index];
  }

   setJSlider(slider) {
    this.slider = slider;
    this.setDatalist();
  }

   addElement(element) {
    this.elements.push(element);
    if (this.slider) {
      this.setDatalist();
    }
  }

   setDatalist() {
    this.slider.setValue(0);
    this.slider.setMinimum(0);
    this.slider.setMaximum(this.elements.length - 1);
    let dataList = this.slider.element.querySelector("datalist");
    dataList.textContent = "";
    dataList.style.display = this.renderByDataList ? "flex" : "none";
    let noDataList = this.slider.element.querySelector("div");
    noDataList.textContent = "";
    noDataList.style.display = !this.renderByDataList ? "flex" : "none";
    this.elements.forEach((element, index, array) => {
      let option = document.createElement("option");
      option.setAttribute("value", "" + index);
      this.render(element, this.slider, dataList, noDataList, option);
      dataList.appendChild(option);
    });
  }

   render(element, slider, dataList, noDataList, option) {
  }
}
