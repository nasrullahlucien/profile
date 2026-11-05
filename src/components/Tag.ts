export interface TagProps {
  text: string;
  variant?: 'default' | 'accent' | 'primary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function renderTag(props: TagProps): string {
  const { text, variant = 'default', size = 'md', className = '' } = props;

  const sizeClass = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClass = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200/80',
    accent: 'bg-teal-50 text-teal-800 border border-teal-200/80 font-medium',
    primary: 'bg-slate-900 text-white font-medium',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
  }[variant];

  return `
    <span class="inline-flex items-center justify-center font-medium rounded-full ${sizeClass} ${variantClass} ${className}">
      ${text}
    </span>
  `.trim();
}
