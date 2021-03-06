var languages = {
  'UNKNOWN - Auto Translate' : '',
  'AFRIKAANS' : 'af',
  'ALBANIAN' : 'sq',
  'AMHARIC' : 'am',
  'ARABIC' : 'ar',
  'ARMENIAN' : 'hy',
  'AZERBAIJANI' : 'az',
  'BASQUE' : 'eu',
  'BELARUSIAN' : 'be',
  'BENGALI' : 'bn',
  'BIHARI' : 'bh',
  'BRETON' : 'br',
  'BULGARIAN' : 'bg',
  'BURMESE' : 'my',
  'CATALAN' : 'ca',
  'CHEROKEE' : 'chr',
  'CHINESE' : 'zh',
  'CHINESE_SIMPLIFIED' : 'zh-CN',
  'CHINESE_TRADITIONAL' : 'zh-TW',
  'CORSICAN' : 'co',
  'CROATIAN' : 'hr',
  'CZECH' : 'cs',
  'DANISH' : 'da',
  'DHIVEHI' : 'dv',
  'DUTCH': 'nl',  
  'ENGLISH' : 'en',
  'ESPERANTO' : 'eo',
  'ESTONIAN' : 'et',
  'FAROESE' : 'fo',
  'FILIPINO' : 'tl',
  'FINNISH' : 'fi',
  'FRENCH' : 'fr',
  'FRISIAN' : 'fy',
  'GALICIAN' : 'gl',
  'GEORGIAN' : 'ka',
  'GERMAN' : 'de',
  'GREEK' : 'el',
  'GUJARATI' : 'gu',
  'HAITIAN_CREOLE' : 'ht',
  'HEBREW' : 'iw',
  'HINDI' : 'hi',
  'HUNGARIAN' : 'hu',
  'ICELANDIC' : 'is',
  'INDONESIAN' : 'id',
  'INUKTITUT' : 'iu',
  'IRISH' : 'ga',
  'ITALIAN' : 'it',
  'JAPANESE' : 'ja',
  'JAVANESE' : 'jw',
  'KANNADA' : 'kn',
  'KAZAKH' : 'kk',
  'KHMER' : 'km',
  'KOREAN' : 'ko',
  'KURDISH': 'ku',
  'KYRGYZ': 'ky',
  'LAO' : 'lo',
  'LATIN' : 'la',
  'LATVIAN' : 'lv',
  'LITHUANIAN' : 'lt',
  'LUXEMBOURGISH' : 'lb',
  'MACEDONIAN' : 'mk',
  'MALAY' : 'ms',
  'MALAYALAM' : 'ml',
  'MALTESE' : 'mt',
  'MAORI' : 'mi',
  'MARATHI' : 'mr',
  'MONGOLIAN' : 'mn',
  'NEPALI' : 'ne',
  'NORWEGIAN' : 'no',
  'OCCITAN' : 'oc',
  'ORIYA' : 'or',
  'PASHTO' : 'ps',
  'PERSIAN' : 'fa',
  'POLISH' : 'pl',
  'PORTUGUESE' : 'pt',
  'PORTUGUESE_PORTUGAL' : 'pt-PT',
  'PUNJABI' : 'pa',
  'QUECHUA' : 'qu',
  'ROMANIAN' : 'ro',
  'RUSSIAN' : 'ru',
  'SANSKRIT' : 'sa',
  'SCOTS_GAELIC' : 'gd',
  'SERBIAN' : 'sr',
  'SINDHI' : 'sd',
  'SINHALESE' : 'si',
  'SLOVAK' : 'sk',
  'SLOVENIAN' : 'sl',
  'SPANISH' : 'es',
  'SUNDANESE' : 'su',
  'SWAHILI' : 'sw',
  'SWEDISH' : 'sv',
  'SYRIAC' : 'syr',
  'TAJIK' : 'tg',
  'TAMIL' : 'ta',
  'TATAR' : 'tt',
  'TELUGU' : 'te',
  'THAI' : 'th',
  'TIBETAN' : 'bo',
  'TONGA' : 'to',
  'TURKISH' : 'tr',
  'UKRAINIAN' : 'uk',
  'URDU' : 'ur',
  'UZBEK' : 'uz',
  'UIGHUR' : 'ug',
  'VIETNAMESE' : 'vi',
  'WELSH' : 'cy',
  'YIDDISH' : 'yi',
  'YORUBA' : 'yo'
};

function save_options() {
  var sForeign = document.getElementById("sForeign");
  var sNative = document.getElementById("sNative");
  var vForeign = sForeign.children[sForeign.selectedIndex].value;
  var vNative = sNative.children[sNative.selectedIndex].value;
  localStorage["vForeign"] = vForeign;
  localStorage["vNative"] = vNative;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var sForeign = document.getElementById("sForeign");
  var sNative = document.getElementById("sNative");
  for (var n in languages) {
    if (languages[n] != '')
     sNative.options[sNative.length] = new Option(n, languages[n]);
   sForeign.options[sForeign.length] = new Option(n, languages[n]);
 }

 var vForeign = localStorage["vForeign"];
 for (var i = 0; i < sForeign.children.length; i++) {
  var child = sForeign.children[i];
  if (child.value == vForeign) child.selected = "true";
}
var vNative = localStorage["vNative"];
for (var i = 0; i < sNative.children.length; i++) {
  var child = sNative.children[i];
  if (child.value == vNative) child.selected = "true";
}
}

window.addEventListener("load", restore_options());
document.getElementById("save_button").addEventListener("click", save_options);