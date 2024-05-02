package javascript.swing;

import def.dom.FileReader;
import static def.dom.Globals.document;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import javax.swing.JButton;
import javax.swing.JPanel;
import simulation.dom.$Image;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame8 extends javax.swing.JFrame {

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame8() {
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
    jButton1 = new JButton();
    jButton2 = new JButton();
    jButton3 = new JButton();
    jPanel2 = new JPanel();

    setTitle("Test FileChooser");

    jButton1.setText("Open Single File");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton2.setText("Open Multiple Files");
    jButton2.addActionListener(this::jButton2ActionPerformed);
    jPanel1.add(jButton2);

    jButton3.setText("Open Files in Folder");
    jButton3.addActionListener(this::jButton3ActionPerformed);
    jPanel1.add(jButton3);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    getContentPane().add(jPanel2, BorderLayout.CENTER);
  }// </editor-fold>//GEN-END:initComponents

  private void jButton1ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
    this.open(JSFileChooser.SINGLE_SELECTION);
  }//GEN-LAST:event_jButton1ActionPerformed

  private void jButton2ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
    this.open(JSFileChooser.MULTIPLE_SELECTION);
  }//GEN-LAST:event_jButton2ActionPerformed

  private void jButton3ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
    this.open(JSFileChooser.FOLDER_SELECTION);
  }//GEN-LAST:event_jButton3ActionPerformed

  private void open(int selectionType) {
    JSFileChooser.showOpenDialog(".gif,.png,.jpeg,.jpg", selectionType, 0, files -> {
      document.querySelectorAll("img").forEach(img -> img.parentElement.removeChild(img));

      files.forEach(file -> {
        FileReader fileReader = new FileReader();
        fileReader.onload = event -> {
          $Image img = ($Image) document.createElement("img");
          img.src = (String) fileReader.result;

          document.querySelector(".center").appendChild(img);
          return null;
        };
        fileReader.readAsDataURL(file);
      });
    });
  }

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JButton jButton1;
  private JButton jButton2;
  private JButton jButton3;
  private JPanel jPanel1;
  private JPanel jPanel2;
  // End of variables declaration//GEN-END:variables
}
