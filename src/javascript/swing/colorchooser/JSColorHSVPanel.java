package javascript.swing.colorchooser;

import javascript.awt.GridBagConstraints;
import javascript.awt.GridBagLayout;
import javascript.swing.ButtonGroup;
import javascript.swing.JSPanel;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.SpinnerNumberModel;
import javascript.util.Translations;

/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
public class JSColorHSVPanel extends JSPanel {
  
  private final ButtonGroup buttonGroup = new ButtonGroup();
  private final JSRadioButton hue = new JSRadioButton();
  private final JSSlider hueSlider = new JSSlider();
  private final JSSpinner hueSpinner = new JSSpinner();
  private final JSRadioButton saturation = new JSRadioButton();
  private final JSSlider satutationSlider = new JSSlider();
  private final JSSpinner saturationSpinner = new JSSpinner();
  private final JSRadioButton value = new JSRadioButton();
  private final JSSlider valueSlider = new JSSlider();
  private final JSSpinner valueSpinner = new JSSpinner();

//private JSPanel jPanel1;
//  private JSPanel jPanel2;
  public JSColorHSVPanel() {
    super();
    
    GridBagConstraints gridBagConstraints;
    
    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.value);
    
    this.hue.setText(Translations.JSColorChooser_HUE);
    this.hue.setSelected(true);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.hue, gridBagConstraints);
    
    this.saturation.setText(Translations.JSColorChooser_SATURATION);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.saturation, gridBagConstraints);
    
    this.value.setText(Translations.JSColorChooser_VALUE);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.value, gridBagConstraints);
    
    this.hueSlider.setMaximum(360);
    this.hueSlider.setValue(0);
    this.hueSlider.addChangeListener(event -> this.sliderToSpinner(this.hueSlider, this.hueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.weightx = 1.0;
    this.add(this.hueSlider, gridBagConstraints);
    
    this.satutationSlider.setValue(0);
    this.satutationSlider.addChangeListener(event -> this.sliderToSpinner(this.satutationSlider, this.saturationSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.weightx = 1.0;
    this.add(this.satutationSlider, gridBagConstraints);
    
    this.valueSlider.setValue(0);
    this.valueSlider.addChangeListener(event -> this.sliderToSpinner(this.valueSlider, this.valueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.weightx = 1.0;
    this.add(this.valueSlider, gridBagConstraints);
    
    this.hueSpinner.setModel(new SpinnerNumberModel(0, 0, 360, 1));
    this.hueSpinner.addChangeListener(event -> this.spinnerToSlider(this.hueSpinner, this.hueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 0;
    this.add(this.hueSpinner, gridBagConstraints);
    
    this.saturationSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.saturationSpinner.addChangeListener(event -> this.spinnerToSlider(this.saturationSpinner, this.satutationSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 1;
    this.add(this.saturationSpinner, gridBagConstraints);
    
    this.valueSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.valueSpinner.addChangeListener(event -> this.spinnerToSlider(this.valueSpinner, this.valueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 2;
    this.add(this.valueSpinner, gridBagConstraints);

//    jPanel1.setBackground(new Color(255, 255, 0));
//
//    GroupLayout jPanel1Layout = new GroupLayout(jPanel1);
//    jPanel1.setLayout(jPanel1Layout);
//    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING)
//      .addGap(0, 0, Short.MAX_VALUE)
//    );
//    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING)
//      .addGap(0, 0, Short.MAX_VALUE)
//    );
//
//    gridBagConstraints = new GridBagConstraints();
//    gridBagConstraints.gridx = 1;
//    gridBagConstraints.gridy = 0;
//    gridBagConstraints.gridheight = 4;
//    gridBagConstraints.fill = GridBagConstraints.BOTH;
//    gridBagConstraints.weightx = 1.0;
//    gridBagConstraints.weighty = 1.0;
//    add(jPanel1, gridBagConstraints);
//
//    jPanel2.setBackground(new Color(204, 0, 0));
//
//    GroupLayout jPanel2Layout = new GroupLayout(jPanel2);
//    jPanel2.setLayout(jPanel2Layout);
//    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING)
//      .addGap(0, 0, Short.MAX_VALUE)
//    );
//    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING)
//      .addGap(0, 0, Short.MAX_VALUE)
//    );
//
//    gridBagConstraints = new GridBagConstraints();
//    gridBagConstraints.gridx = 0;
//    gridBagConstraints.gridy = 0;
//    gridBagConstraints.gridheight = 4;
//    gridBagConstraints.fill = GridBagConstraints.BOTH;
//    gridBagConstraints.weightx = 5.0;
//    gridBagConstraints.weighty = 1.0;
//    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
//    add(jPanel2, gridBagConstraints);
//    jPanel1 = new JPanel();
//    jPanel2 = new JPanel();
//
//
  }
  
  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
  }
  
  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
  }
}
