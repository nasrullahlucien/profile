import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderTag } from '../components';

export function renderSkillsSection(): string {
  const t = getTranslations();

  const titleMap: Record<string, string> = {
    'skills.webdev.title': t.skills.webdevTitle,
    'skills.edtech.title': t.skills.edtechTitle,
    'skills.backend.title': t.skills.backendTitle,
    'skills.devops.title': t.skills.devopsTitle,
  };

  const descMap: Record<string, string> = {
    'skills.webdev.description': t.skills.webdevDesc,
    'skills.edtech.description': t.skills.edtechDesc,
    'skills.backend.description': t.skills.backendDesc,
    'skills.devops.description': t.skills.devopsDesc,
  };

  const categoryIcons: Record<string, string> = {
    'modern-web-dev': '💻',
    'interactive-edtech': '🔬',
    'backend-automation': '⚙️',
    'devops-cicd': '🚀',
  };

  return `
    <section id="skills" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="skills-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'skills-title',
          badge: 'SKILLS',
          title: t.skills.title,
          subtitle: t.skills.subtitle,
        })}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${siteContent.skillCategories
            .map((cat) => {
              const icon = categoryIcons[cat.id] || '✨';
              const title = titleMap[cat.titleKey] || cat.titleKey;
              const desc = descMap[cat.descriptionKey] || cat.descriptionKey;

              return renderCard({
                padding: 'lg',
                hover: true,
                content: `
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-xl shrink-0" aria-hidden="true">
                        ${icon}
                      </div>
                      <h3 class="text-xl font-bold text-slate-900 tracking-tight">
                        ${title}
                      </h3>
                    </div>

                    <p class="text-sm text-slate-600 leading-relaxed font-normal min-h-[40px]">
                      ${desc}
                    </p>

                    <div class="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                      ${cat.skills
                        .map((skill) =>
                          renderTag({
                            text: skill,
                            variant: 'default',
                            size: 'sm',
                            className: 'hover:border-slate-300 transition-colors',
                          })
                        )
                        .join('')}
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
