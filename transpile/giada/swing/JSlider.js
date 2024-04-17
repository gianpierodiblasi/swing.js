/**
 * The javax.swing.JSlider clone
 *
 * @author gianpiero.diblasi
 */
class JSlider extends JComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

  static  MODEL_AND_RENDERER = "model-and-renderer";

   modelAndRenderer = null;

   majorTickSpacing = 0;

   paintTicks = false;

   paintLabels = false;

   valueIsAdjusting = false;

   listeners = new Array();

   slider = null;

   dataList = null;

   dataListID = "DataList_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("jslider");
    this.element.classList.add("jslider-horizontal");
    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.oninput = (event) => this.onchange(true);
    this.slider.onchange = (event) => this.onchange(false);
    this.element.appendChild(this.slider);
    this.dataList = document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.element.appendChild(this.dataList);
    let div = document.createElement("div");
    div.style.display = "none";
    this.element.appendChild(div);
  }

   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
    return null;
  }

   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

   setMaximum(value) {
    this.slider.setAttribute("max", "" + value);
    this.setDatalist();
  }

   setMinimum(value) {
    this.slider.setAttribute("min", "" + value);
    this.setDatalist();
  }

   setOrientation(orientation) {
    this.element.classList.remove("jslider-horizontal");
    this.element.classList.remove("jslider-vertical");
    switch(orientation) {
      case JSlider.HORIZONTAL:
        this.element.classList.add("jslider-horizontal");
        break;
      case JSlider.VERTICAL:
        this.element.classList.add("jslider-vertical");
        break;
    }
  }

   setInverted(b) {
    if (b) {
      this.element.classList.add("jslider-inverted");
    } else {
      this.element.classList.remove("jslider-inverted");
    }
  }

   setPaintTrack(b) {
    if (b) {
      this.slider.classList.remove("no-paint-track");
    } else {
      this.slider.classList.add("no-paint-track");
    }
  }

   setValue(value) {
    this.slider.setAttribute("value", "" + value);
  }

   getValue() {
    return (this.slider).valueAsNumber;
  }

   setMajorTickSpacing(value) {
    this.majorTickSpacing = value;
    this.setDatalist();
  }

   setPaintTicks(b) {
    this.paintTicks = b;
    this.setDatalist();
  }

   setPaintLabels(b) {
    this.paintLabels = b;
    this.setDatalist();
  }

   setDatalist() {
    if (!this.modelAndRenderer) {
      this.dataList.textContent = "";
      this.dataList.style.display = "none";
      if (this.paintTicks && this.majorTickSpacing) {
        if (this.paintLabels) {
          this.dataList.style.display = "flex";
        }
        for (let tick = parseInt(this.slider.getAttribute("min")); tick <= parseInt(this.slider.getAttribute("max")); tick += this.majorTickSpacing) {
          let option = document.createElement("option");
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
   putClientProperty(key, value) {
    if (JSlider.MODEL_AND_RENDERER === key) {
      this.modelAndRenderer = value;
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
   getClientProperty(key) {
    if (JSlider.MODEL_AND_RENDERER === key) {
      return this.modelAndRenderer;
    } else {
      return super.getClientProperty(key);
    }
  }
}
