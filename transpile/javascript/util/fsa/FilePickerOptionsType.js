/**
 * The types in the options used when opening a file
 *
 * @author gianpiero.diblasi
 */
class FilePickerOptionsType {

   description = null;

   accept = new Object();

   pushAccept(mime, extensions) {
    this.accept[mime] = extensions;
  }
}
