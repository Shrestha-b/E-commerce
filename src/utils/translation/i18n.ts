import * as RNLocalize from 'react-native-localize';

import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../translation/en.json';
import hi from '../translation/hi.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const LANGUAGES = {
  en,
  hi,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
        } else {
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);

        callback(findBestAvailableLanguage.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    // compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    // defaultNS: 'common',
  });
