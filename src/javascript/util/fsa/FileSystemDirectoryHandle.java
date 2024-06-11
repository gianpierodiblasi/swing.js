package javascript.util.fsa;

import def.js.Array;
import static def.js.Globals.eval;
import def.js.Promise;
import simulation.js.$Apply_1_Void;

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

  final static String EVAL_ENTRIES
          = "var entries = [];"
          + "var getEntries = async (h, a) => {\n"
          + "	for await (let [key, value] of h.entries()) entries[key] = value;\n"
          + "	a(entries);\n"
          + "};"
          + "getEntries(handle,apply);";

  final static String EVAL_KEYS
          = "var keys = [];"
          + "var getKeys = async (h, a) => {\n"
          + "	for await (let key of h.keys()) keys.push(key);\n"
          + "	a(keys);\n"
          + "};"
          + "getKeys(handle,apply);";

  final static String EVAL_VALUES
          = "var values = [];"
          + "var getValues = async (h, a) => {\n"
          + "	for await (let value of h.values()) values.push(value);\n"
          + "	a(values);\n"
          + "};"
          + "getValues(handle,apply);";

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  public static void entries(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {
    eval(FileSystemDirectoryHandle.EVAL_ENTRIES);
  }

  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  public static void keys(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<String>> apply) {
    eval(FileSystemDirectoryHandle.EVAL_KEYS);
  }

  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  public static void values(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {
    eval(FileSystemDirectoryHandle.EVAL_VALUES);
  }
}
