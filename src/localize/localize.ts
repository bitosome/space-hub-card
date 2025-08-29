import * as en from './languages/en.json';
import * as nb from './languages/nb.json';

const languages: Record<string, unknown> = {
  en,
  nb,
};

export function localize(string: string, search = '', replace = ''): string {
  const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');

  let translated: string;

  try {
    translated = string.split('.').reduce((o: any, i) => o[i], languages[lang] as any);
  } catch (e) {
    translated = string.split('.').reduce((o: any, i) => o[i], languages.en as any);
  }

  if (translated === undefined) translated = string.split('.').reduce((o: any, i) => o[i], languages.en as any);

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }
  return translated;
}
