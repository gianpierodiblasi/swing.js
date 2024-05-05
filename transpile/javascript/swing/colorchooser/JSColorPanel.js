/**
 * The panel to show colors
 *
 * @author gianpiero.diblasi
 */
class JSColorPanel extends JSPanel {

   swatchesPanel = new JSColorSwatchesPanel();

   hsvPanel = new JSColorHSVPanel();

   hslPanel = new JSColorHSLPanel();

   rgbPanel = new JSColorRGBPanel();

   cmykPanel = new JSColorCMYKPanel();

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
    let gridBagConstraints = null;
    let pane = new JSTabbedPane();
    this.addPanel(pane, Translations.JSColorChooser_PALETTE, this.swatchesPanel);
    this.addPanel(pane, "HSV", this.hsvPanel);
    this.addPanel(pane, "HSL", this.hslPanel);
    this.addPanel(pane, "RGB", this.rgbPanel);
    this.addPanel(pane, "CMYK", this.cmykPanel);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    this.add(pane, gridBagConstraints);
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
      this.hsvPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.hslPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.rgbPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.cmykPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.onchange(false);
    });
    this.hsvPanel.addChangeListener(event => {
      if (!this.hsvPanel.getValueIsAdjusting()) {
        this.hslPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
      }
      this.currentTab = "hsv";
      this.onchange(this.hsvPanel.getValueIsAdjusting());
    });
    this.hslPanel.addChangeListener(event => {
      if (!this.hslPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.hslPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.hslPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.hslPanel.getSelectedColor());
      }
      this.currentTab = "hsl";
      this.onchange(this.hslPanel.getValueIsAdjusting());
    });
    this.rgbPanel.addChangeListener(event => {
      if (!this.rgbPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
        this.hslPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
      }
      this.currentTab = "rgb";
      this.onchange(this.rgbPanel.getValueIsAdjusting());
    });
    this.cmykPanel.addChangeListener(event => {
      if (!this.cmykPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
        this.hslPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
      }
      this.currentTab = "cmyk";
      this.onchange(this.cmykPanel.getValueIsAdjusting());
    });
  }

   addPanel(pane, title, component) {
    let container = new JSPanel();
    container.add(component, null);
    pane.addTab(title, container);
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
    if (this.opacityVisible) {
      this.opacitySlider.setValue(color.alpha);
      this.opacitySpinner.setValue(color.alpha);
    }
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
