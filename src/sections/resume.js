export default function resume() {
  // import.meta.env.BASE_URL is set by Vite to '/Personal-Website/' in production
  // and '/' in development — so the link always points to the right place.
  const pdfUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return /* html */`
    <section class="section section--resume" aria-label="R&eacute;sum&eacute;">
      <h2 class="section-title">r&eacute;sum&eacute;</h2>
      <hr class="section-rule" />

      <p class="body-text">One page, always current.</p>

      <a
        href="${pdfUrl}"
        download="Phoebe_Wang_Resume.pdf"
        class="resume-cta"
        aria-label="Download Phoebe Wang's r&eacute;sum&eacute; as a PDF"
      >
        <!-- Download arrow icon -->
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        download r&eacute;sum&eacute;
      </a>

      <!-- PDF preview (hidden on very small screens via CSS) -->
      <iframe
        src="${pdfUrl}"
        title="Phoebe Wang r&eacute;sum&eacute; preview"
        style="
          width: 100%;
          margin-top: 16px;
          height: 320px;
          border: none;
          border-radius: 4px;
          background: var(--divider);
        "
        aria-label="R&eacute;sum&eacute; PDF preview"
      ></iframe>

      <p class="body-text text-muted" style="font-size: 0.68rem; margin-top: 8px;">
        If the preview doesn't load, use the download button above.
      </p>
    </section>
  `
}
