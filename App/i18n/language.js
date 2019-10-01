import { changeLanguage } from '../Actions/LanguageActions';
import { setLocale } from './index';

export const setCurrentLanguage = (lang) => (dispatch) => {
  setLocale(lang);
  dispatch(changeLanguage(lang));
};

export const toggleLanguage = () => (dispatch, getState) => {
  const currentLanguage = getState().userPreferences.language;
  if (currentLanguage === 'en') {
    dispatch(setCurrentLanguage('fr'));
  } else {
    dispatch(setCurrentLanguage('en'));
  }
};
