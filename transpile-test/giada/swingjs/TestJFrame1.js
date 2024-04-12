/**
 * @author gianpiero.diblasi
 */
class TestJFrame1 extends JFrame {

  static  serialVersionUID = 1;

  constructor() {
    super();
    this.initComponents();
    let jPanel2 = new JPanel();
    let jButton2 = new JButton();
    jButton2.setText("jButton2");
    jButton2.addActionListener(new TestJFrame1ActionListener());
    jPanel2.add(jButton2);
    jPanel2.setBackground(new Color(200, 100, 200));
    getContentPane().add(jPanel2, BorderLayout.CENTER);
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let jPanel1 = new JPanel();
    let jButton1 = new JButton();
    let jButton5 = new JButton();
    let jButton6 = new JButton();
    let jButton7 = new JButton();
    let jButton8 = new JButton();
    let jPanel2 = new JPanel();
    let jButton2 = new JButton();
    let jPanel3 = new JPanel();
    let jButton3 = new JButton();
    let jPanel4 = new JPanel();
    let jButton4 = new JButton();
    setTitle("Test JFrame1");
    getContentPane().setLayout(new BorderLayout(5, 5));
    jPanel1.setBackground(new Color(255, 255, 0));
    jPanel1.setLayout(new GridLayout(2, 3, 5, 5));
    jButton1.setText("jButton1");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton1);
    jButton5.setText("jButton5");
    jPanel1.add(jButton5);
    jButton6.setText("jButton6");
    jPanel1.add(jButton6);
    jButton7.setText("jButton7");
    jPanel1.add(jButton7);
    jButton8.setText("jButton8");
    jPanel1.add(jButton8);
    getContentPane().add(jPanel1, BorderLayout.NORTH);
    jPanel2.setBackground(new Color(0, 102, 102));
    jPanel2.setLayout(new FlowLayout(FlowLayout.LEFT));
    jButton2.setText("jButton2");
    jPanel2.add(jButton2);
    getContentPane().add(jPanel2, BorderLayout.PAGE_END);
    jPanel3.setBackground(new Color(153, 255, 153));
    jButton3.setText("jButton3");
    jPanel3.add(jButton3);
    getContentPane().add(jPanel3, BorderLayout.LINE_END);
    jPanel4.setBackground(new Color(0, 51, 0));
    jButton4.setText("jButton4");
    jPanel4.add(jButton4);
    getContentPane().add(jPanel4, BorderLayout.LINE_START);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    console.log("FROM LAMBDA");
  }
  // GEN-LAST:event_jButton1ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
  // End of variables declaration//GEN-END:variables
}
