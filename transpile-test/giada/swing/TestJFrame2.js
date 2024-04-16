/**
 * @author gianpiero.diblasi
 */
class TestJFrame2 extends JFrame {

  static  serialVersionUID = 1;

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    let modelAndRenderer = new DefaultComboBoxModelAndRenderer();
    modelAndRenderer.addElement(10);
    modelAndRenderer.addElement(20);
    modelAndRenderer.addElement(30);
    this.jComboBox2.putClientProperty("model-and-renderer", modelAndRenderer);
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
    this.setTitle("Test JFrame2");
    let layout = new GridBagLayout();
    layout.columnWidths = [0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, ];
    layout.rowHeights = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, ];
    this.getContentPane().setLayout(layout);
    jLabel1.setText("Face:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel1, gridBagConstraints);
    jLabel2.setText("Size:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel2, gridBagConstraints);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.insets = new Insets(5, 5, 5, 5);
    this.getContentPane().add(jComboBox1, gridBagConstraints);
    jComboBox2.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jComboBox2ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
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
    gridBagConstraints.gridy = 4;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox1, gridBagConstraints);
    jCheckBox2.setText("Italic");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 6;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox2, gridBagConstraints);
    jButton1.setText("jButton1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jButton1, gridBagConstraints);
    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setSelected(true);
    jRadioButton1.setText("pomodoro");
    jRadioButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jRadioButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 8;
    this.getContentPane().add(jRadioButton1, gridBagConstraints);
    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("patate");
    jRadioButton2.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jRadioButton2ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 10;
    this.getContentPane().add(jRadioButton2, gridBagConstraints);
    jToggleButton1.setText("jToggleButton1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 8;
    gridBagConstraints.gridheight = 3;
    this.getContentPane().add(jToggleButton1, gridBagConstraints);
    jSlider1.setMajorTickSpacing(50);
    jSlider1.setMaximum(300);
    jSlider1.setMinimum(100);
    jSlider1.setOrientation(JSlider.VERTICAL);
    jSlider1.setPaintLabels(true);
    jSlider1.setPaintTicks(true);
    jSlider1.setValue(230);
    jSlider1.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider1StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 6;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 13;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    this.getContentPane().add(jSlider1, gridBagConstraints);
    jSlider2.setMajorTickSpacing(50);
    jSlider2.setMaximum(300);
    jSlider2.setMinimum(100);
    jSlider2.setPaintLabels(true);
    jSlider2.setPaintTicks(true);
    jSlider2.setValue(230);
    jSlider2.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider2StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 12;
    gridBagConstraints.gridwidth = 5;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    this.getContentPane().add(jSlider2, gridBagConstraints);
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
    // TODO add your handling code here:
  }

  // GEN-LAST:event_jSlider2StateChanged
  // Variables declaration - do not modify//GEN-BEGIN:variables
   buttonGroup1 = null;

   jButton1 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jLabel1 = null;

   jLabel2 = null;

   jRadioButton1 = null;

   jRadioButton2 = null;

   jSlider1 = null;

   jSlider2 = null;

   jToggleButton1 = null;
  // End of variables declaration//GEN-END:variables
}
