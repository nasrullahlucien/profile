import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderTag } from '../components';
import { icons } from '../utils/icons';

export function renderEducationSection(): string {
  const t = getTranslations();

  const masterEdu = siteContent.education[0];
  const bachelorEdu = siteContent.education[1];

  return `
    <section id="education" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="education-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'education-title',
          badge: 'EDUCATION',
          title: t.education.title,
          subtitle: t.education.subtitle,
        })}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          
          <!-- Master's Degree (Current) -->
          ${renderCard({
            padding: 'lg',
            hover: true,
            className: 'relative border-teal-200/90 bg-gradient-to-br from-white to-teal-50/20',
            content: `
              <div class="space-y-4">
                <div class="flex items-center justify-between gap-2">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold font-heading bg-teal-100 text-teal-800 border border-teal-200">
                    ${masterEdu?.period || '[YEAR]'} • Current
                  </span>
                  ${renderTag({ text: 'In Progress', variant: 'accent', size: 'sm' })}
                </div>

                <div class="flex items-start gap-4">
                  ${
                    masterEdu?.logoPath
                      ? `<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shrink-0 shadow-2xs">
                          <img 
                            src="${masterEdu.logoPath}" 
                            alt="${t.education.masterInstitution}" 
                            class="w-full h-full object-contain select-none"
                            loading="lazy"
                            width="64"
                            height="64"
                          />
                        </div>`
                      : `<div class="p-2.5 rounded-xl bg-teal-50 border border-teal-200/80 shrink-0" aria-hidden="true">${icons.academicCap}</div>`
                  }
                  <div class="space-y-1.5 min-w-0">
                    <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-[1.38]">
                      ${t.education.masterDegree}
                    </h3>
                    <p class="text-base font-heading text-teal-800 font-semibold leading-normal">
                      ${t.education.masterInstitution}
                    </p>
                  </div>
                </div>

                <p class="text-sm font-body text-slate-600 leading-[1.78] border-t border-slate-100 pt-3">
                  Continuing advanced pedagogical studies and modern didactic methodologies in science education.
                </p>
              </div>
            `,
          })}

          <!-- Bachelor's Degree (Honors) -->
          ${renderCard({
            padding: 'lg',
            hover: true,
            className: 'relative',
            content: `
              <div class="space-y-4">
                <div class="flex items-center justify-between gap-2">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold font-heading bg-slate-100 text-slate-700 border border-slate-200">
                    ${bachelorEdu?.period || '[YEAR]'}
                  </span>
                  ${renderTag({ text: 'Honors Degree', variant: 'primary', size: 'sm' })}
                </div>

                <div class="flex items-start gap-4">
                  ${
                    bachelorEdu?.logoPath
                      ? `<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shrink-0 shadow-2xs">
                          <img 
                            src="${bachelorEdu.logoPath}" 
                            alt="${t.education.bachelorInstitution}" 
                            class="w-full h-full object-contain select-none"
                            loading="lazy"
                            width="64"
                            height="64"
                          />
                        </div>`
                      : `<div class="p-2.5 rounded-xl bg-slate-100 border border-slate-200 shrink-0" aria-hidden="true">${icons.academicCap}</div>`
                  }
                  <div class="space-y-1.5 min-w-0">
                    <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-[1.38]">
                      ${t.education.bachelorDegree}
                    </h3>
                    <p class="text-base font-heading text-slate-800 font-semibold leading-normal">
                      ${t.education.bachelorInstitution}
                    </p>
                    <p class="mt-1 inline-flex items-center gap-1.5 text-xs font-bold font-heading text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                      ★ ${t.education.bachelorHonors}
                    </p>
                  </div>
                </div>

                <p class="text-sm font-body text-slate-600 leading-[1.78] border-t border-slate-100 pt-3">
                  Graduated with First-Class Honors in Science Teaching, establishing a strong foundation in physics, space science, and pedagogic design.
                </p>
              </div>
            `,
          })}

        </div>

      </div>
    </section>
  `.trim();
}
