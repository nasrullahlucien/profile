import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderTag } from '../components';
import { icons } from '../utils/icons';

export function renderProjectsSection(): string {
  const t = getTranslations();

  const titleMap: Record<string, string> = {
    'projects.item1.title': t.projects.item1Title,
    'projects.item2.title': t.projects.item2Title,
    'projects.item3.title': t.projects.item3Title,
  };

  const descMap: Record<string, string> = {
    'projects.item1.description': t.projects.item1Desc,
    'projects.item2.description': t.projects.item2Desc,
    'projects.item3.description': t.projects.item3Desc,
  };

  return `
    <section id="projects" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="projects-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'projects-title',
          badge: 'INTERACTIVE LABS',
          title: t.projects.title,
          subtitle: t.projects.subtitle,
        })}

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${siteContent.projects
            .map((proj) => {
              const title = titleMap[proj.titleKey] || proj.titleKey;
              const desc = descMap[proj.descriptionKey] || proj.descriptionKey;

              return renderCard({
                padding: 'md',
                hover: true,
                className: 'flex flex-col justify-between h-full bg-white border-slate-200/90',
                content: `
                  <div class="space-y-4">
                    
                    <!-- Top bar: Slug badge & tags -->
                    <div class="flex items-center justify-between gap-2">
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                        Lab Simulation
                      </span>
                      <span class="text-xs text-slate-600 font-mono font-medium">${proj.slug}</span>
                    </div>

                    <!-- Lab Title & Description -->
                    <div>
                      <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug">
                        ${title}
                      </h3>
                      <p class="mt-2 text-sm font-body text-slate-600 leading-[1.78] font-normal">
                        ${desc}
                      </p>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1.5 pt-2">
                      ${proj.tags
                        .map((tag) => renderTag({ text: tag, variant: 'default', size: 'sm' }))
                        .join('')}
                    </div>

                  </div>

                  <!-- Action Buttons -->
                  <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button 
                      type="button" 
                      class="lab-launch-btn inline-flex items-center justify-center font-heading font-semibold text-sm px-4 py-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-2xs gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
                      data-lab-url="${proj.labUrl}"
                      data-lab-title="${title}"
                    >
                      <span aria-hidden="true">${icons.play}</span>
                      <span>${t.projects.playLab}</span>
                    </button>

                    ${
                      proj.githubUrl
                        ? `<a 
                            href="${proj.githubUrl}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-slate-400"
                            title="${t.projects.viewGithub}"
                          >
                            <span class="shrink-0" aria-hidden="true">${icons.github}</span>
                            <span>${t.projects.viewGithub}</span>
                          </a>`
                        : ''
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
