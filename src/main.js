import './style.css'
import { gsap } from 'gsap'

// Each section is a function that returns an HTML string.
// Import them all here so Vite bundles them together.
import about      from './sections/about.js'
import experience from './sections/experience.js'
import projects   from './sections/projects.js'
import skills     from './sections/skills.js'
import resume     from './sections/resume.js'
import contact    from './sections/contact.js'
import journal    from './sections/journal.js'

// Map section names (matching data-section attributes) to their render functions
const SECTIONS = { about, experience, projects, skills, resume, contact, journal }

// ── DOM references ──────────────────────────────────────────
const page    = document.querySelector('.folder__page')
const cover   = document.querySelector('.folder__cover')
const notch   = document.querySelector('.folder__notch')
const tabs    = [...document.querySelectorAll('.tab')]
const toggle  = document.querySelector('.theme-toggle')

let activeSection = null   // name of the currently open section, or null
let isOpen        = false  // whether the folder is open


// ── Theme ───────────────────────────────────────────────────
// On load, restore the saved preference (default: light)
const savedTheme = localStorage.getItem('pw-theme') ?? 'light'
applyTheme(savedTheme)

toggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem('pw-theme', next)
})

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
}


// ── Folder open / close ─────────────────────────────────────

function openSection(name) {
  if (!SECTIONS[name]) return

  if (!isOpen) {
    // The folder is closed. Load content while the cover still hides it,
    // then animate the cover away and fade the page in.
    page.innerHTML = SECTIONS[name]()
    page.style.pointerEvents = 'auto'

    gsap.timeline()
      .to(cover, { opacity: 0, y: -28, duration: 0.32, ease: 'power2.in' })
      .fromTo(page,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.26, ease: 'power2.out' },
        '-=0.08'
      )

    isOpen = true

  } else if (name !== activeSection) {
    // Already open — just swap the content with a quick cross-fade
    gsap.to(page, {
      opacity: 0,
      duration: 0.14,
      onComplete: () => {
        page.innerHTML = SECTIONS[name]()
        gsap.to(page, { opacity: 1, duration: 0.22 })
      }
    })
  }

  activeSection = name
  updateTabs(name)
  notch.setAttribute('aria-label', 'Close folder')
}

function closeFolder() {
  if (!isOpen) return

  gsap.timeline()
    .to(page, { opacity: 0, duration: 0.18 })
    .to(cover, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '-=0.05')
    .set(page, { pointerEvents: 'none' })

  isOpen = false
  activeSection = null
  updateTabs(null)
  notch.setAttribute('aria-label', 'Open folder')
}

function updateTabs(activeName) {
  tabs.forEach(tab => {
    const on = tab.dataset.section === activeName
    tab.classList.toggle('tab--active', on)
    tab.setAttribute('aria-selected', on)
  })
}


// ── Tab click events ────────────────────────────────────────
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.dataset.section === activeSection && isOpen) {
      closeFolder()          // clicking the active tab closes the folder
    } else {
      openSection(tab.dataset.section)
    }
  })
})

// Clicking the notch closes the folder (has no effect when already closed)
notch.addEventListener('click', closeFolder)


// ── Keyboard navigation within the tab list ─────────────────
// Arrow keys move focus between tabs; Escape closes the folder.
document.querySelector('.folder__tabs').addEventListener('keydown', e => {
  const idx = tabs.findIndex(t => t === document.activeElement)
  if (idx === -1) return

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault()
    tabs[(idx + 1) % tabs.length].focus()
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault()
    tabs[(idx - 1 + tabs.length) % tabs.length].focus()
  } else if (e.key === 'Escape') {
    closeFolder()
  }
})


// ── Mobile: auto-open to About ──────────────────────────────
// On small screens the cover isn't very useful, so open About right away.
if (window.matchMedia('(max-width: 640px)').matches) {
  setTimeout(() => openSection('about'), 480)
}


// ── Intro animation ─────────────────────────────────────────
// Everything fades/slides in gently on first load.
gsap.from('.folder-wrap', {
  opacity: 0,
  y: 22,
  duration: 0.85,
  ease: 'power3.out',
  delay: 0.15,
})
gsap.from('.folder__notch', {
  opacity: 0,
  y: -10,
  duration: 0.45,
  ease: 'power2.out',
  delay: 0.45,
})
gsap.from('.tab', {
  opacity: 0,
  x: 18,
  duration: 0.38,
  stagger: 0.06,
  ease: 'power2.out',
  delay: 0.55,
})
gsap.from('.theme-toggle', {
  opacity: 0,
  duration: 0.5,
  delay: 0.9,
})
