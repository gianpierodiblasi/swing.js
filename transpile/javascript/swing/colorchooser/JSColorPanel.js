/**
 * The panel to show colors
 *
 * @author gianpiero.diblasi
 */
class JSColorPanel extends JSPanel {

   pane = new JSTabbedPane();

   swatchesPanel = new JSColorSwatchesPanel();

   hsvPanel = new JSColorHSVPanel();

   hslPanel = new JSColorHSLPanel();

   yuvPanel = new JSColorYUVPanel();

   rgbPanel = new JSColorRGBPanel();

   cmykPanel = new JSColorCMYKPanel();

   historyPanel = new JSColorHistoryPanel();

   extraTabs = new Array();

   opacity = new JSLabel();

   opacitySlider = new JSSlider();

   opacitySpinner = new JSSpinner();

   colorPreview = new JSColorPreview();

   listeners = new Array();

   currentTab = null;

   valueIsAdjusting = false;

   opacityVisible = true;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.cssAddClass("jscolorpanel");
    this.setLayout(new GridBagLayout());
    this.addPanel(Translations.JSColorChooser_PALETTE, this.swatchesPanel);
    this.addPanel("HSV", this.hsvPanel);
    this.addPanel("HSL", this.hslPanel);
    this.addPanel("YUV", this.yuvPanel);
    this.addPanel("RGB", this.rgbPanel);
    this.addPanel("CMYK", this.cmykPanel);
    this.addPanel(Translations.JSColorChooser_HISTORY, this.historyPanel);
    this.add(this.pane, new GBC(0, 0).w(2).f(GBC.BOTH));
    this.opacity.setText(Translations.JSColorChooser_OPACITY);
    this.add(this.opacity, new GBC(0, 1).a(GBC.WEST));
    this.opacitySlider.setMaximum(255);
    this.opacitySlider.setValue(255);
    this.opacitySlider.getStyle().minWidth = "20rem";
    this.opacitySlider.addChangeListener(event => this.sliderToSpinner(this.opacitySlider, this.opacitySpinner));
    this.add(this.opacitySlider, new GBC(0, 2).w(2).f(GBC.HORIZONTAL));
    this.opacitySpinner.setModel(new SpinnerNumberModel(255, 0, 255, 1));
    this.opacitySpinner.getStyle().minWidth = "3rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    this.opacitySpinner.addChangeListener(event => this.spinnerToSlider(this.opacitySpinner, this.opacitySlider));
    this.add(this.opacitySpinner, new GBC(1, 1).a(GBC.EAST));
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_PREVIEW);
    this.add(label, new GBC(0, 3).a(GBC.WEST).i(5, 0, 2, 0));
    this.colorPreview.setColor(this.getSelectedColor());
    this.add(this.colorPreview, new GBC(0, 4).w(2).f(GBC.HORIZONTAL));
    this.swatchesPanel.addActionListener(event => {
      let c = this.swatchesPanel.getSelectedColor();
      this.hsvPanel.setSelectedColor(c);
      this.hslPanel.setSelectedColor(c);
      this.yuvPanel.setSelectedColor(c);
      this.rgbPanel.setSelectedColor(c);
      this.cmykPanel.setSelectedColor(c);
      this.extraTabs.forEach(tab => tab.setSelectedColor(c));
      this.onchange(false);
    });
    this.addChangeListenerToPanel(this.hsvPanel, this.hslPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsv");
    this.addChangeListenerToPanel(this.hslPanel, this.hsvPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsl");
    this.addChangeListenerToPanel(this.yuvPanel, this.hsvPanel, this.hslPanel, this.rgbPanel, this.cmykPanel, "yuv");
    this.addChangeListenerToPanel(this.rgbPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.cmykPanel, "rgb");
    this.addChangeListenerToPanel(this.cmykPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.rgbPanel, "cmyk");
    this.historyPanel.getStyle().width = "100%";
    this.historyPanel.getStyle().height = "calc(100% - 10px)";
    this.historyPanel.addActionListener(event => {
      let c = this.historyPanel.getSelectedColor();
      this.hsvPanel.setSelectedColor(c);
      this.hslPanel.setSelectedColor(c);
      this.yuvPanel.setSelectedColor(c);
      this.rgbPanel.setSelectedColor(c);
      this.cmykPanel.setSelectedColor(c);
      this.extraTabs.forEach(tab => tab.setSelectedColor(c));
      if (this.opacityVisible) {
        this.opacitySlider.setValue(c.alpha);
        this.opacitySpinner.setValue(c.alpha);
      }
      this.onchange(false);
    });
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
   addExtraTab(title, panel) {
    this.extraTabs.push(panel);
    this.addPanel(title, panel);
    this.addChangeListenerToExtraPanel(this.extraTabs.length - 1);
  }

   addPanel(title, component) {
    let panel = new JSPanel();
    panel.add(component, null);
    this.pane.addTab(title, panel);
  }

   addChangeListenerToPanel(source, dest1, dest2, dest3, dest4, currentTab) {
    source.addChangeListener(event => {
      if (!source.getValueIsAdjusting()) {
        let color = source.getSelectedColor();
        dest1.setSelectedColor(color);
        dest2.setSelectedColor(color);
        dest3.setSelectedColor(color);
        dest4.setSelectedColor(color);
        this.extraTabs.forEach(tab => tab.setSelectedColor(color));
      }
      this.currentTab = currentTab;
      this.onchange(source.getValueIsAdjusting());
    });
  }

   addChangeListenerToExtraPanel(index) {
    let source = this.extraTabs[index];
    source.addChangeListener(event => {
      if (!source.getValueIsAdjusting()) {
        let color = source.getSelectedColor();
        this.hsvPanel.setSelectedColor(color);
        this.hslPanel.setSelectedColor(color);
        this.yuvPanel.setSelectedColor(color);
        this.rgbPanel.setSelectedColor(color);
        this.cmykPanel.setSelectedColor(color);
        this.extraTabs.filter(tab => tab !== source).forEach(tab => tab.setSelectedColor(color));
      }
      this.currentTab = "extratab" + index;
      this.onchange(source.getValueIsAdjusting());
    });
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.onchange(slider.getValueIsAdjusting());
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.onchange(spinner.getValueIsAdjusting());
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    let color = null;
    for (let index = 0; index < this.extraTabs.length; index++) {
      if (this.currentTab === "extratab" + index) {
        color = this.extraTabs[index].getSelectedColor();
      }
    }
    if (!color) {
      switch(this.currentTab) {
        case "hsv":
          color = this.hsvPanel.getSelectedColor();
          break;
        case "hsl":
          color = this.hslPanel.getSelectedColor();
          break;
        case "yuv":
          color = this.yuvPanel.getSelectedColor();
          break;
        case "rgb":
        default:
          color = this.rgbPanel.getSelectedColor();
          break;
        case "cmyk":
          color = this.cmykPanel.getSelectedColor();
          break;
      }
    }
    return new Color(color.red, color.green, color.blue, this.opacityVisible ? this.opacitySlider.getValue() : 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    this.hsvPanel.setSelectedColor(color);
    this.hslPanel.setSelectedColor(color);
    this.yuvPanel.setSelectedColor(color);
    this.rgbPanel.setSelectedColor(color);
    this.cmykPanel.setSelectedColor(color);
    this.extraTabs.forEach(tab => tab.setSelectedColor(color));
    if (this.opacityVisible) {
      this.opacitySlider.setValue(color.alpha);
      this.opacitySpinner.setValue(color.alpha);
    }
    this.colorPreview.setColor(this.getSelectedColor());
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
   setOpacityVisible(b) {
    this.opacityVisible = b;
    if (this.opacityVisible) {
      this.opacity.getStyle().display = "block";
      this.opacitySpinner.getStyle().display = "grid";
      this.opacitySlider.getStyle().display = "flex";
    } else {
      this.opacity.getStyle().display = "none";
      this.opacitySpinner.getStyle().display = "none";
      this.opacitySlider.getStyle().display = "none";
    }
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.colorPreview.setColor(this.getSelectedColor());
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Reloads the color history
   */
   reloadHistory() {
    this.historyPanel.reload();
  }
}
