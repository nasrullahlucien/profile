import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderButton, renderTag } from '../components';
import { icons } from '../utils/icons';

export function renderHeroSection(): string {
  const t = getTranslations();

  return `
    <section id="hero" data-reveal class="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden" aria-labelledby="hero-title">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Text Content (Column 1-7 on desktop, Order 2 on mobile) -->
          <div class="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-mono font-semibold text-teal-800 tracking-wide">
                <span class="pulse-dot" aria-hidden="true"></span>
                <span>SCIENCE EDUCATOR &bull; EDTECH INNOVATION</span>
              </span>
              ${renderTag({ text: 'Physics &amp; Earth Science', variant: 'accent', size: 'sm' })}
              ${renderTag({ text: 'First-Class Honors', variant: 'outline', size: 'sm' })}
            </div>

            <div class="space-y-3">
              <p class="text-base sm:text-lg font-heading font-semibold text-teal-800 tracking-normal leading-relaxed">
                ${t.hero.greeting}
              </p>
              
              <h1 id="hero-title" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-[1.32] sm:leading-[1.35] tracking-normal">
                <span class="block text-slate-900 tracking-tight">${t.hero.name}</span>
                <span class="block mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 leading-[1.38]">
                  ${t.hero.title}
                </span>
              </h1>
            </div>

            <!-- Hero Readout Specs (Clean line-by-line format) -->
            <div class="space-y-2.5 sm:space-y-3 py-1 font-body text-base text-slate-700 leading-relaxed max-w-2xl">
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span class="font-mono text-xs sm:text-sm font-bold tracking-wider text-teal-800 shrink-0 sm:w-28">${t.hero.fastFacts.role.label}</span>
                <span class="text-slate-800 font-semibold text-base sm:text-lg">${t.hero.fastFacts.role.value}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span class="font-mono text-xs sm:text-sm font-bold tracking-wider text-teal-800 shrink-0 sm:w-28">${t.hero.fastFacts.org.label}</span>
                <span class="text-slate-700">${t.hero.fastFacts.org.value}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span class="font-mono text-xs sm:text-sm font-bold tracking-wider text-teal-800 shrink-0 sm:w-28">${t.hero.fastFacts.education.label}</span>
                <span class="text-slate-700">${t.hero.fastFacts.education.value}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span class="font-mono text-xs sm:text-sm font-bold tracking-wider text-teal-800 shrink-0 sm:w-28">${t.hero.fastFacts.honors.label}</span>
                <span class="text-slate-700">${t.hero.fastFacts.honors.value}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span class="font-mono text-xs sm:text-sm font-bold tracking-wider text-teal-800 shrink-0 sm:w-28">${t.hero.fastFacts.focus.label}</span>
                <span class="text-slate-600 font-mono text-xs sm:text-sm">${t.hero.fastFacts.focus.value}</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              ${renderButton({
                href: '#projects',
                text: t.hero.exploreLabs,
                variant: 'accent',
                size: 'lg',
                icon: icons.play,
                className: 'shadow-sm hover:shadow-md',
              })}
              ${renderButton({
                href: siteContent.author.cvPath,
                text: t.hero.downloadCv,
                variant: 'outline',
                size: 'lg',
                download: true,
                icon: icons.download,
              })}
            </div>

            <!-- Social Links quick row -->
            <div class="pt-4 border-t border-slate-200/80 flex items-center gap-3">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Connect:
              </span>
              <div class="flex items-center gap-1.5">
                ${siteContent.socials
                  .map(
                    (soc) => `
                    <a 
                      href="${soc.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="p-2 text-slate-500 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-700" 
                      aria-label="${soc.platform}"
                      title="${soc.platform}"
                    >
                      ${icons[soc.platform] || ''}
                    </a>
                  `
                  )
                  .join('')}
              </div>
            </div>

          </div>

          <!-- Profile Photo Card (Column 8-12 on desktop, Order 1 on mobile) -->
          <div class="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md">
              
              <!-- Subtle decorative backdrop halo -->
              <div class="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 via-slate-200/40 to-teal-100/30 rounded-3xl blur-xl" aria-hidden="true"></div>

              <div class="relative bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-lg">
                <div class="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                  <img 
                    src="${siteContent.author.profilePhotoPath}" 
                    alt="${t.hero.profilePhotoAlt}" 
                    class="w-full h-full object-cover object-top select-none"
                    loading="eager"
                    width="400"
                    height="500"
                  />
                </div>
                
                <div class="mt-4 px-2 pb-1 flex items-center justify-between text-xs text-slate-600">
                  <span class="flex items-center gap-1.5 font-medium text-slate-800">
                    <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                    ${t.hero.name}
                  </span>
                  <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-mono font-medium">
                    Science &amp; EdTech
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `.trim();
}
