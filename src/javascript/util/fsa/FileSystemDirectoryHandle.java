package javascript.util.fsa;

import def.js.Array;
import def.js.Promise;

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
}
