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
    <div class="mb-10 sm:mb-14 max-w-3xl ${alignmentClass} ${className}">
      ${
        badge
          ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-teal-800 bg-teal-50 border border-teal-200/80 mb-3 ${badgeAlign}">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              ${badge}
            </span>`
          : ''
      }
      <h2 ${idAttr} class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        ${title}
      </h2>
      ${
        subtitle
          ? `<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              ${subtitle}
            </p>`
          : ''
      }
    </div>
  `.trim();
}
