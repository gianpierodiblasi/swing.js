package javascript.swing.colorchooser;

import def.js.Array;
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
//
//    jPanel1.setBackground(new Color(255, 0, 0));
//    gridBagConstraints = new GridBagConstraints();
//    gridBagConstraints.gridx = 0;
//    gridBagConstraints.gridy = 3;
//    gridBagConstraints.gridwidth = 2;
//    add(jPanel1, gridBagConstraints);
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
