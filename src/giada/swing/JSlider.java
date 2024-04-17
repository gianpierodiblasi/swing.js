package giada.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import def.js.Array;
import def.js.Date;
import giada.swing.MnR.AbstractSliderModelAndRenderer;
import giada.swing.event.ChangeEvent;
import giada.swing.event.ChangeListener;
import simulation.dom.$HTMLElement;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;
import static simulation.js.$Globals.parseInt;

/**
 * The javax.swing.JSlider clone
 *
 * @author gianpiero.diblasi
 */
public class JSlider extends JComponent {

  public static final int HORIZONTAL = 0;
  public static final int VERTICAL = 1;
  public final static String MODEL_AND_RENDERER = "model-and-renderer";

  private AbstractSliderModelAndRenderer<?> modelAndRenderer;

  private int majorTickSpacing;
  private boolean paintTicks;
  private boolean paintLabels;
  private boolean valueIsAdjusting;

  private final Array<ChangeListener> listeners = new Array<>();

  private final HTMLElement slider;
  private final HTMLElement dataList;
  private final String dataListID = "DataList_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  public JSlider() {
    super();

    this.element = document.createElement("div");
    this.element.classList.add("jslider");
    this.element.classList.add("jslider-horizontal");

    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.oninput = (event) -> this.onchange(true);
    this.slider.onchange = (event) -> this.onchange(false);
    this.element.appendChild(this.slider);

    this.dataList = document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.element.appendChild(this.dataList);

    HTMLElement div = document.createElement("div");
    div.style.display = "none";
    this.element.appendChild(div);
  }

  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private Object onchange(boolean b) {
    this.valueIsAdjusting = b;
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
    return null;
  }

  public boolean getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  public void setMaximum(int value) {
    this.slider.setAttribute("max", "" + value);
    this.setDatalist();
  }

  public void setMinimum(int value) {
    this.slider.setAttribute("min", "" + value);
    this.setDatalist();
  }

  public void setOrientation(int orientation) {
    this.element.classList.remove("jslider-horizontal");
    this.element.classList.remove("jslider-vertical");

    switch (orientation) {
      case JSlider.HORIZONTAL:
        this.element.classList.add("jslider-horizontal");
        break;
      case JSlider.VERTICAL:
        this.element.classList.add("jslider-vertical");
        break;
    }
  }

  public void setInverted(boolean b) {
    if (b) {
      this.element.classList.add("jslider-inverted");
    } else {
      this.element.classList.remove("jslider-inverted");
    }
  }

  public void setPaintTrack(boolean b) {
    if (b) {
      this.slider.classList.remove("no-paint-track");
    } else {
      this.slider.classList.add("no-paint-track");
    }
  }

  public void setValue(int value) {
    this.slider.setAttribute("value", "" + value);
  }

  public int getValue() {
    return (int) (($HTMLElement) this.slider).valueAsNumber;
  }

  public void setMajorTickSpacing(int value) {
    this.majorTickSpacing = value;
    this.setDatalist();
  }

  public void setPaintTicks(boolean b) {
    this.paintTicks = b;
    this.setDatalist();
  }

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
          this.dataList.appendChild(option);
        }
      }
    }
  }

  /**
   * Special use case: in general this method calls the
   * <i>super.putClientProperty</i> implementation, with the following
   * exception: if <i>key</i> = "model-and-renderer" (or the constant value
   * <i>JSlider.MODEL_AND_RENDERER</i>) then this method sets an object able to
   * model and render this JSlider
   *
   * @param key The key
   * @param value The value
   */
  @Override
  @SuppressWarnings("unchecked")
  public void putClientProperty(Object key, Object value) throws Exception {
    if (JSlider.MODEL_AND_RENDERER == key) {
      this.modelAndRenderer = (AbstractSliderModelAndRenderer<?>) value;
      this.modelAndRenderer.setJSlider(this);
    } else {
      super.putClientProperty(key, value);
    }
  }

  /**
   * Special use case: in general this method calls the
   * <i>super.getClientProperty</i> implementation, with the following
   * exception: if <i>key</i> = "model-and-renderer" (or the constant value
   * <i>JSlider.MODEL_AND_RENDERER</i>) then this method gets an object able to
   * model and render this JSlider
   *
   * @param key The key
   * @return The value
   */
  @Override
  public Object getClientProperty(Object key) {
    if (JSlider.MODEL_AND_RENDERER == key) {
      return this.modelAndRenderer;
    } else {
      return super.getClientProperty(key);
    }
  }
}
