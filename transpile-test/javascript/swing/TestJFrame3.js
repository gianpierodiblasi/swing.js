/**
 * @author gianpiero.diblasi
 */
class TestJFrame3 extends JFrame {

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
    (SwingJS.convert(this.jCheckBox2)).setSwitch();
    (SwingJS.convert(this.jCheckBox3)).setToggle();
    (SwingJS.convert(this.jRadioButton2)).setSwitch();
    (SwingJS.convert(this.jRadioButton3)).setToggle();
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jCheckBox3 = new JCheckBox();let jCheckBox3 = this.jCheckBox3;
    this.jCheckBox4 = new JCheckBox();let jCheckBox4 = this.jCheckBox4;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.jRadioButton1 = new JRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jRadioButton2 = new JRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jRadioButton3 = new JRadioButton();let jRadioButton3 = this.jRadioButton3;
    this.jPanel3 = new JPanel();let jPanel3 = this.jPanel3;
    this.jLabel1 = new JLabel();let jLabel1 = this.jLabel1;
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
    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setText("jRadioButton1");
    jPanel2.add(jRadioButton1);
    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("jRadioButton2");
    jPanel2.add(jRadioButton2);
    buttonGroup1.add(jRadioButton3);
    jRadioButton3.setText("jRadioButton3");
    jPanel2.add(jRadioButton3);
    this.getContentPane().add(jPanel2, BorderLayout.PAGE_END);
    jLabel1.setText("jLabel1");
    jPanel3.add(jLabel1);
    this.getContentPane().add(jPanel3, BorderLayout.LINE_START);
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
  // Variables declaration - do not modify//GEN-BEGIN:variables
   buttonGroup1 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jCheckBox3 = null;

   jCheckBox4 = null;

   jLabel1 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jRadioButton1 = null;

   jRadioButton2 = null;

   jRadioButton3 = null;
  // End of variables declaration//GEN-END:variables
}
