package javascript.swing.colorchooser;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GridBagConstraints;
import javascript.awt.GridBagLayout;
import javascript.swing.JSComponent;
import javascript.swing.JSLabel;
import javascript.swing.JSPanel;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.JSTabbedPane;
import javascript.swing.SpinnerNumberModel;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import javascript.util.Translations;
import static simulation.js.$Globals.$typeof;

/**
 * The panel to show colors
 *
 * @author gianpiero.diblasi
 */
public class JSColorPanel extends JSPanel {

  private final JSColorSwatchesPanel swatchesPanel = new JSColorSwatchesPanel();
  private final JSColorHSVPanel hsvPanel = new JSColorHSVPanel();
  private final JSColorHSLPanel hslPanel = new JSColorHSLPanel();
  private final JSColorRGBPanel rgbPanel = new JSColorRGBPanel();
  private final JSColorCMYKPanel cmykPanel = new JSColorCMYKPanel();

  private final JSSlider opacitySlider = new JSSlider();
  private final JSSpinner opacitySpinner = new JSSpinner();
  private final JSComponent component = new JSComponent(document.createElement("div"));

  private final Array<ChangeListener> listeners = new Array<>();

  private boolean valueIsAdjusting;

  /**
   * Creates the object
   */
  public JSColorPanel() {
    super();

    this.swatchesPanel.setID("AAAAA");
    this.setLayout(new GridBagLayout());

    GridBagConstraints gridBagConstraints;

    JSTabbedPane pane = new JSTabbedPane();
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

    JSLabel label = new JSLabel();
    label.setText(Translations.JSColorChooser_OPACITY);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(label, gridBagConstraints);

    this.opacitySlider.setMaximum(255);
    this.opacitySlider.setValue(255);
    this.opacitySlider.getStyle().minWidth = "20rem";
    this.opacitySlider.addChangeListener(event -> this.sliderToSpinner(this.opacitySlider, this.opacitySpinner));
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
    this.opacitySpinner.addChangeListener(event -> this.spinnerToSlider(this.opacitySpinner, this.opacitySlider));
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
    this.add(label, gridBagConstraints);

    this.component.getStyle().height = "2rem";
    this.component.getStyle().backgroundColor = this.getSelectedColor().getRGBA_String();
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.add(this.component, gridBagConstraints);

    this.swatchesPanel.addActionListener(event -> {
      this.hsvPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.hslPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.rgbPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());
      this.cmykPanel.setSelectedColor(this.swatchesPanel.getSelectedColor());

      this.onchange(false);
    });

    this.hsvPanel.addChangeListener(event -> {
      if (!this.hsvPanel.getValueIsAdjusting()) {
        this.hslPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.hsvPanel.getSelectedColor());
      }

      this.onchange(this.hsvPanel.getValueIsAdjusting());
    });

    this.hslPanel.addChangeListener(event -> {
      if (!this.hslPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.hslPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.hslPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.hslPanel.getSelectedColor());
      }

      this.onchange(this.hslPanel.getValueIsAdjusting());
    });

    this.rgbPanel.addChangeListener(event -> {
      if (!this.rgbPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
        this.hslPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
        this.cmykPanel.setSelectedColor(this.rgbPanel.getSelectedColor());
      }

      this.onchange(this.rgbPanel.getValueIsAdjusting());
    });

    this.cmykPanel.addChangeListener(event -> {
      if (!this.cmykPanel.getValueIsAdjusting()) {
        this.hsvPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
        this.hslPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
        this.rgbPanel.setSelectedColor(this.cmykPanel.getSelectedColor());
      }

      this.onchange(this.cmykPanel.getValueIsAdjusting());
    });
  }

  private void addPanel(JSTabbedPane pane, String title, JSComponent component) {
    JSPanel container = new JSPanel();
    container.add(component, null);
    pane.addTab(title, container);
  }

  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
    this.onchange(slider.getValueIsAdjusting());
  }

  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
    this.onchange(spinner.getValueIsAdjusting());
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    Color color = this.rgbPanel.getSelectedColor();
    return new Color(color.red, color.green, color.blue, this.opacitySlider.getValue());
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
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
  public boolean getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private void onchange(boolean b) {
    this.component.getStyle().backgroundColor = this.getSelectedColor().getRGBA_String();
    
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
}
