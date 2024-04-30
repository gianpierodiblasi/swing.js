/**
 * The object managing the translations, currently only the English and Italian
 * languages are managed
 *
 * @author gianpiero.diblasi
 */
class Translations {

  static  JSOptionPane_OK = "";

  static  JSOptionPane_YES = "";

  static  JSOptionPane_NO = "";

  static  JSOptionPane_CANCEL = "";

  static {
    switch(navigator.language.substring(0, 2)) {
      case "en":
        Translations.JSOptionPane_OK = "OK";
        Translations.JSOptionPane_YES = "Yes";
        Translations.JSOptionPane_NO = "No";
        Translations.JSOptionPane_CANCEL = "Cancel";
        break;
      case "it":
        Translations.JSOptionPane_OK = "OK";
        Translations.JSOptionPane_YES = "Si";
        Translations.JSOptionPane_NO = "No";
        Translations.JSOptionPane_CANCEL = "Annulla";
        break;
    }
  }

  constructor() {
  }
}
