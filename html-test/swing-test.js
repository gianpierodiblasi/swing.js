/**
 * @author gianpiero.diblasi
 */
class TestJSFrame1 extends JSFrame {

  static  serialVersionUID = 1;

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    let jPanel22 = new JSPanel();
    let jButton22 = new JSButton();
    jButton22.setText("jButton2");
    jButton22.addActionListener(new TestJSFrame1ActionListener());
    jPanel22.add(jButton22);
    jPanel22.setBackground(new Color(200, 100, 200));
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    jPanel22.add(new JSButton());
    this.getContentPane().add(jPanel22, BorderLayout.CENTER);
    this.jPanel2.add(new JSButton());
    this.jLabel1.setText(LookAndFeel.CURRENT.getDescription());
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JSPanel();let jPanel1 = this.jPanel1;
    this.jButton1 = new JSButton();let jButton1 = this.jButton1;
    this.jButton5 = new JSButton();let jButton5 = this.jButton5;
    this.jButton6 = new JSButton();let jButton6 = this.jButton6;
    this.jButton7 = new JSButton();let jButton7 = this.jButton7;
    this.jSpinner1 = new JSSpinner();let jSpinner1 = this.jSpinner1;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jButton2 = new JSButton();let jButton2 = this.jButton2;
    this.filler1 = new Filler(new Dimension(10, 0), new Dimension(10, 0), new Dimension(10, 32767));let filler1 = this.filler1;
    this.jButton9 = new JSButton();let jButton9 = this.jButton9;
    this.filler4 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(32767, 0));let filler4 = this.filler4;
    this.jSpinner2 = new JSSpinner();let jSpinner2 = this.jSpinner2;
    this.jButton11 = new JSButton();let jButton11 = this.jButton11;
    this.jPanel3 = new JSPanel();let jPanel3 = this.jPanel3;
    this.jButton3 = new JSButton();let jButton3 = this.jButton3;
    this.jButton10 = new JSButton();let jButton10 = this.jButton10;
    this.jPanel4 = new JSPanel();let jPanel4 = this.jPanel4;
    this.jButton4 = new JSButton();let jButton4 = this.jButton4;
    this.filler2 = new Filler(new Dimension(0, 20), new Dimension(0, 20), new Dimension(32767, 20));let filler2 = this.filler2;
    this.jButton12 = new JSButton();let jButton12 = this.jButton12;
    this.filler3 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));let filler3 = this.filler3;
    this.jButton13 = new JSButton();let jButton13 = this.jButton13;
    this.filler5 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(32767, 32767));let filler5 = this.filler5;
    this.setTitle("Test JSFrame1");
    this.getContentPane().setLayout(new BorderLayout(5, 5));
    jPanel1.setBackground(new Color(255, 255, 0));
    jPanel1.setLayout(new GridLayout(2, 3, 20, 5));
    jButton1.setText("jButton1");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton1);
    jButton5.setText("jButton5");
    jPanel1.add(jButton5);
    jButton6.setText("jButton6");
    jPanel1.add(jButton6);
    jButton7.setText("jButton7");
    jPanel1.add(jButton7);
    jSpinner1.setModel(new SpinnerNumberModel(6, 2, 10, 2));
    jSpinner1.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSpinner1StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jSpinner1);
    jLabel1.setText("jLabel1");
    jPanel1.add(jLabel1);
    this.getContentPane().add(jPanel1, BorderLayout.NORTH);
    jPanel2.setBackground(new Color(0, 102, 102));
    jPanel2.setLayout(new BoxLayout(jPanel2, BoxLayout.LINE_AXIS));
    jButton2.setText("jButton2");
    jPanel2.add(jButton2);
    jPanel2.add(filler1);
    jButton9.setText("jButton9");
    jPanel2.add(jButton9);
    jPanel2.add(filler4);
    jPanel2.add(jSpinner2);
    jButton11.setText("jButton11");
    jPanel2.add(jButton11);
    this.getContentPane().add(jPanel2, BorderLayout.PAGE_END);
    jPanel3.setBackground(new Color(153, 255, 153));
    jPanel3.setLayout(new CardLayout(5, 5));
    jButton3.setText("jButton3");
    jButton3.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton3ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel3.add(jButton3, "card2");
    jButton10.setText("jButton10");
    jButton10.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton10ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel3.add(jButton10, "card3");
    this.getContentPane().add(jPanel3, BorderLayout.LINE_END);
    jPanel4.setBackground(new Color(0, 51, 0));
    jPanel4.setLayout(new BoxLayout(jPanel4, BoxLayout.PAGE_AXIS));
    jButton4.setText("jButton4");
    jPanel4.add(jButton4);
    jPanel4.add(filler2);
    jButton12.setText("jButton12");
    jPanel4.add(jButton12);
    jPanel4.add(filler3);
    jButton13.setText("jButton13");
    jPanel4.add(jButton13);
    jPanel4.add(filler5);
    this.getContentPane().add(jPanel4, BorderLayout.LINE_START);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    console.log("FROM LAMBDA");
  }

  // GEN-LAST:event_jButton1ActionPerformed
   jButton3ActionPerformed(evt) {
    // GEN-FIRST:event_jButton3ActionPerformed
    (this.jPanel3.getLayout()).show(this.jPanel3, "card3");
  }

  // GEN-LAST:event_jButton3ActionPerformed
   jButton10ActionPerformed(evt) {
    // GEN-FIRST:event_jButton10ActionPerformed
    (this.jPanel3.getLayout()).show(this.jPanel3, "card2");
  }

  // GEN-LAST:event_jButton10ActionPerformed
   jSpinner1StateChanged(evt) {
    // GEN-FIRST:event_jSpinner1StateChanged
    this.jButton1.setText("" + this.jSpinner1.getValue());
  }

  // GEN-LAST:event_jSpinner1StateChanged
  // Variables declaration - do not modify//GEN-BEGIN:variables
   filler1 = null;

   filler2 = null;

   filler3 = null;

   filler4 = null;

   filler5 = null;

   jButton1 = null;

   jButton10 = null;

   jButton11 = null;

   jButton12 = null;

   jButton13 = null;

   jButton2 = null;

   jButton3 = null;

   jButton4 = null;

   jButton5 = null;

   jButton6 = null;

   jButton7 = null;

   jButton9 = null;

   jLabel1 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;

   jSpinner1 = null;

   jSpinner2 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame1ActionListener extends ActionListener {

   actionPerformed(event) {
    console.log("FROM LISTENER");
  }
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame2 extends JSFrame {

  // private transient AbstractSliderModelAndRenderer<String> modelAndRendererS;
  // private transient AbstractSliderModelAndRenderer<AbstractHTMLImageProducer<String>> modelAndRendererS2;
  // private transient AbstractSliderModelAndRenderer<AbstractHTMLImageProducer<String>> modelAndRendererS3;
  static  serialVersionUID = 1;

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    // AbstractComboBoxModelAndRenderer<Integer> modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    // modelAndRendererCB.addElement(10);
    // modelAndRendererCB.addElement(20);
    // modelAndRendererCB.addElement(30);
    // this.jComboBox2.putClientProperty("model-and-renderer", modelAndRendererCB);
    // 
    // this.modelAndRendererS = new DefaultSliderModelAndRenderer<>();
    // this.modelAndRendererS.addElement("A");
    // this.modelAndRendererS.addElement("B");
    // this.modelAndRendererS.addElement("C");
    // this.jSlider5.putClientProperty("model-and-renderer", this.modelAndRendererS);
    // 
    // this.modelAndRendererS2 = new HTMLImageSliderModelAndRenderer<>();
    // this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("A", "../../swing.png"));
    // this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("B", "../../swing.png"));
    // this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("C", "../../swing.png"));
    // this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("D", "../../swing.png"));
    // this.jSlider6.putClientProperty("model-and-renderer", this.modelAndRendererS2);
    // 
    // this.modelAndRendererS3 = new HTMLImageSliderModelAndRenderer<>();
    // this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("A", "../../swing.png"));
    // this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("B", "../../swing.png"));
    // this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("C", "../../swing.png"));
    // this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("D", "../../swing.png"));
    // this.jSlider7.putClientProperty("model-and-renderer", this.modelAndRendererS3);
    // 
    // if ($exists(LookAndFeel.CURRENT)) {
    // this.jLabel3.setText(LookAndFeel.CURRENT.getDescription());
    // }
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let gridBagConstraints = null;
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    this.jLabel2 = new JSLabel();let jLabel2 = this.jLabel2;
    this.jComboBox1 = new JComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JComboBox();let jComboBox2 = this.jComboBox2;
    this.jCheckBox1 = new JSCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JSCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jButton1 = new JSButton();let jButton1 = this.jButton1;
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
    this.jLabel3 = new JSLabel();let jLabel3 = this.jLabel3;
    this.jToggleButton2 = new JToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.setTitle("Test JSFrame2");
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
    // this.jButton1.setText(this.jSlider5.getValueIsAdjusting() + " " + this.modelAndRendererS.getElementAt(this.jSlider5.getValue()));
  }

  // GEN-LAST:event_jSlider5StateChanged
   jSlider6StateChanged(evt) {
    // GEN-FIRST:event_jSlider6StateChanged
    // this.jButton1.setText(this.jSlider6.getValueIsAdjusting() + " " + this.modelAndRendererS2.getElementAt(this.jSlider6.getValue()).getValue());
  }

  // GEN-LAST:event_jSlider6StateChanged
   jSlider7StateChanged(evt) {
    // GEN-FIRST:event_jSlider7StateChanged
    // this.jButton1.setText(this.jSlider7.getValueIsAdjusting() + " " + this.modelAndRendererS3.getElementAt(this.jSlider7.getValue()).getValue());
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
/**
 * @author gianpiero.diblasi
 */
class // extends DefaultHTMLImageProducer<String> {
TestJSFrame2HTMLImageProducer {

  constructor(value, src) {
    // super(value, src);
  }
  // @Override
  // public $Image produce() {
  // $Image img = super.produce();
  // switch (this.getValue()) {
  // case "A":
  // break;
  // case "B":
  // img.style.transform = "rotate(15deg) scale(0.8)";
  // break;
  // case "C":
  // img.style.filter = "drop-shadow(2px 4px 6px black)";
  // break;
  // case "D":
  // break;
  // }
  // return img;
  // }
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame3 extends JSFrame {

  static  serialVersionUID = 1;

  /**
   * Creates new form TestFrame3
   */
  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    (SwingJS.convert(this.jCheckBox3)).setSwitch();
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JSPanel();let jPanel1 = this.jPanel1;
    this.jCheckBox1 = new JSCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JSCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jCheckBox3 = new JSCheckBox();let jCheckBox3 = this.jCheckBox3;
    this.jCheckBox4 = new JSCheckBox();let jCheckBox4 = this.jCheckBox4;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jCheckBox5 = new JSCheckBox();let jCheckBox5 = this.jCheckBox5;
    this.jCheckBox6 = new JSCheckBox();let jCheckBox6 = this.jCheckBox6;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    jCheckBox1.setText("jCheckBox1");
    jCheckBox1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jCheckBox1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jCheckBox1);
    jCheckBox2.setText("jCheckBox2");
    jPanel1.add(jCheckBox2);
    jCheckBox3.setText("jCheckBox3");
    jCheckBox3.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jCheckBox3ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jCheckBox3);
    jCheckBox4.setText("jCheckBox4");
    jPanel1.add(jCheckBox4);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    jCheckBox5.setText("jCheckBox5");
    jCheckBox5.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jCheckBox5ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel2.add(jCheckBox5);
    jCheckBox6.setText("jCheckBox6");
    jPanel2.add(jCheckBox6);
    jLabel1.setText("jLabel1");
    jPanel2.add(jLabel1);
    this.getContentPane().add(jPanel2, BorderLayout.PAGE_END);
  }

  // </editor-fold>//GEN-END:initComponents
   jCheckBox1ActionPerformed(evt) {
    // GEN-FIRST:event_jCheckBox1ActionPerformed
    this.jCheckBox2.setSelected(this.jCheckBox1.isSelected());
  }

  // GEN-LAST:event_jCheckBox1ActionPerformed
   jCheckBox3ActionPerformed(evt) {
    // GEN-FIRST:event_jCheckBox3ActionPerformed
    this.jCheckBox4.setSelected(this.jCheckBox3.isSelected());
  }

  // GEN-LAST:event_jCheckBox3ActionPerformed
   jCheckBox5ActionPerformed(evt) {
    // GEN-FIRST:event_jCheckBox5ActionPerformed
    this.jCheckBox6.setSelected(this.jCheckBox5.isSelected());
  }

  // GEN-LAST:event_jCheckBox5ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jCheckBox1 = null;

   jCheckBox2 = null;

   jCheckBox3 = null;

   jCheckBox4 = null;

   jCheckBox5 = null;

   jCheckBox6 = null;

   jLabel1 = null;

   jPanel1 = null;

   jPanel2 = null;
  // End of variables declaration//GEN-END:variables
}
