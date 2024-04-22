package javascript.swing;

import java.awt.Color;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import javascript.SwingJS;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;

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
    ((JSTabbedPane) SwingJS.convert(this.jTabbedPane2)).setAlign(JSTabbedPane.CENTER);
    ((JSTabbedPane) SwingJS.convert(this.jTabbedPane3)).setAlign(JSTabbedPane.END);
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

    jTabbedPane1 = new JTabbedPane();
    jPanel1 = new JPanel();
    jPanel2 = new JPanel();
    jTabbedPane2 = new JTabbedPane();
    jPanel3 = new JPanel();
    jPanel4 = new JPanel();
    jTabbedPane3 = new JTabbedPane();
    jPanel5 = new JPanel();
    jPanel6 = new JPanel();
    jTabbedPane4 = new JTabbedPane();
    jPanel7 = new JPanel();
    jPanel8 = new JPanel();

    setTitle("TestJFrame4");
    getContentPane().setLayout(new GridBagLayout());

    jTabbedPane1.setTabPlacement(JTabbedPane.LEFT);

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
    getContentPane().add(jTabbedPane1, gridBagConstraints);

    jTabbedPane2.setTabPlacement(JTabbedPane.RIGHT);

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
    getContentPane().add(jTabbedPane2, gridBagConstraints);

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
    getContentPane().add(jTabbedPane3, gridBagConstraints);

    jTabbedPane4.setTabPlacement(JTabbedPane.BOTTOM);

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
    getContentPane().add(jTabbedPane4, gridBagConstraints);
  }// </editor-fold>//GEN-END:initComponents

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  private JPanel jPanel5;
  private JPanel jPanel6;
  private JPanel jPanel7;
  private JPanel jPanel8;
  private JTabbedPane jTabbedPane1;
  private JTabbedPane jTabbedPane2;
  private JTabbedPane jTabbedPane3;
  private JTabbedPane jTabbedPane4;
  // End of variables declaration//GEN-END:variables
}
