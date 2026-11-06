import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderTag } from '../components';
import { icons } from '../utils/icons';

export function renderProjectsSection(): string {
  const t = getTranslations();

  const titleMap: Record<string, string> = {
    'projects.itemArM1Title': t.projects.itemArM1Title,
    'projects.itemGame4Title': t.projects.itemGame4Title,
    'projects.itemGame5Title': t.projects.itemGame5Title,
    'projects.itemGame6Title': t.projects.itemGame6Title,
    'projects.itemAstroM5Title': t.projects.itemAstroM5Title,
    'projects.itemAstroM6Title': t.projects.itemAstroM6Title,
    'projects.itemSci2Title': t.projects.itemSci2Title,
    'projects.itemEngTitle': t.projects.itemEngTitle,
  };

  const descMap: Record<string, string> = {
    'projects.itemArM1Desc': t.projects.itemArM1Desc,
    'projects.itemGame4Desc': t.projects.itemGame4Desc,
    'projects.itemGame5Desc': t.projects.itemGame5Desc,
    'projects.itemGame6Desc': t.projects.itemGame6Desc,
    'projects.itemAstroM5Desc': t.projects.itemAstroM5Desc,
    'projects.itemAstroM6Desc': t.projects.itemAstroM6Desc,
    'projects.itemSci2Desc': t.projects.itemSci2Desc,
    'projects.itemEngDesc': t.projects.itemEngDesc,
  };

  const defaultMeta = { label: 'Virtual Lab', icon: '🔬', badgeClass: 'bg-teal-50 text-teal-800 border-teal-200/80' };
  const categoryMeta: Record<string, { label: string; icon: string; badgeClass: string }> = {
    game: { label: 'Interactive Game', icon: '🎮', badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200/80' },
    lesson: { label: 'Online Lesson', icon: '📖', badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80' },
    lab: defaultMeta,
    app: { label: 'EdTech Web App', icon: '💻', badgeClass: 'bg-sky-50 text-sky-800 border-sky-200/80' },
  };

  return `
    <section id="projects" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="projects-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'projects-title',
          badge: t.projects.badge,
          title: t.projects.title,
          subtitle: t.projects.subtitle,
        })}

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${siteContent.projects
            .map((proj) => {
              const title = titleMap[proj.titleKey] || proj.titleKey;
              const desc = descMap[proj.descriptionKey] || proj.descriptionKey;
              const meta = (proj.category && categoryMeta[proj.category]) || defaultMeta;

              return renderCard({
                padding: 'md',
                hover: true,
                className: 'flex flex-col justify-between h-full bg-white border-slate-200/90 shadow-2xs hover:border-teal-500/50 hover:shadow-md transition-all',
                content: `
                  <div class="space-y-3.5">
                    
                    <!-- Top bar: Category badge & level/slug -->
                    <div class="flex items-center justify-between gap-2">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${meta.badgeClass} border">
                        <span aria-hidden="true">${meta.icon}</span>
                        <span>${meta.label}</span>
                      </span>
                      <span class="text-xs text-slate-500 font-mono font-medium">${proj.level || proj.slug}</span>
                    </div>

                    <!-- Lab Title & Description -->
                    <div>
                      <h3 class="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
                        ${title}
                      </h3>
                      <p class="mt-2 text-xs sm:text-sm font-body text-slate-600 leading-[1.78] font-normal">
                        ${desc}
                      </p>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${proj.tags
                        .map((tag) => renderTag({ text: tag, variant: 'default', size: 'sm' }))
                        .join('')}
                    </div>

                  </div>

                  <!-- Action Buttons -->
                  <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button 
                      type="button" 
                      class="lab-launch-btn inline-flex items-center justify-center font-heading font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-2xs gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
                      data-lab-url="${proj.labUrl}"
                      data-lab-title="${title}"
                    >
                      <span aria-hidden="true">${icons.play}</span>
                      <span>${t.projects.playLab}</span>
                    </button>

                    <div class="flex items-center gap-1.5">
                      <a 
                        href="${proj.labUrl}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="inline-flex items-center gap-1 text-xs font-heading font-medium text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100/80 px-2.5 py-1.5 rounded-lg border border-teal-200/60 transition-colors"
                        title="${t.projects.openNewTab}"
                      >
                        <span class="hidden sm:inline">${t.projects.openNewTab}</span>
                        <span aria-hidden="true">${icons.external}</span>
                      </a>

                      ${
                        proj.githubUrl
                          ? `<a 
                              href="${proj.githubUrl}" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              class="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-slate-400"
                              title="${t.projects.viewGithub}"
                            >
                              <span class="shrink-0" aria-hidden="true">${icons.github}</span>
                            </a>`
                          : ''
                      }
                    </div>
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
