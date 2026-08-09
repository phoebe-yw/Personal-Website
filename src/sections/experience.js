const entries = [
  {
    org: 'IBM — Guardium Data Protection',
    role: 'product manager intern',
    date: 'june 2026 – present',
    location: 'Lowell, MA',
    bullets: [
      'Led development of a release-quality intelligence platform analyzing 1.4k customer escalations across Guardium 12.x releases in Jira, enabling Product, Support, and Engineering teams to identify quality risks and replace manual reporting workflows with real-time analytics — integrating an AI-powered 5-Whys root analysis workflow via watsonx Orchestrate.',
      'Built a Voice-of-Customer analytics solution consolidating customer briefings, RFEs, release notes, and field feedback into a centralized decision-support tool that surfaced recurring pain points and roadmap opportunities.',
      'Created a Guardium infrastructure-sizing platform that translated customer deployment requirements into architecture recommendations (storage, Kafka clusters, collectors, edge gateways, retention systems), reducing manual pre-sales planning effort for technical sellers and solution architects.',
    ],
  },
  {
    org: 'RobIn — Robot Interactive Intelligence Lab',
    role: 'undergraduate researcher &amp; summer fellow under dr. junhong xu',
    date: 'jan – may 2026',
    location: 'Austin, TX',
    bullets: [
      'Cut inference latency ~20× (8–10s → 0.3–0.5s/step) on a DAgger pick-and-place pipeline (π0.5 VLA, Kinova arm) by diagnosing Python GIL contention and moving inference to a separate ROS2-bridged process with DINOv2 caching and batched encoding.',
      'Restored real-time GPU inference on a Jetson-deployed π0.5 VLA policy by root-causing a CUDA/cuDNN loading conflict that forced CPU fallback, cutting per-step inference from 3–5 min to real-time for live human-in-the-loop rollouts.',
      'Benchmarked 6 vision-language models (GPT-5.5/5.2, Gemini, Claude, Qwen, Gemma) for automated robot failure detection, quantifying model-specific biases and shipping a web app that segments rollout videos by failure timestamp via VLM APIs.',
    ],
  },
  {
    org: 'Dell Technologies — Excel With Dell',
    role: 'ai strategist',
    date: 'feb – apr 2026',
    location: 'Remote',
    bullets: [
      'Spearheaded product strategy for an enterprise AI sentiment analysis tool, architecting NLP model pipelines (BERT, BERTopic) to solve customer feedback bottlenecks — selected as a top-tier proposal among 51 students (~15% acceptance rate).',
      'Drove data-informed decisions by synthesizing 4,132 reviews in Tableau to flag 41 at-risk products; built cross-functional financial models projecting 185.7% Year-1 ROI, $250K annual labor savings, and 8,800 hours saved.',
      'Validated infrastructure architecture with Dell SMEs, configuring GPU-accelerated compute (PowerEdge R760xa) and storage (PowerScale) to design a 4-quarter SDLC roadmap that reduced decision speeds from multi-day delays to &lt;1 day.',
    ],
    link: { label: 'view presentation', href: 'https://canva.link/8vlujh9mlhkp1yx' },
  },
]

const leadership = [
  {
    org: 'Texas ACM',
    role: 'marketing junior officer',
    date: 'may 2026 – present',
    location: 'Austin, TX',
    bullets: [
      'Manage digital marketing and event outreach across Instagram, Discord, and the weekly newsletter to drive UTCS community engagement.',
    ],
    links: [
      { label: 'website', href: 'https://www.texasacm.org/' },
      { label: 'instagram', href: 'https://www.instagram.com/texas_acm/' },
    ],
  },
  {
    org: 'UTCS Academy for Women',
    role: 'resident assistant (ra)',
    date: 'may – jun 2026',
    location: 'Austin, TX',
    bullets: [
      'Mentor high school students in a residential UTCS outreach program promoting women\'s participation in computer science.',
    ],
  },
  {
    org: 'MIT BWSI — Cyber Operations Advanced Course',
    role: 'team leader',
    date: 'jun – jul 2023',
    location: 'Remote',
    bullets: [
      'Selected as 1 of 25 students nationwide for a highly competitive cybersecurity program; appointed as 1 of 5 team leaders.',
      'Studied networking, system administration, malware analysis, and digital forensics using Kali Linux, VirusTotal, BeEF, WireShark, and CyberChef.',
      'Completed capstone project investigating criminal activity via open-source intelligence gathering.',
    ],
    link: { label: 'view capstone presentation', href: 'https://docs.google.com/presentation/d/1O_C_-pTP3NCdfOiA0KT6CQOW6Z4mvMC-/edit?usp=sharing&ouid=110891598124547959569&rtpof=true&sd=true' },
  },
  {
    org: 'Engineering Academy',
    role: 'president, director of activities',
    date: 'aug 2021 – may 2025',
    location: 'Missouri City, TX',
    bullets: [
      'Led 350+ student STEM organization; coordinated annual Engineering Career Fair and a $25,000 fundraising campaign.',
    ],
  },
]

function renderEntry(e) {
  const allLinks = e.links ?? (e.link ? [e.link] : [])
  const linkHtml = allLinks.map(l => `<a class="entry-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`).join('')
  return /* html */`
    <div class="entry">
      <div style="display:grid;grid-template-columns:1fr auto;align-items:center;gap:2px 8px;">
        <p class="entry-org">${e.org}</p>
        <span class="entry-date" style="justify-self:end;">${e.date}</span>
        <p class="entry-role">${e.role}${e.location ? ` &middot; ${e.location}` : ''}</p>
        ${allLinks.length ? `<div style="display:flex;gap:10px;justify-self:end;margin-top:-5px;">${linkHtml}</div>` : '<span></span>'}
      </div>
      ${e.bullets.length ? `
        <ul class="entry-bullets" aria-label="Highlights">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `
}

export default function experience() {
  return /* html */`
    <section class="section section--experience" aria-label="Experience">
      <h2 class="section-title">experience</h2>
      <hr class="section-rule" />
      <div class="entry-list">
        ${entries.map(renderEntry).join('')}
      </div>

      <h2 class="section-title" style="margin-top: 18px;">leadership</h2>
      <hr class="section-rule" />
      <div class="entry-list">
        ${leadership.map(renderEntry).join('')}
      </div>
    </section>
  `
}
