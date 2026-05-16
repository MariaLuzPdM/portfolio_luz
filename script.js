// ────────────────────────────────────────────────
// CONTENT — ES / EN
// ────────────────────────────────────────────────
const content = {
  es: {
    nav: ['Perfil', 'Experiencia', 'Educación', 'Habilidades', 'Idiomas', 'Contacto'],
    formula: '=PERFIL("Analista Sr."; "Corredora de Seguros"; "Cobranzas"; "Desarrollo Web"; "IA")',
    subtitle: 'Analista de Cuentas Corrientes Senior',
    intro: 'Profesional con más de 13 años de experiencia en gestión administrativa, cobranzas y control de cuentas corrientes. Cuento con conocimientos en seguros de crédito, vehículos, incendio y alquileres. Me especializo en ordenar procesos, reducir riesgos de morosidad y sostener una operación clara, eficiente y confiable. Actualmente continúo formándome en desarrollo web para empresas junto a herramientas de IA.',
    stats: ['Años de experiencia', 'Rubros liderados', 'Foco en cumplimiento'],
    downloadCv: 'Descargar CV',
    profileTitle: 'Perfil Profesional',
    profile: [
      'A lo largo de mi trayectoria trabajé en entornos de alta exigencia, desarrollando habilidades en conciliaciones, seguimiento de deuda, coordinación con equipos de cobranza y optimización de procesos administrativos. También cuento con experiencia en el rubro asegurador, brindando asesoramiento integral y gestión de pólizas con foco en la atención al cliente y la precisión operativa.',
      'Me caracterizo por mi organización, capacidad analítica y resolución de problemas, así como por mantener una comunicación clara y profesional incluso en escenarios de presión. Tengo facilidad para adaptarme, aprender rápidamente y aportar orden, eficiencia y compromiso en cada equipo de trabajo. Valoro especialmente el compañerismo y la atención constante a la comunicación entre pares para sostener equipos coordinados, colaborativos y orientados a resultados.',
      'Actualmente me encuentro en búsqueda de nuevas oportunidades laborales donde pueda continuar desarrollándome en áreas administrativas, operativas o de gestión.',
    ],
    expTitle: 'Experiencia Profesional',
    expCols: ['Cargo', 'Empresa', 'Período'],
    expRows: [
      {
        role: 'Jefe Analista de Cuentas Corrientes',
        desc: 'Lideré la gestión integral de cuentas corrientes, control de deuda y conciliaciones. Fortalecí el seguimiento preventivo para detectar deuda en forma temprana, activar alertas y cumplir en tiempo y forma con las condiciones del seguro de crédito de MAPFRE, reduciendo riesgos y mejorando la capacidad de recupero.',
        company: 'CENIT L.T.D.A.',
        period: 'Ene 2023 – Feb 2026',
      },
      {
        role: 'Corredor de Seguros',
        desc: 'Brindé asesoramiento integral, cotizaciones comparativas y seguimiento de pólizas. Realicé control de vencimientos para avisar con anticipación a cada cliente y evitar que quedaran sin cobertura. Atendí clientes de forma presencial y telefónica, y también gestioné la carga completa de información en el sistema.',
        company: 'SEGUROS DEL ESTE S.R.L.',
        period: '2021 – 2023',
      },
      {
        role: 'Administrativa – Control Operativo',
        desc: 'Gestioné cobranzas, cierre de repartos y validaciones operativas diarias. Mejoré la precisión de registro mediante controles sistemáticos e identificación de incidencias.',
        company: 'ABASTO DE CARNES SATURNO S.R.L.',
        period: '2012 – 2019',
      },
    ],
    eduTitle: 'Educación',
    eduCols: ['Institución', 'Título / Diploma', 'Período'],
    eduRows: [
      {
        institute: 'UTU Brazo Oriental – Instituto Superior de Comercio',
        degree: '4to Grado Administrativo',
        period: '2011 – 2014',
      },
      {
        institute: 'Instituto Gustavo Perdomo',
        degree: 'Diploma en Memory Figaro y Memory Conty',
        period: '2016 – 2017',
      },
    ],
    skillsTitle: 'Habilidades',
    skills: [
      'Gestión de Cuentas Corrientes', 'Cobranzas Preventivas', 'Conciliación de Cuentas',
      'Gestión de Morosidad', 'Control Operativo', 'Organización', 'Toma de Decisiones',
      'Manejo de Excel Intermedio', 'Autonomía', 'Pensamiento Preventivo',
      'Comunicación Efectiva', 'Trabajo bajo Presión', 'Memory Figaro', 'Memory Conty',
      'Creación de Sitios Web', 'Inteligencia Artificial',
    ],
    langTitle: 'Idiomas',
    langCols: ['Institución', 'Curso / Nivel', 'Período'],
    langRows: [
      {
        institute: 'Langland Language Institute',
        logo: 'assets/langland.png',
        logoCls: 'logo-langland',
        course: 'Inglés nivel A2',
        period: 'Mar 2026 – Actualidad',
      },
      {
        institute: 'Alianza Cultural Uruguay-Estados Unidos',
        logo: 'assets/alianza.png',
        logoCls: 'logo-alianza',
        course: 'Inglés A2 (curso de conversaciones)',
        period: 'Abr 2026 – Actualidad',
      },
    ],
    contactTitle: 'Contacto',
    contactIntro: 'Actualmente disponible para trabajar.',
    form: {
      name: 'Nombre', namePh: 'Tu nombre',
      email: 'Correo electrónico', emailPh: 'tu@email.com',
      message: 'Mensaje', messagePh: 'Contame en qué puedo ayudarte…',
      submit: 'Enviar mensaje', sending: 'Enviando…',
      success: '¡Gracias! Tu mensaje fue enviado.',
      error: 'No se pudo enviar. Probá de nuevo o escribime directo a mdemello019@gmail.com.',
    },
    footer: '© 2026 María Luz Portillo · Todos los derechos reservados',
  },
  en: {
    nav: ['Profile', 'Experience', 'Education', 'Skills', 'Languages', 'Contact'],
    formula: '=PROFILE("Sr. Analyst", "Insurance Broker", "Collections", "Web Dev", "AI")',
    subtitle: 'Senior Accounts Receivable Analyst',
    intro: 'Professional with over 13 years of experience in administrative management, collections, and accounts receivable control. I have knowledge in credit, vehicle, fire and rental insurance. I specialize in organizing processes, reducing delinquency risks, and sustaining a clear, efficient, and reliable operation. I am currently continuing my training in web development for companies along with AI tools.',
    stats: ['Years of experience', 'Industries led', 'Compliance focus'],
    downloadCv: 'Download Resume',
    profileTitle: 'Professional Profile',
    profile: [
      'Throughout my career I have worked in high-demand environments, developing skills in reconciliations, debt monitoring, coordination with collections teams, and optimization of administrative processes. I also have experience in the insurance industry, providing comprehensive advisory services and policy management with a strong focus on client service and operational accuracy.',
      'I stand out for my organization, analytical thinking, and problem-solving skills, as well as maintaining clear and professional communication even in high-pressure scenarios. I adapt quickly, learn fast, and bring structure, efficiency, and commitment to every team. I especially value teamwork and careful peer communication to support coordinated, collaborative, and results-oriented teams.',
      'I am currently seeking new career opportunities where I can continue growing in administrative, operational, or management roles.',
    ],
    expTitle: 'Professional Experience',
    expCols: ['Role', 'Company', 'Period'],
    expRows: [
      {
        role: 'Head Accounts Receivable Analyst',
        desc: 'Led end-to-end accounts receivable management, debt control, and reconciliations. Strengthened preventive monitoring to detect debt early, trigger alerts, and comply on time with the conditions of MAPFRE’s credit insurance, reducing risks and improving recovery capacity.',
        company: 'CENIT L.T.D.A.',
        period: 'Jan 2023 – Feb 2026',
      },
      {
        role: 'Insurance Broker',
        desc: 'Provided full advisory services, comparative quotations, and policy follow-up. Performed expiration controls to alert each client in advance and prevent gaps in coverage. Served clients in person and by phone, and also managed full data entry into the system.',
        company: 'SEGUROS DEL ESTE S.R.L.',
        period: '2021 – 2023',
      },
      {
        role: 'Administrative – Operational Control',
        desc: 'Managed collections, route closures, and daily operational validations. Improved recording accuracy through systematic controls and incident identification.',
        company: 'ABASTO DE CARNES SATURNO S.R.L.',
        period: '2012 – 2019',
      },
    ],
    eduTitle: 'Education',
    eduCols: ['Institution', 'Degree / Certificate', 'Period'],
    eduRows: [
      {
        institute: 'UTU Brazo Oriental – Higher Institute of Commerce',
        degree: '4th Year Administrative Studies',
        period: '2011 – 2014',
      },
      {
        institute: 'Instituto Gustavo Perdomo',
        degree: 'Memory Figaro and Memory Conty Certificate',
        period: '2016 – 2017',
      },
    ],
    skillsTitle: 'Skills',
    skills: [
      'Accounts Receivable Management', 'Preventive Collections', 'Account Reconciliation',
      'Delinquency Management', 'Operational Control', 'Organization', 'Decision Making',
      'Intermediate Excel', 'Autonomy', 'Preventive Thinking',
      'Effective Communication', 'Work Under Pressure', 'Memory Figaro', 'Memory Conty',
      'Website Creation', 'Artificial Intelligence',
    ],
    langTitle: 'Languages',
    langCols: ['Institution', 'Course / Level', 'Period'],
    langRows: [
      {
        institute: 'Langland Language Institute',
        logo: 'assets/langland.png',
        logoCls: 'logo-langland',
        course: 'English A2 level',
        period: 'Mar 2026 – Present',
      },
      {
        institute: 'Alianza Cultural Uruguay-Estados Unidos',
        logo: 'assets/alianza.png',
        logoCls: 'logo-alianza',
        course: 'English A2 (conversation course)',
        period: 'Apr 2026 – Present',
      },
    ],
    contactTitle: 'Contact',
    contactIntro: 'Currently available for work.',
    form: {
      name: 'Name', namePh: 'Your name',
      email: 'Email', emailPh: 'you@email.com',
      message: 'Message', messagePh: 'Tell me how I can help you…',
      submit: 'Send message', sending: 'Sending…',
      success: 'Thanks! Your message was sent.',
      error: 'Couldn’t send. Please try again or email me at mdemello019@gmail.com.',
    },
    footer: '© 2026 María Luz Portillo · All rights reserved',
  },
}

const FORMSPREE_ID = 'xbdbryja'
const SECTION_IDS = ['perfil', 'experiencia', 'educacion', 'habilidades', 'idiomas', 'contacto']

let lang = localStorage.getItem('portfolio-lang') || 'es'
let dark = localStorage.getItem('portfolio-theme') === 'dark'

// ────────────────────────────────────────────────
// RENDER
// ────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]))
}

function renderNav(t) {
  const navEl = document.getElementById('ribbon-nav')
  navEl.innerHTML = SECTION_IDS.map((id, i) =>
    `<a href="#${id}" data-section="${id}">${escapeHtml(t.nav[i])}</a>`
  ).join('')
}

function renderHero(t) {
  document.getElementById('subtitle').textContent = t.subtitle
  document.getElementById('intro').textContent = t.intro
  document.getElementById('hero-stats').innerHTML = t.stats.map((label, i) => `
    <div class="stat-cell">
      <span class="stat-value">${['+13', '3', '100%'][i]}</span>
      <span class="stat-label">${escapeHtml(label)}</span>
    </div>
  `).join('')
  document.getElementById('download-cv').textContent = t.downloadCv
}

function renderProfile(t) {
  document.getElementById('profile-title').textContent = t.profileTitle
  document.getElementById('profile-body').innerHTML = t.profile
    .map(p => `<p class="section-intro">${escapeHtml(p)}</p>`).join('')
}

function renderExpTable(t) {
  document.getElementById('exp-title').textContent = t.expTitle
  const head = `
    <div class="xl-thead">
      <div class="xl-col-num"></div>
      <div class="xl-col">${escapeHtml(t.expCols[0])}</div>
      <div class="xl-col">${escapeHtml(t.expCols[1])}</div>
      <div class="xl-col xl-col-period">${escapeHtml(t.expCols[2])}</div>
    </div>`
  const body = `<div class="xl-tbody">${t.expRows.map((r, i) => `
    <div class="xl-row">
      <div class="xl-row-num">${i + 1}</div>
      <div class="xl-cell xl-cell-main">
        <strong>${escapeHtml(r.role)}</strong>
        <p>${escapeHtml(r.desc)}</p>
      </div>
      <div class="xl-cell">${escapeHtml(r.company)}</div>
      <div class="xl-cell xl-period">${escapeHtml(r.period)}</div>
    </div>`).join('')}</div>`
  document.getElementById('exp-table').innerHTML = head + body
}

function renderEduTable(t) {
  document.getElementById('edu-title').textContent = t.eduTitle
  const head = `
    <div class="xl-thead">
      <div class="xl-col-num"></div>
      <div class="xl-col">${escapeHtml(t.eduCols[0])}</div>
      <div class="xl-col">${escapeHtml(t.eduCols[1])}</div>
      <div class="xl-col xl-col-period">${escapeHtml(t.eduCols[2])}</div>
    </div>`
  const body = `<div class="xl-tbody">${t.eduRows.map((r, i) => `
    <div class="xl-row">
      <div class="xl-row-num">${i + 1}</div>
      <div class="xl-cell">${escapeHtml(r.institute)}</div>
      <div class="xl-cell">${escapeHtml(r.degree)}</div>
      <div class="xl-cell xl-period">${escapeHtml(r.period)}</div>
    </div>`).join('')}</div>`
  document.getElementById('edu-table').innerHTML = head + body
}

function renderSkills(t) {
  document.getElementById('skills-title').textContent = t.skillsTitle
  document.getElementById('skills-list').innerHTML = t.skills
    .map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')
}

function renderLangTable(t) {
  document.getElementById('lang-title').textContent = t.langTitle
  const head = `
    <div class="xl-thead">
      <div class="xl-col-num"></div>
      <div class="xl-col">${escapeHtml(t.langCols[0])}</div>
      <div class="xl-col">${escapeHtml(t.langCols[1])}</div>
      <div class="xl-col xl-col-period">${escapeHtml(t.langCols[2])}</div>
    </div>`
  const body = `<div class="xl-tbody">${t.langRows.map((r, i) => `
    <div class="xl-row">
      <div class="xl-row-num">${i + 1}</div>
      <div class="xl-cell xl-cell-inst">
        <img class="lang-logo ${r.logoCls || ''}" src="${r.logo}" alt="${escapeHtml(r.institute)}">
        <span>${escapeHtml(r.institute)}</span>
      </div>
      <div class="xl-cell">${escapeHtml(r.course)}</div>
      <div class="xl-cell xl-period">${escapeHtml(r.period)}</div>
    </div>`).join('')}</div>`
  document.getElementById('lang-table').innerHTML = head + body
}

function renderContact(t) {
  document.getElementById('contact-title').textContent = t.contactTitle
  document.getElementById('contact-intro').textContent = t.contactIntro
  document.getElementById('form-name-label').textContent = t.form.name
  document.getElementById('form-email-label').textContent = t.form.email
  document.getElementById('form-message-label').textContent = t.form.message
  document.getElementById('form-name').placeholder = t.form.namePh
  document.getElementById('form-email').placeholder = t.form.emailPh
  document.getElementById('form-message').placeholder = t.form.messagePh
  const btn = document.getElementById('form-submit')
  btn.dataset.label = t.form.submit
  btn.dataset.sending = t.form.sending
  if (!btn.disabled) btn.textContent = t.form.submit
}

function renderFooter(t) {
  document.getElementById('footer-text').textContent = t.footer
}

function renderAll() {
  const t = content[lang]
  document.documentElement.lang = lang
  renderNav(t)
  renderHero(t)
  renderProfile(t)
  renderExpTable(t)
  renderEduTable(t)
  renderSkills(t)
  renderLangTable(t)
  renderContact(t)
  renderFooter(t)
  // re-init active section observer because nav links were replaced
  initActiveSectionObserver()
  // mark already-visible sections as visible to avoid hidden state
  markRevealed()
}

// ────────────────────────────────────────────────
// LANG TOGGLE
// ────────────────────────────────────────────────
function setLang(next) {
  if (next === lang) return
  lang = next
  localStorage.setItem('portfolio-lang', lang)
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang)
  })
  renderAll()
  startFormulaTypewriter()
}

// ────────────────────────────────────────────────
// THEME TOGGLE
// ────────────────────────────────────────────────
function setDark(value) {
  dark = value
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  document.body.classList.toggle('dark', dark)
}

// ────────────────────────────────────────────────
// FORMULA TYPEWRITER (loop)
// ────────────────────────────────────────────────
let formulaTimer = null
function startFormulaTypewriter() {
  const el = document.getElementById('formula-text')
  if (!el) return
  if (formulaTimer) clearTimeout(formulaTimer)
  const text = content[lang].formula
  let i = 0
  const type = () => {
    if (i <= text.length) {
      el.firstChild.textContent = text.slice(0, i)
      i += 1
      formulaTimer = setTimeout(type, 80)
    } else {
      formulaTimer = setTimeout(() => { i = 0; type() }, 3000)
    }
  }
  el.firstChild.textContent = ''
  type()
}

// ────────────────────────────────────────────────
// REVEAL ON SCROLL
// ────────────────────────────────────────────────
function markRevealed() {
  const els = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
  els.forEach(el => {
    if (el.classList.contains('visible')) return
    observer.observe(el)
  })
}

// ────────────────────────────────────────────────
// ACTIVE SECTION (navbar)
// ────────────────────────────────────────────────
let activeObserver = null
function initActiveSectionObserver() {
  if (activeObserver) activeObserver.disconnect()
  const sections = document.querySelectorAll('section[id]')
  activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        document.querySelectorAll('.ribbon-nav a').forEach(a => {
          a.classList.toggle('active', a.dataset.section === id)
        })
      }
    })
  }, { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 })
  sections.forEach(s => activeObserver.observe(s))
}

// ────────────────────────────────────────────────
// CONTACT FORM
// ────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form')
  const btn = document.getElementById('form-submit')
  const feedback = document.getElementById('form-feedback')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    btn.disabled = true
    btn.textContent = btn.dataset.sending
    feedback.textContent = ''
    feedback.className = 'form-feedback'
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        feedback.textContent = content[lang].form.success
        feedback.classList.add('form-feedback--ok')
        form.reset()
      } else {
        feedback.textContent = content[lang].form.error
        feedback.classList.add('form-feedback--err')
      }
    } catch {
      feedback.textContent = content[lang].form.error
      feedback.classList.add('form-feedback--err')
    } finally {
      btn.disabled = false
      btn.textContent = btn.dataset.label
    }
  })
}

// ────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // theme
  document.body.classList.toggle('dark', dark)
  const themeCheckbox = document.getElementById('checkbox-input')
  themeCheckbox.checked = dark
  themeCheckbox.addEventListener('change', e => setDark(e.target.checked))

  // lang toggle buttons
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang)
    b.addEventListener('click', () => setLang(b.dataset.lang))
  })

  renderAll()
  startFormulaTypewriter()
  initContactForm()
})
