import type { Language } from './index';

// Get current language from localStorage or default to Indonesian
export function getCurrentLang(): Language {
    if (typeof window === 'undefined') return 'id';
    return (localStorage.getItem('language') as Language) || 'id';
}

// Translation helper for CV data
export function t(id: Record<Language, string>): string;
export function t(id: Record<Language, string>, lang: Language): string;
export function t(id: Record<Language, string>, lang?: Language): string {
    const currentLang = lang || getCurrentLang();
    return id[currentLang] || id.id || '';
}

// Array translation helper
export function tArray(items: Record<Language, string[]>): string[];
export function tArray(items: Record<Language, string[]>, lang: Language): string[];
export function tArray(items: Record<Language, string[]>, lang?: Language): string[] {
    const currentLang = lang || getCurrentLang();
    return items[currentLang] || items.id || [];
}
