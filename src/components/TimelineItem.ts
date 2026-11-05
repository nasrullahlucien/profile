export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  isLast?: boolean;
  icon?: string;
}

export function renderTimelineItem(props: TimelineItemProps): string {
  const { date, title, subtitle, description, tags = [], isLast = false, icon } = props;

  return `
    <div class="relative pl-8 sm:pl-10 pb-8 ${isLast ? 'pb-0' : ''} group">
      ${
        !isLast
          ? `<div class="absolute left-3.5 top-3 -bottom-3 w-0.5 bg-slate-200 group-last:hidden" aria-hidden="true"></div>`
          : ''
      }
      <div class="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center shadow-xs" aria-hidden="true">
        ${
          icon
            ? `<span class="text-teal-700 text-xs">${icon}</span>`
            : `<div class="w-2.5 h-2.5 rounded-full bg-teal-600"></div>`
        }
      </div>

      <div class="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-colors">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold font-heading bg-slate-100 text-slate-700 border border-slate-200">
            ${date}
          </span>
          ${
            subtitle
              ? `<span class="text-xs sm:text-sm font-medium font-heading text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/60">${subtitle}</span>`
              : ''
          }
        </div>

        <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-[1.38]">
          ${title}
        </h3>

        ${
          description
            ? `<p class="mt-2.5 text-sm sm:text-base text-slate-600 font-body leading-[1.78] font-normal">
                ${description}
              </p>`
            : ''
        }

        ${
          tags.length > 0
            ? `<div class="mt-4 flex flex-wrap gap-1.5">
                ${tags
                  .map(
                    (tag) =>
                      `<span class="px-2 py-0.5 rounded text-xs font-medium font-body bg-slate-50 text-slate-600 border border-slate-200">${tag}</span>`
                  )
                  .join('')}
              </div>`
            : ''
        }
      </div>
    </div>
  `.trim();
}
