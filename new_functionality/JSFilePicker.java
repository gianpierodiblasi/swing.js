package javascript.swing;

import def.js.Array;
import def.js.Object;
import simulation.js.$Apply_1_Void;
import simulation.js.$FileSystemFileHandle;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.window;
import simulation.js.$Object;

public class JSFilePicker {

  public static void showOpenFilePicker(String id, Array<Array<String>> types, boolean excludeAcceptAllOption, boolean multiple, int maximumFileSize, $Apply_1_Void<Array<$FileSystemFileHandle>> response) {
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
