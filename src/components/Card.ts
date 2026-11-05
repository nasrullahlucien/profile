export interface CardProps {
  content: string;
  as?: 'div' | 'article' | 'section' | 'li';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

export function renderCard(props: CardProps): string {
  const { content, as = 'div', hover = true, padding = 'md', className = '', id } = props;

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  }[padding];

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5'
    : '';

  const idAttr = id ? `id="${id}"` : '';

  return `
    <${as} ${idAttr} class="bg-white rounded-2xl border border-slate-200/80 shadow-xs ${paddingClasses} ${hoverClasses} ${className}">
      ${content}
    </${as}>
  `.trim();
}
