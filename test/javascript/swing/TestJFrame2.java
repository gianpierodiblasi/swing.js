package javascript.swing;

import static def.dom.Globals.console;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.GridLayout;
import javascript.SwingJS;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JPanel;
import javax.swing.JRadioButton;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame2 extends javax.swing.JFrame {

  public TestJFrame2() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  @SuppressWarnings("StringEquality")
  private void postInitComponents() {
    ((JSRadioButton) SwingJS.convert(this.jRadioButton5)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton6)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton7)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton8)).setToggle();
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
    buttonGroup2 = new ButtonGroup();
    jPanel1 = new JPanel();
    jButton1 = new JButton();
    jButton2 = new JButton();
    jButton3 = new JButton();
    jPanel2 = new JPanel();
    jButton5 = new JButton();
    jRadioButton5 = new JRadioButton();
    jRadioButton7 = new JRadioButton();
    jButton8 = new JButton();
    jRadioButton6 = new JRadioButton();
    jRadioButton8 = new JRadioButton();
    jPanel3 = new JPanel();
    jButton10 = new JButton();
    filler2 = new Box.Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));
    jButton11 = new JButton();
    filler1 = new Box.Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));
    jButton12 = new JButton();
    filler3 = new Box.Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));
    jPanel4 = new JPanel();
    jCheckBox1 = new JCheckBox();
    jCheckBox2 = new JCheckBox();
    jCheckBox3 = new JCheckBox();
    jCheckBox4 = new JCheckBox();
    jRadioButton1 = new JRadioButton();
    jRadioButton2 = new JRadioButton();
    jRadioButton3 = new JRadioButton();
    jRadioButton4 = new JRadioButton();

    setTitle("Test Layouts");
    getContentPane().setLayout(new BorderLayout(5, 5));

    jButton1.setText("jButton1");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton2.setText("jButton2");
    jPanel1.add(jButton2);

    jButton3.setText("jButton3");
    jButton3.setEnabled(false);
    jPanel1.add(jButton3);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);

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

    getContentPane().add(jPanel2, BorderLayout.PAGE_END);

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

    getContentPane().add(jPanel3, BorderLayout.LINE_START);

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

    getContentPane().add(jPanel4, BorderLayout.LINE_END);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }//GEN-LAST:event_jButton1ActionPerformed

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private ButtonGroup buttonGroup1;
  private ButtonGroup buttonGroup2;
  private Box.Filler filler1;
  private Box.Filler filler2;
  private Box.Filler filler3;
  private JButton jButton1;
  private JButton jButton10;
  private JButton jButton11;
  private JButton jButton12;
  private JButton jButton2;
  private JButton jButton3;
  private JButton jButton5;
  private JButton jButton8;
  private JCheckBox jCheckBox1;
  private JCheckBox jCheckBox2;
  private JCheckBox jCheckBox3;
  private JCheckBox jCheckBox4;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  private JRadioButton jRadioButton1;
  private JRadioButton jRadioButton2;
  private JRadioButton jRadioButton3;
  private JRadioButton jRadioButton4;
  private JRadioButton jRadioButton5;
  private JRadioButton jRadioButton6;
  private JRadioButton jRadioButton7;
  private JRadioButton jRadioButton8;
  // End of variables declaration//GEN-END:variables
}
