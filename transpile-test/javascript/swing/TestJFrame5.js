/**
 * @author gianpiero.diblasi
 */
class TestJFrame5 extends JFrame {

  /**
   * Creates new form TestFrame3
   */
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
    this.jDialog1 = new JDialog();let jDialog1 = this.jDialog1;
    this.jButton3 = new JButton();let jButton3 = this.jButton3;
    this.jButton4 = new JButton();let jButton4 = this.jButton4;
    this.jPanel9 = new JPanel();let jPanel9 = this.jPanel9;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    jDialog1.setTitle("Dialogo");
    jDialog1.getContentPane().setLayout(new GridLayout(1, 2));
    jButton3.setText("jButton3");
    jDialog1.getContentPane().add(jButton3);
    jButton4.setText("close");
    jButton4.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton4ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jDialog1.getContentPane().add(jButton4);
    jButton1.setText("modal");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel9.add(jButton1);
    this.getContentPane().add(jPanel9, BorderLayout.PAGE_START);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    this.jDialog1.setVisible(true);
  }

  // GEN-LAST:event_jButton1ActionPerformed
   jButton4ActionPerformed(evt) {
    // GEN-FIRST:event_jButton4ActionPerformed
    this.jDialog1.setVisible(false);
  }

  // GEN-LAST:event_jButton4ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jButton1 = null;

   jButton3 = null;

   jButton4 = null;

   jDialog1 = null;

   jPanel9 = null;
  // End of variables declaration//GEN-END:variables
}
