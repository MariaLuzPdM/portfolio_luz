import { useEffect, useState } from 'react'
import './App.css'

const content = {
  es: {
    brandRole: 'Analista de Cuentas Corrientes',
    nav: ['Perfil', 'Experiencia', 'Educación', 'Habilidades', 'Contacto'],
    formula:
      '=PERFIL("Analista Sr."; "Corredora de Seguros"; "Cobranzas"; "IA")',
    tag: 'Administración · Cobranzas · Control Operativo · Desarrollo Web · IA',
    subtitle: 'Analista de Cuentas Corrientes Senior',
    intro:
      'Profesional con más de 13 años de experiencia en gestión administrativa, cobranzas y control de cuentas corrientes. Me especializo en ordenar procesos, reducir riesgos de morosidad y sostener una operación clara, eficiente y confiable.',
    stats: ['Años de experiencia', 'Rubros liderados', 'Foco en cumplimiento'],
    downloadCv: 'Descargar CV',
    profileTitle: 'Perfil Profesional',
    profile: [
      'Soy una profesional administrativa y operativa con más de 13 años de experiencia en gestión de cobranzas, análisis de cuentas corrientes, control operativo y administración de información crítica.',
      'A lo largo de mi trayectoria trabajé en entornos de alta exigencia, desarrollando habilidades en conciliaciones, seguimiento de deuda, coordinación con equipos de cobranza y optimización de procesos administrativos. También cuento con experiencia en el rubro asegurador, brindando asesoramiento integral y gestión de pólizas con foco en la atención al cliente y la precisión operativa.',
      'Me caracterizo por mi organización, capacidad analítica y resolución de problemas, así como por mantener una comunicación clara y profesional incluso en escenarios de presión. Tengo facilidad para adaptarme, aprender rápidamente y aportar orden, eficiencia y compromiso en cada equipo de trabajo. Valoro especialmente el compañerismo y la atención constante a la comunicación entre pares para sostener equipos coordinados, colaborativos y orientados a resultados.',
      'Actualmente me encuentro en búsqueda de nuevas oportunidades laborales donde pueda continuar desarrollándome en áreas administrativas, operativas o de gestión.',
    ],
    expTitle: 'Experiencia Profesional',
    expCols: ['Cargo', 'Empresa', 'Período'],
    expRows: [
      {
        role: 'Jefe Analista de Cuentas Corrientes',
        desc: 'Lideré la gestión integral de cuentas corrientes, control de deuda y conciliaciones. Impulsé mejoras de proceso para anticipar desbalances y acelerar la recuperación.',
        company: 'CENIT L.T.D.A.',
        period: 'Ene 2023 – Feb 2026',
      },
      {
        role: 'Corredor de Seguros',
        desc: 'Brindé asesoramiento integral, cotizaciones comparativas y seguimiento de pólizas. Fortalecí controles preventivos para evitar vencimientos y mejorar la experiencia del cliente.',
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
      'Gestión de Cuentas Corrientes',
      'Cobranzas Preventivas',
      'Conciliación de Cuentas',
      'Gestión de Morosidad',
      'Control Operativo',
      'Comunicación Efectiva',
      'Toma de Decisiones',
      'Trabajo bajo Presión',
      'Organización',
      'Inglés Intermedio',
      'Portugués Intermedio',
      'Memory Figaro',
      'Memory Conty',
      'Creación de Sitios Web',
      'Inteligencia Artificial',
    ],
    contactTitle: 'Contacto',
    contactIntro:
      'Disponible para propuestas en administración, cobranzas y gestión de cuentas corrientes.',
    contactBtn: 'Contactarme',
    footer: '© 2026 María Luz Portillo · Todos los derechos reservados',
  },
  en: {
    brandRole: 'Accounts Receivable Analyst',
    nav: ['Profile', 'Experience', 'Education', 'Skills', 'Contact'],
    formula:
      '=PROFILE("Sr. Analyst", "Insurance Broker", "Collections", "AI")',
    tag: 'Administration · Collections · Operational Control · Web Development · AI',
    subtitle: 'Senior Accounts Receivable Analyst',
    intro:
      'Professional with over 13 years of experience in administrative management, collections, and accounts receivable control. I specialize in organizing processes, reducing delinquency risks, and sustaining a clear, efficient, and reliable operation.',
    stats: ['Years of experience', 'Industries led', 'Compliance focus'],
    downloadCv: 'Download Resume',
    profileTitle: 'Professional Profile',
    profile: [
      'I am an administrative and operational professional with more than 13 years of experience in collections management, accounts receivable analysis, operational control, and critical information management.',
      'Throughout my career I have worked in high-demand environments, developing skills in reconciliations, debt monitoring, coordination with collections teams, and optimization of administrative processes. I also have experience in the insurance industry, providing comprehensive advisory services and policy management with a strong focus on client service and operational accuracy.',
      'I stand out for my organization, analytical thinking, and problem-solving skills, as well as maintaining clear and professional communication even in high-pressure scenarios. I adapt quickly, learn fast, and bring structure, efficiency, and commitment to every team. I especially value teamwork and careful peer communication to support coordinated, collaborative, and results-oriented teams.',
      'I am currently seeking new career opportunities where I can continue growing in administrative, operational, or management roles.',
    ],
    expTitle: 'Professional Experience',
    expCols: ['Role', 'Company', 'Period'],
    expRows: [
      {
        role: 'Head Accounts Receivable Analyst',
        desc: 'Led end-to-end accounts receivable management, debt control, and reconciliations. Implemented process improvements to anticipate imbalances and accelerate recovery.',
        company: 'CENIT L.T.D.A.',
        period: 'Jan 2023 – Feb 2026',
      },
      {
        role: 'Insurance Broker',
        desc: 'Provided full advisory services, comparative quotations, and policy follow-up. Strengthened preventive controls to avoid expirations and improve customer experience.',
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
      'Accounts Receivable Management',
      'Preventive Collections',
      'Account Reconciliation',
      'Delinquency Management',
      'Operational Control',
      'Effective Communication',
      'Decision Making',
      'Work Under Pressure',
      'Organization',
      'Intermediate English',
      'Intermediate Portuguese',
      'Memory Figaro',
      'Memory Conty',
      'Website Creation',
      'Artificial Intelligence',
    ],
    contactTitle: 'Contact',
    contactIntro:
      'Available for opportunities in administration, collections, and accounts receivable management.',
    contactBtn: 'Contact Me',
    footer: '© 2026 María Luz Portillo · All rights reserved',
  },
}

function TypewriterText({ text, as: Tag = 'span', className = '', speed = 45 }) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let index = 0
    let timeoutId
    let cancelled = false

    const type = () => {
      if (cancelled) return
      if (index <= text.length) {
        setTyped(text.slice(0, index))
        index += 1
        timeoutId = window.setTimeout(type, speed)
      }
    }

    setTyped('')
    type()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [text, speed])

  return (
    <Tag className={className}>
      {typed}
      <span className="title-caret" aria-hidden="true">|</span>
    </Tag>
  )
}

function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'dark'
  })
  const [lang, setLang] = useState('es')
  const [activeSection, setActiveSection] = useState('perfil')
  const t = content[lang]
  const [typedFormula, setTypedFormula] = useState('')
  const navItems = [
    { id: 'perfil', label: t.nav[0] },
    { id: 'experiencia', label: t.nav[1] },
    { id: 'educacion', label: t.nav[2] },
    { id: 'habilidades', label: t.nav[3] },
    { id: 'contacto', label: t.nav[4] },
  ]

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0.1,
      }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    revealElements.forEach(element => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    let index = 0
    let timeoutId
    let cancelled = false

    const typeLoop = () => {
      if (cancelled) return

      if (index <= t.formula.length) {
        setTypedFormula(t.formula.slice(0, index))
        index += 1
        timeoutId = window.setTimeout(typeLoop, 80)
        return
      }

      timeoutId = window.setTimeout(() => {
        if (cancelled) return
        index = 0
        setTypedFormula('')
        typeLoop()
      }, 3000)
    }

    setTypedFormula('')
    typeLoop()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [t.formula])

  return (
    <div className={`app-root${dark ? ' dark' : ''}`}>
      <main className="portfolio">

        {/* ── TOPBAR ── */}
        <nav className="topbar">
          <div className="ribbon-top">
            <div className="ribbon-brand">
              <span className="xl-logo">xl</span>
              <span className="brand-name">María Luz Portillo</span>
            </div>
            <div className="lang-toggle" role="group" aria-label="Cambiar idioma">
              <button
                className={lang === 'es' ? 'active' : ''}
                onClick={() => setLang('es')}
                type="button"
              >
                ESP
              </button>
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                type="button"
              >
                ENG
              </button>
            </div>
            <div className="theme-switch-wrap">
              <input
                id="checkbox-input"
                type="checkbox"
                checked={dark}
                onChange={() => setDark(d => !d)}
                aria-label="Cambiar tema"
              />
              <label className="switch" htmlFor="checkbox-input">
                <svg
                  xmlSpace="preserve"
                  style={{ enableBackground: 'new 0 0 128 128' }}
                  viewBox="0 0 128 128"
                  height="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M77.547 120.684h-5.765l-1.698 3.012a7.477 7.477 0 0 1-6.513 3.804h-.003a7.479 7.479 0 0 1-6.513-3.804l-1.698-3.012h-5.765v-4.06h27.956v4.06z"
                    style={{ fill: '#51514c' }}
                  />
                  <path
                    d="M77.547 113.65H49.591v-4.279h27.956v4.279zm0-11.711H49.591v4.279h27.956v-4.279zm38.587-32.576-12.209-3.271.92-3.434 12.209 3.271-.92 3.434zm-104.268 0-.92-3.434 12.209-3.271.92 3.434-12.209 3.271zm92.979-24.913-.92-3.434 12.209-3.272.92 3.434-12.209 3.272zm-81.69 0-12.209-3.272.92-3.434 12.209 3.272-.92 3.434zM94.82 25.247l-2.514-2.514 8.938-8.938 2.514 2.514-8.938 8.938zm-61.64 0-8.937-8.938 2.514-2.514 8.937 8.938-2.514 2.514zm43.358-11.618-3.434-.92L76.376.5l3.434.92-3.272 12.209zm-25.076 0L48.191 1.42 51.625.5l3.272 12.209-3.435.92z"
                    style={{ fill: '#a7a79b' }}
                  />
                  <path
                    d="M59.802 64.141h7.535v34.934h-7.535V64.141zm3.767-44.754c-18.485-.53-33.631 14.817-33.631 33.824 0 9.781 4.016 18.581 10.431 24.753 5.637 5.423 9.222 13.147 9.222 21.111h7.84V64.141H51.75c-4.44 0-8.051-3.612-8.051-8.051s3.612-8.051 8.051-8.051 8.052 3.612 8.052 8.051v5.681h7.535V56.09c0-4.44 3.612-8.051 8.052-8.051 4.44 0 8.051 3.612 8.051 8.051s-3.612 8.051-8.051 8.051h-5.682v34.934h7.84c0-7.964 3.584-15.688 9.222-21.111C93.184 71.792 97.2 62.992 97.2 53.211c0-19.008-15.146-34.355-33.631-33.824zM51.75 50.408a5.687 5.687 0 0 0-5.681 5.681 5.687 5.687 0 0 0 5.681 5.681h5.682v-5.681a5.688 5.688 0 0 0-5.682-5.681zM75.389 61.77h-5.682v-5.681a5.688 5.688 0 0 1 5.682-5.681 5.687 5.687 0 0 1 5.681 5.681 5.687 5.687 0 0 1-5.681 5.681z"
                    style={{ fill: '#ffffff' }}
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className="ribbon-nav">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="formula-bar">
            <span className="cell-ref">A1</span>
            <span className="fx-label">fx</span>
            <span className="formula-text">
              {typedFormula}
              <span className="typing-caret" aria-hidden="true">|</span>
            </span>
          </div>
        </nav>

        {/* ── HERO ── */}
        <header className="hero">
          <div className="row-num-col">01</div>
          <div className="hero-body">
            <h1>María Luz Portillo</h1>
            <h2 className="subtitle">{t.subtitle}</h2>
            <p className="intro">
              {t.intro}
            </p>
            <div className="hero-stats">
              <div className="stat-cell">
                <span className="stat-value">+13</span>
                <span className="stat-label">{t.stats[0]}</span>
              </div>
              <div className="stat-cell">
                <span className="stat-value">3</span>
                <span className="stat-label">{t.stats[1]}</span>
              </div>
              <div className="stat-cell">
                <span className="stat-value">100%</span>
                <span className="stat-label">{t.stats[2]}</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-secondary" href="/cv-maria-luz-portillo.pdf" download>
                {t.downloadCv}
              </a>
            </div>
          </div>
        </header>

        {/* ── PERFIL ── */}
        <section id="perfil" className="xl-section reveal">
          <div className="section-header">
            <div className="row-num-col">02</div>
            <TypewriterText as="h2" text={t.profileTitle} />
          </div>
          <div className="section-body profile-body">
            {t.profile.map(text => (
              <p key={text.slice(0, 24)} className="section-intro">{text}</p>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCIA ── */}
        <section id="experiencia" className="xl-section reveal">
          <div className="section-header">
            <div className="row-num-col">03</div>
            <TypewriterText as="h2" text={t.expTitle} />
          </div>
          <div className="section-body">
            <div className="xl-table exp-table">
              <div className="xl-thead">
                <div className="xl-col-num" />
                <div className="xl-col">{t.expCols[0]}</div>
                <div className="xl-col">{t.expCols[1]}</div>
                <div className="xl-col xl-col-period">{t.expCols[2]}</div>
              </div>
              <div className="xl-tbody">
                {t.expRows.map((row, index) => (
                  <div key={row.role} className="xl-row">
                    <div className="xl-row-num">{index + 1}</div>
                    <div className="xl-cell xl-cell-main">
                      <strong>{row.role}</strong>
                      <p>{row.desc}</p>
                    </div>
                    <div className="xl-cell">{row.company}</div>
                    <div className="xl-cell xl-period">{row.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCACIÓN ── */}
        <section id="educacion" className="xl-section reveal">
          <div className="section-header">
            <div className="row-num-col">04</div>
            <TypewriterText as="h2" text={t.eduTitle} />
          </div>
          <div className="section-body">
            <div className="xl-table edu-table">
              <div className="xl-thead">
                <div className="xl-col-num" />
                <div className="xl-col">{t.eduCols[0]}</div>
                <div className="xl-col">{t.eduCols[1]}</div>
                <div className="xl-col xl-col-period">{t.eduCols[2]}</div>
              </div>
              <div className="xl-tbody">
                {t.eduRows.map((row, index) => (
                  <div key={row.institute} className="xl-row">
                    <div className="xl-row-num">{index + 1}</div>
                    <div className="xl-cell">{row.institute}</div>
                    <div className="xl-cell">{row.degree}</div>
                    <div className="xl-cell xl-period">{row.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section id="habilidades" className="xl-section reveal">
          <div className="section-header">
            <div className="row-num-col">05</div>
            <TypewriterText as="h2" text={t.skillsTitle} />
          </div>
          <div className="section-body">
            <div className="skills">
              {t.skills.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="xl-section reveal">
          <div className="section-header">
            <div className="row-num-col">06</div>
            <TypewriterText as="h2" text={t.contactTitle} />
          </div>
          <div className="section-body contact-body">
            <p className="section-intro">
              {t.contactIntro}
            </p>
            <div className="pcard">
              <a className="pcard__mail" href="mailto:mdemello019@gmail.com" aria-label="Enviar email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <div className="pcard__pic">
                {/*
                  Para agregar tu foto, reemplazá el div.pcard__initials
                  por: <img src="/tu-foto.jpg" alt="María Luz Portillo" />
                */}
                <div className="pcard__initials">MLP</div>
              </div>
              <div className="pcard__bottom">
                <div className="pcard__content">
                  <span className="pcard__name">María Luz Portillo</span>
                  <span className="pcard__desc">
                    {t.subtitle}
                  </span>
                </div>
                <div className="pcard__actions">
                  <div className="pcard__socials">
                    <a href="https://wa.me/59894492019" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mar%C3%ADa-luz-portillo-de-mello-7b8592254/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="tel:+59892597775" aria-label="Llamar">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>{t.footer}</p>
        </footer>
      </main>

      <a
        className="floating-wa"
        href="https://wa.me/59894492019"
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
