package javascript.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Array;
import javascript.swing.JSSlider;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$exists;

/**
 * The abstract object to model and render a slider
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public abstract class AbstractSliderModelAndRenderer<T> {

  private JSSlider slider;
  private final boolean renderByDataList;
  private final Array<T> elements = new Array<>();

  /**
   * Creates the object
   *
   * @param renderByDataList true if this object uses the datalist tag to render
   * data, false otherwise
   */
  public AbstractSliderModelAndRenderer(boolean renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
  public T getElementAt(int index) {
    return this.elements.$get(index);
  }

  /**
   * Sets the slider managed by this model
   *
   * @param slider The combobox
   */
  public void setSlider(JSSlider slider) {
    this.slider = slider;
    this.setDatalist();
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
  @SuppressWarnings("unchecked")
  public void addElement(T element) {
    this.elements.push(element);
    if ($exists(this.slider)) {
      this.setDatalist();
    }
  }

  private void setDatalist() {
    this.slider.setValue(0);
    this.slider.setMinimum(0);
    this.slider.setMaximum(this.elements.length - 1);

//    $HTMLElement dataList = ($HTMLElement) this.slider.element.querySelector("datalist");
//    dataList.textContent = "";
//    dataList.style.display = this.renderByDataList ? "flex" : "none";
//
//    HTMLElement noDataList = (HTMLElement) this.slider.element.querySelector("div");
//    noDataList.textContent = "";
//    noDataList.style.display = !this.renderByDataList ? "flex" : "none";
//
//    this.elements.forEach((element, index, array) -> {
//      HTMLElement option = document.createElement("option");
//      option.setAttribute("value", "" + index);
//      this.render(element, this.slider, dataList, noDataList, option);
//
//      switch (this.slider.getOrientation()) {
//        case JSSlider.HORIZONTAL:
//          dataList.appendChild(option);
//          break;
//        case JSSlider.VERTICAL:
//          dataList.prepend(option);
//          break;
//      }
//    });
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
  protected abstract void render(T element, JSSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option);
}
