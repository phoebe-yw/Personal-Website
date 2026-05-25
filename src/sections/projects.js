const projects = [
  {
    name: 'GovSafe',
    context: 'HackTX &middot; oct 2025',
    description: 'AI-powered Chrome extension that simplifies government websites for elderly users. Integrated Gemini API for webpage summarization and ElevenLabs for natural voice synthesis; built accessible UI enabling form autofill and independent navigation.',
    tech: ['Gemini API', 'ElevenLabs', 'HTML/CSS/JS'],
  },
  {
    name: 'LightAlert',
    context: 'aug 2024 – may 2025',
    description: 'Motion-activated visual alert system for individuals with hearing disabilities. Selected as one of the top 5 teams at the district STEM Showcase.',
    tech: ['Arduino', 'C++', 'PIR sensor', 'LED'],
  },
  {
    name: 'Proxi',
    context: 'Texas Convergent &middot; fall 2025',
    description: 'IoT smart glasses using Raspberry Pi and machine learning to monitor screen-viewing distance and reduce eye strain. Paired with a React Native mobile app for real-time behavioral alerts.',
    tech: ['Raspberry Pi', 'Python', 'React Native', 'MongoDB'],
  },
  {
    name: 'Python Face Recognition Attendance',
    context: 'feb – apr 2025',
    description: 'Automated attendance tracking system using facial recognition. Implemented OpenCV and Dlib for accurate facial landmark detection and embeddings.',
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
      <p class="body-text" style="margin-top: 5px;">${p.description}</p>
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
