package javascript.swing;

import static def.dom.Globals.console;
import static def.dom.Globals.document;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import javascript.swing.MnR.DefaultComboBoxModelAndRenderer;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JProgressBar;
import javax.swing.JRadioButton;
import javax.swing.JSlider;
import javax.swing.JSpinner;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.JToggleButton;
import javax.swing.event.ChangeEvent;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame7 extends javax.swing.JFrame {

  public TestJFrame7() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  @SuppressWarnings({"StringEquality", "unchecked"})
  private void postInitComponents() {
    ((JSRadioButton) SwingJS.convert(this.jRadioButton9)).setToggle();
    ((JSRadioButton) SwingJS.convert(this.jRadioButton15)).setToggle();

    AbstractComboBoxModelAndRenderer<Integer> modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox1)).setModelAndRenderer(modelAndRendererCB);

    ((JSSpinner) SwingJS.convert(this.jSpinner1)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    ((AbstractButton) SwingJS.convert(this.jButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jToggleButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    ((AbstractButton) SwingJS.convert(this.jRadioButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    buttonGroup2 = new ButtonGroup();
    jPanel1 = new JPanel();
    jButton1 = new JButton();
    jButton9 = new JButton();
    jComboBox1 = new JComboBox<>();
    jSpinner1 = new JSpinner();
    jTextField1 = new JTextField();
    jToggleButton1 = new JToggleButton();
    jToggleButton9 = new JToggleButton();
    jRadioButton9 = new JRadioButton();
    jRadioButton15 = new JRadioButton();
    jProgressBar1 = new JProgressBar();
    jTabbedPane1 = new JTabbedPane();
    jPanel2 = new JPanel();
    jPanel3 = new JPanel();
    jPanel4 = new JPanel();
    jLabel1 = new JLabel();
    jSlider1 = new JSlider();

    setTitle("Test Roundness");
    getContentPane().setLayout(new BorderLayout(5, 5));

    jButton1.setText("jButton1");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton9.setText("jButton1");
    jButton9.addActionListener(this::jButton9ActionPerformed);
    jPanel1.add(jButton9);

    jPanel1.add(jComboBox1);
    jPanel1.add(jSpinner1);

    jTextField1.setText("jTextField1");
    jTextField1.addActionListener(this::jTextField1ActionPerformed);
    jPanel1.add(jTextField1);

    jToggleButton1.setText("jToggleButton1");
    jPanel1.add(jToggleButton1);

    jToggleButton9.setText("jToggleButton1");
    jPanel1.add(jToggleButton9);

    buttonGroup2.add(jRadioButton9);
    jRadioButton9.setText("jRadioButton9");
    jRadioButton9.setContentAreaFilled(false);
    jPanel1.add(jRadioButton9);

    buttonGroup2.add(jRadioButton15);
    jRadioButton15.setText("jRadioButton9");
    jRadioButton15.setContentAreaFilled(false);
    jPanel1.add(jRadioButton15);

    getContentPane().add(jPanel1, BorderLayout.PAGE_END);

    jProgressBar1.setOrientation(1);
    jProgressBar1.setValue(35);
    jProgressBar1.setStringPainted(true);
    getContentPane().add(jProgressBar1, BorderLayout.LINE_END);

    jTabbedPane1.addTab("tab1 hello", jPanel2);
    jTabbedPane1.addTab("tab2", jPanel3);

    getContentPane().add(jTabbedPane1, BorderLayout.CENTER);

    jPanel4.setLayout(new BorderLayout());

    jLabel1.setText("0.5");
    jPanel4.add(jLabel1, BorderLayout.CENTER);

    jSlider1.addChangeListener(this::jSlider1StateChanged);
    jPanel4.add(jSlider1, BorderLayout.SOUTH);

    getContentPane().add(jPanel4, BorderLayout.NORTH);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }//GEN-LAST:event_jButton1ActionPerformed

  private void jButton9ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
    // TODO add your handling code here:
  }//GEN-LAST:event_jButton9ActionPerformed

  private void jTextField1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jTextField1ActionPerformed
  }//GEN-LAST:event_jTextField1ActionPerformed

  private void jSlider1StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider1StateChanged
    double v = this.jSlider1.getValue() / 100.0;

    this.jLabel1.setText("" + v);
    document.head.removeChild(document.head.querySelector("style"));
    SwingJS.instance().roundness(v).build();
  }//GEN-LAST:event_jSlider1StateChanged

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private ButtonGroup buttonGroup2;
  private JButton jButton1;
  private JButton jButton9;
  private JComboBox<Integer> jComboBox1;
  private JLabel jLabel1;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  private JProgressBar jProgressBar1;
  private JRadioButton jRadioButton15;
  private JRadioButton jRadioButton9;
  private JSlider jSlider1;
  private JSpinner jSpinner1;
  private JTabbedPane jTabbedPane1;
  private JTextField jTextField1;
  private JToggleButton jToggleButton1;
  private JToggleButton jToggleButton9;
  // End of variables declaration//GEN-END:variables
}