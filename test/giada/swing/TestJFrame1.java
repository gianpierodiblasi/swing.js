package giada.swing;

import static def.dom.Globals.console;
import java.awt.BorderLayout;
import java.awt.CardLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JPanel;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame1 extends javax.swing.JFrame {
  
  private static final long serialVersionUID = 1;
  
  public TestJFrame1() {
    super();
    this.initComponents();
    
    JPanel jPanel22 = new JPanel();
    JButton jButton22 = new JButton();
    
    jButton22.setText("jButton2");
    jButton22.addActionListener(new TestJFrame1ActionListener());
    jPanel22.add(jButton22);
    jPanel22.setBackground(new Color(200, 100, 200));
    
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    jPanel22.add(new JButton());
    
    this.getContentPane().add(jPanel22, BorderLayout.CENTER);
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
    jButton1 = new JButton();
    jButton5 = new JButton();
    jButton6 = new JButton();
    jButton7 = new JButton();
    jButton8 = new JButton();
    jPanel2 = new JPanel();
    jButton2 = new JButton();
    jButton9 = new JButton();
    jPanel3 = new JPanel();
    jButton3 = new JButton();
    jButton10 = new JButton();
    jPanel4 = new JPanel();
    jButton4 = new JButton();

    setTitle("Test JFrame1");
    getContentPane().setLayout(new BorderLayout(5, 5));

    jPanel1.setBackground(new Color(255, 255, 0));
    jPanel1.setLayout(new GridLayout(2, 3, 5, 5));

    jButton1.setText("jButton1");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton5.setText("jButton5");
    jPanel1.add(jButton5);

    jButton6.setText("jButton6");
    jPanel1.add(jButton6);

    jButton7.setText("jButton7");
    jPanel1.add(jButton7);

    jButton8.setText("jButton8");
    jPanel1.add(jButton8);

    getContentPane().add(jPanel1, BorderLayout.NORTH);

    jPanel2.setBackground(new Color(0, 102, 102));
    jPanel2.setLayout(new BoxLayout(jPanel2, BoxLayout.LINE_AXIS));

    jButton2.setText("jButton2");
    jPanel2.add(jButton2);

    jButton9.setText("jButton9");
    jPanel2.add(jButton9);

    getContentPane().add(jPanel2, BorderLayout.PAGE_END);

    jPanel3.setBackground(new Color(153, 255, 153));
    jPanel3.setLayout(new CardLayout());

    jButton3.setText("jButton3");
    jPanel3.add(jButton3, "card2");

    jButton10.setText("jButton10");
    jPanel3.add(jButton10, "card3");

    getContentPane().add(jPanel3, BorderLayout.LINE_END);

    jPanel4.setBackground(new Color(0, 51, 0));

    jButton4.setText("jButton4");
    jPanel4.add(jButton4);

    getContentPane().add(jPanel4, BorderLayout.LINE_START);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    console.log("FROM LAMBDA");
  }//GEN-LAST:event_jButton1ActionPerformed

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JButton jButton1;
  private JButton jButton10;
  private JButton jButton2;
  private JButton jButton3;
  private JButton jButton4;
  private JButton jButton5;
  private JButton jButton6;
  private JButton jButton7;
  private JButton jButton8;
  private JButton jButton9;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  // End of variables declaration//GEN-END:variables
}