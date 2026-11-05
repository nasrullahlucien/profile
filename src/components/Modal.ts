export interface ModalOptions {
  title: string;
  iframeSrc: string;
  externalUrl?: string;
  closeLabel?: string;
  openNewTabLabel?: string;
  onClose?: () => void;
}

class LabModalManager {
  private modalContainer: HTMLElement | null = null;
  private previousActiveElement: HTMLElement | null = null;
  private keydownHandler: ((e: KeyboardEvent) => void) | null = null;

  public open(options: ModalOptions): void {
    this.close(); // Close any currently open modal

    this.previousActiveElement = document.activeElement as HTMLElement | null;

    const modalId = 'lab-modal-dialog';
    const titleId = 'lab-modal-title';

    const container = document.createElement('div');
    container.id = 'lab-modal-root';
    container.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in';
    container.innerHTML = `
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" id="modal-backdrop" aria-hidden="true"></div>

      <!-- Dialog Panel -->
      <div 
        id="${modalId}" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="${titleId}" 
        class="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10 max-h-[92vh] animate-scale-up"
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50/90">
          <div class="flex items-center gap-2.5 min-w-0 pr-4">
            <span class="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 animate-pulse" aria-hidden="true"></span>
            <h2 id="${titleId}" class="text-sm sm:text-base font-bold text-slate-900 tracking-tight truncate">
              ${options.title}
            </h2>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${
              options.externalUrl || options.iframeSrc
                ? `<a 
                    href="${options.externalUrl || options.iframeSrc}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-teal-700" 
                    title="${options.openNewTabLabel || 'Open in new tab'}"
                    aria-label="${options.openNewTabLabel || 'Open in new tab'}"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>`
                : ''
            }
            <button 
              type="button" 
              id="modal-close-btn" 
              class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-teal-700" 
              aria-label="${options.closeLabel || 'Close'}"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Iframe Body with Loading State -->
        <div class="flex-1 min-h-[420px] sm:min-h-[560px] bg-slate-900 relative flex items-center justify-center">
          <div id="modal-spinner" class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-300 gap-3 z-10 transition-opacity duration-300">
            <div class="w-8 h-8 border-3 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            <span class="text-xs font-medium tracking-wide">Loading virtual experiment...</span>
          </div>

          <iframe 
            id="modal-iframe"
            src="${options.iframeSrc}" 
            title="${options.title}" 
            class="w-full h-full min-h-[420px] sm:min-h-[560px] border-0 relative z-20" 
            loading="lazy" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `;

    document.body.appendChild(container);
    this.modalContainer = container;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Hide spinner once iframe loads
    const iframe = container.querySelector('#modal-iframe') as HTMLIFrameElement | null;
    const spinner = container.querySelector('#modal-spinner') as HTMLElement | null;
    iframe?.addEventListener('load', () => {
      if (spinner) {
        spinner.style.opacity = '0';
        setTimeout(() => spinner.remove(), 300);
      }
    });

    // Hook up close actions
    const closeBtn = container.querySelector('#modal-close-btn') as HTMLButtonElement | null;
    const backdrop = container.querySelector('#modal-backdrop') as HTMLElement | null;

    closeBtn?.addEventListener('click', () => {
      this.close();
      if (options.onClose) options.onClose();
    });

    backdrop?.addEventListener('click', () => {
      this.close();
      if (options.onClose) options.onClose();
    });

    // Focus trap & Escape key handling
    this.keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
        if (options.onClose) options.onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelectors);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement && lastElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement && firstElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', this.keydownHandler);

    // Initial focus on close button
    closeBtn?.focus();
  }

  public close(): void {
    if (this.modalContainer) {
      if (this.keydownHandler) {
        document.removeEventListener('keydown', this.keydownHandler);
        this.keydownHandler = null;
      }

      this.modalContainer.remove();
      this.modalContainer = null;

      // Restore body scrolling
      document.body.style.overflow = '';

      // Restore previous focus
      if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
        this.previousActiveElement.focus();
        this.previousActiveElement = null;
      }
    }
  }
}

export const labModal = new LabModalManager();
