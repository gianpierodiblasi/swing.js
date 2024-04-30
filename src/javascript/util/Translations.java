package javascript.util;

import static def.dom.Globals.navigator;

/**
 * The object managing the translations, currently only the English and Italian
 * languages are managed
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("StaticNonFinalUsedInInitialization")
public class Translations {

  public static String JSOptionPane_OK = "";
  public static String JSOptionPane_YES = "";
  public static String JSOptionPane_NO = "";
  public static String JSOptionPane_CANCEL = "";

  static {
    switch (navigator.language.substring(0, 2)) {
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

  private Translations() {
  }
}
