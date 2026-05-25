const entries = [
  {
    org: 'IBM',
    role: 'incoming product manager intern',
    date: 'summer 2026',
    location: 'Lowell, MA',
    bullets: [],
  },
  {
    org: 'Texas Robotics — FRI Robot Learning',
    role: 'fri summer fellow &amp; undergraduate researcher',
    date: 'jan 2026 – present',
    location: 'Austin, TX',
    bullets: [
      'Reproduced and extended a reinforcement learning-based force-position control policy across contact-rich manipulation tasks using the Robot Operating System (ROS).',
      'Implemented kinematics, RRT motion planning, and imitation learning in Python and PyTorch.',
      'Analyzed robot trajectories and task performance with Matplotlib.',
    ],
  },
  {
    org: 'Pinterest',
    role: 'engage program participant',
    date: 'apr 2026 – present',
    location: '',
    bullets: [],
  },
  {
    org: 'Dell Technologies — Excel With Dell',
    role: 'ai strategist',
    date: 'feb – apr 2026',
    location: '',
    bullets: [
      'Selected as 1 of 51 students from 325+ applicants for a competitive AI-focused development program.',
      'Collaborated in a team-based AI case competition, translating technical solutions into scalable business use cases.',
      'Analyzed KPIs and financial metrics; created Tableau dashboards to communicate insights.',
    ],
  },
  {
    org: 'Texas Convergent',
    role: 'iot subteam member — health tech division',
    date: 'sep – dec 2025',
    location: 'Austin, TX',
    bullets: [
      'Built "Proxi," an IoT smart glasses system using Raspberry Pi and ML to monitor screen distance and reduce eye strain.',
      'Developed a React Native / Expo mobile app with MongoDB for real-time alerts.',
    ],
  },
  {
    org: 'MIT BWSI — Cyber Operations Advanced Course',
    role: 'team leader',
    date: 'jun – jul 2023',
    location: 'Remote',
    bullets: [
      'Selected as 1 of 25 students nationwide; appointed as 1 of 5 team leaders.',
      'Studied networking, system administration, malware analysis, and digital forensics using Kali Linux, WireShark, and CyberChef.',
    ],
  },
]

function renderEntry(e) {
  return /* html */`
    <div class="entry">
      <div class="entry-meta">
        <div>
          <p class="entry-org">${e.org}</p>
          <p class="entry-role">${e.role}${e.location ? ` &middot; ${e.location}` : ''}</p>
        </div>
        <span class="entry-date">${e.date}</span>
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
    </section>
  `
}
