import type { SupportedLanguage, TranslationSchema } from './types';
import { th } from './th';
import { en } from './en';
import { ms } from './ms';
import { getStorageItem, setStorageItem } from '../utils/storage';

export * from './types';

const STORAGE_KEY = 'portfolio_lang';
const DEFAULT_LANG: SupportedLanguage = 'th';

const dictionaries: Record<SupportedLanguage, TranslationSchema> = {
  th,
  en,
  ms,
};

export const LANGUAGE_LABELS: Record<SupportedLanguage, { label: string; flag: string }> = {
  th: { label: 'ไทย', flag: '🇹🇭' },
  en: { label: 'English', flag: '🇬🇧' },
  ms: { label: 'Bahasa Melayu', flag: '🇲🇾' },
};

type LanguageChangeListener = (lang: SupportedLanguage) => void;
const listeners: Set<LanguageChangeListener> = new Set();

function getInitialLanguage(): SupportedLanguage {
  const saved = getStorageItem(STORAGE_KEY);
  if (saved && (saved === 'th' || saved === 'en' || saved === 'ms')) {
    return saved;
  }
  return DEFAULT_LANG;
}

let currentLang: SupportedLanguage = getInitialLanguage();

export function getCurrentLanguage(): SupportedLanguage {
  return currentLang;
}

export function getTranslations(lang: SupportedLanguage = currentLang): TranslationSchema {
  return dictionaries[lang] || dictionaries[DEFAULT_LANG];
}

export function setLanguage(lang: SupportedLanguage): void {
  if (currentLang === lang && document.documentElement.lang === lang) {
    return;
  }
  currentLang = lang;
  setStorageItem(STORAGE_KEY, lang);

  // Update <html lang="...">
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }

  // Notify listeners
  listeners.forEach((listener) => {
    try {
      listener(lang);
    } catch (e) {
      console.error('[i18n] Listener error:', e);
    }
  });
}

export function onLanguageChange(listener: LanguageChangeListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// Initial sync on module load
if (typeof document !== 'undefined') {
  document.documentElement.lang = currentLang;
}
