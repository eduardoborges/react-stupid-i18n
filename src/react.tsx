import { computed, signal } from '@preact/signals-react';
import {
  get, replace, PathInto,
} from './utils';

export function createInstance<T>(locales: T, initialLanguage: keyof T) {
  type LocaleName = keyof T;
  type Locale = T[LocaleName];

  const language = signal(initialLanguage);
  const dictionary = computed(() => locales[language.value]);
  const avaliableLanguages = computed(() => Object.keys(locales!) as LocaleName[]);

  const setLanguage = (_language: LocaleName) => {
    language.value = _language;
  };

  function t(key: PathInto<Locale>, replaceStrings?: Record<string, string | number>): string {
    if (!dictionary) return '';
    const value = get(
      dictionary.value as Record<string, string>,
      (key as string).split('.'),
    );

    if (replaceStrings) return replace(value, replaceStrings);

    return value;
  }

  return {
    t,
    language: language.value,
    avaliableLanguages: avaliableLanguages.value,
    setLanguage,
  };
}
