export interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function renderSectionHeading(props: SectionHeadingProps): string {
  const { id, badge, title, subtitle, align = 'left', className = '' } = props;

  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const badgeAlign = align === 'center' ? 'mx-auto' : '';
  const idAttr = id ? `id="${id}"` : '';

  return `
    <div class="mb-8 sm:mb-10 max-w-3xl ${alignmentClass} ${className}">
      ${
        badge
          ? `<div class="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-semibold tracking-wider text-teal-700 sm:text-teal-800 mb-2 ${badgeAlign}">
              <span>${badge}</span>
            </div>`
          : ''
      }
      <h2 ${idAttr} class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-[1.35] tracking-normal">
        ${title}
      </h2>
      ${
        subtitle
          ? `<p class="mt-2.5 text-base sm:text-lg text-slate-600 font-body leading-[1.8] font-normal">
              ${subtitle}
            </p>`
          : ''
      }
    </div>
  `.trim();
}
