package javascript.swing;

import static def.dom.Globals.console;
import def.js.Array;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import javascript.SwingJS;
import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;
import javascript.swing.colorchooser.JSColorPanel;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JPanel;
import static simulation.js.$Globals.$exists;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame10 extends javax.swing.JFrame {

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame10() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  private void postInitComponents() {
    JSColorPanel colorPanel = new JSColorPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(colorPanel, null);

    JSColorPanel colorPanelNoOpacity = new JSColorPanel();
    colorPanelNoOpacity.setOpacityVisible(false);
    colorPanelNoOpacity.addExtraTab("Extra", new JSColorExtraTab1Panel());
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(colorPanelNoOpacity, null);

    colorPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !colorPanel.getValueIsAdjusting()) {
        console.log(colorPanel.getSelectedColor().getARGB_HEX());
      }
    });

    colorPanelNoOpacity.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !colorPanelNoOpacity.getValueIsAdjusting()) {
        console.log(colorPanelNoOpacity.getSelectedColor().getARGB_HEX());
      }
    });
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
    jButton4 = new JButton();
    jButton5 = new JButton();
    jCheckBox1 = new JCheckBox();
    jPanel2 = new JPanel();

    setTitle("Test Color Chooser");

    jButton4.setText("Choose Color");
    jButton4.addActionListener(this::jButton4ActionPerformed);
    jPanel1.add(jButton4);

    jButton5.setText("Choose Color With Default");
    jButton5.addActionListener(this::jButton5ActionPerformed);
    jPanel1.add(jButton5);

    jCheckBox1.setSelected(true);
    jCheckBox1.setText("realtime");
    jPanel1.add(jCheckBox1);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    getContentPane().add(jPanel2, BorderLayout.CENTER);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
    this.choose(null);
  }//GEN-LAST:event_jButton4ActionPerformed

  private void jButton5ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
    this.choose(new Color(255, 0, 0, 255));
  }//GEN-LAST:event_jButton5ActionPerformed

  private void choose(Color color) {
    Array<JSAbstractColorExtraTabPanel> array = new Array<>();
    array.$set("EXTRA", new JSColorExtraTab1Panel());

    JSColorChooser.showDialog("Select a color", color, true, array, c -> {
      if ($exists(c)) {
        console.log(c.getRGBA_HEX());
      }
    });
  }

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JButton jButton4;
  private JButton jButton5;
  private JCheckBox jCheckBox1;
  private JPanel jPanel1;
  private JPanel jPanel2;
  // End of variables declaration//GEN-END:variables
}
