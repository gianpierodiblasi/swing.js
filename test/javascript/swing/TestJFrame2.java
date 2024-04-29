package javascript.swing;

import static def.dom.Globals.console;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import javascript.swing.MnR.DefaultComboBoxModelAndRenderer;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JSpinner;
import javax.swing.JToggleButton;

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
  
  @SuppressWarnings({"StringEquality", "unchecked"})
  private void postInitComponents() {
    ((JSRadioButton) SwingJS.convert(this.jRadioButton5)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton6)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton7)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton8)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton9)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton10)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton11)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton12)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton13)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton14)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton15)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton16)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton17)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton18)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton19)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton20)).setToggle();
    
    AbstractComboBoxModelAndRenderer<Integer> modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox1)).setModelAndRenderer(modelAndRendererCB);
    
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox2)).setModelAndRenderer(modelAndRendererCB);
    
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox3)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox3.setSelectedItem(30);
    
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox4)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox4.setSelectedItem(20);
    
    ((JSSpinner) SwingJS.convert(this.jSpinner1)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    ((JSSpinner) SwingJS.convert(this.jSpinner2)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    
    ((AbstractButton) SwingJS.convert(this.jButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    
    ((AbstractButton) SwingJS.convert(this.jToggleButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton10)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton11)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton12)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton16)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
   
    ((AbstractButton) SwingJS.convert(this.jRadioButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton16)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton17)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton18)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton19)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton20)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    
    ((AbstractButton) SwingJS.convert(this.jCheckBox5)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jCheckBox6)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jCheckBox7)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jCheckBox8)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    
    ((AbstractButton) SwingJS.convert(this.jRadioButton21)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton22)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton23)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton24)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));    
    
    ((AbstractButton) SwingJS.convert(this.jComboBox1)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));    
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
    jButton4 = new JButton();
    jButton6 = new JButton();
    jButton7 = new JButton();
    jButton9 = new JButton();
    jButton13 = new JButton();
    jButton14 = new JButton();
    jButton15 = new JButton();
    jPanel2 = new JPanel();
    jButton5 = new JButton();
    jRadioButton5 = new JRadioButton();
    jRadioButton7 = new JRadioButton();
    jRadioButton9 = new JRadioButton();
    jRadioButton10 = new JRadioButton();
    jRadioButton13 = new JRadioButton();
    jRadioButton14 = new JRadioButton();
    jRadioButton15 = new JRadioButton();
    jRadioButton16 = new JRadioButton();
    jButton8 = new JButton();
    jRadioButton6 = new JRadioButton();
    jRadioButton8 = new JRadioButton();
    jRadioButton11 = new JRadioButton();
    jRadioButton12 = new JRadioButton();
    jRadioButton17 = new JRadioButton();
    jRadioButton18 = new JRadioButton();
    jRadioButton19 = new JRadioButton();
    jRadioButton20 = new JRadioButton();
    jPanel3 = new JPanel();
    jButton10 = new JButton();
    filler2 = new Box.Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));
    jButton11 = new JButton();
    filler1 = new Box.Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));
    jButton12 = new JButton();
    filler3 = new Box.Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));
    jPanel5 = new JPanel();
    jComboBox1 = new JComboBox<>();
    jComboBox2 = new JComboBox<>();
    jComboBox3 = new JComboBox<>();
    jComboBox4 = new JComboBox<>();
    jSpinner1 = new JSpinner();
    jSpinner2 = new JSpinner();
    jPanel6 = new JPanel();
    jPanel4 = new JPanel();
    jCheckBox1 = new JCheckBox();
    jCheckBox2 = new JCheckBox();
    jCheckBox3 = new JCheckBox();
    jCheckBox4 = new JCheckBox();
    jRadioButton1 = new JRadioButton();
    jRadioButton2 = new JRadioButton();
    jRadioButton3 = new JRadioButton();
    jRadioButton4 = new JRadioButton();
    jCheckBox5 = new JCheckBox();
    jCheckBox6 = new JCheckBox();
    jCheckBox7 = new JCheckBox();
    jCheckBox8 = new JCheckBox();
    jRadioButton21 = new JRadioButton();
    jRadioButton22 = new JRadioButton();
    jRadioButton23 = new JRadioButton();
    jRadioButton24 = new JRadioButton();
    jPanel7 = new JPanel();
    jToggleButton1 = new JToggleButton();
    jToggleButton2 = new JToggleButton();
    jToggleButton3 = new JToggleButton();
    jToggleButton4 = new JToggleButton();
    jToggleButton5 = new JToggleButton();
    jToggleButton6 = new JToggleButton();
    jToggleButton7 = new JToggleButton();
    jToggleButton8 = new JToggleButton();
    jToggleButton9 = new JToggleButton();
    jToggleButton10 = new JToggleButton();
    jToggleButton11 = new JToggleButton();
    jToggleButton12 = new JToggleButton();
    jToggleButton13 = new JToggleButton();
    jToggleButton14 = new JToggleButton();
    jToggleButton15 = new JToggleButton();
    jToggleButton16 = new JToggleButton();

    setTitle("Test Components");
    getContentPane().setLayout(new BorderLayout(5, 5));

    jButton1.setText("jButton1");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton2.setText("jButton2");
    jPanel1.add(jButton2);

    jButton3.setText("jButton3");
    jButton3.setEnabled(false);
    jPanel1.add(jButton3);

    jButton4.setText("jButton1");
    jButton4.setContentAreaFilled(false);
    jButton4.addActionListener(this::jButton4ActionPerformed);
    jPanel1.add(jButton4);

    jButton6.setText("jButton2");
    jButton6.setContentAreaFilled(false);
    jPanel1.add(jButton6);

    jButton7.setText("jButton3");
    jButton7.setContentAreaFilled(false);
    jButton7.setEnabled(false);
    jPanel1.add(jButton7);

    jButton9.setText("jButton1");
    jButton9.addActionListener(this::jButton9ActionPerformed);
    jPanel1.add(jButton9);

    jButton13.setText("jButton3");
    jButton13.setEnabled(false);
    jPanel1.add(jButton13);

    jButton14.setText("jButton1");
    jButton14.setContentAreaFilled(false);
    jButton14.addActionListener(this::jButton14ActionPerformed);
    jPanel1.add(jButton14);

    jButton15.setText("jButton3");
    jButton15.setContentAreaFilled(false);
    jButton15.setEnabled(false);
    jPanel1.add(jButton15);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);

    jPanel2.setLayout(new GridLayout(2, 9, 10, 20));

    jButton5.setText("jButton5");
    jPanel2.add(jButton5);

    buttonGroup2.add(jRadioButton5);
    jRadioButton5.setText("jRadioButton5");
    jPanel2.add(jRadioButton5);

    buttonGroup2.add(jRadioButton7);
    jRadioButton7.setText("jRadioButton7");
    jRadioButton7.setEnabled(false);
    jPanel2.add(jRadioButton7);

    buttonGroup2.add(jRadioButton9);
    jRadioButton9.setText("jRadioButton9");
    jRadioButton9.setContentAreaFilled(false);
    jPanel2.add(jRadioButton9);

    buttonGroup2.add(jRadioButton10);
    jRadioButton10.setText("jRadioButton10");
    jRadioButton10.setContentAreaFilled(false);
    jRadioButton10.setEnabled(false);
    jPanel2.add(jRadioButton10);

    buttonGroup2.add(jRadioButton13);
    jRadioButton13.setText("jRadioButton5");
    jPanel2.add(jRadioButton13);

    buttonGroup2.add(jRadioButton14);
    jRadioButton14.setText("jRadioButton7");
    jRadioButton14.setEnabled(false);
    jPanel2.add(jRadioButton14);

    buttonGroup2.add(jRadioButton15);
    jRadioButton15.setText("jRadioButton9");
    jRadioButton15.setContentAreaFilled(false);
    jPanel2.add(jRadioButton15);

    buttonGroup2.add(jRadioButton16);
    jRadioButton16.setSelected(true);
    jRadioButton16.setText("jRadioButton10");
    jRadioButton16.setContentAreaFilled(false);
    jRadioButton16.setEnabled(false);
    jPanel2.add(jRadioButton16);

    jButton8.setText("jButton8");
    jPanel2.add(jButton8);

    buttonGroup2.add(jRadioButton6);
    jRadioButton6.setText("jRadioButton6");
    jPanel2.add(jRadioButton6);

    buttonGroup2.add(jRadioButton8);
    jRadioButton8.setText("jRadioButton8");
    jRadioButton8.setEnabled(false);
    jPanel2.add(jRadioButton8);

    buttonGroup2.add(jRadioButton11);
    jRadioButton11.setText("jRadioButton11");
    jRadioButton11.setContentAreaFilled(false);
    jPanel2.add(jRadioButton11);

    buttonGroup2.add(jRadioButton12);
    jRadioButton12.setText("jRadioButton12");
    jRadioButton12.setContentAreaFilled(false);
    jRadioButton12.setEnabled(false);
    jPanel2.add(jRadioButton12);

    buttonGroup2.add(jRadioButton17);
    jRadioButton17.setText("jRadioButton6");
    jPanel2.add(jRadioButton17);

    buttonGroup2.add(jRadioButton18);
    jRadioButton18.setText("jRadioButton8");
    jRadioButton18.setEnabled(false);
    jPanel2.add(jRadioButton18);

    buttonGroup2.add(jRadioButton19);
    jRadioButton19.setText("jRadioButton11");
    jRadioButton19.setContentAreaFilled(false);
    jPanel2.add(jRadioButton19);

    buttonGroup2.add(jRadioButton20);
    jRadioButton20.setText("jRadioButton12");
    jRadioButton20.setContentAreaFilled(false);
    jRadioButton20.setEnabled(false);
    jPanel2.add(jRadioButton20);

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

    jPanel5.add(jComboBox1);

    jComboBox2.setEnabled(false);
    jPanel5.add(jComboBox2);

    jPanel5.add(jComboBox3);

    jComboBox4.setEnabled(false);
    jPanel5.add(jComboBox4);
    jPanel5.add(jSpinner1);

    jSpinner2.setEnabled(false);
    jPanel5.add(jSpinner2);

    getContentPane().add(jPanel5, BorderLayout.CENTER);

    jPanel6.setLayout(new GridLayout(1, 2, 10, 0));

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
    jRadioButton4.setText("jRadioButton4");
    jRadioButton4.setEnabled(false);
    jPanel4.add(jRadioButton4);

    jCheckBox5.setText("jCheckBox1");
    jPanel4.add(jCheckBox5);

    jCheckBox6.setText("jCheckBox2");
    jCheckBox6.setEnabled(false);
    jPanel4.add(jCheckBox6);

    jCheckBox7.setSelected(true);
    jCheckBox7.setText("jCheckBox3");
    jPanel4.add(jCheckBox7);

    jCheckBox8.setSelected(true);
    jCheckBox8.setText("jCheckBox4");
    jCheckBox8.setEnabled(false);
    jPanel4.add(jCheckBox8);

    buttonGroup1.add(jRadioButton21);
    jRadioButton21.setText("jRadioButton1");
    jPanel4.add(jRadioButton21);

    buttonGroup1.add(jRadioButton22);
    jRadioButton22.setText("jRadioButton2");
    jRadioButton22.setEnabled(false);
    jPanel4.add(jRadioButton22);

    buttonGroup1.add(jRadioButton23);
    jRadioButton23.setText("jRadioButton3");
    jPanel4.add(jRadioButton23);

    buttonGroup1.add(jRadioButton24);
    jRadioButton24.setSelected(true);
    jRadioButton24.setText("jRadioButton4");
    jRadioButton24.setEnabled(false);
    jPanel4.add(jRadioButton24);

    jPanel6.add(jPanel4);

    jPanel7.setLayout(new BoxLayout(jPanel7, BoxLayout.Y_AXIS));

    jToggleButton1.setText("jToggleButton1");
    jPanel7.add(jToggleButton1);

    jToggleButton2.setText("jToggleButton2");
    jToggleButton2.setEnabled(false);
    jPanel7.add(jToggleButton2);

    jToggleButton3.setSelected(true);
    jToggleButton3.setText("jToggleButton3");
    jPanel7.add(jToggleButton3);

    jToggleButton4.setSelected(true);
    jToggleButton4.setText("jToggleButton4");
    jToggleButton4.setEnabled(false);
    jPanel7.add(jToggleButton4);

    jToggleButton5.setText("jToggleButton1");
    jToggleButton5.setContentAreaFilled(false);
    jPanel7.add(jToggleButton5);

    jToggleButton6.setText("jToggleButton2");
    jToggleButton6.setContentAreaFilled(false);
    jToggleButton6.setEnabled(false);
    jPanel7.add(jToggleButton6);

    jToggleButton7.setSelected(true);
    jToggleButton7.setText("jToggleButton3");
    jToggleButton7.setContentAreaFilled(false);
    jPanel7.add(jToggleButton7);

    jToggleButton8.setSelected(true);
    jToggleButton8.setText("jToggleButton4");
    jToggleButton8.setContentAreaFilled(false);
    jToggleButton8.setEnabled(false);
    jPanel7.add(jToggleButton8);

    jToggleButton9.setText("jToggleButton1");
    jPanel7.add(jToggleButton9);

    jToggleButton10.setText("jToggleButton2");
    jToggleButton10.setEnabled(false);
    jPanel7.add(jToggleButton10);

    jToggleButton11.setSelected(true);
    jToggleButton11.setText("jToggleButton3");
    jPanel7.add(jToggleButton11);

    jToggleButton12.setSelected(true);
    jToggleButton12.setText("jToggleButton4");
    jToggleButton12.setEnabled(false);
    jPanel7.add(jToggleButton12);

    jToggleButton13.setText("jToggleButton1");
    jToggleButton13.setContentAreaFilled(false);
    jPanel7.add(jToggleButton13);

    jToggleButton14.setText("jToggleButton2");
    jToggleButton14.setContentAreaFilled(false);
    jToggleButton14.setEnabled(false);
    jPanel7.add(jToggleButton14);

    jToggleButton15.setSelected(true);
    jToggleButton15.setText("jToggleButton3");
    jToggleButton15.setContentAreaFilled(false);
    jPanel7.add(jToggleButton15);

    jToggleButton16.setSelected(true);
    jToggleButton16.setText("jToggleButton4");
    jToggleButton16.setContentAreaFilled(false);
    jToggleButton16.setEnabled(false);
    jPanel7.add(jToggleButton16);

    jPanel6.add(jPanel7);

    getContentPane().add(jPanel6, BorderLayout.LINE_END);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }//GEN-LAST:event_jButton1ActionPerformed

  private void jButton4ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
    // TODO add your handling code here:
  }//GEN-LAST:event_jButton4ActionPerformed

  private void jButton9ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
    // TODO add your handling code here:
  }//GEN-LAST:event_jButton9ActionPerformed

  private void jButton14ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton14ActionPerformed
    // TODO add your handling code here:
  }//GEN-LAST:event_jButton14ActionPerformed

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
  private JButton jButton13;
  private JButton jButton14;
  private JButton jButton15;
  private JButton jButton2;
  private JButton jButton3;
  private JButton jButton4;
  private JButton jButton5;
  private JButton jButton6;
  private JButton jButton7;
  private JButton jButton8;
  private JButton jButton9;
  private JCheckBox jCheckBox1;
  private JCheckBox jCheckBox2;
  private JCheckBox jCheckBox3;
  private JCheckBox jCheckBox4;
  private JCheckBox jCheckBox5;
  private JCheckBox jCheckBox6;
  private JCheckBox jCheckBox7;
  private JCheckBox jCheckBox8;
  private JComboBox<Integer> jComboBox1;
  private JComboBox<Integer> jComboBox2;
  private JComboBox<Integer> jComboBox3;
  private JComboBox<Integer> jComboBox4;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  private JPanel jPanel5;
  private JPanel jPanel6;
  private JPanel jPanel7;
  private JRadioButton jRadioButton1;
  private JRadioButton jRadioButton10;
  private JRadioButton jRadioButton11;
  private JRadioButton jRadioButton12;
  private JRadioButton jRadioButton13;
  private JRadioButton jRadioButton14;
  private JRadioButton jRadioButton15;
  private JRadioButton jRadioButton16;
  private JRadioButton jRadioButton17;
  private JRadioButton jRadioButton18;
  private JRadioButton jRadioButton19;
  private JRadioButton jRadioButton2;
  private JRadioButton jRadioButton20;
  private JRadioButton jRadioButton21;
  private JRadioButton jRadioButton22;
  private JRadioButton jRadioButton23;
  private JRadioButton jRadioButton24;
  private JRadioButton jRadioButton3;
  private JRadioButton jRadioButton4;
  private JRadioButton jRadioButton5;
  private JRadioButton jRadioButton6;
  private JRadioButton jRadioButton7;
  private JRadioButton jRadioButton8;
  private JRadioButton jRadioButton9;
  private JSpinner jSpinner1;
  private JSpinner jSpinner2;
  private JToggleButton jToggleButton1;
  private JToggleButton jToggleButton10;
  private JToggleButton jToggleButton11;
  private JToggleButton jToggleButton12;
  private JToggleButton jToggleButton13;
  private JToggleButton jToggleButton14;
  private JToggleButton jToggleButton15;
  private JToggleButton jToggleButton16;
  private JToggleButton jToggleButton2;
  private JToggleButton jToggleButton3;
  private JToggleButton jToggleButton4;
  private JToggleButton jToggleButton5;
  private JToggleButton jToggleButton6;
  private JToggleButton jToggleButton7;
  private JToggleButton jToggleButton8;
  private JToggleButton jToggleButton9;
  // End of variables declaration//GEN-END:variables
}
