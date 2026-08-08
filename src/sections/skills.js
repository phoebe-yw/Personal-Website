const groups = [
  {
    label: 'languages',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'ARM64 (AArch64)', 'HTML / CSS'],
  },
  {
    label: 'tools & frameworks',
    items: ['PyTorch', 'ROS2', 'React Native', 'Flask', 'Node.js', 'Expo', 'OpenCV', 'YOLO', 'DINOv2', 'BERT', 'BERTopic', 'Matplotlib', 'MongoDB', 'Tableau', 'Jira', 'Arduino', 'Kortex API', 'watsonx Orchestrate'],
  },
  {
    label: 'developer tools',
    items: ['Git', 'GDB', 'Linux', 'Kali Linux', 'Raspberry Pi', 'Autodesk Fusion 360'],
  },
  {
    label: 'certifications',
    items: ['Autodesk Fusion 360 Certified User', 'Autodesk Revit Certified', 'Version Control: Git & GitHub', 'GWC Cybersecurity', 'GWC Cryptography', 'BWSI Python Core'],
  },
  {
    label: 'languages spoken',
    items: ['English (native)', 'Mandarin Chinese (native)'],
  },
]

function renderGroup(g) {
  return /* html */`
    <div class="skills-group">
      <p class="skills-group-label">${g.label}</p>
      <div class="chips">
        ${g.items.map(i => `<span class="chip">${i}</span>`).join('')}
      </div>
    </div>
  `
}

export default function skills() {
  return /* html */`
    <section class="section section--skills" aria-label="Skills">
      <h2 class="section-title">skills</h2>
      <hr class="section-rule" />
      ${groups.map(renderGroup).join('')}
    </section>
  `
}
