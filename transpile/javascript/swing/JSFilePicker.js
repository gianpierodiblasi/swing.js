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
    JSFilePicker.showPicker(options, () => JSFilePicker.openFilePicker(options, maximumFileSize, response));
  }

  static  openFilePicker(options, maximumFileSize, response) {
    window.showOpenFilePicker(options).then(handles => {
      if (options.id && JSFilePicker.DB) {
        let transaction = JSFilePicker.DB.transaction("handles", "readwrite");
        transaction.oncomplete = event => {
          JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response);
          return null;
        };
        let json = new Object();
        json["id"] = options.id;
        json["handle"] = handles[0];
        transaction.objectStore("handles").put(json);
      } else {
        JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response);
      }
    });
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

  /**
   * Shows a save file picker
   *
   * @param options The options
   * @param response The function to call on close
   */
  static  showSaveFilePicker(options, response) {
    JSFilePicker.showPicker(options, () => JSFilePicker.saveFilePicker(options, response));
  }

  static  saveFilePicker(options, response) {
    window.showSaveFilePicker(options).then(handle => {
      if (options.id && JSFilePicker.DB) {
        let transaction = JSFilePicker.DB.transaction("handles", "readwrite");
        transaction.oncomplete = event => {
          response(handle);
          return null;
        };
        let json = new Object();
        json["id"] = options.id;
        json["handle"] = handle;
        transaction.objectStore("handles").put(json);
      } else {
        response(handle);
      }
    });
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
}
