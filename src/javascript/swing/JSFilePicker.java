package javascript.swing;

import def.js.Array;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.OpenFilePickerOptions;
import simulation.js.$Apply_1_Void;

/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
public class JSFilePicker {

  private JSFilePicker() {
  }

  /**
   * Shows an open file picker
   *
   * @param options The options
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  public static void showOpenFilePicker(OpenFilePickerOptions options, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
  }
}
