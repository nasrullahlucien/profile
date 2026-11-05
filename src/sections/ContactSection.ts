import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderButton, renderCard } from '../components';
import { icons } from '../utils/icons';

export function renderContactSection(): string {
  const t = getTranslations();

  return `
    <section id="contact" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="contact-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'contact-title',
          badge: 'GET IN TOUCH',
          title: t.contact.title,
          subtitle: t.contact.subtitle,
        })}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl">
          
          <!-- Direct Email Card (7 cols) -->
          <div class="lg:col-span-7">
            ${renderCard({
              padding: 'lg',
              hover: false,
              className: 'h-full flex flex-col justify-between bg-gradient-to-br from-white to-slate-50 border-slate-200',
              content: `
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 border border-teal-200/80 flex items-center justify-center shrink-0" aria-hidden="true">
                    ${icons.mail}
                  </div>

                  <div>
                    <span class="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                      ${t.contact.directEmailLabel}
                    </span>
                    <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                      ${siteContent.author.emailPlaceholder}
                    </h3>
                  </div>

                  <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    ${t.contact.subtitle}
                  </p>
                </div>

                <div class="pt-6">
                  ${renderButton({
                    href: `mailto:${siteContent.author.emailPlaceholder}`,
                    text: t.contact.emailButton,
                    variant: 'accent',
                    size: 'lg',
                    icon: icons.mail,
                  })}
                </div>
              `,
            })}
          </div>

          <!-- Social Links Card (5 cols) -->
          <div class="lg:col-span-5">
            ${renderCard({
              padding: 'lg',
              hover: false,
              className: 'h-full flex flex-col justify-between',
              content: `
                <div class="space-y-4">
                  <h3 class="text-lg font-bold text-slate-900 tracking-tight">
                    ${t.contact.socialHeading}
                  </h3>

                  <div class="space-y-2 pt-2">
                    ${siteContent.socials
                      .map(
                        (soc) => `
                        <a 
                          href="${soc.url}" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          class="flex items-center justify-between p-3 rounded-xl border border-slate-200/90 hover:border-teal-700 hover:bg-teal-50/50 transition-all group focus-visible:ring-2 focus-visible:ring-teal-700"
                        >
                          <div class="flex items-center gap-3">
                            <span class="text-slate-600 group-hover:text-teal-800 transition-colors" aria-hidden="true">
                              ${icons[soc.platform] || ''}
                            </span>
                            <span class="text-sm font-semibold text-slate-800 group-hover:text-teal-900">
                              ${t.social[soc.platform]}
                            </span>
                          </div>
                          <span class="text-slate-400 group-hover:text-teal-800 transition-colors text-xs font-medium" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      `
                      )
                      .join('')}
                  </div>
                </div>

                <p class="text-xs text-slate-600 font-medium pt-4 border-t border-slate-100">
                  External professional links verified.
                </p>
              `,
            })}
          </div>

        </div>

      </div>
    </section>
  `.trim();
}
