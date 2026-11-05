import { getTranslations } from '../i18n';

export function renderFooterSection(): string {
  const t = getTranslations();
  const currentYear = new Date().getFullYear();

  return `
    <footer class="border-t border-slate-200/90 bg-white py-10 text-sm text-slate-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div class="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span class="font-bold text-slate-900">
              ${t.hero.name}
            </span>
            <span class="hidden sm:inline text-slate-300">•</span>
            <span>
              &copy; ${currentYear} ${t.common.allRightsReserved}.
            </span>
          </div>

          <div class="flex items-center gap-4">
            <a 
              href="#site-header" 
              class="inline-flex items-center gap-1.5 font-semibold text-teal-800 hover:text-teal-900 transition-colors focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg px-2 py-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span>${t.common.backToTop}</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  `.trim();
}
