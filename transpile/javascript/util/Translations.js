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

  static  JSColorChooser_HUE = "";

  static  JSColorChooser_SATURATION = "";

  static  JSColorChooser_VALUE = "";

  static  JSColorChooser_LIGHTNESS = "";

  static  JSColorChooser_RED = "";

  static  JSColorChooser_GREEN = "";

  static  JSColorChooser_BLUE = "";

  static  JSColorChooser_CYAN = "";

  static  JSColorChooser_MAGENTA = "";

  static  JSColorChooser_YELLOW = "";

  static  JSColorChooser_BLACK = "";

  static  JSColorChooser_OPACITY = "";

  static  JSColorChooser_PALETTE = "";

  static  JSColorChooser_PREVIEW = "";

  static {
    switch(navigator.language.substring(0, 2)) {
      case "en":
      default:
        Translations.setEnglish();
        break;
      case "it":
        Translations.setItalian();
        break;
    }
  }

  constructor() {
  }

  static  setEnglish() {
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
    Translations.JSColorChooser_OPACITY = "Opacity";
    Translations.JSColorChooser_PALETTE = "Palette";
    Translations.JSColorChooser_PREVIEW = "Preview";
  }

  static  setItalian() {
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
    Translations.JSColorChooser_OPACITY = "Opacit\u00E0";
    Translations.JSColorChooser_PALETTE = "Tavolozza";
    Translations.JSColorChooser_PREVIEW = "Anteprima";
  }
}
