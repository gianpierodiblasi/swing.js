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

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  static  entries(handle, apply) {
    FileSystemDirectoryHandle_getEntries(handle, apply);
  }

  /**
   * Utility method to simulate the entries method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained entries
   */
  static  entriesIterator(handle, apply) {
    FileSystemDirectoryHandle_getEntriesIterator(handle, apply);
  }

  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  static  keys(handle, apply) {
    FileSystemDirectoryHandle_getKeys(handle, apply);
  }

  /**
   * Utility method to simulate the keys method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained keys
   */
  static  keysIterator(handle, apply) {
    FileSystemDirectoryHandle_getKeysIterator(handle, apply);
  }

  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  static  values(handle, apply) {
    FileSystemDirectoryHandle_getValues(handle, apply);
  }

  /**
   * Utility method to simulate the values method in FileSystemDirectoryHandle
   *
   * @param handle The handle
   * @param apply The method to call on the obtained values
   */
  static  valuesIterator(handle, apply) {
    FileSystemDirectoryHandle_getValuesIterator(handle, apply);
  }
}
