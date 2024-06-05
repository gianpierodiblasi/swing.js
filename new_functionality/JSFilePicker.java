package javascript.swing;

import def.js.Array;
import def.js.Object;
import simulation.js.$Apply_1_Void;
import simulation.js.$FileSystemFileHandle;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.window;
import simulation.js.$Object;

/**
 * A file selector based on the JavaScript File System API
 *
 * @author gianpiero.diblasi
 */
public class JSFilePicker {

  private JSFilePicker() {
  }

  /**
   * Shows an open file picker
   *
   * @param id By specifying an ID, the file picker can remember different
   * directories for different IDs; if the same ID is used for another picker,
   * the picker opens in the same directory
   * @param types An associative array of allowed file types to pick; the array
   * key is the MIME type and the array value is an array of file extensions
   * @param excludeAcceptAllOption true to exclude the "Accept All" option,
   * false otherwise
   * @param multiple true to allow multiple selection
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  public static void showOpenFilePicker(String id, Array<Array<String>> types, boolean excludeAcceptAllOption, boolean multiple, int maximumFileSize, $Apply_1_Void<Array<$FileSystemFileHandle>> response) {
    Array<$Object> typesObj = new Array<>();
    Object.keys(types).forEach(key -> {
      $Object accept = new $Object();
      accept.$set(key, types.$get(key));

      $Object typeObj = new $Object();
      typeObj.$set("accept", accept);

      typesObj.push(typeObj);
    });

    $Object options = new $Object();
    options.$set("id", id);
    options.$set("types", typesObj);
    options.$set("excludeAcceptAllOption", excludeAcceptAllOption);
    options.$set("multiple", multiple);

    Array<$FileSystemFileHandle> finalHandles = new Array<>();

    window.showOpenFilePicker(options).then(handles -> {
      JSFilePicker.purgeFileSystemFileHandle(finalHandles, handles, 0, maximumFileSize, response);
    });
  }

  private static void purgeFileSystemFileHandle(Array<$FileSystemFileHandle> finalHandles, Array<$FileSystemFileHandle> handles, int index, int maximumFileSize, $Apply_1_Void<Array<$FileSystemFileHandle>> response) {
    if (index < handles.length) {
      handles.$get(index).getFile().then(file -> {
        if (maximumFileSize <= 0 || file.size / (1024 * 1024) <= maximumFileSize) {
          finalHandles.push(handles.$get(index));
        }
        JSFilePicker.purgeFileSystemFileHandle(finalHandles, handles, index+1, maximumFileSize, response);
      });
    } else if ($exists(response)) {
      response.$apply(finalHandles);
    }
  }
}
