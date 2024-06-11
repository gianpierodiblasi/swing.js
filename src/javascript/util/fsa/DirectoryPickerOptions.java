package javascript.util.fsa;

/**
 * The options used when opening a directory
 *
 * @author gianpiero.diblasi
 */
public class DirectoryPickerOptions {

  public String id;

  /**
   * "read" or "readwrite"
   */
  public String mode = "read";
  
  public FileSystemHandle startIn;
}
