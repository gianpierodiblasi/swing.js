package simulation.dom;

import def.dom.Window;
import def.js.Array;
import def.js.Promise;
import javascript.util.fsa.FileSystemDirectoryHandle;
import javascript.util.fsa.FileSystemFileHandle;
import javascript.util.fsa.OpenFilePickerOptions;
import simulation.js.$Object;

/**
 * The simulation of the Window object
 *
 * @author gianpiero.diblasi
 */
public class $Window extends Window {

  public Promise<Array<FileSystemFileHandle>> showOpenFilePicker(OpenFilePickerOptions options) {
    return null;
  }

//  public Promise<Array<FileSystemDirectoryHandle>> showDirectoryPicker($Object options) {
//    return null;
//  }

//  public Promise<FileSystemFileHandle> showSaveFilePicker($Object options) {
//    return null;
//  }
}
