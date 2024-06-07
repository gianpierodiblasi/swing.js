package javascript.swing;

import def.dom.IDBDatabase;
import def.dom.IDBOpenDBRequest;
import def.dom.IDBRequest;
import def.dom.IDBTransaction;
import def.js.Array;
import static def.js.Globals.eval;
import def.js.Object;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.OpenFilePickerOptions;
import javascript.util.fsa.OpenFilePickerOptionsType;
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
  public static void showOpenFilePicker(OpenFilePickerOptions options, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
    if ($exists(options.id) && $exists(JSFilePicker.DB)) {
      IDBRequest request = JSFilePicker.DB.transaction("handles", "readonly").objectStore("handles").get(options.id);
      request.onsuccess = event -> {
        $Object result = ($Object) event.target.$get("result");
        if ($exists(result)) {
          options.startIn = result.$get("handle");
          JSFilePicker.openFilePicker(options, maximumFileSize, response);
        } else {
          eval("delete options.startIn");
          JSFilePicker.openFilePicker(options, maximumFileSize, response);
        }

        return null;
      };
      request.onerror = event -> {
        eval("delete options.startIn");
        JSFilePicker.openFilePicker(options, maximumFileSize, response);
        return null;
      };
    } else {
      eval("delete options.startIn");
      JSFilePicker.openFilePicker(options, maximumFileSize, response);
    }
  }

  private static void openFilePicker(OpenFilePickerOptions options, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
    window.showOpenFilePicker(options).then(handles -> {
      if ($exists(options.id) && $exists(JSFilePicker.DB)) {
        IDBTransaction transaction = JSFilePicker.DB.transaction("handles", "readwrite");
        transaction.oncomplete = event -> {
          JSFilePicker.purgeFileSystemFileHandle(new Array<>(), handles, options.types, 0, maximumFileSize, response);
          return null;
        };

        $Object json = new $Object();
        json.$set("id", options.id);
        json.$set("handle", handles.$get(0));
        transaction.objectStore("handles").put(json);
      } else {
        JSFilePicker.purgeFileSystemFileHandle(new Array<>(), handles, options.types, 0, maximumFileSize, response);
      }
    });
  }

  @SuppressWarnings("unchecked")
  private static void purgeFileSystemFileHandle(Array<FileSystemFileHandle> finalHandles, Array<FileSystemFileHandle> handles, Array<OpenFilePickerOptionsType> types, int index, int maximumFileSize, $Apply_1_Void<Array<FileSystemFileHandle>> response) {
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
