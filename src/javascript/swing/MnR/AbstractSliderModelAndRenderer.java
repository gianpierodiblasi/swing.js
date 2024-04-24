package javascript.swing.MnR;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.dom.Node;
import def.js.Array;
import javascript.swing.JSSlider;
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

    this.slider.clearChildContentByQuery("datalist");
    this.slider.getChilStyleByQuery("datalist").display = this.renderByDataList ? "flex" : "none";

    this.slider.clearChildContentByQuery("div");
    this.slider.getChilStyleByQuery("div").display = !this.renderByDataList ? "flex" : "none";

    this.elements.forEach((element, index, array) -> {
      HTMLElement option = document.createElement("option");
      option.setAttribute("value", "" + index);

      Object rendered = this.render(element, this.slider);
      if (this.renderByDataList) {
        option.setAttribute("label", (String) rendered);
      } else {
        switch (this.slider.getOrientation()) {
          case JSSlider.HORIZONTAL:
            this.slider.appendNodeChildInTree("div", (Node) rendered);
            break;
          case JSSlider.VERTICAL:
            this.slider.prependNodeChildInTree("div", (Node) rendered);
            break;
        }
      }

      switch (this.slider.getOrientation()) {
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
  protected abstract Object render(T element, JSSlider slider);
}
