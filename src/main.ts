import './styles/main.css';
import { getTranslations, onLanguageChange } from './i18n';
import { renderNav, initNavEvents, labModal } from './components';
import {
  renderHeroSection,
  renderAboutSection,
  renderExperienceSection,
  renderEducationSection,
  renderSkillsSection,
  renderProjectsSection,
  renderAcademicSection,
  renderDocumentsSection,
  renderContactSection,
  renderFooterSection,
} from './sections';
import { initScrollReveal } from './utils/scrollReveal';

const app = document.getElementById('app');
let cleanupNavEvents: (() => void) | null = null;

function renderApp() {
  if (!app) return;
  const t = getTranslations();

  // Reactive accessibility skip link text
  const skipLink = document.getElementById('skip-link');
  if (skipLink) {
    skipLink.textContent = t.common.skipToContent;
  }

  // Reactive document title
  document.title = `${t.hero.name} | ${t.hero.title}`;

  // Cleanup existing nav listener instances before re-render
  if (cleanupNavEvents) {
    cleanupNavEvents();
    cleanupNavEvents = null;
  }

  // Full single page layout strictly matching ordered requirements
  app.innerHTML = `
    ${renderNav()}

    <main id="main-content" class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      ${renderHeroSection()}
      ${renderAboutSection()}
      ${renderExperienceSection()}
      ${renderEducationSection()}
      ${renderSkillsSection()}
      ${renderProjectsSection()}
      ${renderAcademicSection()}
      ${renderDocumentsSection()}
      ${renderContactSection()}
    </main>

    ${renderFooterSection()}
  `;

  // Initialize Nav events & active section intersection observer
  const header = document.getElementById('site-header');
  if (header) {
    cleanupNavEvents = initNavEvents(header);
  }

  // Wire up all "Play Lab" buttons to open in-page modal dialog with iframe
  const labLaunchButtons = app.querySelectorAll<HTMLButtonElement>('.lab-launch-btn');
  labLaunchButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const labUrl = btn.getAttribute('data-lab-url');
      const labTitle = btn.getAttribute('data-lab-title') || 'Interactive Virtual Lab';
      if (labUrl) {
        labModal.open({
          title: labTitle,
          iframeSrc: labUrl,
          externalUrl: labUrl,
          closeLabel: t.common.modalClose,
          openNewTabLabel: t.common.openInNewTab,
        });
      }
    });
  });

  // Re-initialize scroll-reveal
  initScrollReveal();
}

// Reactively re-render on language selection changes
onLanguageChange(() => {
  renderApp();
});

// Initial mount
renderApp();
