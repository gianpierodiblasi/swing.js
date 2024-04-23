/**
 * @author gianpiero.diblasi
 */
class TestJFrame2__ extends JFrame {

   modelAndRendererS = null;

   modelAndRendererS2 = null;

   modelAndRendererS3 = null;

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    let modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox2)).setModelAndRenderer(modelAndRendererCB);
    this.modelAndRendererS = new DefaultSliderModelAndRenderer();
    this.modelAndRendererS.addElement("A");
    this.modelAndRendererS.addElement("B");
    this.modelAndRendererS.addElement("C");
    (SwingJS.convert(this.jSlider5)).setModelAndRenderer(this.modelAndRendererS);
    this.modelAndRendererS2 = new HTMLImageSliderModelAndRenderer();
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("A", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("B", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("C", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("D", "../../../swing.png"));
    (SwingJS.convert(this.jSlider6)).setModelAndRenderer(this.modelAndRendererS2);
    this.modelAndRendererS3 = new HTMLImageSliderModelAndRenderer();
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("A", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("B", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("C", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("D", "../../../swing.png"));
    (SwingJS.convert(this.jSlider7)).setModelAndRenderer(this.modelAndRendererS3);
    this.jLabel3.setText(LookAndFeel.CURRENT.getDescription());
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let gridBagConstraints = null;
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.jLabel1 = new JLabel();let jLabel1 = this.jLabel1;
    this.jLabel2 = new JLabel();let jLabel2 = this.jLabel2;
    this.jComboBox1 = new JComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JComboBox();let jComboBox2 = this.jComboBox2;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    this.jRadioButton1 = new JRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jRadioButton2 = new JRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jToggleButton1 = new JToggleButton();let jToggleButton1 = this.jToggleButton1;
    this.jSlider1 = new JSlider();let jSlider1 = this.jSlider1;
    this.jSlider2 = new JSlider();let jSlider2 = this.jSlider2;
    this.jSlider3 = new JSlider();let jSlider3 = this.jSlider3;
    this.jSlider4 = new JSlider();let jSlider4 = this.jSlider4;
    this.jSlider5 = new JSlider();let jSlider5 = this.jSlider5;
    this.jSlider6 = new JSlider();let jSlider6 = this.jSlider6;
    this.jSlider7 = new JSlider();let jSlider7 = this.jSlider7;
    this.jLabel3 = new JLabel();let jLabel3 = this.jLabel3;
    this.jToggleButton2 = new JToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.setTitle("Test JFrame2");
    let layout = new GridBagLayout();
    layout.columnWidths = [0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, ];
    layout.rowHeights = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, ];
    this.getContentPane().setLayout(layout);
    jLabel1.setText("Face:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel1, gridBagConstraints);
    jLabel2.setText("Size:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel2, gridBagConstraints);
    jComboBox1.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.insets = new Insets(5, 5, 5, 5);
    this.getContentPane().add(jComboBox1, gridBagConstraints);
    jComboBox2.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jComboBox2ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.ipadx = 10;
    gridBagConstraints.ipady = 10;
    gridBagConstraints.weightx = 100.0;
    this.getContentPane().add(jComboBox2, gridBagConstraints);
    jCheckBox1.setSelected(true);
    jCheckBox1.setText("Bold");
    jCheckBox1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jCheckBox1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 6;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox1, gridBagConstraints);
    jCheckBox2.setText("Italic");
    jCheckBox2.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 8;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox2, gridBagConstraints);
    jButton1.setText("jButton1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jButton1, gridBagConstraints);
    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setSelected(true);
    jRadioButton1.setText("pomodoro");
    jRadioButton1.setEnabled(false);
    jRadioButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jRadioButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 10;
    this.getContentPane().add(jRadioButton1, gridBagConstraints);
    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("patate");
    jRadioButton2.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jRadioButton2ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 12;
    this.getContentPane().add(jRadioButton2, gridBagConstraints);
    jToggleButton1.setText("jToggleButton1");
    jToggleButton1.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 10;
    this.getContentPane().add(jToggleButton1, gridBagConstraints);
    jSlider1.setMajorTickSpacing(50);
    jSlider1.setMaximum(300);
    jSlider1.setMinimum(100);
    jSlider1.setOrientation(JSlider.VERTICAL);
    jSlider1.setPaintLabels(true);
    jSlider1.setPaintTicks(true);
    jSlider1.setValue(230);
    jSlider1.setInverted(true);
    jSlider1.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider1StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 8;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 15;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    this.getContentPane().add(jSlider1, gridBagConstraints);
    jSlider2.setMajorTickSpacing(50);
    jSlider2.setMaximum(300);
    jSlider2.setMinimum(100);
    jSlider2.setPaintLabels(true);
    jSlider2.setPaintTicks(true);
    jSlider2.setValue(230);
    jSlider2.setEnabled(false);
    jSlider2.setInverted(true);
    jSlider2.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider2StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 16;
    gridBagConstraints.gridwidth = 5;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.getContentPane().add(jSlider2, gridBagConstraints);
    jSlider3.setMajorTickSpacing(50);
    jSlider3.setMaximum(300);
    jSlider3.setMinimum(100);
    jSlider3.setPaintLabels(true);
    jSlider3.setPaintTicks(true);
    jSlider3.setValue(230);
    jSlider3.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider3StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 14;
    gridBagConstraints.gridwidth = 5;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.getContentPane().add(jSlider3, gridBagConstraints);
    jSlider4.setMajorTickSpacing(50);
    jSlider4.setMaximum(300);
    jSlider4.setMinimum(100);
    jSlider4.setOrientation(JSlider.VERTICAL);
    jSlider4.setPaintLabels(true);
    jSlider4.setPaintTicks(true);
    jSlider4.setPaintTrack(false);
    jSlider4.setValue(230);
    jSlider4.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider4StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 6;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 15;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    this.getContentPane().add(jSlider4, gridBagConstraints);
    jSlider5.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider5StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 18;
    gridBagConstraints.gridwidth = 9;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.getContentPane().add(jSlider5, gridBagConstraints);
    jSlider6.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider6StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 20;
    gridBagConstraints.gridwidth = 9;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.getContentPane().add(jSlider6, gridBagConstraints);
    jSlider7.setOrientation(JSlider.VERTICAL);
    jSlider7.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider7StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 10;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 19;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    this.getContentPane().add(jSlider7, gridBagConstraints);
    jLabel3.setText("jLabel3");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 11;
    this.getContentPane().add(jLabel3, gridBagConstraints);
    jToggleButton2.setText("jToggleButton2");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 12;
    this.getContentPane().add(jToggleButton2, gridBagConstraints);
  }

  // </editor-fold>//GEN-END:initComponents
   jCheckBox1ActionPerformed(evt) {
    // GEN-FIRST:event_jCheckBox1ActionPerformed
    this.jCheckBox2.setSelected(this.jCheckBox1.isSelected());
  }

  // GEN-LAST:event_jCheckBox1ActionPerformed
   jComboBox2ActionPerformed(evt) {
    // GEN-FIRST:event_jComboBox2ActionPerformed
    this.jButton1.setText(this.jComboBox2.getSelectedItem().toString());
  }

  // GEN-LAST:event_jComboBox2ActionPerformed
   jRadioButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jRadioButton1ActionPerformed
    this.jButton1.setText(this.jRadioButton1.getText());
  }

  // GEN-LAST:event_jRadioButton1ActionPerformed
   jRadioButton2ActionPerformed(evt) {
    // GEN-FIRST:event_jRadioButton2ActionPerformed
    this.jButton1.setText(this.jRadioButton2.getText());
  }

  // GEN-LAST:event_jRadioButton2ActionPerformed
   jSlider1StateChanged(evt) {
    // GEN-FIRST:event_jSlider1StateChanged
    this.jButton1.setText(this.jSlider1.getValueIsAdjusting() + " " + this.jSlider1.getValue());
  }

  // GEN-LAST:event_jSlider1StateChanged
   jSlider2StateChanged(evt) {
    // GEN-FIRST:event_jSlider2StateChanged
    this.jButton1.setText(this.jSlider2.getValueIsAdjusting() + " " + this.jSlider2.getValue());
  }

  // GEN-LAST:event_jSlider2StateChanged
   jSlider3StateChanged(evt) {
    // GEN-FIRST:event_jSlider3StateChanged
    this.jButton1.setText(this.jSlider3.getValueIsAdjusting() + " " + this.jSlider3.getValue());
  }

  // GEN-LAST:event_jSlider3StateChanged
   jSlider4StateChanged(evt) {
    // GEN-FIRST:event_jSlider4StateChanged
    this.jButton1.setText(this.jSlider4.getValueIsAdjusting() + " " + this.jSlider4.getValue());
  }

  // GEN-LAST:event_jSlider4StateChanged
   jSlider5StateChanged(evt) {
    // GEN-FIRST:event_jSlider5StateChanged
    this.jButton1.setText(this.jSlider5.getValueIsAdjusting() + " " + this.modelAndRendererS.getElementAt(this.jSlider5.getValue()));
  }

  // GEN-LAST:event_jSlider5StateChanged
   jSlider6StateChanged(evt) {
    // GEN-FIRST:event_jSlider6StateChanged
    this.jButton1.setText(this.jSlider6.getValueIsAdjusting() + " " + this.modelAndRendererS2.getElementAt(this.jSlider6.getValue()).getValue());
  }

  // GEN-LAST:event_jSlider6StateChanged
   jSlider7StateChanged(evt) {
    // GEN-FIRST:event_jSlider7StateChanged
    this.jButton1.setText(this.jSlider7.getValueIsAdjusting() + " " + this.modelAndRendererS3.getElementAt(this.jSlider7.getValue()).getValue());
  }

  // GEN-LAST:event_jSlider7StateChanged
  // Variables declaration - do not modify//GEN-BEGIN:variables
   buttonGroup1 = null;

   jButton1 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jLabel1 = null;

   jLabel2 = null;

   jLabel3 = null;

   jRadioButton1 = null;

   jRadioButton2 = null;

   jSlider1 = null;

   jSlider2 = null;

   jSlider3 = null;

   jSlider4 = null;

   jSlider5 = null;

   jSlider6 = null;

   jSlider7 = null;

   jToggleButton1 = null;

   jToggleButton2 = null;
  // End of variables declaration//GEN-END:variables
}
