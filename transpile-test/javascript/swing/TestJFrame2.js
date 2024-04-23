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
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    this.jButton2 = new JButton();let jButton2 = this.jButton2;
    this.jButton3 = new JButton();let jButton3 = this.jButton3;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.jButton4 = new JButton();let jButton4 = this.jButton4;
    this.jButton6 = new JButton();let jButton6 = this.jButton6;
    this.jButton7 = new JButton();let jButton7 = this.jButton7;
    this.jButton9 = new JButton();let jButton9 = this.jButton9;
    this.jButton5 = new JButton();let jButton5 = this.jButton5;
    this.jButton8 = new JButton();let jButton8 = this.jButton8;
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
    jButton4.setText("jButton4");
    jPanel2.add(jButton4);
    jButton6.setText("jButton6");
    jPanel2.add(jButton6);
    jButton7.setText("jButton7");
    jPanel2.add(jButton7);
    jButton9.setText("jButton9");
    jPanel2.add(jButton9);
    jButton5.setText("jButton5");
    jPanel2.add(jButton5);
    jButton8.setText("jButton8");
    jPanel2.add(jButton8);
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
    this.getContentPane().add(jPanel4, BorderLayout.LINE_END);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }

  // GEN-LAST:event_jButton1ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
   filler1 = null;

   filler2 = null;

   filler3 = null;

   jButton1 = null;

   jButton10 = null;

   jButton11 = null;

   jButton12 = null;

   jButton2 = null;

   jButton3 = null;

   jButton4 = null;

   jButton5 = null;

   jButton6 = null;

   jButton7 = null;

   jButton8 = null;

   jButton9 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jCheckBox3 = null;

   jCheckBox4 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;
  // End of variables declaration//GEN-END:variables
}
