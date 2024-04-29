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
    (SwingJS.convert(this.jRadioButton5)).setToggle();
    (SwingJS.convert(this.jRadioButton6)).setToggle();
    (SwingJS.convert(this.jRadioButton7)).setToggle();
    (SwingJS.convert(this.jRadioButton8)).setToggle();
    (SwingJS.convert(this.jRadioButton9)).setToggle();
    (SwingJS.convert(this.jRadioButton10)).setToggle();
    (SwingJS.convert(this.jRadioButton11)).setToggle();
    (SwingJS.convert(this.jRadioButton12)).setToggle();
    (SwingJS.convert(this.jRadioButton13)).setToggle();
    (SwingJS.convert(this.jRadioButton14)).setToggle();
    (SwingJS.convert(this.jRadioButton15)).setToggle();
    (SwingJS.convert(this.jRadioButton16)).setToggle();
    (SwingJS.convert(this.jRadioButton17)).setToggle();
    (SwingJS.convert(this.jRadioButton18)).setToggle();
    (SwingJS.convert(this.jRadioButton19)).setToggle();
    (SwingJS.convert(this.jRadioButton20)).setToggle();
    let modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox1)).setModelAndRenderer(modelAndRendererCB);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox2)).setModelAndRenderer(modelAndRendererCB);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox3)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox3.setSelectedItem(30);
    modelAndRendererCB = new DefaultComboBoxModelAndRenderer();
    modelAndRendererCB.addElement(10);
    modelAndRendererCB.addElement(20);
    modelAndRendererCB.addElement(30);
    (SwingJS.convert(this.jComboBox4)).setModelAndRenderer(modelAndRendererCB);
    this.jComboBox4.setSelectedItem(20);
    (SwingJS.convert(this.jSpinner1)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    (SwingJS.convert(this.jSpinner2)).setModel(new SpinnerNumberModel(10, 5, 50, 1));
    (SwingJS.convert(this.jButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton9)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton10)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton11)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton12)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jToggleButton16)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton13)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton14)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton15)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton16)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton17)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton18)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton19)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton20)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jCheckBox5)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jCheckBox6)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jCheckBox7)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jCheckBox8)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton21)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton22)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton23)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
    (SwingJS.convert(this.jRadioButton24)).setIcon(new TestJFrame2HTMLImageProducer("", "../../../swing.png"));
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.buttonGroup2 = new ButtonGroup();let buttonGroup2 = this.buttonGroup2;
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    this.jButton2 = new JButton();let jButton2 = this.jButton2;
    this.jButton3 = new JButton();let jButton3 = this.jButton3;
    this.jButton4 = new JButton();let jButton4 = this.jButton4;
    this.jButton6 = new JButton();let jButton6 = this.jButton6;
    this.jButton7 = new JButton();let jButton7 = this.jButton7;
    this.jButton9 = new JButton();let jButton9 = this.jButton9;
    this.jButton13 = new JButton();let jButton13 = this.jButton13;
    this.jButton14 = new JButton();let jButton14 = this.jButton14;
    this.jButton15 = new JButton();let jButton15 = this.jButton15;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.jButton5 = new JButton();let jButton5 = this.jButton5;
    this.jRadioButton5 = new JRadioButton();let jRadioButton5 = this.jRadioButton5;
    this.jRadioButton7 = new JRadioButton();let jRadioButton7 = this.jRadioButton7;
    this.jRadioButton9 = new JRadioButton();let jRadioButton9 = this.jRadioButton9;
    this.jRadioButton10 = new JRadioButton();let jRadioButton10 = this.jRadioButton10;
    this.jRadioButton13 = new JRadioButton();let jRadioButton13 = this.jRadioButton13;
    this.jRadioButton14 = new JRadioButton();let jRadioButton14 = this.jRadioButton14;
    this.jRadioButton15 = new JRadioButton();let jRadioButton15 = this.jRadioButton15;
    this.jRadioButton16 = new JRadioButton();let jRadioButton16 = this.jRadioButton16;
    this.jButton8 = new JButton();let jButton8 = this.jButton8;
    this.jRadioButton6 = new JRadioButton();let jRadioButton6 = this.jRadioButton6;
    this.jRadioButton8 = new JRadioButton();let jRadioButton8 = this.jRadioButton8;
    this.jRadioButton11 = new JRadioButton();let jRadioButton11 = this.jRadioButton11;
    this.jRadioButton12 = new JRadioButton();let jRadioButton12 = this.jRadioButton12;
    this.jRadioButton17 = new JRadioButton();let jRadioButton17 = this.jRadioButton17;
    this.jRadioButton18 = new JRadioButton();let jRadioButton18 = this.jRadioButton18;
    this.jRadioButton19 = new JRadioButton();let jRadioButton19 = this.jRadioButton19;
    this.jRadioButton20 = new JRadioButton();let jRadioButton20 = this.jRadioButton20;
    this.jPanel3 = new JPanel();let jPanel3 = this.jPanel3;
    this.jButton10 = new JButton();let jButton10 = this.jButton10;
    this.filler2 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));let filler2 = this.filler2;
    this.jButton11 = new JButton();let jButton11 = this.jButton11;
    this.filler1 = new Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));let filler1 = this.filler1;
    this.jButton12 = new JButton();let jButton12 = this.jButton12;
    this.filler3 = new Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));let filler3 = this.filler3;
    this.jPanel5 = new JPanel();let jPanel5 = this.jPanel5;
    this.jComboBox1 = new JComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JComboBox();let jComboBox2 = this.jComboBox2;
    this.jComboBox3 = new JComboBox();let jComboBox3 = this.jComboBox3;
    this.jComboBox4 = new JComboBox();let jComboBox4 = this.jComboBox4;
    this.jSpinner1 = new JSpinner();let jSpinner1 = this.jSpinner1;
    this.jSpinner2 = new JSpinner();let jSpinner2 = this.jSpinner2;
    this.jTextField1 = new JTextField();let jTextField1 = this.jTextField1;
    this.jTextField2 = new JTextField();let jTextField2 = this.jTextField2;
    this.jTextField3 = new JTextField();let jTextField3 = this.jTextField3;
    this.jPanel6 = new JPanel();let jPanel6 = this.jPanel6;
    this.jPanel4 = new JPanel();let jPanel4 = this.jPanel4;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jCheckBox3 = new JCheckBox();let jCheckBox3 = this.jCheckBox3;
    this.jCheckBox4 = new JCheckBox();let jCheckBox4 = this.jCheckBox4;
    this.jRadioButton1 = new JRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jRadioButton2 = new JRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jRadioButton3 = new JRadioButton();let jRadioButton3 = this.jRadioButton3;
    this.jRadioButton4 = new JRadioButton();let jRadioButton4 = this.jRadioButton4;
    this.jCheckBox5 = new JCheckBox();let jCheckBox5 = this.jCheckBox5;
    this.jCheckBox6 = new JCheckBox();let jCheckBox6 = this.jCheckBox6;
    this.jCheckBox7 = new JCheckBox();let jCheckBox7 = this.jCheckBox7;
    this.jCheckBox8 = new JCheckBox();let jCheckBox8 = this.jCheckBox8;
    this.jRadioButton21 = new JRadioButton();let jRadioButton21 = this.jRadioButton21;
    this.jRadioButton22 = new JRadioButton();let jRadioButton22 = this.jRadioButton22;
    this.jRadioButton23 = new JRadioButton();let jRadioButton23 = this.jRadioButton23;
    this.jRadioButton24 = new JRadioButton();let jRadioButton24 = this.jRadioButton24;
    this.jPanel7 = new JPanel();let jPanel7 = this.jPanel7;
    this.jToggleButton1 = new JToggleButton();let jToggleButton1 = this.jToggleButton1;
    this.jToggleButton2 = new JToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.jToggleButton3 = new JToggleButton();let jToggleButton3 = this.jToggleButton3;
    this.jToggleButton4 = new JToggleButton();let jToggleButton4 = this.jToggleButton4;
    this.jToggleButton5 = new JToggleButton();let jToggleButton5 = this.jToggleButton5;
    this.jToggleButton6 = new JToggleButton();let jToggleButton6 = this.jToggleButton6;
    this.jToggleButton7 = new JToggleButton();let jToggleButton7 = this.jToggleButton7;
    this.jToggleButton8 = new JToggleButton();let jToggleButton8 = this.jToggleButton8;
    this.jToggleButton9 = new JToggleButton();let jToggleButton9 = this.jToggleButton9;
    this.jToggleButton10 = new JToggleButton();let jToggleButton10 = this.jToggleButton10;
    this.jToggleButton11 = new JToggleButton();let jToggleButton11 = this.jToggleButton11;
    this.jToggleButton12 = new JToggleButton();let jToggleButton12 = this.jToggleButton12;
    this.jToggleButton13 = new JToggleButton();let jToggleButton13 = this.jToggleButton13;
    this.jToggleButton14 = new JToggleButton();let jToggleButton14 = this.jToggleButton14;
    this.jToggleButton15 = new JToggleButton();let jToggleButton15 = this.jToggleButton15;
    this.jToggleButton16 = new JToggleButton();let jToggleButton16 = this.jToggleButton16;
    this.setTitle("Test Components");
    this.getContentPane().setLayout(new BorderLayout(5, 5));
    jButton1.setText("jButton1");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton1);
    jButton2.setText("jButton2");
    jPanel1.add(jButton2);
    jButton3.setText("jButton3");
    jButton3.setEnabled(false);
    jPanel1.add(jButton3);
    jButton4.setText("jButton1");
    jButton4.setContentAreaFilled(false);
    jButton4.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton4ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton4);
    jButton6.setText("jButton2");
    jButton6.setContentAreaFilled(false);
    jPanel1.add(jButton6);
    jButton7.setText("jButton3");
    jButton7.setContentAreaFilled(false);
    jButton7.setEnabled(false);
    jPanel1.add(jButton7);
    jButton9.setText("jButton1");
    jButton9.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton9ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton9);
    jButton13.setText("jButton3");
    jButton13.setEnabled(false);
    jPanel1.add(jButton13);
    jButton14.setText("jButton1");
    jButton14.setContentAreaFilled(false);
    jButton14.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton14ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton14);
    jButton15.setText("jButton3");
    jButton15.setContentAreaFilled(false);
    jButton15.setEnabled(false);
    jPanel1.add(jButton15);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
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
    jPanel5.add(jComboBox1);
    jComboBox2.setEnabled(false);
    jPanel5.add(jComboBox2);
    jPanel5.add(jComboBox3);
    jComboBox4.setEnabled(false);
    jPanel5.add(jComboBox4);
    jPanel5.add(jSpinner1);
    jSpinner2.setEnabled(false);
    jPanel5.add(jSpinner2);
    jTextField1.setText("jTextField1");
    jTextField1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jTextField1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel5.add(jTextField1);
    jTextField2.setText("jTextField2");
    jTextField2.setEnabled(false);
    jPanel5.add(jTextField2);
    jTextField3.setEditable(false);
    jTextField3.setText("jTextField3");
    jPanel5.add(jTextField3);
    this.getContentPane().add(jPanel5, BorderLayout.CENTER);
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
    this.getContentPane().add(jPanel6, BorderLayout.LINE_END);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton1ActionPerformed(evt) {
    // GEN-FIRST:event_jButton1ActionPerformed
    console.log("OK!!!");
  }

  // GEN-LAST:event_jButton1ActionPerformed
   jButton4ActionPerformed(evt) {
    // GEN-FIRST:event_jButton4ActionPerformed
    // TODO add your handling code here:
  }

  // GEN-LAST:event_jButton4ActionPerformed
   jButton9ActionPerformed(evt) {
    // GEN-FIRST:event_jButton9ActionPerformed
    // TODO add your handling code here:
  }

  // GEN-LAST:event_jButton9ActionPerformed
   jButton14ActionPerformed(evt) {
    // GEN-FIRST:event_jButton14ActionPerformed
    // TODO add your handling code here:
  }

  // GEN-LAST:event_jButton14ActionPerformed
   jTextField1ActionPerformed(evt) {
    // GEN-FIRST:event_jTextField1ActionPerformed
    this.jTextField2.setText(this.jTextField1.getText());
  }

  // GEN-LAST:event_jTextField1ActionPerformed
  // Variables declaration - do not modify//GEN-BEGIN:variables
   buttonGroup1 = null;

   buttonGroup2 = null;

   filler1 = null;

   filler2 = null;

   filler3 = null;

   jButton1 = null;

   jButton10 = null;

   jButton11 = null;

   jButton12 = null;

   jButton13 = null;

   jButton14 = null;

   jButton15 = null;

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

   jCheckBox5 = null;

   jCheckBox6 = null;

   jCheckBox7 = null;

   jCheckBox8 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jComboBox3 = null;

   jComboBox4 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;

   jPanel5 = null;

   jPanel6 = null;

   jPanel7 = null;

   jRadioButton1 = null;

   jRadioButton10 = null;

   jRadioButton11 = null;

   jRadioButton12 = null;

   jRadioButton13 = null;

   jRadioButton14 = null;

   jRadioButton15 = null;

   jRadioButton16 = null;

   jRadioButton17 = null;

   jRadioButton18 = null;

   jRadioButton19 = null;

   jRadioButton2 = null;

   jRadioButton20 = null;

   jRadioButton21 = null;

   jRadioButton22 = null;

   jRadioButton23 = null;

   jRadioButton24 = null;

   jRadioButton3 = null;

   jRadioButton4 = null;

   jRadioButton5 = null;

   jRadioButton6 = null;

   jRadioButton7 = null;

   jRadioButton8 = null;

   jRadioButton9 = null;

   jSpinner1 = null;

   jSpinner2 = null;

   jTextField1 = null;

   jTextField2 = null;

   jTextField3 = null;

   jToggleButton1 = null;

   jToggleButton10 = null;

   jToggleButton11 = null;

   jToggleButton12 = null;

   jToggleButton13 = null;

   jToggleButton14 = null;

   jToggleButton15 = null;

   jToggleButton16 = null;

   jToggleButton2 = null;

   jToggleButton3 = null;

   jToggleButton4 = null;

   jToggleButton5 = null;

   jToggleButton6 = null;

   jToggleButton7 = null;

   jToggleButton8 = null;

   jToggleButton9 = null;
  // End of variables declaration//GEN-END:variables
}
