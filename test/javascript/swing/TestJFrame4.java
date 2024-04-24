package javascript.swing;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import javax.swing.JPanel;
import javax.swing.JProgressBar;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame4 extends javax.swing.JFrame {

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame4() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  @SuppressWarnings("unchecked")
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

    jPanel4 = new JPanel();
    jProgressBar2 = new JProgressBar();
    jProgressBar1 = new JProgressBar();
    jProgressBar4 = new JProgressBar();
    jProgressBar6 = new JProgressBar();
    jPanel5 = new JPanel();
    jProgressBar3 = new JProgressBar();
    jProgressBar5 = new JProgressBar();

    setTitle("Test Progress");

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

    getContentPane().add(jPanel4, BorderLayout.PAGE_END);

    jPanel5.setLayout(new GridLayout(1, 2, 5, 0));

    jProgressBar3.setOrientation(1);
    jProgressBar3.setValue(30);
    jPanel5.add(jProgressBar3);

    jProgressBar5.setOrientation(1);
    jProgressBar5.setValue(30);
    jProgressBar5.setStringPainted(true);
    jPanel5.add(jProgressBar5);

    getContentPane().add(jPanel5, BorderLayout.LINE_END);
  }// </editor-fold>//GEN-END:initComponents

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JPanel jPanel4;
  private JPanel jPanel5;
  private JProgressBar jProgressBar1;
  private JProgressBar jProgressBar2;
  private JProgressBar jProgressBar3;
  private JProgressBar jProgressBar4;
  private JProgressBar jProgressBar5;
  private JProgressBar jProgressBar6;
  // End of variables declaration//GEN-END:variables
}
