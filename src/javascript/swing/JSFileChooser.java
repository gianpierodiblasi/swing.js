package javascript.swing;

import def.dom.Event;
import def.dom.File;
import static def.dom.Globals.document;
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

  public final static int SINGLE_SELECTION = 0;
  public final static int MULTIPLE_SELECTION = 1;
  public final static int FOLDER_SELECTION = 2;

  private static $HTMLElement input;

  private JSFileChooser() {
  }

  /**
   * Shows an open dialog
   *
   * @param allowedFileTypes The allowed file types separated by commas and
   * starting with a dot, eg. '.gif,.jpeg,.png', empty string to set no
   * constraint on the type
   * @param selectionType The selection type
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  public static void showOpenDialog(String allowedFileTypes, int selectionType, int maximumFileSize, $Apply_1_Void<Array<File>> response) {
    document.querySelectorAll("input[type=file]").forEach(element -> element.parentElement.removeChild(element));

    JSFileChooser.input = ($HTMLElement) document.createElement("input");
    JSFileChooser.input.setAttribute("type", "file");
    JSFileChooser.input.setAttribute("accept", allowedFileTypes);

    switch (selectionType) {
      case JSFileChooser.SINGLE_SELECTION:
        break;
      case JSFileChooser.MULTIPLE_SELECTION:
        JSFileChooser.input.setAttribute("multiple", "multiple");
        break;
      case JSFileChooser.FOLDER_SELECTION:
        JSFileChooser.input.setAttribute("webkitdirectory", "webkitdirectory");
        break;
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
