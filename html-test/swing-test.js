/**
 * @author gianpiero.diblasi
 */
class TestJSFrame1 extends JSFrame {

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
    this.jLabel11 = new JSLabel();let jLabel11 = this.jLabel11;
    this.jLabel12 = new JSLabel();let jLabel12 = this.jLabel12;
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
    jLabel11.setText("jLabel11");
    jPanel3.add(jLabel11);
    jLabel12.setText("jLabel12");
    jPanel3.add(jLabel12);
    this.getContentPane().add(jPanel3, BorderLayout.LINE_START);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jLabel1 = null;

   jLabel10 = null;

   jLabel11 = null;

   jLabel12 = null;

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
  // End of variables declaration//GEN-END:variables
}
