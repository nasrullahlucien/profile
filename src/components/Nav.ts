import { getTranslations } from '../i18n';
import { renderLanguageSwitcher, bindLanguageSwitcherEvents } from './LanguageSwitcher';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export function getNavItems(): NavItem[] {
  const t = getTranslations();
  return [
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'education', label: t.nav.education, href: '#education' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'academic', label: t.nav.academic, href: '#academic' },
    { id: 'documents', label: t.nav.documents, href: '#documents' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];
}

export function renderNav(): string {
  const t = getTranslations();
  const navItems = getNavItems();

  return `
    <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200" id="site-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20 gap-4">
          
          <!-- Logo / Home Link -->
          <a href="#hero" class="group flex items-center gap-2.5 font-bold text-slate-900 tracking-tight text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg p-1">
            <span class="w-8 h-8 rounded-lg bg-slate-900 text-teal-400 font-extrabold flex items-center justify-center text-sm shadow-xs group-hover:bg-teal-700 group-hover:text-white transition-colors" aria-hidden="true">
              SE
            </span>
            <div class="flex flex-col">
              <span class="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                ${t.hero.name}
              </span>
              <span class="text-[11px] font-medium text-slate-600 hidden sm:inline-block leading-tight">
                Science Educator &amp; EdTech
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            ${navItems
              .map(
                (item) => `
                <a 
                  href="${item.href}" 
                  class="nav-link px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-700"
                  data-section="${item.id}"
                >
                  ${item.label}
                </a>
              `
              )
              .join('')}
          </nav>

          <!-- Right Controls: Language Switcher & Mobile Menu Button -->
          <div class="flex items-center gap-2 sm:gap-3">
            <div class="hidden sm:block">
              ${renderLanguageSwitcher({ idPrefix: 'desktop' })}
            </div>

            <!-- Mobile Hamburger Button -->
            <button 
              type="button" 
              id="mobile-menu-btn" 
              class="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-teal-700 transition-colors"
              aria-controls="mobile-menu" 
              aria-expanded="false" 
              aria-label="${t.nav.menuToggleLabel}"
            >
              <svg id="menu-icon-open" class="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown / Drawer Menu -->
      <div 
        id="mobile-menu" 
        class="hidden lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-4 shadow-lg animate-fade-in"
      >
        <nav class="flex flex-col space-y-1" aria-label="Mobile Navigation">
          ${navItems
            .map(
              (item) => `
              <a 
                href="${item.href}" 
                class="mobile-nav-link px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                data-section="${item.id}"
              >
                ${item.label}
              </a>
            `
            )
            .join('')}
        </nav>

        <div class="pt-4 border-t border-slate-200/80">
          ${renderLanguageSwitcher({ idPrefix: 'mobile', isMobile: true })}
        </div>
      </div>
    </header>
  `.trim();
}

export function initNavEvents(headerElement: HTMLElement): () => void {
  bindLanguageSwitcherEvents(headerElement);

  const menuBtn = headerElement.querySelector('#mobile-menu-btn') as HTMLButtonElement | null;
  const mobileMenu = headerElement.querySelector('#mobile-menu') as HTMLElement | null;
  const iconOpen = headerElement.querySelector('#menu-icon-open') as HTMLElement | null;
  const iconClose = headerElement.querySelector('#menu-icon-close') as HTMLElement | null;

  let isMenuOpen = false;

  const toggleMenu = (open?: boolean) => {
    isMenuOpen = open !== undefined ? open : !isMenuOpen;
    menuBtn?.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');

    if (isMenuOpen) {
      mobileMenu?.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    } else {
      mobileMenu?.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    }
  };

  menuBtn?.addEventListener('click', () => toggleMenu());

  // Helper to activate link visually
  const navLinks = headerElement.querySelectorAll<HTMLAnchorElement>('.nav-link, .mobile-nav-link');
  const setActiveLink = (sectionId: string) => {
    navLinks.forEach((link) => {
      const target = link.getAttribute('data-section');
      if (target === sectionId) {
        link.classList.add('text-teal-800', 'font-semibold', 'bg-teal-50');
        link.classList.remove('text-slate-600', 'text-slate-700');
      } else {
        link.classList.remove('text-teal-800', 'font-semibold', 'bg-teal-50');
        link.classList.add('text-slate-600');
      }
    });
  };

  // Close mobile menu on clicking any navigation link and update active state immediately
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
      const section = link.getAttribute('data-section');
      if (section) setActiveLink(section);
    });
  });

  // Handle Escape key to close mobile menu
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu(false);
      menuBtn?.focus();
    }
  };
  document.addEventListener('keydown', onKeyDown);

  // Active link highlighting via IntersectionObserver on sections
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      // Find intersecting section with the greatest visible ratio or top position
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        if (topEntry?.target.id && topEntry.target.id !== 'hero') {
          setActiveLink(topEntry.target.id);
        } else if (topEntry?.target.id === 'hero') {
          // Hero active -> clear other section highlights
          setActiveLink('');
        }
      }
    },
    {
      rootMargin: '-15% 0px -45% 0px',
      threshold: [0, 0.25, 0.5],
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Bottom of page scroll check for last section (#contact)
  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
      setActiveLink('contact');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    document.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('scroll', onScroll);
    observer.disconnect();
  };
}
