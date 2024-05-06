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

   rgbPanel = new JSColorRGBPanel();

   cmykPanel = new JSColorCMYKPanel();

   extraTabs = new Array();

   opacity = new JSLabel();

   opacitySlider = new JSSlider();

   opacitySpinner = new JSSpinner();

   container = new JSComponent(document.createElement("div"));

   component = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

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
    this.addPanel("RGB", this.rgbPanel);
    this.addPanel("CMYK", this.cmykPanel);
    let gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    this.add(this.pane, gridBagConstraints);
    this.opacity.setText(Translations.JSColorChooser_OPACITY);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.opacity, gridBagConstraints);
    this.opacitySlider.setMaximum(255);
    this.opacitySlider.setValue(255);
    this.opacitySlider.getStyle().minWidth = "20rem";
    this.opacitySlider.addChangeListener(event => this.sliderToSpinner(this.opacitySlider, this.opacitySpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.add(this.opacitySlider, gridBagConstraints);
    this.opacitySpinner.setModel(new SpinnerNumberModel(255, 0, 255, 1));
    this.opacitySpinner.getStyle().minWidth = "3rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    this.opacitySpinner.addChangeListener(event => this.spinnerToSlider(this.opacitySpinner, this.opacitySlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 1;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.opacitySpinner, gridBagConstraints);
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_PREVIEW);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    gridBagConstraints.insets = new Insets(5, 0, 2, 0);
    this.add(label, gridBagConstraints);
    let color = this.getSelectedColor();
    this.component.cssAddClass("jscolorpanel-preview-opaque");
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.cssAddClass("jscolorpanel-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.container.cssAddClass("jscolorpanel-preview");
    this.container.appendChild(this.component);
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.add(this.container, gridBagConstraints);
    this.swatchesPanel.addActionListener(event => {
      let c = this.swatchesPanel.getSelectedColor();
      this.hsvPanel.setSelectedColor(c);
      this.hslPanel.setSelectedColor(c);
      this.rgbPanel.setSelectedColor(c);
      this.cmykPanel.setSelectedColor(c);
      this.extraTabs.forEach(tab => tab.setSelectedColor(c));
      this.onchange(false);
    });
    this.addChangeListenerToPanel(this.hsvPanel, this.hslPanel, this.rgbPanel, this.cmykPanel, "hsv");
    this.addChangeListenerToPanel(this.hslPanel, this.hsvPanel, this.rgbPanel, this.cmykPanel, "hsl");
    this.addChangeListenerToPanel(this.rgbPanel, this.hsvPanel, this.hslPanel, this.cmykPanel, "rgb");
    this.addChangeListenerToPanel(this.cmykPanel, this.hsvPanel, this.hslPanel, this.rgbPanel, "cmyk");
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

   addChangeListenerToPanel(source, dest1, dest2, dest3, currentTab) {
    source.addChangeListener(event => {
      if (!source.getValueIsAdjusting()) {
        let color = source.getSelectedColor();
        dest1.setSelectedColor(color);
        dest2.setSelectedColor(color);
        dest3.setSelectedColor(color);
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
    this.rgbPanel.setSelectedColor(color);
    this.cmykPanel.setSelectedColor(color);
    this.extraTabs.forEach(tab => tab.setSelectedColor(color));
    if (this.opacityVisible) {
      this.opacitySlider.setValue(color.alpha);
      this.opacitySpinner.setValue(color.alpha);
    }
    let c = this.getSelectedColor();
    this.component.getStyle().backgroundColor = c.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
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
    let color = this.getSelectedColor();
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);
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

   setContainerBorder(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl[2] > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }
}
