/**
 * @author gianpiero.diblasi
 */
class TestJFrame2 extends JFrame {

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    (SwingJS.convert(this.jRadioButton5)).setToggle();
    (SwingJS.convert(this.jRadioButton6)).setToggle();
    (SwingJS.convert(this.jRadioButton7)).setToggle();
    (SwingJS.convert(this.jRadioButton8)).setToggle();
    let modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox1)).setModelAndRenderer(modelAndRendererCB);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox2)).setModelAndRenderer(modelAndRendererCB);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox3)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox3.setSelectedItem(30);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox4)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox4.setSelectedItem(20);
    (SwingJS.convert(this.jSpinner1)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    (SwingJS.convert(this.jSpinner2)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.buttonGroup2 = new ButtonGroup();let buttonGroup2 = this.buttonGroup2;
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    this.jButton2 = new JButton();let jButton2 = this.jButton2;
    this.jButton3 = new JButton();let jButton3 = this.jButton3;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.jButton5 = new JButton();let jButton5 = this.jButton5;
    this.jRadioButton5 = new JRadioButton();let jRadioButton5 = this.jRadioButton5;
    this.jRadioButton7 = new JRadioButton();let jRadioButton7 = this.jRadioButton7;
    this.jButton8 = new JButton();let jButton8 = this.jButton8;
    this.jRadioButton6 = new JRadioButton();let jRadioButton6 = this.jRadioButton6;
    this.jRadioButton8 = new JRadioButton();let jRadioButton8 = this.jRadioButton8;
    this.jPanel3 = new JPanel();let jPanel3 = this.jPanel3;
    this.jButton10 = new JButton();let jButton10 = this.jButton10;
    this.filler2 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));let filler2 = this.filler2;
    this.jButton11 = new JButton();let jButton11 = this.jButton11;
    this.filler1 = new Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));let filler1 = this.filler1;
    this.jButton12 = new JButton();let jButton12 = this.jButton12;
    this.filler3 = new Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));let filler3 = this.filler3;
    this.jPanel4 = new JPanel();let jPanel4 = this.jPanel4;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jCheckBox3 = new JCheckBox();let jCheckBox3 = this.jCheckBox3;
    this.jCheckBox4 = new JCheckBox();let jCheckBox4 = this.jCheckBox4;
    this.jRadioButton1 = new JRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jRadioButton2 = new JRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jRadioButton3 = new JRadioButton();let jRadioButton3 = this.jRadioButton3;
    this.jRadioButton4 = new JRadioButton();let jRadioButton4 = this.jRadioButton4;
    this.jToggleButton1 = new JToggleButton();let jToggleButton1 = this.jToggleButton1;
    this.jToggleButton2 = new JToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.jToggleButton3 = new JToggleButton();let jToggleButton3 = this.jToggleButton3;
    this.jToggleButton4 = new JToggleButton();let jToggleButton4 = this.jToggleButton4;
    this.jPanel5 = new JPanel();let jPanel5 = this.jPanel5;
    this.jComboBox1 = new JComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JComboBox();let jComboBox2 = this.jComboBox2;
    this.jComboBox3 = new JComboBox();let jComboBox3 = this.jComboBox3;
    this.jComboBox4 = new JComboBox();let jComboBox4 = this.jComboBox4;
    this.jSpinner1 = new JSpinner();let jSpinner1 = this.jSpinner1;
    this.jSpinner2 = new JSpinner();let jSpinner2 = this.jSpinner2;
    this.setTitle("Test Layouts");
    this.getContentPane().setLayout(new BorderLayout(5, 5));
    jButton1.setText("jButton1");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton1);
    jButton2.setText("jButton2");
    jPanel1.add(jButton2);
    jButton3.setText("jButton3");
    jButton3.setEnabled(false);
    jPanel1.add(jButton3);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    jPanel2.setLayout(new GridLayout(2, 3, 10, 20));
    jButton5.setText("jButton5");
    jPanel2.add(jButton5);
    buttonGroup2.add(jRadioButton5);
    jRadioButton5.setText("jRadioButton5");
    jPanel2.add(jRadioButton5);
    buttonGroup2.add(jRadioButton7);
    jRadioButton7.setSelected(true);
    jRadioButton7.setText("jRadioButton7");
    jRadioButton7.setEnabled(false);
    jPanel2.add(jRadioButton7);
    jButton8.setText("jButton8");
    jPanel2.add(jButton8);
    buttonGroup2.add(jRadioButton6);
    jRadioButton6.setText("jRadioButton6");
    jPanel2.add(jRadioButton6);
    buttonGroup2.add(jRadioButton8);
    jRadioButton8.setText("jRadioButton8");
    jRadioButton8.setEnabled(false);
    jPanel2.add(jRadioButton8);
    this.getContentPane().add(jPanel2, BorderLayout.PAGE_END);
    jPanel3.setLayout(new BoxLayout(jPanel3, BoxLayout.Y_AXIS));
    jButton10.setText("jButton10");
    jPanel3.add(jButton10);
    jPanel3.add(filler2);
    jButton11.setText("jButton11");
    jPanel3.add(jButton11);
    jPanel3.add(filler1);
    jButton12.setText("jButton12");
    jPanel3.add(jButton12);
    jPanel3.add(filler3);
    this.getContentPane().add(jPanel3, BorderLayout.LINE_START);
    jPanel4.setLayout(new BoxLayout(jPanel4, BoxLayout.Y_AXIS));
    jCheckBox1.setText("jCheckBox1");
    jPanel4.add(jCheckBox1);
    jCheckBox2.setText("jCheckBox2");
    jCheckBox2.setEnabled(false);
    jPanel4.add(jCheckBox2);
    jCheckBox3.setSelected(true);
    jCheckBox3.setText("jCheckBox3");
    jPanel4.add(jCheckBox3);
    jCheckBox4.setSelected(true);
    jCheckBox4.setText("jCheckBox4");
    jCheckBox4.setEnabled(false);
    jPanel4.add(jCheckBox4);
    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setText("jRadioButton1");
    jPanel4.add(jRadioButton1);
    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("jRadioButton2");
    jRadioButton2.setEnabled(false);
    jPanel4.add(jRadioButton2);
    buttonGroup1.add(jRadioButton3);
    jRadioButton3.setText("jRadioButton3");
    jPanel4.add(jRadioButton3);
    buttonGroup1.add(jRadioButton4);
    jRadioButton4.setSelected(true);
    jRadioButton4.setText("jRadioButton4");
    jRadioButton4.setEnabled(false);
    jPanel4.add(jRadioButton4);
    jToggleButton1.setText("jToggleButton1");
    jPanel4.add(jToggleButton1);
    jToggleButton2.setText("jToggleButton2");
    jToggleButton2.setEnabled(false);
    jPanel4.add(jToggleButton2);
    jToggleButton3.setSelected(true);
    jToggleButton3.setText("jToggleButton3");
    jPanel4.add(jToggleButton3);
    jToggleButton4.setSelected(true);
    jToggleButton4.setText("jToggleButton4");
    jToggleButton4.setEnabled(false);
    jPanel4.add(jToggleButton4);
    this.getContentPane().add(jPanel4, BorderLayout.LINE_END);
    jPanel5.add(jComboBox1);
    jComboBox2.setEnabled(false);
    jPanel5.add(jComboBox2);
    jPanel5.add(jComboBox3);
    jComboBox4.setEnabled(false);
    jPanel5.add(jComboBox4);
    jPanel5.add(jSpinner1);
    jSpinner2.setEnabled(false);
    jPanel5.add(jSpinner2);
    this.getContentPane().add(jPanel5, BorderLayout.CENTER);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }

  // GEN-LAST:event_jButton1ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
   buttonGroup1 = null;

   buttonGroup2 = null;

   filler1 = null;

   filler2 = null;

   filler3 = null;

   jButton1 = null;

   jButton10 = null;

   jButton11 = null;

   jButton12 = null;

   jButton2 = null;

   jButton3 = null;

   jButton5 = null;

   jButton8 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jCheckBox3 = null;

   jCheckBox4 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jComboBox3 = null;

   jComboBox4 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;

   jPanel5 = null;

   jRadioButton1 = null;

   jRadioButton2 = null;

   jRadioButton3 = null;

   jRadioButton4 = null;

   jRadioButton5 = null;

   jRadioButton6 = null;

   jRadioButton7 = null;

   jRadioButton8 = null;

   jSpinner1 = null;

   jSpinner2 = null;

   jToggleButton1 = null;

   jToggleButton2 = null;

   jToggleButton3 = null;

   jToggleButton4 = null;
  // End of variables declaration//GEN-END:variables
}
