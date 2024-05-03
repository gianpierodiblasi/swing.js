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
  public static String JSColorChooser_LIGHTNESS = "";
  public static String JSColorChooser_RED = "";
  public static String JSColorChooser_GREEN = "";
  public static String JSColorChooser_BLUE = "";
  public static String JSColorChooser_CYAN = "";
  public static String JSColorChooser_MAGENTA = "";
  public static String JSColorChooser_YELLOW = "";
  public static String JSColorChooser_BLACK = "";

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
        Translations.JSColorChooser_LIGHTNESS = "Lightness";
        Translations.JSColorChooser_RED = "Red";
        Translations.JSColorChooser_GREEN = "Green";
        Translations.JSColorChooser_BLUE = "Blue";
        Translations.JSColorChooser_CYAN = "Cyan";
        Translations.JSColorChooser_MAGENTA = "Magenta";
        Translations.JSColorChooser_YELLOW = "Yellow";
        Translations.JSColorChooser_BLACK = "Black";
        break;
      case "it":
        Translations.JSOptionPane_OK = "OK";
        Translations.JSOptionPane_YES = "Si";
        Translations.JSOptionPane_NO = "No";
        Translations.JSOptionPane_CANCEL = "Annulla";
        Translations.JSColorChooser_HUE = "Tonalit\u00E0";
        Translations.JSColorChooser_SATURATION = "Saturazione";
        Translations.JSColorChooser_VALUE = "Valore";
        Translations.JSColorChooser_LIGHTNESS = "Luminosit\u00E0";
        Translations.JSColorChooser_RED = "Rosso";
        Translations.JSColorChooser_GREEN = "Verde";
        Translations.JSColorChooser_BLUE = "Blu";
        Translations.JSColorChooser_CYAN = "Ciano";
        Translations.JSColorChooser_MAGENTA = "Magenta";
        Translations.JSColorChooser_YELLOW = "Giallo";
        Translations.JSColorChooser_BLACK = "Nero";
        break;
    }
  }

  private Translations() {
  }
}
