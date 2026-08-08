const links = [
  {
    label: 'phoebe.w@utexas.edu',
    href: 'mailto:phoebe.w@utexas.edu',
    // Envelope icon
    icon: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    label: 'linkedin.com/in/phoebe-yw',
    href: 'https://www.linkedin.com/in/phoebe-yw',
    // LinkedIn icon
    icon: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'github.com/phoebe-yw',
    href: 'https://github.com/phoebe-yw',
    // GitHub icon
    icon: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  },
  {
    label: '@phoebe._.wang_',
    href: 'https://www.instagram.com/phoebe._.wang_',
    // Instagram icon
    icon: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
]

export default function contact() {
  return /* html */`
    <section class="section section--contact" aria-label="Contact">
      <h2 class="section-title">contact</h2>
      <hr class="section-rule" />

      <p class="body-text" style="margin-bottom: 14px;">
        feel free to reach out!
      </p>

      ${links.map(l => `
        <a class="contact-row" href="${l.href}" target="${l.href.startsWith('mailto') ? '_self' : '_blank'}" rel="noopener noreferrer">
          ${l.icon}
          <span>${l.label}</span>
        </a>
      `).join('')}
    </section>
  `
}
