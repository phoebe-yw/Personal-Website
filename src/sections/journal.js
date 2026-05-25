import { marked } from 'marked'

// Vite collects every .md file in src/posts/ at build time.
// When you add a new .md file there, it shows up here automatically.
const rawPosts = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

// Parse a simple "---\nkey: value\n---\nbody" frontmatter format
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    meta[key] = val
  })
  return { meta, body: match[2].trim() }
}

// Build an array of posts sorted newest-first
const posts = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw)
    return { path, meta, body, html: marked.parse(body) }
  })
  .sort((a, b) => new Date(b.meta.date ?? 0) - new Date(a.meta.date ?? 0))

export default function journal() {
  if (posts.length === 0) {
    return /* html */`
      <section class="section section--journal" aria-label="Journal">
        <h2 class="section-title">journal</h2>
        <hr class="section-rule" />
        <p class="body-text text-muted">nothing here yet — check back soon.</p>
      </section>
    `
  }

  const [latest, ...older] = posts

  return /* html */`
    <section class="section section--journal" aria-label="Journal">
      <h2 class="section-title">journal</h2>
      <hr class="section-rule" />

      <article class="post-article">
        <p class="post-date">${latest.meta.date ?? ''}</p>
        <h3 class="post-title">${latest.meta.title ?? 'untitled'}</h3>
        <div class="post-body">${latest.html}</div>
      </article>

      ${older.length ? `
        <div class="post-stub-list" aria-label="Older posts">
          ${older.map(p => `
            <div class="post-stub">
              <span class="post-stub-date">${p.meta.date ?? ''}</span>
              <span class="post-stub-title">${p.meta.title ?? 'untitled'}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </section>
  `
}
