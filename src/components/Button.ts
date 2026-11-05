export interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  download?: boolean | string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent) => void;
}

export function getButtonClasses(
  variant: ButtonProps['variant'] = 'primary',
  size: ButtonProps['size'] = 'md',
  customClass: string = ''
): string {
  const base =
    'inline-flex items-center justify-center font-heading font-medium tracking-normal leading-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-xl text-center cursor-pointer select-none';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3.5 text-lg gap-2.5 font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow active:scale-[0.98] focus-visible:ring-slate-900',
    accent:
      'bg-teal-700 text-white hover:bg-teal-800 shadow-sm hover:shadow active:scale-[0.98] focus-visible:ring-teal-700',
    secondary:
      'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900 active:scale-[0.98] focus-visible:ring-slate-400',
    outline:
      'border-2 border-slate-300 text-slate-700 bg-transparent hover:border-slate-800 hover:text-slate-900 active:scale-[0.98] focus-visible:ring-slate-800',
    ghost:
      'text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] focus-visible:ring-slate-400',
  }[variant];

  return `${base} ${sizeClasses} ${variantClasses} ${customClass}`.trim();
}

export function renderButton(props: ButtonProps): string {
  const {
    text,
    href,
    variant = 'primary',
    size = 'md',
    target,
    download,
    icon,
    iconPosition = 'left',
    ariaLabel,
    className = '',
    id,
    type = 'button',
  } = props;

  const classes = getButtonClasses(variant, size, className);
  const ariaAttr = ariaLabel ? `aria-label="${ariaLabel}"` : '';
  const idAttr = id ? `id="${id}"` : '';

  const content = `
    ${icon && iconPosition === 'left' ? `<span class="shrink-0 flex items-center" aria-hidden="true">${icon}</span>` : ''}
    <span>${text}</span>
    ${icon && iconPosition === 'right' ? `<span class="shrink-0 flex items-center" aria-hidden="true">${icon}</span>` : ''}
  `;

  if (href) {
    const targetAttr = target ? `target="${target}"` : '';
    const relAttr = target === '_blank' ? 'rel="noopener noreferrer"' : '';
    const downloadAttr = download ? (typeof download === 'string' ? `download="${download}"` : 'download') : '';

    return `<a href="${href}" class="${classes}" ${targetAttr} ${relAttr} ${downloadAttr} ${ariaAttr} ${idAttr}>${content}</a>`;
  }

  return `<button type="${type}" class="${classes}" ${ariaAttr} ${idAttr}>${content}</button>`;
}

export function createButton(props: ButtonProps): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = renderButton(props).trim();
  const el = container.firstElementChild as HTMLElement;

  if (props.onClick) {
    el.addEventListener('click', (e) => props.onClick!(e as MouseEvent));
  }

  return el;
}
