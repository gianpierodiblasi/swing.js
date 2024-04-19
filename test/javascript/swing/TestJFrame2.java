package javascript.swing;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javascript.swing.MnR.AbstractComboBoxModelAndRenderer;
import javascript.swing.MnR.AbstractSliderModelAndRenderer;
import javascript.swing.MnR.DefaultComboBoxModelAndRenderer;
import javascript.swing.MnR.DefaultSliderModelAndRenderer;
import javascript.swing.MnR.HTMLImageSliderModelAndRenderer;
import javascript.swing.plaf.LookAndFeel;
import javascript.util.AbstractHTMLImageProducer;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JRadioButton;
import javax.swing.JSlider;
import javax.swing.JToggleButton;
import javax.swing.event.ChangeEvent;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame2 extends javax.swing.JFrame {

  private transient AbstractSliderModelAndRenderer<String> modelAndRendererS;
  private transient AbstractSliderModelAndRenderer<AbstractHTMLImageProducer<String>> modelAndRendererS2;
  private transient AbstractSliderModelAndRenderer<AbstractHTMLImageProducer<String>> modelAndRendererS3;
  private static final long serialVersionUID = 1;

  public TestJFrame2() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  @SuppressWarnings("unchecked")
  private void postInitComponents() {
    AbstractComboBoxModelAndRenderer<Integer> modelAndRendererCB = new DefaultComboBoxModelAndRenderer<>();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    ((JSComboBox<Integer>) SwingJS.convert(this.jComboBox2)).setModelAndRenderer(modelAndRendererCB);

    this.modelAndRendererS = new DefaultSliderModelAndRenderer<>();
    this.modelAndRendererS.addElement("A");
    this.modelAndRendererS.addElement("B");
    this.modelAndRendererS.addElement("C");
    ((JSSlider) SwingJS.convert(this.jSlider5)).setModelAndRenderer(this.modelAndRendererS);

    this.modelAndRendererS2 = new HTMLImageSliderModelAndRenderer<>();
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("A", "../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("B", "../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("C", "../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJFrame2HTMLImageProducer("D", "../../swing.png"));
    ((JSSlider) SwingJS.convert(this.jSlider6)).setModelAndRenderer(this.modelAndRendererS2);

    this.modelAndRendererS3 = new HTMLImageSliderModelAndRenderer<>();
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("A", "../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("B", "../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("C", "../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJFrame2HTMLImageProducer("D", "../../swing.png"));
    ((JSSlider) SwingJS.convert(this.jSlider7)).setModelAndRenderer(this.modelAndRendererS3);

    this.jLabel3.setText(LookAndFeel.CURRENT.getDescription());
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {
    GridBagConstraints gridBagConstraints;

    buttonGroup1 = new ButtonGroup();
    jLabel1 = new JLabel();
    jLabel2 = new JLabel();
    jComboBox1 = new JComboBox<>();
    jComboBox2 = new JComboBox<>();
    jCheckBox1 = new JCheckBox();
    jCheckBox2 = new JCheckBox();
    jButton1 = new JButton();
    jRadioButton1 = new JRadioButton();
    jRadioButton2 = new JRadioButton();
    jToggleButton1 = new JToggleButton();
    jSlider1 = new JSlider();
    jSlider2 = new JSlider();
    jSlider3 = new JSlider();
    jSlider4 = new JSlider();
    jSlider5 = new JSlider();
    jSlider6 = new JSlider();
    jSlider7 = new JSlider();
    jLabel3 = new JLabel();
    jToggleButton2 = new JToggleButton();

    setTitle("Test JFrame2");
    GridBagLayout layout = new GridBagLayout();
    layout.columnWidths = new int[] {0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0};
    layout.rowHeights = new int[] {0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0};
    getContentPane().setLayout(layout);

    jLabel1.setText("Face:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    getContentPane().add(jLabel1, gridBagConstraints);

    jLabel2.setText("Size:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    getContentPane().add(jLabel2, gridBagConstraints);

    jComboBox1.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.insets = new Insets(5, 5, 5, 5);
    getContentPane().add(jComboBox1, gridBagConstraints);

    jComboBox2.addActionListener(this::jComboBox2ActionPerformed);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.ipadx = 10;
    gridBagConstraints.ipady = 10;
    gridBagConstraints.weightx = 100.0;
    getContentPane().add(jComboBox2, gridBagConstraints);

    jCheckBox1.setSelected(true);
    jCheckBox1.setText("Bold");
    jCheckBox1.addActionListener(this::jCheckBox1ActionPerformed);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 6;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    getContentPane().add(jCheckBox1, gridBagConstraints);

    jCheckBox2.setText("Italic");
    jCheckBox2.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 8;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    getContentPane().add(jCheckBox2, gridBagConstraints);

    jButton1.setText("jButton1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    getContentPane().add(jButton1, gridBagConstraints);

    buttonGroup1.add(jRadioButton1);
    jRadioButton1.setSelected(true);
    jRadioButton1.setText("pomodoro");
    jRadioButton1.setEnabled(false);
    jRadioButton1.addActionListener(this::jRadioButton1ActionPerformed);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 10;
    getContentPane().add(jRadioButton1, gridBagConstraints);

    buttonGroup1.add(jRadioButton2);
    jRadioButton2.setText("patate");
    jRadioButton2.addActionListener(this::jRadioButton2ActionPerformed);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 12;
    getContentPane().add(jRadioButton2, gridBagConstraints);

    jToggleButton1.setText("jToggleButton1");
    jToggleButton1.setEnabled(false);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 10;
    getContentPane().add(jToggleButton1, gridBagConstraints);

    jSlider1.setMajorTickSpacing(50);
    jSlider1.setMaximum(300);
    jSlider1.setMinimum(100);
    jSlider1.setOrientation(JSlider.VERTICAL);
    jSlider1.setPaintLabels(true);
    jSlider1.setPaintTicks(true);
    jSlider1.setValue(230);
    jSlider1.setInverted(true);
    jSlider1.addChangeListener(this::jSlider1StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 8;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 15;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    getContentPane().add(jSlider1, gridBagConstraints);

    jSlider2.setMajorTickSpacing(50);
    jSlider2.setMaximum(300);
    jSlider2.setMinimum(100);
    jSlider2.setPaintLabels(true);
    jSlider2.setPaintTicks(true);
    jSlider2.setValue(230);
    jSlider2.setEnabled(false);
    jSlider2.setInverted(true);
    jSlider2.addChangeListener(this::jSlider2StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 16;
    gridBagConstraints.gridwidth = 5;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    getContentPane().add(jSlider2, gridBagConstraints);

    jSlider3.setMajorTickSpacing(50);
    jSlider3.setMaximum(300);
    jSlider3.setMinimum(100);
    jSlider3.setPaintLabels(true);
    jSlider3.setPaintTicks(true);
    jSlider3.setValue(230);
    jSlider3.addChangeListener(this::jSlider3StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 14;
    gridBagConstraints.gridwidth = 5;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    getContentPane().add(jSlider3, gridBagConstraints);

    jSlider4.setMajorTickSpacing(50);
    jSlider4.setMaximum(300);
    jSlider4.setMinimum(100);
    jSlider4.setOrientation(JSlider.VERTICAL);
    jSlider4.setPaintLabels(true);
    jSlider4.setPaintTicks(true);
    jSlider4.setPaintTrack(false);
    jSlider4.setValue(230);
    jSlider4.addChangeListener(this::jSlider4StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 6;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 15;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    getContentPane().add(jSlider4, gridBagConstraints);

    jSlider5.addChangeListener(this::jSlider5StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 18;
    gridBagConstraints.gridwidth = 9;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    getContentPane().add(jSlider5, gridBagConstraints);

    jSlider6.addChangeListener(this::jSlider6StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 20;
    gridBagConstraints.gridwidth = 9;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    getContentPane().add(jSlider6, gridBagConstraints);

    jSlider7.setOrientation(JSlider.VERTICAL);
    jSlider7.addChangeListener(this::jSlider7StateChanged);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 10;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 19;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    getContentPane().add(jSlider7, gridBagConstraints);

    jLabel3.setText("jLabel3");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 11;
    getContentPane().add(jLabel3, gridBagConstraints);

    jToggleButton2.setText("jToggleButton2");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 12;
    getContentPane().add(jToggleButton2, gridBagConstraints);
  }// </editor-fold>//GEN-END:initComponents

  private void jCheckBox1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
    this.jCheckBox2.setSelected(this.jCheckBox1.isSelected());
  }//GEN-LAST:event_jCheckBox1ActionPerformed

  private void jComboBox2ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jComboBox2ActionPerformed
    this.jButton1.setText(this.jComboBox2.getSelectedItem().toString());
  }//GEN-LAST:event_jComboBox2ActionPerformed

  private void jRadioButton1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jRadioButton1ActionPerformed
    this.jButton1.setText(this.jRadioButton1.getText());
  }//GEN-LAST:event_jRadioButton1ActionPerformed

  private void jRadioButton2ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jRadioButton2ActionPerformed
    this.jButton1.setText(this.jRadioButton2.getText());
  }//GEN-LAST:event_jRadioButton2ActionPerformed

  private void jSlider1StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider1StateChanged
    this.jButton1.setText(this.jSlider1.getValueIsAdjusting() + " " + this.jSlider1.getValue());
  }//GEN-LAST:event_jSlider1StateChanged

  private void jSlider2StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider2StateChanged
    this.jButton1.setText(this.jSlider2.getValueIsAdjusting() + " " + this.jSlider2.getValue());
  }//GEN-LAST:event_jSlider2StateChanged

  private void jSlider3StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider3StateChanged
    this.jButton1.setText(this.jSlider3.getValueIsAdjusting() + " " + this.jSlider3.getValue());
  }//GEN-LAST:event_jSlider3StateChanged

  private void jSlider4StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider4StateChanged
    this.jButton1.setText(this.jSlider4.getValueIsAdjusting() + " " + this.jSlider4.getValue());
  }//GEN-LAST:event_jSlider4StateChanged

  private void jSlider5StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider5StateChanged
    this.jButton1.setText(this.jSlider5.getValueIsAdjusting() + " " + this.modelAndRendererS.getElementAt(this.jSlider5.getValue()));
  }//GEN-LAST:event_jSlider5StateChanged

  private void jSlider6StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider6StateChanged
    this.jButton1.setText(this.jSlider6.getValueIsAdjusting() + " " + this.modelAndRendererS2.getElementAt(this.jSlider6.getValue()).getValue());
  }//GEN-LAST:event_jSlider6StateChanged

  private void jSlider7StateChanged(ChangeEvent evt) {//GEN-FIRST:event_jSlider7StateChanged
    this.jButton1.setText(this.jSlider7.getValueIsAdjusting() + " " + this.modelAndRendererS3.getElementAt(this.jSlider7.getValue()).getValue());
  }//GEN-LAST:event_jSlider7StateChanged

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private ButtonGroup buttonGroup1;
  private JButton jButton1;
  private JCheckBox jCheckBox1;
  private JCheckBox jCheckBox2;
  private JComboBox<String> jComboBox1;
  private JComboBox<Integer> jComboBox2;
  private JLabel jLabel1;
  private JLabel jLabel2;
  private JLabel jLabel3;
  private JRadioButton jRadioButton1;
  private JRadioButton jRadioButton2;
  private JSlider jSlider1;
  private JSlider jSlider2;
  private JSlider jSlider3;
  private JSlider jSlider4;
  private JSlider jSlider5;
  private JSlider jSlider6;
  private JSlider jSlider7;
  private JToggleButton jToggleButton1;
  private JToggleButton jToggleButton2;
  // End of variables declaration//GEN-END:variables
}
