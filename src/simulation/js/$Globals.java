package simulation.js;

import def.js.Array;
import javascript.util.fsa.FileSystemDirectoryHandle;
import javascript.util.fsa.FileSystemHandle;
import simulation.dom.$Window;

/**
 * Simulation of the global functions
 *
 * @author gianpiero.diblasi
 */
public class $Globals {

  public static $Window window;

  public static boolean $exists(Object object) {
    return false;
  }

  public static boolean $typeof(Object obj, String type) {
    return false;
  }

  public static int parseInt(double v) {
    return 0;
  }

  public static int parseInt(java.lang.String str) {
    return 0;
  }

  public static int parseInt(java.lang.String str, double v) {
    return 0;
  }

  public static int parseInt($String str, double v) {
    return 0;
  }

  public static int parseInt(def.js.String str, double v) {
    return 0;
  }

  public static int setTimeout($Apply_0_Void function, double milliseconds) {
    return 0;
  }

  public static int setInterval($Apply_0_Void function, double milliseconds) {
    return 0;
  }

  public static void FileSystemDirectoryHandle_getEntries(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {
  }

  public static void FileSystemDirectoryHandle_getEntriesIterator(FileSystemDirectoryHandle handle, $Apply_2_Void<String, FileSystemHandle> apply) {
  }

  public static void FileSystemDirectoryHandle_getKeys(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<String>> apply) {
  }

  public static void FileSystemDirectoryHandle_getKeysIterator(FileSystemDirectoryHandle handle, $Apply_1_Void<String> apply) {

  }

  public static void FileSystemDirectoryHandle_getValues(FileSystemDirectoryHandle handle, $Apply_1_Void<Array<FileSystemHandle>> apply) {

  }

  public static void FileSystemDirectoryHandle_getValuesIterator(FileSystemDirectoryHandle handle, $Apply_1_Void<FileSystemHandle> apply) {
  }

  private $Globals() {
  }
}
