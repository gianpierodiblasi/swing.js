/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
class JSFilePicker {

  static  JSFilePickerDB = null;

  static {
    window.indexedDB.open("swing.js-JSFilePickerDB", 1).onupgradeneeded = event => {
      return null;
    };
  }

  constructor() {
  }

  /**
   * Shows an open file picker
   *
   * @param options The options
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  static  showOpenFilePicker(options, maximumFileSize, response) {
    // if (!$exists(options.startIn)) {
    // eval("delete options.startIn");
    // }
    if (options.id) {
    } else {
      window.showOpenFilePicker(options).then(handles => {
        JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response);
      });
    }
  }

  static  purgeFileSystemFileHandle(finalHandles, handles, types, index, maximumFileSize, response) {
    if (index < handles.length) {
      handles[index].getFile().then(file => {
        let sizeOk = maximumFileSize <= 0 || file.size / (1024 * 1024) <= maximumFileSize;
        let exts = new Array();
        types.forEach(type => Object.keys(type.accept).forEach(key => (type.accept[key]).forEach(ext => exts.push(ext))));
        let name = new String(file.name);
        let typeOk = types.length === 0 || exts.indexOf("." + name.split(".").pop().toLowerCase()) !== -1;
        if (sizeOk && typeOk) {
          finalHandles.push(handles[index]);
        }
        JSFilePicker.purgeFileSystemFileHandle(finalHandles, handles, types, index + 1, maximumFileSize, response);
      });
    } else if (response) {
      response(finalHandles);
    }
  }
}
