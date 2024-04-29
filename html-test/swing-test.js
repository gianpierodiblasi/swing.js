/**
 * @author gianpiero.diblasi
 */
class TestJSFrame1 extends JSFrame {

   card = "card2";

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    setInterval(() => {
      this.card = this.card === "card2" ? "card3" : "card2";
      (this.jPanel4.getLayout()).show(this.jPanel4, this.card);
    }, 2000);
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JSPanel();let jPanel1 = this.jPanel1;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    this.jLabel2 = new JSLabel();let jLabel2 = this.jLabel2;
    this.jLabel3 = new JSLabel();let jLabel3 = this.jLabel3;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jLabel4 = new JSLabel();let jLabel4 = this.jLabel4;
    this.jLabel6 = new JSLabel();let jLabel6 = this.jLabel6;
    this.jLabel8 = new JSLabel();let jLabel8 = this.jLabel8;
    this.jLabel7 = new JSLabel();let jLabel7 = this.jLabel7;
    this.jLabel5 = new JSLabel();let jLabel5 = this.jLabel5;
    this.jLabel9 = new JSLabel();let jLabel9 = this.jLabel9;
    this.jPanel3 = new JSPanel();let jPanel3 = this.jPanel3;
    this.jLabel10 = new JSLabel();let jLabel10 = this.jLabel10;
    this.filler2 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));let filler2 = this.filler2;
    this.jLabel11 = new JSLabel();let jLabel11 = this.jLabel11;
    this.filler1 = new Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));let filler1 = this.filler1;
    this.jLabel12 = new JSLabel();let jLabel12 = this.jLabel12;
    this.filler3 = new Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));let filler3 = this.filler3;
    this.jPanel4 = new JSPanel();let jPanel4 = this.jPanel4;
    this.jLabel13 = new JSLabel();let jLabel13 = this.jLabel13;
    this.jLabel14 = new JSLabel();let jLabel14 = this.jLabel14;
    this.setTitle("Test Layouts");
    this.getContentPane().setLayout(new BorderLayout(5, 5));
    jLabel1.setText("jLabel1");
    jPanel1.add(jLabel1);
    jLabel2.setText("jLabel2");
    jPanel1.add(jLabel2);
    jLabel3.setText("jLabel3");
    jPanel1.add(jLabel3);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    jPanel2.setLayout(new GridLayout(2, 3, 10, 20));
    jLabel4.setText("jLabel4");
    jPanel2.add(jLabel4);
    jLabel6.setText("jLabel6");
    jPanel2.add(jLabel6);
    jLabel8.setText("jLabel8");
    jPanel2.add(jLabel8);
    jLabel7.setText("jLabel7");
    jPanel2.add(jLabel7);
    jLabel5.setText("jLabel5");
    jPanel2.add(jLabel5);
    jLabel9.setText("jLabel9");
    jPanel2.add(jLabel9);
    this.getContentPane().add(jPanel2, BorderLayout.PAGE_END);
    jPanel3.setLayout(new BoxLayout(jPanel3, BoxLayout.Y_AXIS));
    jLabel10.setText("jLabel10");
    jPanel3.add(jLabel10);
    jPanel3.add(filler2);
    jLabel11.setText("jLabel11");
    jPanel3.add(jLabel11);
    jPanel3.add(filler1);
    jLabel12.setText("jLabel12");
    jPanel3.add(jLabel12);
    jPanel3.add(filler3);
    this.getContentPane().add(jPanel3, BorderLayout.LINE_START);
    jPanel4.setLayout(new CardLayout());
    jLabel13.setBackground(new Color(204, 255, 0));
    jLabel13.setText("jLabel13");
    jPanel4.add(jLabel13, "card2");
    jLabel14.setBackground(new Color(255, 102, 153));
    jLabel14.setText("jLabel14");
    jPanel4.add(jLabel14, "card3");
    this.getContentPane().add(jPanel4, BorderLayout.LINE_END);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   filler1 = null;

   filler2 = null;

   filler3 = null;

   jLabel1 = null;

   jLabel10 = null;

   jLabel11 = null;

   jLabel12 = null;

   jLabel13 = null;

   jLabel14 = null;

   jLabel2 = null;

   jLabel3 = null;

   jLabel4 = null;

   jLabel5 = null;

   jLabel6 = null;

   jLabel7 = null;

   jLabel8 = null;

   jLabel9 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame2 extends JSFrame {

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
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.buttonGroup1 = new ButtonGroup();let buttonGroup1 = this.buttonGroup1;
    this.buttonGroup2 = new ButtonGroup();let buttonGroup2 = this.buttonGroup2;
    this.jPanel1 = new JSPanel();let jPanel1 = this.jPanel1;
    this.jButton1 = new JSButton();let jButton1 = this.jButton1;
    this.jButton2 = new JSButton();let jButton2 = this.jButton2;
    this.jButton3 = new JSButton();let jButton3 = this.jButton3;
    this.jButton4 = new JSButton();let jButton4 = this.jButton4;
    this.jButton6 = new JSButton();let jButton6 = this.jButton6;
    this.jButton7 = new JSButton();let jButton7 = this.jButton7;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jButton5 = new JSButton();let jButton5 = this.jButton5;
    this.jRadioButton5 = new JSRadioButton();let jRadioButton5 = this.jRadioButton5;
    this.jRadioButton7 = new JSRadioButton();let jRadioButton7 = this.jRadioButton7;
    this.jRadioButton9 = new JSRadioButton();let jRadioButton9 = this.jRadioButton9;
    this.jRadioButton10 = new JSRadioButton();let jRadioButton10 = this.jRadioButton10;
    this.jButton8 = new JSButton();let jButton8 = this.jButton8;
    this.jRadioButton6 = new JSRadioButton();let jRadioButton6 = this.jRadioButton6;
    this.jRadioButton8 = new JSRadioButton();let jRadioButton8 = this.jRadioButton8;
    this.jRadioButton11 = new JSRadioButton();let jRadioButton11 = this.jRadioButton11;
    this.jRadioButton12 = new JSRadioButton();let jRadioButton12 = this.jRadioButton12;
    this.jPanel3 = new JSPanel();let jPanel3 = this.jPanel3;
    this.jButton10 = new JSButton();let jButton10 = this.jButton10;
    this.filler2 = new Filler(new Dimension(0, 0), new Dimension(0, 0), new Dimension(0, 32767));let filler2 = this.filler2;
    this.jButton11 = new JSButton();let jButton11 = this.jButton11;
    this.filler1 = new Filler(new Dimension(0, 30), new Dimension(0, 30), new Dimension(32767, 30));let filler1 = this.filler1;
    this.jButton12 = new JSButton();let jButton12 = this.jButton12;
    this.filler3 = new Filler(new Dimension(0, 50), new Dimension(0, 50), new Dimension(32767, 50));let filler3 = this.filler3;
    this.jPanel4 = new JSPanel();let jPanel4 = this.jPanel4;
    this.jCheckBox1 = new JSCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JSCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jCheckBox3 = new JSCheckBox();let jCheckBox3 = this.jCheckBox3;
    this.jCheckBox4 = new JSCheckBox();let jCheckBox4 = this.jCheckBox4;
    this.jRadioButton1 = new JSRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jRadioButton2 = new JSRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jRadioButton3 = new JSRadioButton();let jRadioButton3 = this.jRadioButton3;
    this.jRadioButton4 = new JSRadioButton();let jRadioButton4 = this.jRadioButton4;
    this.jToggleButton1 = new JSToggleButton();let jToggleButton1 = this.jToggleButton1;
    this.jToggleButton2 = new JSToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.jToggleButton3 = new JSToggleButton();let jToggleButton3 = this.jToggleButton3;
    this.jToggleButton4 = new JSToggleButton();let jToggleButton4 = this.jToggleButton4;
    this.jToggleButton5 = new JSToggleButton();let jToggleButton5 = this.jToggleButton5;
    this.jToggleButton6 = new JSToggleButton();let jToggleButton6 = this.jToggleButton6;
    this.jToggleButton7 = new JSToggleButton();let jToggleButton7 = this.jToggleButton7;
    this.jToggleButton8 = new JSToggleButton();let jToggleButton8 = this.jToggleButton8;
    this.jPanel5 = new JSPanel();let jPanel5 = this.jPanel5;
    this.jComboBox1 = new JSComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JSComboBox();let jComboBox2 = this.jComboBox2;
    this.jComboBox3 = new JSComboBox();let jComboBox3 = this.jComboBox3;
    this.jComboBox4 = new JSComboBox();let jComboBox4 = this.jComboBox4;
    this.jSpinner1 = new JSSpinner();let jSpinner1 = this.jSpinner1;
    this.jSpinner2 = new JSSpinner();let jSpinner2 = this.jSpinner2;
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
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    jPanel2.setLayout(new GridLayout(2, 5, 10, 20));
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
    jRadioButton10.setSelected(true);
    jRadioButton10.setText("jRadioButton10");
    jRadioButton10.setContentAreaFilled(false);
    jRadioButton10.setEnabled(false);
    jPanel2.add(jRadioButton10);
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
    jToggleButton1.setText("jToggleButton1");
    jPanel4.add(jToggleButton1);
    jToggleButton2.setText("jToggleButton2");
    jToggleButton2.setEnabled(false);
    jPanel4.add(jToggleButton2);
    jToggleButton3.setSelected(true);
    jToggleButton3.setText("jToggleButton3");
    jPanel4.add(jToggleButton3);
    jToggleButton4.setSelected(true);
    jToggleButton4.setText("jToggleButton4");
    jToggleButton4.setEnabled(false);
    jPanel4.add(jToggleButton4);
    jToggleButton5.setText("jToggleButton1");
    jToggleButton5.setContentAreaFilled(false);
    jPanel4.add(jToggleButton5);
    jToggleButton6.setText("jToggleButton2");
    jToggleButton6.setContentAreaFilled(false);
    jToggleButton6.setEnabled(false);
    jPanel4.add(jToggleButton6);
    jToggleButton7.setSelected(true);
    jToggleButton7.setText("jToggleButton3");
    jToggleButton7.setContentAreaFilled(false);
    jPanel4.add(jToggleButton7);
    jToggleButton8.setSelected(true);
    jToggleButton8.setText("jToggleButton4");
    jToggleButton8.setContentAreaFilled(false);
    jToggleButton8.setEnabled(false);
    jPanel4.add(jToggleButton8);
    this.getContentPane().add(jPanel4, BorderLayout.LINE_END);
    jPanel5.add(jComboBox1);
    jComboBox2.setEnabled(false);
    jPanel5.add(jComboBox2);
    jPanel5.add(jComboBox3);
    jComboBox4.setEnabled(false);
    jPanel5.add(jComboBox4);
    jPanel5.add(jSpinner1);
    jSpinner2.setEnabled(false);
    jPanel5.add(jSpinner2);
    this.getContentPane().add(jPanel5, BorderLayout.CENTER);
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

   jButton2 = null;

   jButton3 = null;

   jButton4 = null;

   jButton5 = null;

   jButton6 = null;

   jButton7 = null;

   jButton8 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jCheckBox3 = null;

   jCheckBox4 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jComboBox3 = null;

   jComboBox4 = null;

   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;

   jPanel5 = null;

   jRadioButton1 = null;

   jRadioButton10 = null;

   jRadioButton11 = null;

   jRadioButton12 = null;

   jRadioButton2 = null;

   jRadioButton3 = null;

   jRadioButton4 = null;

   jRadioButton5 = null;

   jRadioButton6 = null;

   jRadioButton7 = null;

   jRadioButton8 = null;

   jRadioButton9 = null;

   jSpinner1 = null;

   jSpinner2 = null;

   jToggleButton1 = null;

   jToggleButton2 = null;

   jToggleButton3 = null;

   jToggleButton4 = null;

   jToggleButton5 = null;

   jToggleButton6 = null;

   jToggleButton7 = null;

   jToggleButton8 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame2HTMLImageProducer extends DefaultHTMLImageProducer {

  constructor(value, src) {
    super(value, src);
  }

   produce() {
    let img = super.produce();
    switch(this.getValue()) {
      case "A":
        break;
      case "B":
        img.style.transform = "rotate(15deg) scale(0.8)";
        break;
      case "C":
        img.style.filter = "drop-shadow(2px 4px 6px black)";
        break;
      case "D":
        break;
    }
    return img;
  }
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame3 extends JSFrame {

   modelAndRendererS = null;

   modelAndRendererS2 = null;

   modelAndRendererS3 = null;

  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    this.modelAndRendererS = new DefaultSliderModelAndRenderer();
    this.modelAndRendererS.addElement("A");
    this.modelAndRendererS.addElement("B");
    this.modelAndRendererS.addElement("C");
    (SwingJS.convert(this.jSlider5)).setModelAndRenderer(this.modelAndRendererS);
    this.modelAndRendererS2 = new HTMLImageSliderModelAndRenderer();
    this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("A", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("B", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("C", "../../../swing.png"));
    this.modelAndRendererS2.addElement(new TestJSFrame2HTMLImageProducer("D", "../../../swing.png"));
    (SwingJS.convert(this.jSlider6)).setModelAndRenderer(this.modelAndRendererS2);
    this.modelAndRendererS3 = new HTMLImageSliderModelAndRenderer();
    this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("A", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("B", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("C", "../../../swing.png"));
    this.modelAndRendererS3.addElement(new TestJSFrame2HTMLImageProducer("D", "../../../swing.png"));
    (SwingJS.convert(this.jSlider7)).setModelAndRenderer(this.modelAndRendererS3);
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let gridBagConstraints = null;
    this.jSlider1 = new JSSlider();let jSlider1 = this.jSlider1;
    this.jSlider2 = new JSSlider();let jSlider2 = this.jSlider2;
    this.jSlider3 = new JSSlider();let jSlider3 = this.jSlider3;
    this.jSlider4 = new JSSlider();let jSlider4 = this.jSlider4;
    this.jSlider5 = new JSSlider();let jSlider5 = this.jSlider5;
    this.jSlider6 = new JSSlider();let jSlider6 = this.jSlider6;
    this.jSlider7 = new JSSlider();let jSlider7 = this.jSlider7;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    this.setTitle("Test Slider");
    let layout = new GridBagLayout();
    layout.columnWidths = [0, 30, 0, 30, 0, 30, 0, ];
    layout.rowHeights = [0, 5, 0, 5, 0, 5, 0, 5, 0, ];
    this.getContentPane().setLayout(layout);
    jSlider1.setMajorTickSpacing(50);
    jSlider1.setMaximum(300);
    jSlider1.setMinimum(100);
    jSlider1.setOrientation(JSSlider.VERTICAL);
    jSlider1.setPaintLabels(true);
    jSlider1.setPaintTicks(true);
    jSlider1.setValue(230);
    jSlider1.setInverted(true);
    jSlider1.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider1StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider1, gridBagConstraints);
    jSlider2.setMajorTickSpacing(50);
    jSlider2.setMaximum(300);
    jSlider2.setMinimum(100);
    jSlider2.setPaintLabels(true);
    jSlider2.setPaintTicks(true);
    jSlider2.setValue(230);
    jSlider2.setEnabled(false);
    jSlider2.setInverted(true);
    jSlider2.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider2StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider2, gridBagConstraints);
    jSlider3.setMajorTickSpacing(50);
    jSlider3.setMaximum(300);
    jSlider3.setMinimum(100);
    jSlider3.setPaintLabels(true);
    jSlider3.setPaintTicks(true);
    jSlider3.setValue(230);
    jSlider3.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider3StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider3, gridBagConstraints);
    jSlider4.setMajorTickSpacing(50);
    jSlider4.setMaximum(300);
    jSlider4.setMinimum(100);
    jSlider4.setOrientation(JSSlider.VERTICAL);
    jSlider4.setPaintLabels(true);
    jSlider4.setPaintTicks(true);
    jSlider4.setPaintTrack(false);
    jSlider4.setValue(230);
    jSlider4.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider4StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider4, gridBagConstraints);
    jSlider5.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider5StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 6;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider5, gridBagConstraints);
    jSlider6.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider6StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 8;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider6, gridBagConstraints);
    jSlider7.setOrientation(JSSlider.VERTICAL);
    jSlider7.addChangeListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jSlider7StateChanged(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 6;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 9;
    gridBagConstraints.fill = GridBagConstraints.VERTICAL;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jSlider7, gridBagConstraints);
    jLabel1.setText("jLabel1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 7;
    this.getContentPane().add(jLabel1, gridBagConstraints);
  }

  // </editor-fold>//GEN-END:initComponents
   jSlider1StateChanged(evt) {
    // GEN-FIRST:event_jSlider1StateChanged
    this.jLabel1.setText(this.jSlider1.getValueIsAdjusting() + " " + this.jSlider1.getValue());
  }

  // GEN-LAST:event_jSlider1StateChanged
   jSlider2StateChanged(evt) {
    // GEN-FIRST:event_jSlider2StateChanged
    this.jLabel1.setText(this.jSlider2.getValueIsAdjusting() + " " + this.jSlider2.getValue());
  }

  // GEN-LAST:event_jSlider2StateChanged
   jSlider3StateChanged(evt) {
    // GEN-FIRST:event_jSlider3StateChanged
    this.jLabel1.setText(this.jSlider3.getValueIsAdjusting() + " " + this.jSlider3.getValue());
  }

  // GEN-LAST:event_jSlider3StateChanged
   jSlider4StateChanged(evt) {
    // GEN-FIRST:event_jSlider4StateChanged
    this.jLabel1.setText(this.jSlider4.getValueIsAdjusting() + " " + this.jSlider4.getValue());
  }

  // GEN-LAST:event_jSlider4StateChanged
   jSlider5StateChanged(evt) {
    // GEN-FIRST:event_jSlider5StateChanged
    this.jLabel1.setText(this.jSlider5.getValueIsAdjusting() + " " + this.modelAndRendererS.getElementAt(this.jSlider5.getValue()));
  }

  // GEN-LAST:event_jSlider5StateChanged
   jSlider6StateChanged(evt) {
    // GEN-FIRST:event_jSlider6StateChanged
    this.jLabel1.setText(this.jSlider6.getValueIsAdjusting() + " " + this.modelAndRendererS2.getElementAt(this.jSlider6.getValue()).getValue());
  }

  // GEN-LAST:event_jSlider6StateChanged
   jSlider7StateChanged(evt) {
    // GEN-FIRST:event_jSlider7StateChanged
    this.jLabel1.setText(this.jSlider7.getValueIsAdjusting() + " " + this.modelAndRendererS3.getElementAt(this.jSlider7.getValue()).getValue());
  }

  // GEN-LAST:event_jSlider7StateChanged
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jLabel1 = null;

   jSlider1 = null;

   jSlider2 = null;

   jSlider3 = null;

   jSlider4 = null;

   jSlider5 = null;

   jSlider6 = null;

   jSlider7 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame4 extends JSFrame {

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
    this.jPanel4 = new JSPanel();let jPanel4 = this.jPanel4;
    this.jProgressBar2 = new JSProgressBar();let jProgressBar2 = this.jProgressBar2;
    this.jProgressBar1 = new JSProgressBar();let jProgressBar1 = this.jProgressBar1;
    this.jProgressBar4 = new JSProgressBar();let jProgressBar4 = this.jProgressBar4;
    this.jProgressBar6 = new JSProgressBar();let jProgressBar6 = this.jProgressBar6;
    this.jPanel5 = new JSPanel();let jPanel5 = this.jPanel5;
    this.jProgressBar3 = new JSProgressBar();let jProgressBar3 = this.jProgressBar3;
    this.jProgressBar5 = new JSProgressBar();let jProgressBar5 = this.jProgressBar5;
    this.setTitle("Test Progress");
    jPanel4.setLayout(new GridLayout(4, 1, 0, 5));
    jProgressBar2.setIndeterminate(true);
    jPanel4.add(jProgressBar2);
    jProgressBar1.setMaximum(1000);
    jProgressBar1.setMinimum(30);
    jProgressBar1.setValue(570);
    jPanel4.add(jProgressBar1);
    jProgressBar4.setMaximum(1000);
    jProgressBar4.setMinimum(30);
    jProgressBar4.setValue(570);
    jProgressBar4.setStringPainted(true);
    jPanel4.add(jProgressBar4);
    jProgressBar6.setValue(49);
    jProgressBar6.setString("Frase di Test");
    jProgressBar6.setStringPainted(true);
    jPanel4.add(jProgressBar6);
    this.getContentPane().add(jPanel4, BorderLayout.PAGE_END);
    jPanel5.setLayout(new GridLayout(1, 2, 5, 0));
    jProgressBar3.setOrientation(1);
    jProgressBar3.setValue(30);
    jPanel5.add(jProgressBar3);
    jProgressBar5.setOrientation(1);
    jProgressBar5.setValue(30);
    jProgressBar5.setStringPainted(true);
    jPanel5.add(jProgressBar5);
    this.getContentPane().add(jPanel5, BorderLayout.LINE_END);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jPanel4 = null;

   jPanel5 = null;

   jProgressBar1 = null;

   jProgressBar2 = null;

   jProgressBar3 = null;

   jProgressBar4 = null;

   jProgressBar5 = null;

   jProgressBar6 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame5 extends JSFrame {

  /**
   * Creates new form TestFrame3
   */
  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    (SwingJS.convert(this.jTabbedPane2)).setAlign(JSTabbedPane.CENTER);
    (SwingJS.convert(this.jTabbedPane3)).setAlign(JSTabbedPane.END);
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let gridBagConstraints = null;
    this.jTabbedPane1 = new JSTabbedPane();let jTabbedPane1 = this.jTabbedPane1;
    this.jPanel1 = new JSPanel();let jPanel1 = this.jPanel1;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jTabbedPane2 = new JSTabbedPane();let jTabbedPane2 = this.jTabbedPane2;
    this.jPanel3 = new JSPanel();let jPanel3 = this.jPanel3;
    this.jPanel4 = new JSPanel();let jPanel4 = this.jPanel4;
    this.jTabbedPane3 = new JSTabbedPane();let jTabbedPane3 = this.jTabbedPane3;
    this.jPanel5 = new JSPanel();let jPanel5 = this.jPanel5;
    this.jPanel6 = new JSPanel();let jPanel6 = this.jPanel6;
    this.jTabbedPane4 = new JSTabbedPane();let jTabbedPane4 = this.jTabbedPane4;
    this.jPanel7 = new JSPanel();let jPanel7 = this.jPanel7;
    this.jPanel8 = new JSPanel();let jPanel8 = this.jPanel8;
    this.setTitle("Test Tabs");
    this.getContentPane().setLayout(new GridBagLayout());
    jTabbedPane1.setTabPlacement(JSTabbedPane.LEFT);
    jPanel1.setBackground(new Color(0, 255, 255));
    jTabbedPane1.addTab("tab1", jPanel1);
    jPanel2.setBackground(new Color(0, 0, 255));
    jTabbedPane1.addTab("tab2", jPanel2);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jTabbedPane1, gridBagConstraints);
    jTabbedPane2.setTabPlacement(JSTabbedPane.RIGHT);
    jPanel3.setBackground(new Color(0, 255, 0));
    jTabbedPane2.addTab("tab1", jPanel3);
    jPanel4.setBackground(new Color(0, 0, 204));
    jTabbedPane2.addTab("tab2", jPanel4);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jTabbedPane2, gridBagConstraints);
    jPanel5.setBackground(new Color(255, 255, 0));
    jTabbedPane3.addTab("tab1", jPanel5);
    jPanel6.setBackground(new Color(255, 51, 51));
    jTabbedPane3.addTab("tab2", jPanel6);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridwidth = 3;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jTabbedPane3, gridBagConstraints);
    jTabbedPane4.setTabPlacement(JSTabbedPane.BOTTOM);
    jPanel7.setBackground(new Color(153, 0, 153));
    jTabbedPane4.addTab("tab1", jPanel7);
    jPanel8.setBackground(new Color(255, 204, 204));
    jTabbedPane4.addTab("tab2", jPanel8);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.gridwidth = 3;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 1.0;
    gridBagConstraints.weighty = 1.0;
    this.getContentPane().add(jTabbedPane4, gridBagConstraints);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jPanel1 = null;

   jPanel2 = null;

   jPanel3 = null;

   jPanel4 = null;

   jPanel5 = null;

   jPanel6 = null;

   jPanel7 = null;

   jPanel8 = null;

   jTabbedPane1 = null;

   jTabbedPane2 = null;

   jTabbedPane3 = null;

   jTabbedPane4 = null;
  // End of variables declaration//GEN-END:variables
}
/**
 * @author gianpiero.diblasi
 */
class TestJSFrame6 extends JSFrame {

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
    this.jDialog1 = new JSDialog();let jDialog1 = this.jDialog1;
    this.jButton3 = new JSButton();let jButton3 = this.jButton3;
    this.jButton4 = new JSButton();let jButton4 = this.jButton4;
    this.jPanel9 = new JSPanel();let jPanel9 = this.jPanel9;
    this.jButton1 = new JSButton();let jButton1 = this.jButton1;
    this.jPanel2 = new JSPanel();let jPanel2 = this.jPanel2;
    this.jButton2 = new JSButton();let jButton2 = this.jButton2;
    this.jToggleButton1 = new JSToggleButton();let jToggleButton1 = this.jToggleButton1;
    this.jCheckBox1 = new JSCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jSpinner1 = new JSSpinner();let jSpinner1 = this.jSpinner1;
    this.jRadioButton1 = new JSRadioButton();let jRadioButton1 = this.jRadioButton1;
    this.jSlider1 = new JSSlider();let jSlider1 = this.jSlider1;
    this.jRadioButton2 = new JSRadioButton();let jRadioButton2 = this.jRadioButton2;
    this.jButton5 = new JSButton();let jButton5 = this.jButton5;
    this.jToggleButton2 = new JSToggleButton();let jToggleButton2 = this.jToggleButton2;
    this.jProgressBar1 = new JSProgressBar();let jProgressBar1 = this.jProgressBar1;
    this.jLabel1 = new JSLabel();let jLabel1 = this.jLabel1;
    this.jRadioButton3 = new JSRadioButton();let jRadioButton3 = this.jRadioButton3;
    this.jLabel2 = new JSLabel();let jLabel2 = this.jLabel2;
    this.jRadioButton4 = new JSRadioButton();let jRadioButton4 = this.jRadioButton4;
    this.jButton6 = new JSButton();let jButton6 = this.jButton6;
    jDialog1.setTitle("Dialog");
    jDialog1.getContentPane().setLayout(new GridLayout(1, 2));
    jButton3.setText("jButton3");
    jDialog1.getContentPane().add(jButton3);
    jButton4.setText("close");
    jButton4.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton4ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jDialog1.getContentPane().add(jButton4);
    this.setTitle("Test Dialog");
    jButton1.setText("modal");
    jButton1.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton1ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel9.add(jButton1);
    this.getContentPane().add(jPanel9, BorderLayout.PAGE_START);
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
    this.getContentPane().add(jPanel2, BorderLayout.CENTER);
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

   jButton2 = null;

   jButton3 = null;

   jButton4 = null;

   jButton5 = null;

   jButton6 = null;

   jCheckBox1 = null;

   jDialog1 = null;

   jLabel1 = null;

   jLabel2 = null;

   jPanel2 = null;

   jPanel9 = null;

   jProgressBar1 = null;

   jRadioButton1 = null;

   jRadioButton2 = null;

   jRadioButton3 = null;

   jRadioButton4 = null;

   jSlider1 = null;

   jSpinner1 = null;

   jToggleButton1 = null;

   jToggleButton2 = null;
  // End of variables declaration//GEN-END:variables
}
