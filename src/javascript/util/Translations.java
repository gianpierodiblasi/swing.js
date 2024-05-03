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
  public static String JSColorChooser_HUE = "";
  public static String JSColorChooser_SATURATION = "";
  public static String JSColorChooser_VALUE = "";

  static {
    switch (navigator.language.substring(0, 2)) {
      case "en":
      default:
        Translations.JSOptionPane_OK = "OK";
        Translations.JSOptionPane_YES = "Yes";
        Translations.JSOptionPane_NO = "No";
        Translations.JSOptionPane_CANCEL = "Cancel";
        Translations.JSColorChooser_HUE = "Hue";
        Translations.JSColorChooser_SATURATION = "Saturation";
        Translations.JSColorChooser_VALUE = "Value";
        break;
      case "it":
        Translations.JSOptionPane_OK = "OK";
        Translations.JSOptionPane_YES = "Si";
        Translations.JSOptionPane_NO = "No";
        Translations.JSOptionPane_CANCEL = "Annulla";
        Translations.JSColorChooser_HUE = "Tonalit\u00E0";
        Translations.JSColorChooser_SATURATION = "Saturazione";
        Translations.JSColorChooser_VALUE = "Valore";
        break;
    }
  }

  private Translations() {
  }
}
