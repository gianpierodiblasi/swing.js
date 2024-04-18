package giada.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Array;
import giada.swing.JSlider;
import static simulation.js.$Globals.$exists;

/**
 * The abstract object to model and render a slider
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
public abstract class AbstractSliderModelAndRenderer<T> {

  private JSlider slider;
  private final boolean renderByDataList;
  private final Array<T> elements = new Array<>();

  public AbstractSliderModelAndRenderer(boolean renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

  public T getElementAt(int index) {
    return this.elements.$get(index);
  }

  public void setJSlider(JSlider slider) {
    this.slider = slider;
    this.setDatalist();
  }

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

    HTMLElement dataList = (HTMLElement) this.slider.element.querySelector("datalist");
    dataList.textContent = "";
    dataList.style.display = this.renderByDataList ? "flex" : "none";

    HTMLElement noDataList = (HTMLElement) this.slider.element.querySelector("div");
    noDataList.textContent = "";
    noDataList.style.display = !this.renderByDataList ? "flex" : "none";

    this.elements.forEach((element, index, array) -> {
      HTMLElement option = document.createElement("option");
      option.setAttribute("value", "" + index);
      this.render(element, this.slider, dataList, noDataList, option);
      dataList.appendChild(option);
    });
  }

  protected abstract void render(T element, JSlider slider, HTMLElement dataList, HTMLElement noDataList, HTMLElement option);
}
