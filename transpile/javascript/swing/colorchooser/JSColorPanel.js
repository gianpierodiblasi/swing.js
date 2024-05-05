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

   opacitySlider = new JSSlider();

   opacitySpinner = new JSSpinner();

   component = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

   listeners = new Array();

   currentTab = null;

   valueIsAdjusting = false;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.swatchesPanel.setID("AAAAA");
    this.setLayout(new GridBagLayout());
    let gridBagConstraints = null;
    let pane = new JSTabbedPane();
    pane.getStyle().width = "45rem";
    pane.getStyle().height = "22rem";
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
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_OPACITY);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(label, gridBagConstraints);
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
    label = new JSLabel();
    label.setText(Translations.JSColorChooser_PREVIEW);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    gridBagConstraints.insets = new Insets(5, 0, 2, 0);
    this.add(label, gridBagConstraints);
    this.component.getStyle().setProperty("grid-area", "c1");
    this.component.getStyle().borderTopLeftRadius = "var(--roundness)";
    this.component.getStyle().borderBottomLeftRadius = "var(--roundness)";
    this.component.getStyle().backgroundColor = this.getSelectedColor().getRGB_String();
    this.componentOpacity.getStyle().setProperty("grid-area", "c2");
    this.componentOpacity.getStyle().borderTopRightRadius = "var(--roundness)";
    this.componentOpacity.getStyle().borderBottomRightRadius = "var(--roundness)";
    this.componentOpacity.getStyle().backgroundColor = this.getSelectedColor().getRGBA_String();
    let chess = new JSComponent(document.createElement("div"));
    chess.getStyle().setProperty("grid-area", "c2");
    chess.getStyle().borderTopRightRadius = "var(--roundness)";
    chess.getStyle().borderBottomRightRadius = "var(--roundness)";
    chess.getStyle().backgroundPosition = "0 0, 0 1rem";
    chess.getStyle().backgroundRepeat = "repeat-x";
    chess.getStyle().backgroundSize = "2rem 1rem, 2rem 1rem";
    chess.getStyle().backgroundImage = "linear-gradient(90deg, #DDD 1rem, white 1rem), linear-gradient(90deg, white 1rem, #DDD 1rem)";
    let container = new JSComponent(document.createElement("div"));
    container.getStyle().height = "2rem";
    container.getStyle().display = "grid";
    container.getStyle().setProperty("grid-template", "'c1 c2'");
    container.appendChild(this.component);
    container.appendChild(chess);
    container.appendChild(this.componentOpacity);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.add(container, gridBagConstraints);
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
    return new Color(color.red, color.green, color.blue, this.opacitySlider.getValue());
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
    this.component.getStyle().backgroundColor = this.getSelectedColor().getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = this.getSelectedColor().getRGBA_String();
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
}
