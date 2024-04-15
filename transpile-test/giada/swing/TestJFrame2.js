/**
 * @author gianpiero.diblasi
 */
class TestJFrame2 extends JFrame {

  static  serialVersionUID = 1;

  constructor() {
    super();
    this.initComponents();
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    let gridBagConstraints = null;
    this.jLabel1 = new JLabel();let jLabel1 = this.jLabel1;
    this.jLabel2 = new JLabel();let jLabel2 = this.jLabel2;
    this.jComboBox1 = new JComboBox();let jComboBox1 = this.jComboBox1;
    this.jComboBox2 = new JComboBox();let jComboBox2 = this.jComboBox2;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jCheckBox2 = new JCheckBox();let jCheckBox2 = this.jCheckBox2;
    this.jButton1 = new JButton();let jButton1 = this.jButton1;
    this.setTitle("Test JFrame2");
    let layout = new GridBagLayout();
    layout.columnWidths = [0, 15, 0, 15, 0, ];
    layout.rowHeights = [0, 5, 0, 5, 0, 5, 0, ];
    this.getContentPane().setLayout(layout);
    jLabel1.setText("Face:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel1, gridBagConstraints);
    jLabel2.setText("Size:");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.EAST;
    this.getContentPane().add(jLabel2, gridBagConstraints);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.insets = new Insets(5, 5, 5, 5);
    this.getContentPane().add(jComboBox1, gridBagConstraints);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.ipadx = 10;
    gridBagConstraints.ipady = 10;
    gridBagConstraints.weightx = 100.0;
    this.getContentPane().add(jComboBox2, gridBagConstraints);
    jCheckBox1.setText("Bold");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox1, gridBagConstraints);
    jCheckBox2.setText("Italic");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 6;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jCheckBox2, gridBagConstraints);
    jButton1.setText("jButton1");
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 4;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.fill = GridBagConstraints.BOTH;
    gridBagConstraints.weightx = 100.0;
    gridBagConstraints.weighty = 100.0;
    this.getContentPane().add(jButton1, gridBagConstraints);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jButton1 = null;

   jCheckBox1 = null;

   jCheckBox2 = null;

   jComboBox1 = null;

   jComboBox2 = null;

   jLabel1 = null;

   jLabel2 = null;
  // End of variables declaration//GEN-END:variables
}
