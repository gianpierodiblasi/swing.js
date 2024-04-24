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

  /**
   * Creates the object
   *
   * @param renderByDataList true if this object uses the datalist tag to render
   * data, false otherwise
   */
  constructor(renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
   getElementAt(index) {
    return this.elements[index];
  }

  /**
   * Sets the slider managed by this model
   *
   * @param slider The combobox
   */
   setSlider(slider) {
    this.slider = slider;
    this.setDatalist();
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
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
    // $HTMLElement dataList = ($HTMLElement) this.slider.element.querySelector("datalist");
    // dataList.textContent = "";
    // dataList.style.display = this.renderByDataList ? "flex" : "none";
    // 
    // HTMLElement noDataList = (HTMLElement) this.slider.element.querySelector("div");
    // noDataList.textContent = "";
    // noDataList.style.display = !this.renderByDataList ? "flex" : "none";
    // 
    // this.elements.forEach((element, index, array) -> {
    // HTMLElement option = document.createElement("option");
    // option.setAttribute("value", "" + index);
    // this.render(element, this.slider, dataList, noDataList, option);
    // 
    // switch (this.slider.getOrientation()) {
    // case JSSlider.HORIZONTAL:
    // dataList.appendChild(option);
    // break;
    // case JSSlider.VERTICAL:
    // dataList.prepend(option);
    // break;
    // }
    // });
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param slider The slider
   * @param dataList The datalist tag
   * @param noDataList The div tag
   * @param option The option tag
   */
   render(element, slider, dataList, noDataList, option) {
  }
}
