import {
  getCurrentLanguage,
  setLanguage,
  LANGUAGE_LABELS,
  type SupportedLanguage,
  getTranslations,
} from '../i18n';

export interface LanguageSwitcherProps {
  idPrefix?: string;
  className?: string;
  isMobile?: boolean;
}

export function renderLanguageSwitcher(props: LanguageSwitcherProps = {}): string {
  const { idPrefix = 'desktop', className = '', isMobile = false } = props;
  const currentLang = getCurrentLanguage();
  const t = getTranslations();
  const selectId = `lang-select-${idPrefix}`;

  if (isMobile) {
    return `
      <div class="flex flex-col gap-2 ${className}">
        <label for="${selectId}" class="text-xs font-semibold text-slate-600 uppercase tracking-wider">
          ${t.nav.languageLabel}
        </label>
        <div class="grid grid-cols-3 gap-2">
          ${(Object.keys(LANGUAGE_LABELS) as SupportedLanguage[])
            .map((code) => {
              const active = code === currentLang;
              return `
                <button 
                  type="button" 
                  data-lang-code="${code}" 
                  class="mobile-lang-btn py-2 px-2 text-xs font-medium rounded-xl border text-center transition-all ${
                    active
                      ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }"
                  aria-pressed="${active ? 'true' : 'false'}"
                >
                  <span class="block text-base mb-0.5" aria-hidden="true">${LANGUAGE_LABELS[code].flag}</span>
                  <span class="truncate block">${LANGUAGE_LABELS[code].label}</span>
                </button>
              `;
            })
            .join('')}
        </div>
      </div>
    `.trim();
  }

  return `
    <div class="inline-flex items-center gap-1.5 ${className}">
      <label for="${selectId}" class="sr-only">${t.nav.languageLabel}</label>
      <div class="relative">
        <select 
          id="${selectId}" 
          class="appearance-none text-xs sm:text-sm font-semibold bg-white border border-slate-200/90 rounded-xl pl-3 pr-8 py-2 text-slate-700 hover:border-teal-700 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20 shadow-2xs transition-all cursor-pointer"
        >
          ${(Object.keys(LANGUAGE_LABELS) as SupportedLanguage[])
            .map(
              (code) =>
                `<option value="${code}" ${code === currentLang ? 'selected' : ''}>
                  ${LANGUAGE_LABELS[code].flag} ${LANGUAGE_LABELS[code].label}
                </option>`
            )
            .join('')}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-600" aria-hidden="true">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  `.trim();
}

export function bindLanguageSwitcherEvents(container: HTMLElement): void {
  // Bind select elements
  const selects = container.querySelectorAll<HTMLSelectElement>('select[id^="lang-select-"]');
  selects.forEach((select) => {
    select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      setLanguage(target.value as SupportedLanguage);
    });
  });

  // Bind mobile buttons
  const buttons = container.querySelectorAll<HTMLButtonElement>('.mobile-lang-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang-code') as SupportedLanguage;
      if (code) {
        setLanguage(code);
      }
    });
  });
}
