package javascript.swing;

import def.dom.IDBDatabase;
import def.js.Array;
import def.js.Object;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.OpenFilePickerOptions;
import javascript.util.fsa.OpenFilePickerOptionsType;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.window;

/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
public class JSFilePicker {

  private static IDBDatabase JSFilePickerDB;

  static {
    window.indexedDB.open("swing.js-JSFilePickerDB", 1).onupgradeneeded = event -> {
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
//    if (!$exists(options.startIn)) {
//      eval("delete options.startIn");
//    }

    if ($exists(options.id)) {
    } else {
      window.showOpenFilePicker(options).then(handles -> {
        JSFilePicker.purgeFileSystemFileHandle(new Array<>(), handles, options.types, 0, maximumFileSize, response);
      });
    }
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
