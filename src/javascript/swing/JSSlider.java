package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Array;
import def.js.Date;
import javascript.swing.MnR.AbstractSliderModelAndRenderer;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;
import static simulation.js.$Globals.parseInt;

/**
 * The javax.swing.JSlider clone
 *
 * @author gianpiero.diblasi
 */
public class JSSlider extends JSComponent {

  public static final int HORIZONTAL = 0;
  public static final int VERTICAL = 1;

  private AbstractSliderModelAndRenderer<?> modelAndRenderer;

  private int orientation;
  private int majorTickSpacing;
  private boolean paintTicks;
  private boolean paintLabels;
  private boolean valueIsAdjusting;

  private final Array<ChangeListener> listeners = new Array<>();

  private final $HTMLElement slider;
  private final $HTMLElement dataList;
  private final String dataListID = "DataList_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  /**
   * Creates the object
   */
  public JSSlider() {
    super(document.createElement("div"));

    this.cssAddClass("jsslider");
    this.cssAddClass("jsslider-horizontal");

    this.slider = ($HTMLElement) document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.addEventListener("input", event -> this.onchange(true));
    this.slider.addEventListener("change", event -> this.onchange(false));
    this.appendNodeChild(this.slider);

    this.dataList = ($HTMLElement) document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.appendNodeChild(this.dataList);

    HTMLElement div = document.createElement("div");
    div.style.display = "none";
    this.appendNodeChild(div);
  }

  /**
   * Clone of javax.swing.JSlider.addChangeListener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private void onchange(boolean b) {
    this.valueIsAdjusting = b;
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Clone of javax.swing.JSlider.getValueIsAdjusting
   *
   * @return true if value is adjusting, false otherwise
   */
  public boolean getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Clone of javax.swing.JSlider.setMaximum
   *
   * @param value The value
   */
  public void setMaximum(int value) {
    this.slider.setAttribute("max", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setMinimum
   *
   * @param value The value
   */
  public void setMinimum(int value) {
    this.slider.setAttribute("min", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setOrientation
   *
   * @param orientation The orientation
   */
  public void setOrientation(int orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsslider-horizontal");
    this.cssRemoveClass("jsslider-vertical");

    switch (orientation) {
      case JSSlider.HORIZONTAL:
        this.cssAddClass("jsslider-horizontal");
        break;
      case JSSlider.VERTICAL:
        this.cssAddClass("jsslider-vertical");
        break;
    }
  }

  /**
   * Clone of javax.swing.JSlider.getOrientation
   *
   * @return The orientation
   */
  public int getOrientation() {
    return this.orientation;
  }

  /**
   * Clone of javax.swing.JSlider.setInverted
   *
   * @param b true to invert the slider, false otherwise
   */
  public void setInverted(boolean b) {
    if (b) {
      this.cssAddClass("jsslider-inverted");
    } else {
      this.cssRemoveClass("jsslider-inverted");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTrack
   *
   * @param b true to paint the track, false otherwise
   */
  public void setPaintTrack(boolean b) {
    if (b) {
      this.slider.classList.remove("no-paint-track");
    } else {
      this.slider.classList.add("no-paint-track");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setValue
   *
   * @param value The value
   */
  public void setValue(int value) {
    this.slider.value = "" + value;
  }

  /**
   * Clone of javax.swing.JSlider.getValue
   *
   * @return The value
   */
  public int getValue() {
    return (int) this.slider.valueAsNumber;
  }

  @Override
  public void setEnabled(boolean b) {
    super.setEnabled(b);

    if (b) {
      this.slider.removeAttribute("disabled");
    } else {
      this.slider.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setMajorTickSpacing
   *
   * @param value The value
   */
  public void setMajorTickSpacing(int value) {
    this.majorTickSpacing = value;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTicks
   *
   * @param b true to paint the ticks, false otherwise
   */
  public void setPaintTicks(boolean b) {
    this.paintTicks = b;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintLabels
   *
   * @param b true to paint the labels, false otherwise
   */
  public void setPaintLabels(boolean b) {
    this.paintLabels = b;
    this.setDatalist();
  }

  private void setDatalist() {
    if (!$exists(this.modelAndRenderer)) {
      this.dataList.textContent = "";
      this.dataList.style.display = "none";

      if (this.paintTicks && $exists(this.majorTickSpacing)) {
        if (this.paintLabels) {
          this.dataList.style.display = "flex";
        }

        for (int tick = parseInt(this.slider.getAttribute("min")); tick <= parseInt(this.slider.getAttribute("max")); tick += this.majorTickSpacing) {
          HTMLElement option = document.createElement("option");
          option.setAttribute("value", "" + tick);
          option.setAttribute("label", "" + tick);
          switch (this.orientation) {
            case JSSlider.HORIZONTAL:
              this.dataList.appendChild(option);
              break;
            case JSSlider.VERTICAL:
              this.dataList.prepend(option);
              break;
          }
        }
      }
    }
  }

  /**
   * Sets the model. When a model is set the following methods have no effect:
   * <ul>
   * <li>setMaximum</li>
   * <li>setMinimum</li>
   * <li>setMajorTickSpacing</li>
   * <li>setPaintTicks</li>
   * <li>setPaintLabels</li>
   * </ul>
   *
   * @param modelAndRenderer The model
   */
  public void setModelAndRenderer(AbstractSliderModelAndRenderer<?> modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setSlider(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
  public AbstractSliderModelAndRenderer<?> getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
