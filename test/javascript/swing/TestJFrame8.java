package javascript.swing;

import def.dom.FileReader;
import static def.dom.Globals.console;
import static def.dom.Globals.document;
import def.js.Array;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import javascript.util.fsa.DirectoryPickerOptions;
import javascript.util.fsa.FilePickerOptions;
import javascript.util.fsa.FilePickerOptionsType;
import javascript.util.fsa.FileSystemDirectoryHandle;
import javascript.util.fsa.FileSystemWritableFileStreamCreateOptions;
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
    jButton4 = new JButton();
    jButton5 = new JButton();
    jButton6 = new JButton();
    jButton7 = new JButton();
    jPanel2 = new JPanel();

    setTitle("Test File Chooser");

    jPanel1.setLayout(new GridLayout(3, 3, 5, 5));

    jButton1.setText("Open Single File");
    jButton1.addActionListener(this::jButton1ActionPerformed);
    jPanel1.add(jButton1);

    jButton2.setText("Open Multiple Files");
    jButton2.addActionListener(this::jButton2ActionPerformed);
    jPanel1.add(jButton2);

    jButton3.setText("Open Files in Folder");
    jButton3.addActionListener(this::jButton3ActionPerformed);
    jPanel1.add(jButton3);

    jButton4.setText("Open Single File FSA API");
    jButton4.addActionListener(this::jButton4ActionPerformed);
    jPanel1.add(jButton4);

    jButton5.setText("Open Multiple File FSA API");
    jButton5.addActionListener(this::jButton5ActionPerformed);
    jPanel1.add(jButton5);

    jButton6.setText("Save File FSA API");
    jButton6.addActionListener(this::jButton6ActionPerformed);
    jPanel1.add(jButton6);

    jButton7.setText("Open Directory FSA API");
    jButton7.addActionListener(this::jButton7ActionPerformed);
    jPanel1.add(jButton7);

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

  private void jButton4ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
    this.open2(false);
  }//GEN-LAST:event_jButton4ActionPerformed

  private void jButton5ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
    this.open2(true);
  }//GEN-LAST:event_jButton5ActionPerformed

  private void jButton6ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton6ActionPerformed
    FilePickerOptions options = new FilePickerOptions();
    options.excludeAcceptAllOption = true;
    options.id = "CURRENT_ID";
    options.suggestedName = "pippo.txt";

    FilePickerOptionsType type = new FilePickerOptionsType();
    type.description = "TESTO";
    type.pushAccept("text/plain", new Array<>(".txt"));
    options.types.push(type);

    console.log(options);

    JSFilePicker.showSaveFilePicker(options, handle -> {
      console.log(handle);

      FileSystemWritableFileStreamCreateOptions createOptions = new FileSystemWritableFileStreamCreateOptions();

      handle.createWritable(createOptions).then(writable -> {
        writable.write("ciao mamma guarda come mi diverto");
        writable.close();
      });
    });
  }//GEN-LAST:event_jButton6ActionPerformed

  private void jButton7ActionPerformed(ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
    DirectoryPickerOptions options = new DirectoryPickerOptions();
    options.id = "CURRENT_ID";

    console.log(options);

    JSFilePicker.showDirectoryPicker(options, handle -> {
      console.log(handle);

      FileSystemDirectoryHandle.entries(handle, entries -> console.log(entries));
      FileSystemDirectoryHandle.entriesIterator(handle, (key, h) -> console.log(key + " " + h));

      FileSystemDirectoryHandle.keys(handle, keys -> console.log(keys));
      FileSystemDirectoryHandle.keysIterator(handle, key -> console.log(key));

      FileSystemDirectoryHandle.values(handle, values -> console.log(values));
      FileSystemDirectoryHandle.valuesIterator(handle, value -> console.log(value));
    });
  }//GEN-LAST:event_jButton7ActionPerformed

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

  private void open2(boolean multiple) {
    FilePickerOptions options = new FilePickerOptions();
    options.excludeAcceptAllOption = true;
    options.multiple = multiple;
    options.id = "CURRENT_ID";

    FilePickerOptionsType type = new FilePickerOptionsType();
    type.description = "Immagini";
    type.pushAccept("image/z4i", new Array<>(".gif", ".png"));
    options.types.push(type);

    type = new FilePickerOptionsType();
    type.description = "Solo GIF";
    type.pushAccept("image/gif", new Array<>(".gif"));
    options.types.push(type);

    type = new FilePickerOptionsType();
    type.description = "Solo PNG";
    type.pushAccept("image/png", new Array<>(".png"));
    options.types.push(type);

    type = new FilePickerOptionsType();
    type.description = "pizzApazzA";
    type.pushAccept("application/z4i", new Array<>(".z4i"));
    options.types.push(type);

    console.log(options);

    JSFilePicker.showOpenFilePicker(options, 0, handles -> {
      document.querySelectorAll("img").forEach(img -> img.parentElement.removeChild(img));

      handles.forEach(h -> h.getFile().then(file -> {
        FileReader fileReader = new FileReader();
        fileReader.onload = event -> {
          $Image img = ($Image) document.createElement("img");
          img.src = (String) fileReader.result;

          document.querySelector(".center").appendChild(img);
          return null;
        };
        fileReader.readAsDataURL(file);
      }));
    });
  }


  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JButton jButton1;
  private JButton jButton2;
  private JButton jButton3;
  private JButton jButton4;
  private JButton jButton5;
  private JButton jButton6;
  private JButton jButton7;
  private JPanel jPanel1;
  private JPanel jPanel2;
  // End of variables declaration//GEN-END:variables
}
