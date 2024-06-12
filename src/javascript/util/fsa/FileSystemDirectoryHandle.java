package javascript.util.fsa;

import def.js.Array;
import def.js.Promise;
import simulation.js.$Apply_1_Void;
import simulation.js.$Apply_2_Void;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getEntries;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getEntriesIterator;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getKeys;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getKeysIterator;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getValues;
import static simulation.js.$Globals.FileSystemDirectoryHandle_getValuesIterator;

/**
 * The simulation of the FileSystemDirectoryHandle object
 *
 * @author gianpiero.diblasi
 */
public interface FileSystemDirectoryHandle extends FileSystemHandle {

  public Promise<FileSystemDirectoryHandle> getDirectoryHandle(String name, FileSystemHandleGetOptions options);

  public Promise<FileSystemFileHandle> getFileHandle(String name, FileSystemHandleGetOptions options);

  public Promise<Void> removeEntry(String name, FileSystemHandleRemoveOptions options);

  public Promise<Array<String>> resolve(FileSystemHandle possibleDescendant);

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  public static void entries(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {
    FileSystemDirectoryHandle_getEntries(handle, apply);
  }

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  public static void entriesIterator(FileSystemDirectoryHandle handle, $Apply_2_Void<String, FileSystemHandle> apply) {
    FileSystemDirectoryHandle_getEntriesIterator(handle, apply);
  }

  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  public static void keys(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<String>> apply) {
    FileSystemDirectoryHandle_getKeys(handle, apply);
  }
  
  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  public static void keysIterator(FileSystemDirectoryHandle handle, $Apply_1_Void<String> apply) {
    FileSystemDirectoryHandle_getKeysIterator(handle, apply);
  }

  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  public static void values(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {
    FileSystemDirectoryHandle_getValues(handle, apply);
  }
  
  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  public static void valuesIterator(FileSystemDirectoryHandle handle, $Apply_1_Void<FileSystemHandle> apply) {
    FileSystemDirectoryHandle_getValuesIterator(handle, apply);
  }
}
