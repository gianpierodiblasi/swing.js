package javascript.swing;

import def.dom.Event;
import def.dom.EventListener;
import def.dom.File;
import static def.dom.Globals.document;
import static def.dom.Globals.window;
import def.js.Array;
import simulation.dom.$HTMLElement;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JFileChooser clone
 *
 * @author gianpiero.diblasi
 */
public class JSFileChooser {

  private static $HTMLElement input;

  private JSFileChooser() {
  }

  /**
   * Shows an open dialog
   *
   * @param allowedFileTypes The allowed file types separated by commas and
   * starting with a dot, eg. '.gif,.jpeg,.png', empty string to set no
   * constraint on the type
   * @param allowMultipleFiles true to allow multiple file selection, false
   * otherwise
   * @param folderSelection true to allow folder selection, false otherwise
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  public static void showOpenDialog(String allowedFileTypes, boolean allowMultipleFiles, boolean folderSelection, int maximumFileSize, $Apply_1_Void<Array<File>> response) {
    document.querySelectorAll("input[type=file]").forEach(input -> input.parentElement.removeChild(input));
        
    JSFileChooser.input = ($HTMLElement) document.createElement("input");
    JSFileChooser.input.setAttribute("type", "file");
    JSFileChooser.input.setAttribute("accept", allowedFileTypes);

    if (allowMultipleFiles) {
      JSFileChooser.input.setAttribute("multiple", "multiple");
    }
    if (folderSelection) {
      JSFileChooser.input.setAttribute("webkitdirectory", "webkitdirectory");
    }

    JSFileChooser.input.style.display = "none";
    JSFileChooser.input.onchange = (event) -> JSFileChooser.onchange(JSFileChooser.input.files, allowedFileTypes, maximumFileSize, response);

    document.body.appendChild(JSFileChooser.input);

    Event event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSFileChooser.input.dispatchEvent(event);
  }

  private static Object onchange(Array<File> files, String allowedFileTypes, int maximumFileSize, $Apply_1_Void<Array<File>> response) {
    files = JSFileChooser.purgeFiles(files, allowedFileTypes, maximumFileSize);
    document.body.removeChild(JSFileChooser.input);

    if ($exists(response)) {
      response.$apply(files);
    }
    return null;
  }

  private static Array<File> purgeFiles(Array<File> files, String allowedFileTypes, int maximumFileSize) {
    Array<File> filesToUpload = new Array<>();

    for (int index = 0; index < files.length; index++) {
      boolean sizeOk = maximumFileSize <= 0 || files.$get(index).size / (1024 * 1024) <= maximumFileSize;

      def.js.String aft = new def.js.String(allowedFileTypes);
      def.js.String name = new def.js.String(files.$get(index).name);

      boolean typeOk = aft.length == 0 || aft.indexOf("." + name.split(".").pop().toLowerCase()) != -1;
      if (sizeOk && typeOk) {
        filesToUpload.push(files.$get(index));
      }
    }

    return filesToUpload;
  }
}
