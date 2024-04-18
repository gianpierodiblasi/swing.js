package javascript.swing;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javax.swing.ButtonGroup;
import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;

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
    ((JSRadioButton) SwingJS.convert(this.jRadioButton2)).setSwitch();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton3)).setToggle();
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    buttonGroup1 = new ButtonGroup();
    jPanel1 = new JPanel();
    jCheckBox1 = new JCheckBox();
    jCheckBox2 = new JCheckBox();
    jCheckBox3 = new JCheckBox();
    jCheckBox4 = new JCheckBox();
    jPanel2 = new JPanel();
    jRadioButton1 = new JRadioButton();
    jRadioButton2 = new JRadioButton();
    jRadioButton3 = new JRadioButton();
    jPanel3 = new JPanel();
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

    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setText("jRadioButton1");
    jPanel2.add(jRadioButton1);

    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("jRadioButton2");
    jPanel2.add(jRadioButton2);

    buttonGroup1.add(jRadioButton3);
    jRadioButton3.setText("jRadioButton3");
    jPanel2.add(jRadioButton3);

    getContentPane().add(jPanel2, BorderLayout.PAGE_END);

    jLabel1.setText("jLabel1");
    jPanel3.add(jLabel1);

    getContentPane().add(jPanel3, BorderLayout.LINE_START);
  }// </editor-fold>//GEN-END:initComponents

  private void jCheckBox1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
    this.jCheckBox2.setSelected(this.jCheckBox1.isSelected());
  }//GEN-LAST:event_jCheckBox1ActionPerformed

  private void jCheckBox3ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox3ActionPerformed
    this.jCheckBox4.setSelected(this.jCheckBox3.isSelected());
  }//GEN-LAST:event_jCheckBox3ActionPerformed

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private ButtonGroup buttonGroup1;
  private JCheckBox jCheckBox1;
  private JCheckBox jCheckBox2;
  private JCheckBox jCheckBox3;
  private JCheckBox jCheckBox4;
  private JLabel jLabel1;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JRadioButton jRadioButton1;
  private JRadioButton jRadioButton2;
  private JRadioButton jRadioButton3;
  // End of variables declaration//GEN-END:variables
}
