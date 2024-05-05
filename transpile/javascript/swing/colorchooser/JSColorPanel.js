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

   listeners = new Array();

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
    // 
    // jPanel1.setBackground(new Color(255, 0, 0));
    // gridBagConstraints = new GridBagConstraints();
    // gridBagConstraints.gridx = 0;
    // gridBagConstraints.gridy = 3;
    // gridBagConstraints.gridwidth = 2;
    // add(jPanel1, gridBagConstraints);
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
