package javascript.swing;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame3 extends javax.swing.JFrame {

  private static final long serialVersionUID = 1;

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame3() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  private void postInitComponents() {
    ((JSCheckBox) SwingJS.convert(this.jCheckBox3)).setSwitch();
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    jPanel1 = new JPanel();
    jCheckBox1 = new JCheckBox();
    jCheckBox2 = new JCheckBox();
    jCheckBox3 = new JCheckBox();
    jCheckBox4 = new JCheckBox();
    jPanel2 = new JPanel();
    jCheckBox5 = new JCheckBox();
    jCheckBox6 = new JCheckBox();
    jLabel1 = new JLabel();

    jCheckBox1.setText("jCheckBox1");
    jCheckBox1.addActionListener(this::jCheckBox1ActionPerformed);
    jPanel1.add(jCheckBox1);

    jCheckBox2.setText("jCheckBox2");
    jPanel1.add(jCheckBox2);

    jCheckBox3.setText("jCheckBox3");
    jCheckBox3.addActionListener(this::jCheckBox3ActionPerformed);
    jPanel1.add(jCheckBox3);

    jCheckBox4.setText("jCheckBox4");
    jPanel1.add(jCheckBox4);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);

    jCheckBox5.setText("jCheckBox5");
    jCheckBox5.addActionListener(this::jCheckBox5ActionPerformed);
    jPanel2.add(jCheckBox5);

    jCheckBox6.setText("jCheckBox6");
    jPanel2.add(jCheckBox6);

    jLabel1.setText("jLabel1");
    jPanel2.add(jLabel1);

    getContentPane().add(jPanel2, BorderLayout.PAGE_END);
  }// </editor-fold>//GEN-END:initComponents

  private void jCheckBox1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
    this.jCheckBox2.setSelected(this.jCheckBox1.isSelected());
  }//GEN-LAST:event_jCheckBox1ActionPerformed

  private void jCheckBox3ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox3ActionPerformed
    this.jCheckBox4.setSelected(this.jCheckBox3.isSelected());
  }//GEN-LAST:event_jCheckBox3ActionPerformed

  private void jCheckBox5ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox5ActionPerformed
    this.jCheckBox6.setSelected(this.jCheckBox5.isSelected());
  }//GEN-LAST:event_jCheckBox5ActionPerformed

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JCheckBox jCheckBox1;
  private JCheckBox jCheckBox2;
  private JCheckBox jCheckBox3;
  private JCheckBox jCheckBox4;
  private JCheckBox jCheckBox5;
  private JCheckBox jCheckBox6;
  private JLabel jLabel1;
  private JPanel jPanel1;
  private JPanel jPanel2;
  // End of variables declaration//GEN-END:variables
}
