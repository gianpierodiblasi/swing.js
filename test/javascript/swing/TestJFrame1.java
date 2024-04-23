package javascript.swing;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import javax.swing.BoxLayout;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame1 extends javax.swing.JFrame {

  public TestJFrame1() {
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

    jPanel1 = new JPanel();
    jLabel1 = new JLabel();
    jLabel2 = new JLabel();
    jLabel3 = new JLabel();
    jPanel2 = new JPanel();
    jLabel4 = new JLabel();
    jLabel6 = new JLabel();
    jLabel8 = new JLabel();
    jLabel7 = new JLabel();
    jLabel5 = new JLabel();
    jLabel9 = new JLabel();
    jPanel3 = new JPanel();
    jLabel10 = new JLabel();
    jLabel11 = new JLabel();
    jLabel12 = new JLabel();

    setTitle("Test Layouts");
    getContentPane().setLayout(new BorderLayout(5, 5));

    jLabel1.setText("jLabel1");
    jPanel1.add(jLabel1);

    jLabel2.setText("jLabel2");
    jPanel1.add(jLabel2);

    jLabel3.setText("jLabel3");
    jPanel1.add(jLabel3);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);

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

    getContentPane().add(jPanel2, BorderLayout.PAGE_END);

    jPanel3.setLayout(new BoxLayout(jPanel3, BoxLayout.Y_AXIS));

    jLabel10.setText("jLabel10");
    jPanel3.add(jLabel10);

    jLabel11.setText("jLabel11");
    jPanel3.add(jLabel11);

    jLabel12.setText("jLabel12");
    jPanel3.add(jLabel12);

    getContentPane().add(jPanel3, BorderLayout.LINE_START);
  }// </editor-fold>//GEN-END:initComponents

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JLabel jLabel1;
  private JLabel jLabel10;
  private JLabel jLabel11;
  private JLabel jLabel12;
  private JLabel jLabel2;
  private JLabel jLabel3;
  private JLabel jLabel4;
  private JLabel jLabel5;
  private JLabel jLabel6;
  private JLabel jLabel7;
  private JLabel jLabel8;
  private JLabel jLabel9;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  // End of variables declaration//GEN-END:variables
}
