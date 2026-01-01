import en from './en.json';
import id from './id.json';

export type Language = 'en' | 'id';

export const translations = {
    en,
    id,
} as const;

export function getTranslation(lang: Language) {
    return translations[lang] || translations.id;
}

// Get language from localStorage or default to Indonesian
export function getCurrentLanguage(): Language {
    if (typeof window === 'undefined') return 'id';
    return (localStorage.getItem('language') as Language) || 'id';
}

// Set language in localStorage
export function setLanguage(lang: Language) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}
