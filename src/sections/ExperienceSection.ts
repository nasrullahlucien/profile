import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderTimelineItem, renderCard, renderTag } from '../components';

export function renderExperienceSection(): string {
  const t = getTranslations();

  // Map school keys to translation strings
  const schoolNameMap: Record<string, string> = {
    'exp.school.bacho': t.experience.schools.bacho,
    'exp.school.khamphee': t.experience.schools.khamphee,
    'exp.school.thesaban4': t.experience.schools.thesaban4,
    'exp.school.privateTutor': t.experience.schools.privateTutor,
  };

  const roleNameMap: Record<string, string> = {
    'exp.role.teacher': t.experience.roles.teacher,
    'exp.role.tutor': t.experience.roles.tutor,
  };

  const subjectsMap: Record<string, string> = {
    'exp.subjects.bacho': t.experience.subjects.bacho,
    'exp.subjects.khamphee': t.experience.subjects.khamphee,
    'exp.subjects.thesaban4': t.experience.subjects.thesaban4,
    'exp.subjects.privateTutor': t.experience.subjects.privateTutor,
  };

  const mentoringMap: Record<string, string> = {
    'exp.mentor.scienceProject': t.experience.mentoring.scienceProject,
    'exp.mentor.roboticsCoding': t.experience.mentoring.roboticsCoding,
    'exp.mentor.scienceQuiz': t.experience.mentoring.scienceQuiz,
    'exp.mentor.bambooRobot': t.experience.mentoring.bambooRobot,
    'exp.mentor.studentCouncil': t.experience.mentoring.studentCouncil,
  };

  return `
    <section id="experience" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="experience-title">
      <div class="max-w-7xl mx-auto space-y-12">
        
        ${renderSectionHeading({
          id: 'experience-title',
          badge: t.experience.badge,
          title: t.experience.title,
          subtitle: t.experience.subtitle,
        })}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Column 1: Teaching Positions Timeline (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center gap-2 pb-2 border-b border-slate-200">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug">
                ${t.experience.teachingHeading}
              </h3>
            </div>

            <div class="pt-2">
              ${siteContent.teachingExperience
                .map((item, index) => {
                  const isLast = index === siteContent.teachingExperience.length - 1;
                  return renderTimelineItem({
                    date: item.dateRange,
                    title: schoolNameMap[item.schoolKey] || item.schoolKey,
                    subtitle: roleNameMap[item.roleKey] || item.roleKey,
                    description: subjectsMap[item.subjectsKey] || item.subjectsKey,
                    isLast,
                  });
                })
                .join('')}
            </div>
          </div>

          <!-- Column 2: Mentoring & Student Development Cards (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div class="flex items-center gap-2 pb-2 border-b border-slate-200">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug">
                ${t.experience.mentoringHeading}
              </h3>
            </div>

            <div class="space-y-3 pt-2">
              ${siteContent.mentoringExperience
                .map((item) => {
                  const title = mentoringMap[item.titleKey] || item.titleKey;
                  const org = item.organizationKey ? schoolNameMap[item.organizationKey] : undefined;

                  return renderCard({
                    padding: 'sm',
                    hover: true,
                    content: `
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 text-sm font-bold border border-teal-200/60 mt-0.5" aria-hidden="true">
                          ✓
                        </div>
                        <div class="space-y-1">
                          <h4 class="text-base font-semibold font-heading text-slate-900 leading-snug">
                            ${title}
                          </h4>
                          ${
                            org
                              ? `<p class="text-xs font-body text-teal-800 font-medium">${org}</p>`
                              : ''
                          }
                          <div class="pt-1">
                            ${renderTag({ text: 'Student Development', variant: 'default', size: 'sm' })}
                          </div>
                        </div>
                      </div>
                    `,
                  });
                })
                .join('')}
            </div>

          </div>

        </div>

      </div>
    </section>
  `.trim();
}
