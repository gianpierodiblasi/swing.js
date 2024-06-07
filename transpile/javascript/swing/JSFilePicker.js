/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
class JSFilePicker {

  static  DB = null;

  static {
    let request = window.indexedDB.open("swing.js-JSFilePickerDB", 1);
    request.onupgradeneeded = event => {
      JSFilePicker.DB = event.target["result"];
      let options = new Object();
      options["keyPath"] = "id";
      JSFilePicker.DB.createObjectStore("handles", options);
      return null;
    };
    request.onsuccess = event => {
      JSFilePicker.DB = event.target["result"];
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
    JSFilePicker.showPicker(options, () => window.showOpenFilePicker(options).then(handles => {
      JSFilePicker.afterPicking(options, handles[0], () => JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response));
    }));
  }

  /**
   * Shows a save file picker
   *
   * @param options The options
   * @param response The function to call on close
   */
  static  showSaveFilePicker(options, response) {
    JSFilePicker.showPicker(options, () => window.showSaveFilePicker(options).then(handle => {
      JSFilePicker.afterPicking(options, handle, () => response(handle));
    }));
  }

  static  showPicker(options, action) {
    if (options.id && JSFilePicker.DB) {
      let request = JSFilePicker.DB.transaction("handles", "readonly").objectStore("handles").get(options.id);
      request.onsuccess = event => {
        let result = event.target["result"];
        if (result) {
          options.startIn = result["handle"];
          action();
        } else {
          eval("delete options.startIn");
          action();
        }
        return null;
      };
      request.onerror = event => {
        eval("delete options.startIn");
        action();
        return null;
      };
    } else {
      eval("delete options.startIn");
      action();
    }
  }

  static  afterPicking(options, handle, action) {
    if (options.id && JSFilePicker.DB) {
      let transaction = JSFilePicker.DB.transaction("handles", "readwrite");
      transaction.oncomplete = event => {
        action();
        return null;
      };
      let json = new Object();
      json["id"] = options.id;
      json["handle"] = handle;
      transaction.objectStore("handles").put(json);
    } else {
      action();
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
