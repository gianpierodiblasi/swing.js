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
    this.slider.clearChildContentByQuery("datalist");
    this.slider.getChilStyleByQuery("datalist").display = this.renderByDataList ? "flex" : "none";
    this.slider.clearChildContentByQuery("div");
    this.slider.getChilStyleByQuery("div").display = !this.renderByDataList ? "flex" : "none";
    this.elements.forEach((element, index, array) => {
      let option = document.createElement("option");
      option.setAttribute("value", "" + index);
      let rendered = this.render(element, this.slider);
      if (this.renderByDataList) {
        option.setAttribute("label", rendered);
      } else {
        switch(this.slider.getOrientation()) {
          case JSSlider.HORIZONTAL:
            this.slider.appendNodeChildInTree("div", rendered);
            break;
          case JSSlider.VERTICAL:
            this.slider.prependNodeChildInTree("div", rendered);
            break;
        }
      }
      switch(this.slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          this.slider.appendNodeChildInTree("datalist", option);
          break;
        case JSSlider.VERTICAL:
          this.slider.prependNodeChildInTree("datalist", option);
          break;
      }
    });
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param slider The slider
   * @return The renderer element
   */
   render(element, slider) {
  }
}
