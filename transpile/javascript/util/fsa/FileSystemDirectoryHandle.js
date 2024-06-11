/**
 * The simulation of the FileSystemDirectoryHandle object
 *
 * @author gianpiero.diblasi
 */
class FileSystemDirectoryHandle extends FileSystemHandle {

   getDirectoryHandle(name, options) {
  }

   getFileHandle(name, options) {
  }

   removeEntry(name, options) {
  }

   resolve(possibleDescendant) {
  }

  static  EVAL_ENTRIES = "var entries = [];" + "var getEntries = async (h, a) => {\n" + "	for await (let [key, value] of h.entries()) entries[key] = value;\n" + "	a(entries);\n" + "};" + "getEntries(handle,apply);";

  static  EVAL_KEYS = "var keys = [];" + "var getKeys = async (h, a) => {\n" + "	for await (let key of h.keys()) keys.push(key);\n" + "	a(keys);\n" + "};" + "getKeys(handle,apply);";

  static  EVAL_VALUES = "var values = [];" + "var getValues = async (h, a) => {\n" + "	for await (let value of h.values()) values.push(value);\n" + "	a(values);\n" + "};" + "getValues(handle,apply);";

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  static  entries(handle, apply) {
    eval(FileSystemDirectoryHandle.EVAL_ENTRIES);
  }

  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  static  keys(handle, apply) {
    eval(FileSystemDirectoryHandle.EVAL_KEYS);
  }

  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  static  values(handle, apply) {
    eval(FileSystemDirectoryHandle.EVAL_VALUES);
  }
}
