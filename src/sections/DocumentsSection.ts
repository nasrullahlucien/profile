import { getTranslations } from '../i18n';
import { siteContent } from '../content/content';
import { renderSectionHeading, renderCard, renderButton } from '../components';
import { icons } from '../utils/icons';

export function renderDocumentsSection(): string {
  const t = getTranslations();

  const titleMap: Record<string, string> = {
    'docs.cv.title': t.documents.cvTitle,
    'docs.portfolio.title': t.documents.portfolioTitle,
  };

  const descMap: Record<string, string> = {
    'docs.cv.description': t.documents.cvDesc,
    'docs.portfolio.description': t.documents.portfolioDesc,
  };

  return `
    <section id="documents" data-reveal class="py-12 sm:py-16 border-t border-slate-200/80" aria-labelledby="documents-title">
      <div class="max-w-7xl mx-auto space-y-10">
        
        ${renderSectionHeading({
          id: 'documents-title',
          badge: 'DOWNLOADS',
          title: t.documents.title,
          subtitle: t.documents.subtitle,
        })}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          ${siteContent.documents
            .map((doc) => {
              const title = titleMap[doc.titleKey] || doc.titleKey;
              const desc = descMap[doc.descriptionKey] || doc.descriptionKey;

              return renderCard({
                padding: 'md',
                hover: true,
                content: `
                  <div class="flex items-start gap-4">
                    <div class="p-3 bg-teal-50 border border-teal-200/70 rounded-2xl shrink-0" aria-hidden="true">
                      ${icons.file}
                    </div>

                    <div class="space-y-2 flex-1">
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white tracking-wider">
                          ${doc.fileType}
                        </span>
                        <span class="text-xs font-mono font-medium text-slate-600">
                          ${doc.fileSize}
                        </span>
                      </div>

                      <h3 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        ${title}
                      </h3>

                      <p class="text-sm text-slate-600 leading-relaxed font-normal">
                        ${desc}
                      </p>

                      <div class="pt-2">
                        ${renderButton({
                          href: doc.filePath,
                          text: `${t.common.downloadFile} (${doc.fileType})`,
                          variant: 'outline',
                          size: 'sm',
                          download: true,
                          icon: icons.download,
                        })}
                      </div>
                    </div>
                  </div>
                `,
              });
            })
            .join('')}
        </div>

      </div>
    </section>
  `.trim();
}
