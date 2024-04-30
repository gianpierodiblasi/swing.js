package javascript.swing;

import static def.dom.Globals.console;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JProgressBar;
import javax.swing.JRadioButton;
import javax.swing.JSlider;
import javax.swing.JSpinner;
import javax.swing.JToggleButton;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame6 extends javax.swing.JFrame {

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame6() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  private void postInitComponents() {
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    jDialog1 = new JDialog();
    jButton3 = new JButton();
    jButton4 = new JButton();
    jPanel2 = new JPanel();
    jButton2 = new JButton();
    jToggleButton1 = new JToggleButton();
    jCheckBox1 = new JCheckBox();
    jSpinner1 = new JSpinner();
    jRadioButton1 = new JRadioButton();
    jSlider1 = new JSlider();
    jRadioButton2 = new JRadioButton();
    jButton5 = new JButton();
    jToggleButton2 = new JToggleButton();
    jProgressBar1 = new JProgressBar();
    jLabel1 = new JLabel();
    jRadioButton3 = new JRadioButton();
    jLabel2 = new JLabel();
    jRadioButton4 = new JRadioButton();
    jButton6 = new JButton();
    jPanel1 = new JPanel();
    jPanel9 = new JPanel();
    jButton1 = new JButton();
    jButton7 = new JButton();
    jButton8 = new JButton();
    jButton9 = new JButton();
    jButton10 = new JButton();
    jButton11 = new JButton();
    jPanel3 = new JPanel();
    jButton12 = new JButton();
    jButton13 = new JButton();
    jButton14 = new JButton();
    jButton15 = new JButton();
    jButton16 = new JButton();

    jDialog1.setTitle("Dialog");
    jDialog1.getContentPane().setLayout(new GridLayout(1, 2));

    jButton3.setText("jButton3");
    jDialog1.getContentPane().add(jButton3);

    jButton4.setText("close");
    jButton4.addActionListener(this::jButton4ActionPerformed);
    jDialog1.getContentPane().add(jButton4);

    setTitle("Test Dialog");

    jPanel2.setLayout(new GridLayout(5, 5));

    jButton2.setText("jButton2");
    jPanel2.add(jButton2);

    jToggleButton1.setText("jToggleButton1");
    jPanel2.add(jToggleButton1);

    jCheckBox1.setText("jCheckBox1");
    jPanel2.add(jCheckBox1);
    jPanel2.add(jSpinner1);

    jRadioButton1.setText("jRadioButton1");
    jPanel2.add(jRadioButton1);
    jPanel2.add(jSlider1);

    jRadioButton2.setText("jRadioButton2");
    jPanel2.add(jRadioButton2);

    jButton5.setText("jButton5");
    jPanel2.add(jButton5);

    jToggleButton2.setText("jToggleButton2");
    jPanel2.add(jToggleButton2);
    jPanel2.add(jProgressBar1);

    jLabel1.setText("jLabel1");
    jPanel2.add(jLabel1);

    jRadioButton3.setText("jRadioButton3");
    jPanel2.add(jRadioButton3);

    jLabel2.setText("jLabel2");
    jPanel2.add(jLabel2);

    jRadioButton4.setText("jRadioButton4");
    jPanel2.add(jRadioButton4);

    jButton6.setText("jButton6");
    jPanel2.add(jButton6);

    getContentPane().add(jPanel2, BorderLayout.CENTER);

    jPanel1.setLayout(new GridLayout(2, 1));

    jPanel9.setBackground(new Color(255, 255, 102));

    jButton1.setText("modal");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel9.add(jButton1);

    jButton7.setText("message error");
    jButton7.addActionListener(this::jButton7ActionPerformed);
    jPanel9.add(jButton7);

    jButton8.setText("message question");
    jButton8.addActionListener(this::jButton8ActionPerformed);
    jPanel9.add(jButton8);

    jButton9.setText("message info");
    jButton9.addActionListener(this::jButton9ActionPerformed);
    jPanel9.add(jButton9);

    jButton10.setText("message warning");
    jButton10.addActionListener(this::jButton10ActionPerformed);
    jPanel9.add(jButton10);

    jButton11.setText("message info with component");
    jButton11.addActionListener(this::jButton11ActionPerformed);
    jPanel9.add(jButton11);

    jPanel1.add(jPanel9);

    jPanel3.setBackground(new Color(102, 255, 102));

    jButton12.setText("confirm error");
    jButton12.addActionListener(this::jButton12ActionPerformed);
    jPanel3.add(jButton12);

    jButton13.setText("confirm question");
    jButton13.addActionListener(this::jButton13ActionPerformed);
    jPanel3.add(jButton13);

    jButton14.setText("confirm info");
    jButton14.addActionListener(this::jButton14ActionPerformed);
    jPanel3.add(jButton14);

    jButton15.setText("confirm warning");
    jButton15.addActionListener(this::jButton15ActionPerformed);
    jPanel3.add(jButton15);

    jButton16.setText("confirm info with component");
    jButton16.addActionListener(this::jButton16ActionPerformed);
    jPanel3.add(jButton16);

    jPanel1.add(jPanel3);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    this.jDialog1.setVisible(true);
  }//GEN-LAST:event_jButton1ActionPerformed

  private void jButton4ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
    this.jDialog1.setVisible(false);
  }//GEN-LAST:event_jButton4ActionPerformed

  private void jButton7ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
    JSOptionPane.showMessageDialog("Hello World", "Title", JSOptionPane.ERROR_MESSAGE, null);
  }//GEN-LAST:event_jButton7ActionPerformed

  private void jButton8ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton8ActionPerformed
    JSOptionPane.showMessageDialog("Hello World", "Title", JSOptionPane.QUESTION_MESSAGE, null);
  }//GEN-LAST:event_jButton8ActionPerformed

  private void jButton9ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
    JSOptionPane.showMessageDialog("Hello World", "Title", JSOptionPane.INFORMATION_MESSAGE, () -> console.log("closed"));
  }//GEN-LAST:event_jButton9ActionPerformed

  private void jButton10ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton10ActionPerformed
    JSOptionPane.showMessageDialog("Hello World", "Title", JSOptionPane.WARNING_MESSAGE, () -> console.log("closed"));
  }//GEN-LAST:event_jButton10ActionPerformed

  private void jButton11ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton11ActionPerformed
    JPanel panel = new JPanel();

    JLabel label = new JLabel();
    label.setText("Hello");
    label.setBackground(new Color(255, 0, 0));
    panel.add(label);

    label = new JLabel();
    label.setText("World");
    label.setBackground(new Color(255, 255, 0));
    panel.add(label);

    JSOptionPane.showMessageDialog(panel, "Title", JSOptionPane.INFORMATION_MESSAGE, () -> console.log("closed"));
  }//GEN-LAST:event_jButton11ActionPerformed

  private void jButton12ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton12ActionPerformed
    JSOptionPane.showConfirmDialog("Hello World", "Title", JSOptionPane.YES_NO_OPTION, JSOptionPane.ERROR_MESSAGE, value -> console.log(value));
  }//GEN-LAST:event_jButton12ActionPerformed

  private void jButton13ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton13ActionPerformed
    JSOptionPane.showConfirmDialog("Hello World", "Title", JSOptionPane.YES_NO_OPTION, JSOptionPane.QUESTION_MESSAGE, value -> console.log(value));
  }//GEN-LAST:event_jButton13ActionPerformed

  private void jButton14ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton14ActionPerformed
    JSOptionPane.showConfirmDialog("Hello World", "Title", JSOptionPane.YES_NO_CANCEL_OPTION, JSOptionPane.INFORMATION_MESSAGE, value -> console.log(value));
  }//GEN-LAST:event_jButton14ActionPerformed

  private void jButton15ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton15ActionPerformed
    JSOptionPane.showConfirmDialog("Hello World", "Title", JSOptionPane.OK_CANCEL_OPTION, JSOptionPane.WARNING_MESSAGE, value -> console.log(value));
  }//GEN-LAST:event_jButton15ActionPerformed

  private void jButton16ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton16ActionPerformed
    JPanel panel = new JPanel();

    JLabel label = new JLabel();
    label.setText("Hello");
    label.setBackground(new Color(255, 0, 0));
    panel.add(label);

    label = new JLabel();
    label.setText("World");
    label.setBackground(new Color(255, 255, 0));
    panel.add(label);

    JSOptionPane.showConfirmDialog(panel, "Title", JSOptionPane.OK_CANCEL_OPTION, JSOptionPane.WARNING_MESSAGE, value -> console.log(value));
  }//GEN-LAST:event_jButton16ActionPerformed

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JButton jButton1;
  private JButton jButton10;
  private JButton jButton11;
  private JButton jButton12;
  private JButton jButton13;
  private JButton jButton14;
  private JButton jButton15;
  private JButton jButton16;
  private JButton jButton2;
  private JButton jButton3;
  private JButton jButton4;
  private JButton jButton5;
  private JButton jButton6;
  private JButton jButton7;
  private JButton jButton8;
  private JButton jButton9;
  private JCheckBox jCheckBox1;
  private JDialog jDialog1;
  private JLabel jLabel1;
  private JLabel jLabel2;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel9;
  private JProgressBar jProgressBar1;
  private JRadioButton jRadioButton1;
  private JRadioButton jRadioButton2;
  private JRadioButton jRadioButton3;
  private JRadioButton jRadioButton4;
  private JSlider jSlider1;
  private JSpinner jSpinner1;
  private JToggleButton jToggleButton1;
  private JToggleButton jToggleButton2;
  // End of variables declaration//GEN-END:variables
}
