package simulation.dom;

import def.dom.Window;
import def.js.Array;
import def.js.Promise;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.FilePickerOptions;

/**
 * The simulation of the Window object
 *
 * @author gianpiero.diblasi
 */
public class $Window extends Window {

  public Promise<Array<FileSystemFileHandle>> showOpenFilePicker(FilePickerOptions options) {
    return null;
  }

//  public Promise<FileSystemFileHandle> showSaveFilePicker($Object options) {
//    return null;
//  }
}
