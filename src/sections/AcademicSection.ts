import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderTag } from '../components';
import { icons } from '../utils/icons';

export function renderAcademicSection(): string {
  const t = getTranslations();

  const titleMap: Record<string, string> = {
    'academic.item1.title': t.academic.item1Title,
    'academic.item2.title': t.academic.item2Title,
    'academic.training1.title': t.academic.training1Title,
  };

  const orgMap: Record<string, string> = {
    'academic.item1.org': t.academic.item1Org,
    'academic.item2.org': t.academic.item2Org,
    'academic.training1.org': t.academic.training1Org,
  };

  return `
    <section id="academic" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="academic-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'academic-title',
          badge: 'PUBLICATIONS & TRAINING',
          title: t.academic.title,
          subtitle: t.academic.subtitle,
        })}

        <div class="space-y-4 max-w-4xl">
          ${siteContent.academicWorks
            .map((item) => {
              const title = titleMap[item.titleKey] || item.titleKey;
              const org = orgMap[item.organizationKey] || item.organizationKey;
              const isTraining = item.id.startsWith('training');

              return renderCard({
                padding: 'md',
                hover: true,
                content: `
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-xl ${
                        isTraining ? 'bg-amber-50 text-amber-800 border-amber-200/60' : 'bg-teal-50 text-teal-800 border-teal-200/60'
                      } border flex items-center justify-center shrink-0 font-bold" aria-hidden="true">
                        ${isTraining ? '📜' : '📄'}
                      </div>
                      
                      <div class="space-y-1">
                        <div class="flex items-center gap-2">
                          <span class="text-xs font-semibold font-heading px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            ${item.year}
                          </span>
                          ${renderTag({
                            text: isTraining ? 'Professional Training' : 'Academic Publication',
                            variant: isTraining ? 'default' : 'accent',
                            size: 'sm',
                          })}
                        </div>
                        <h3 class="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
                          ${title}
                        </h3>
                        <p class="text-sm font-body text-slate-600 font-medium leading-relaxed">
                          ${org}
                        </p>
                      </div>
                    </div>

                    ${
                      item.url
                        ? `<a 
                            href="${item.url}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 hover:underline shrink-0"
                          >
                            <span>View Document</span>
                            <span aria-hidden="true">${icons.external}</span>
                          </a>`
                        : `<span class="text-xs text-slate-600 font-medium italic shrink-0">[DOCUMENT LINK PLACEHOLDER]</span>`
                    }
                  </div>
                `,
              });
            })
            .join('')}
        </div>

      </div>
    </section>
  `.trim();
}
