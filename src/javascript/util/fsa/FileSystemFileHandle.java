package javascript.util.fsa;

import def.dom.File;
import def.js.Promise;

/**
 * The simulation of the FileSystemFileHandle object
 *
 * @author gianpiero.diblasi
 */
public interface FileSystemFileHandle extends FileSystemHandle {

  public Promise<File> getFile();

  public Promise<FileSystemWritableFileStream> createWritable(FileSystemWritableFileStreamCreateOptions options);
}
