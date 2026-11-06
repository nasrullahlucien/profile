import { getTranslations } from '../i18n';
import { renderSectionHeading, renderCard, renderTag } from '../components';

export function renderAboutSection(): string {
  const t = getTranslations();

  return `
    <section id="about" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="about-title">
      <div class="max-w-7xl mx-auto">
        ${renderSectionHeading({
          id: 'about-title',
          badge: t.about.badge,
          title: t.about.title,
          subtitle: t.about.subtitle,
        })}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Narrative column (7 cols) -->
          <div class="lg:col-span-7 space-y-5 text-slate-700 font-body leading-[1.85] text-base sm:text-lg font-normal">
            <p class="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              ${t.about.p1}
            </p>
            <p class="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              ${t.about.p2}
            </p>
          </div>

          <!-- Highlight Cards (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            ${renderCard({
              padding: 'md',
              content: `
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 font-bold text-lg border border-teal-200/60" aria-hidden="true">
                    🔭
                  </div>
                  <div class="space-y-1.5">
                    <h3 class="font-bold font-heading text-slate-900 text-base sm:text-lg leading-snug">Science Teaching Core</h3>
                    <p class="text-sm font-body text-slate-600 leading-[1.7]">
                      Focus on deep conceptual reasoning in Physics, Earth &amp; Space Science, and inquiry-based science projects.
                    </p>
                    <div class="pt-2 flex flex-wrap gap-1.5">
                      ${renderTag({ text: 'Physics', variant: 'accent', size: 'sm' })}
                      ${renderTag({ text: 'Earth & Space', variant: 'default', size: 'sm' })}
                      ${renderTag({ text: 'Inquiry Projects', variant: 'default', size: 'sm' })}
                    </div>
                  </div>
                </div>
              `,
            })}

            ${renderCard({
              padding: 'md',
              content: `
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 font-bold text-lg border border-slate-200" aria-hidden="true">
                    ⚡
                  </div>
                  <div class="space-y-1.5">
                    <h3 class="font-bold font-heading text-slate-900 text-base sm:text-lg leading-snug">EdTech &amp; Interactive Media</h3>
                    <p class="text-sm font-body text-slate-600 leading-[1.7]">
                      Crafting browser-based simulations and virtual laboratories to make abstract scientific concepts intuitive.
                    </p>
                    <div class="pt-2 flex flex-wrap gap-1.5">
                      ${renderTag({ text: 'HTML5 Canvas', variant: 'default', size: 'sm' })}
                      ${renderTag({ text: 'Vanilla JS', variant: 'default', size: 'sm' })}
                      ${renderTag({ text: 'TypeScript', variant: 'accent', size: 'sm' })}
                    </div>
                  </div>
                </div>
              `,
            })}

            ${renderCard({
              padding: 'md',
              content: `
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 font-bold text-lg border border-teal-200/60" aria-hidden="true">
                    🤝
                  </div>
                  <div class="space-y-1.5">
                    <h3 class="font-bold font-heading text-slate-900 text-base sm:text-lg leading-snug">Student Leadership &amp; Innovation</h3>
                    <p class="text-sm font-body text-slate-600 leading-[1.7]">
                      Mentoring robotics &amp; coding teams, science competitions, fighting robots, and student council activities.
                    </p>
                  </div>
                </div>
              `,
            })}
          </div>

        </div>
      </div>
    </section>
  `.trim();
}
