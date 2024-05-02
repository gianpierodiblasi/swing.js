/**
 * The javax.swing.JFileChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSFileChooser {

  static  SINGLE_SELECTION = 0;

  static  MULTIPLE_SELECTION = 1;

  static  FOLDER_SELECTION = 2;

  static  input = null;

  constructor() {
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
  static  showOpenDialog(allowedFileTypes, selectionType, maximumFileSize, response) {
    document.querySelectorAll("input[type=file]").forEach(element => element.parentElement.removeChild(element));
    JSFileChooser.input = document.createElement("input");
    JSFileChooser.input.setAttribute("type", "file");
    JSFileChooser.input.setAttribute("accept", allowedFileTypes);
    switch(selectionType) {
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
    JSFileChooser.input.onchange = (event) => JSFileChooser.onchange(JSFileChooser.input.files, allowedFileTypes, maximumFileSize, response);
    document.body.appendChild(JSFileChooser.input);
    let event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSFileChooser.input.dispatchEvent(event);
  }

  static  onchange(files, allowedFileTypes, maximumFileSize, response) {
    files = JSFileChooser.purgeFiles(files, allowedFileTypes, maximumFileSize);
    document.body.removeChild(JSFileChooser.input);
    if (response) {
      response(files);
    }
    return null;
  }

  static  purgeFiles(files, allowedFileTypes, maximumFileSize) {
    let filesToUpload = new Array();
    for (let index = 0; index < files.length; index++) {
      let sizeOk = maximumFileSize <= 0 || files[index].size / (1024 * 1024) <= maximumFileSize;
      let aft = new String(allowedFileTypes);
      let name = new String(files[index].name);
      let typeOk = aft.length === 0 || aft.indexOf("." + name.split(".").pop().toLowerCase()) !== -1;
      if (sizeOk && typeOk) {
        filesToUpload.push(files[index]);
      }
    }
    return filesToUpload;
  }
}
