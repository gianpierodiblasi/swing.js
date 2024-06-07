package simulation.dom;

import def.dom.Window;
import def.js.Array;
import def.js.Promise;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.OpenFilePickerOptions;

/**
 * The simulation of the Window object
 *
 * @author gianpiero.diblasi
 */
public class $Window extends Window {

  public Promise<Array<FileSystemFileHandle>> showOpenFilePicker(OpenFilePickerOptions options) {
    return null;
  }

//  public Promise<FileSystemFileHandle> showSaveFilePicker($Object options) {
//    return null;
//  }
}
