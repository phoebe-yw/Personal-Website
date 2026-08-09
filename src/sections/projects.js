const projects = [
  {
    name: 'Proxi',
    context: 'Texas Convergent &middot; sept – dec 2025',
    bullets: [
      'Spearheaded IoT smart glasses ecosystem to reduce digital eye strain, achieving sub-second alerts and a >95% payload reduction by running local YOLO object detection on a Raspberry Pi and transmitting metadata via MQTT.',
      'Architected a multi-tier data pipeline (Flask, Node.js, MongoDB) to process screen-time sessions, launching a cross-platform React Native app that delivered real-time usage analytics and historical health trends.',
      'Directed product security strategy, achieving zero critical vulnerabilities by conducting network penetration testing (Kali Linux, Wireshark) and applying OSINT capstone research on wearable threat vectors.',
    ],
    tech: ['Raspberry Pi', 'Python', 'YOLO', 'MQTT', 'Flask', 'Node.js', 'React Native', 'MongoDB', 'Kali Linux'],
  },
  {
    name: 'GovSafe',
    context: 'HackTX &middot; oct 2025',
    bullets: [
      'Drove rapid product delivery in a 24-hour hackathon, building an AI Chrome extension that simplified complex government portals for elderly demographics with a custom HTML/CSS/JS frontend and auto-fill capabilities.',
      'Architected real-time AI pipelines integrating Gemini API for dynamic text summarization and ElevenLabs API for natural voice synthesis, engineering an accessible, low-friction experience for visually and cognitively impaired users.',
    ],
    tech: ['Gemini API', 'ElevenLabs', 'HTML/CSS/JS'],
  },
  {
    name: 'Python Face Recognition Attendance',
    context: 'feb – apr 2025',
    bullets: [
      'Built an automated attendance tracking system using facial recognition with OpenCV and Dlib for accurate facial landmark detection and embeddings.',
    ],
    tech: ['Python', 'OpenCV', 'Dlib'],
  },
]

function renderProject(p) {
  return /* html */`
    <div class="entry">
      <div class="entry-meta">
        <div>
          <p class="entry-org">${p.name}</p>
          <p class="entry-role">${p.context}</p>
        </div>
      </div>
      <ul class="entry-bullets" aria-label="Highlights" style="margin-top: 5px;">
        ${p.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="chips" style="margin-top: 8px;">
        ${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}
      </div>
    </div>
  `
}

export default function projects_section() {
  return /* html */`
    <section class="section section--projects" aria-label="Projects">
      <h2 class="section-title">projects</h2>
      <hr class="section-rule" />
      <div class="entry-list">
        ${projects.map(renderProject).join('')}
      </div>
    </section>
  `
}
