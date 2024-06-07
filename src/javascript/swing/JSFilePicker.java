package javascript.swing;

import def.dom.IDBDatabase;
import def.dom.IDBOpenDBRequest;
import def.dom.IDBRequest;
import def.dom.IDBTransaction;
import def.js.Array;
import static def.js.Globals.eval;
import def.js.Object;
import javascript.util.fsa.FilePickerOptions;
import javascript.util.fsa.FilePickerOptionsType;
import javascript.util.fsa.FileSystemFileHandle;
import simulation.js.$Apply_0_Void;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.window;
import simulation.js.$Object;

/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
public class JSFilePicker {

  private static IDBDatabase DB;

  static {
    @SuppressWarnings("StaticNonFinalUsedInInitialization")
    IDBOpenDBRequest request = window.indexedDB.open("swing.js-JSFilePickerDB", 1);
    request.onupgradeneeded = event -> {
      JSFilePicker.DB = (IDBDatabase) event.target.$get("result");

      $Object options = new $Object();
      options.$set("keyPath", "id");
      JSFilePicker.DB.createObjectStore("handles", options);

      return null;
    };
    request.onsuccess = event -> {
      JSFilePicker.DB = (IDBDatabase) event.target.$get("result");
      return null;
    };
  }

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
  public static void showOpenFilePicker(FilePickerOptions options, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
    JSFilePicker.showPicker(options, () -> window.showOpenFilePicker(options).then(handles -> {
      JSFilePicker.afterPicking(options, handles.$get(0), () -> JSFilePicker.purgeFileSystemFileHandle(new Array<>(), handles, options.types, 0, maximumFileSize, response));
    }));
  }

  /**
   * Shows a save file picker
   *
   * @param options The options
   * @param response The function to call on close
   */
  public static void showSaveFilePicker(FilePickerOptions options, $Apply_1_Void<FileSystemFileHandle> response) {
    JSFilePicker.showPicker(options, () -> window.showSaveFilePicker(options).then(handle -> {
      JSFilePicker.afterPicking(options, handle, () -> response.$apply(handle));
    }));
  }

  private static void showPicker(FilePickerOptions options, $Apply_0_Void action) {
    if ($exists(options.id) && $exists(JSFilePicker.DB)) {
      IDBRequest request = JSFilePicker.DB.transaction("handles", "readonly").objectStore("handles").get(options.id);
      request.onsuccess = event -> {
        $Object result = ($Object) event.target.$get("result");
        if ($exists(result)) {
          options.startIn = result.$get("handle");
          action.$apply();
        } else {
          eval("delete options.startIn");
          action.$apply();
        }

        return null;
      };
      request.onerror = event -> {
        eval("delete options.startIn");
        action.$apply();
        return null;
      };
    } else {
      eval("delete options.startIn");
      action.$apply();
    }
  }

  private static void afterPicking(FilePickerOptions options, FileSystemFileHandle handle, $Apply_0_Void action) {
    if ($exists(options.id) && $exists(JSFilePicker.DB)) {
      IDBTransaction transaction = JSFilePicker.DB.transaction("handles", "readwrite");
      transaction.oncomplete = event -> {
        action.$apply();
        return null;
      };

      $Object json = new $Object();
      json.$set("id", options.id);
      json.$set("handle", handle);
      transaction.objectStore("handles").put(json);
    } else {
      action.$apply();
    }
  }

  @SuppressWarnings("unchecked")
  private static void purgeFileSystemFileHandle(Array<FileSystemFileHandle> finalHandles, Array<FileSystemFileHandle> handles, Array<FilePickerOptionsType> types, int index, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
    if (index < handles.length) {
      handles.$get(index).getFile().then(file -> {
        boolean sizeOk = maximumFileSize <= 0 || file.size / (1024 * 1024) <= maximumFileSize;

        Array<String> exts = new Array<>();
        types.forEach(type -> Object.keys(type.accept).forEach(key -> ((Iterable<String>) type.accept.$get(key)).forEach(ext -> exts.push(ext))));

        def.js.String name = new def.js.String(file.name);
        boolean typeOk = types.length == 0 || exts.indexOf("." + name.split(".").pop().toLowerCase()) != -1;

        if (sizeOk && typeOk) {
          finalHandles.push(handles.$get(index));
        }

        JSFilePicker.purgeFileSystemFileHandle(finalHandles, handles, types, index + 1, maximumFileSize, response);
      });
    } else if ($exists(response)) {
      response.$apply(finalHandles);
    }
  }
}
