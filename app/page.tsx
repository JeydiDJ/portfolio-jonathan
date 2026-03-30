import Image from "next/image";
import jonathanPhoto from "./assets/jonathan-pic.jpg";

const projectGroups = [
  {
    company: "Tiles & More Construction Materials Trading",
    role: "Business Development Manager",
    period: "2020 - Present",
    projects: [
      "Stronghold Insurance Company Inc. - 12 Storey Corporate Office & Commercial Building, Iloilo City",
      "Big K Super J Corporation - Baguio Palace Hotel, Baguio City",
      "E.E Black Limited - The Solaire North Project, Quezon City",
      "Megaworld - The Albany Luxury Residence, Global Estate Resorts",
      "R.G. Simbulan & Partners Corp. - The Observatory Showroom, Pasig City",
      "The Table Group Inc. - Nono's Restaurant, BGC Taguig City",
      "Bengar Industrial Corp. - Anvaya Cove Luxury Private Villa, Morong Bataan",
      "Gloriamaris Shark's Fin Restaurant, Mall of Asia, Pasay City",
      "Casa Darjuan Private Residence - Ciudad De Hizon, San Fernando Pampanga",
    ],
  },
  {
    company: "Atlas Concorde",
    role: "Key Account Manager Hospitality",
    period: "2018 - 2020",
    projects: [
      "Resorts World Manila - Okada Hotel, Pasay City",
      "The Residences at The Westin Sonata Place, Pasig City",
      "Radisson Red Hotel, Cebu City",
      "Kingsford Hotel Bayshore, Manila",
      "Pullman Service Apartments, Davao City",
      "Taft East Gate, Cebu City",
      "Lanson Place Hotel and Service Suites, Pasay City",
      "Coptone Bay Suites, Manila",
    ],
  },
  {
    company: "Al Hadbania Trading Company",
    role: "Senior Projects Sales Executive",
    period: "2016 - 2017",
    projects: [
      "King Abdullah Financial District, Riyadh S.A.",
      "Riyadh Metro, Riyadh S.A.",
      "Riyadh Hospital, Riyadh S.A.",
      "Millenium Hotel, Riyadh S.A.",
      "Al Hokair Group, Riyadh S.A.",
    ],
  },
  {
    company: "Aliaxis Middle East",
    role: "Key Account Manager",
    period: "2014 - 2016",
    projects: [
      "Hilton Double Tree Hotel, Riyadh S.A.",
      "Riyadh Hospital, Riyadh S.A.",
      "King Abdullah Financial District Museum, Riyadh S.A.",
      "National Care Hospital, Riyadh S.A.",
      "Al Hokair Group head office, Riyadh S.A.",
      "Al Rumaizan Hotel, Riyadh S.A.",
    ],
  },
  {
    company: "Geberit",
    role: "Technical Consultant",
    period: "2013 - 2014",
    projects: [
      "Hilton Tower Hotel, Riyadh S.A.",
      "King Abdullah Financial District, Riyadh S.A.",
      "Dar Alarkan, Riyadh S.A.",
      "Al Rahji University, Al Qassim S.A.",
      "Princess Noura University, Riyadh S.A.",
      "Bujeiry Development, Riyadh S.A.",
      "Ibis and Adaigo Hotel, Riyadh S.A.",
      "Marriot Hotel, Riyadh S.A.",
      "Saudi Electric Company Headquarters, Riyadh S.A.",
      "Al Rimal Gate Community, Riyadh S.A.",
      "Jabal Al Omar Development, Makkah S.A.",
      "Rafal Living Tower, Riyadh S.A.",
      "Jenan City, Al Khobar S.A.",
      "Millenium Twin Tower, Riyadh S.A.",
    ],
  },
  {
    company: "Al Shaya Enterprises",
    role: "Projects Sales Engineer",
    period: "2011 - 2013",
    projects: [
      "Radison Blu Hotel, Riyadh S.A.",
      "King Abdullah Financial District Conference Building, Riyadh S.A.",
      "Half Moon Bay, Al Khobar S.A.",
      "KAP 20 Project, Riyadh S.A.",
      "Ministry Of Interior, Riyadh S.A.",
      "Royal Commission, Jubail S.A.",
      "Hilton Tower Hotel, Riyadh S.A.",
      "Rayadah Housing Project, Riyadh S.A.",
      "King Faisal Specialist Hospital, Riyadh S.A.",
    ],
  },
  {
    company: "Citiscape LLC",
    role: "Project Coordinator",
    period: "2010 - 2011",
    projects: ["5 KM. King Abdullah Road Construction, Riyadh S.A."],
  },
  {
    company: "Rabya Trading and Agriculture Co.",
    role: "Projects Sales Executive",
    period: "1995 - 2009",
    projects: [
      "King Abdulaziz Bin Fahad Project, Riyadh S.A.",
      "King Abdulaziz University Project, Jeddah S.A.",
      "Pension Fund Project, Riyadh S.A.",
      "Thumama Equestrian Club, Riyadh S.A.",
      "Royal Commission Yanbu, Yanbu S.A.",
      "King Abdullah Sports City, Jeddah S.A.",
      "Prince Faisal Residential Project, Riyadh S.A.",
      "Granada Mall Project, Riyadh S.A.",
      "King Abdulaziz International Airport, Jeddah S.A.",
    ],
  },
];

const experience = [
  {
    role: "Business Development Manager",
    company: "Tiles & More Construction Materials Trading",
    period: "2020 - Present",
    location: "Pampanga, Philippines",
    summary: "Client development, technical presentations, project support, market research, and sales strategy.",
  },
  {
    role: "Key Account Manager Hospitality",
    company: "Atlas Concorde",
    period: "2018 - 2020",
    location: "Manila, Philippines",
    summary: "Handled hotel and corporate accounts, negotiations, forecasting, and hospitality growth opportunities.",
  },
  {
    role: "Senior Projects Sales Executive",
    company: "Al Hadbania Trading Company",
    period: "2016 - 2017",
    location: "Riyadh, Saudi Arabia",
    summary: "Tracked profitable project opportunities and managed relationships with architects, engineers, and clients.",
  },
  {
    role: "Key Account Manager",
    company: "Aliaxis Middle East",
    period: "2014 - 2016",
    location: "Riyadh, Saudi Arabia",
    summary: "Managed B2B accounts, presentations, seminars, and MEP-related project execution support.",
  },
  {
    role: "Technical Consultant",
    company: "Geberit",
    period: "2013 - 2014",
    location: "Riyadh, Saudi Arabia",
    summary: "Delivered technical training, site presentations, testing support, and product application guidance.",
  },
  {
    role: "Projects Sales Engineer",
    company: "Al Shaya Enterprises",
    period: "2011 - 2013",
    location: "Riyadh, Saudi Arabia",
    summary: "Worked with consultants and contractors to grow pipelines and support project delivery.",
  },
  {
    role: "Project Coordinator",
    company: "Citiscape LLC",
    period: "2010 - 2011",
    location: "Riyadh, Saudi Arabia",
    summary: "Coordinated schedules, documentation, compliance, and day-to-day project operations.",
  },
  {
    role: "Projects Sales Executive",
    company: "Rabya Trading and Agriculture Co.",
    period: "1995 - 2009",
    location: "Riyadh, Saudi Arabia",
    summary: "Oversaw large-scale landscape and hardscape operations, project sales, showroom sales, and contracts.",
  },
];

const skillGroups = [
  "Business Development",
  "Key Account Management",
  "Project Sales",
  "Specification Work",
  "Salesforce / SAP / Microsoft Dynamics",
  "English / Arabic / Filipino",
];

const education =
  "Bachelor of Science in Business Administration, Major in Operations Management - Our Lady of Fatima University, San Fernando Pampanga, Philippines";

const credentialGroups = [
  {
    title: "Certifications & Trainings",
    items: [
      "Build critical thinking in others with emotional intelligence",
      "Continues improvement management",
      "International market and business broadcasting",
      "Create workplace policies and procedures for sustainability",
      "International promotion of products and services",
      "Build and maintain strategic business networks",
    ],
  },
  {
    title: "Other Certifications",
    items: [
      "3rd international conference on logistics and supply chain management global professional advancement, Malaysia",
      "Future of architecture and design seminar, Philippines",
      "Hansgrohe technical training, Riyadh S.A.",
      "Basic networking, PC assembly, A+ Core, ITLS Riyadh S.A.",
      "AutoCAD",
      "Photoshop CS3",
    ],
  },
  {
    title: "Product Technical Training",
    items: [
      "Geberit Dubai",
      "Wefatherm Germany",
      "Akatherm Netherlands",
      "Sanit Germany",
      "Atlas Concorde Italy",
      "Bostik Philippines",
    ],
  },
];

const highlights = ["30+ years", "PH + Saudi market", "B2B project sales"];

const heroLinks = [
  {
    label: "Call",
    href: "tel:+639171681324",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2.1.5 3.2.5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.2 2.8 3.5 3.3 3 4 3h3.6c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-2.4 2.2Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:johndj711@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5h16A1.5 1.5 0 0 1 21.5 7v10A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5Zm0 1.7 8 5.5 8-5.5H4Zm16 9.6V8.8l-7.6 5.2a.8.8 0 0 1-.8 0L4 8.8v8.1h16Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jonathan-de-jesus-b38250b9",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.4 8.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8ZM5.2 10h2.4v8H5.2v-8Zm5.1 0h2.3v1.1h.1c.3-.6 1.1-1.3 2.4-1.3 2.5 0 3 1.6 3 3.8V18h-2.4v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V18h-2.4v-8Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          Jonathan N. De Jesus
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Business Development Manager</p>
          <h1>30 years in project sales and commercial growth.</h1>
          <p className="lede">
            Building materials, hospitality accounts, and key client relationships across the Philippines and Saudi Arabia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Experience
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </div>
          <div className="hero-icon-links" aria-label="Quick contact links">
            {heroLinks.map((link) => (
              <a
                className="hero-icon-link"
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <ul className="hero-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-card">
            <Image src={jonathanPhoto} alt="Jonathan N. De Jesus portrait" className="hero-photo" priority />
          </div>
        </div>
      </section>

      <section className="section timeline-section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Career summary.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={`${item.role}-${item.company}`}>
              <div className="timeline-meta">
                <p className="project-type">{item.period}</p>
                <p className="timeline-location">{item.location}</p>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <details className="projects-disclosure">
          <summary className="projects-disclosure-summary">
            <div>
              <p className="section-kicker">Project archive</p>
              <h2>All project references.</h2>
            </div>
            <div className="projects-disclosure-side">
              <p className="projects-note">Click to expand the full project list.</p>
              <span className="projects-disclosure-icon" aria-hidden="true"></span>
            </div>
          </summary>

          <div className="projects-disclosure-panel">`r`n            <div className="projects-disclosure-panel-inner">`r`n              <div className="project-archive">
              {projectGroups.map((group) => (
                <article className="project-archive-row" key={group.company}>
                  <div className="project-archive-meta">
                    <p className="project-type">{group.period}</p>
                    <h3>{group.company}</h3>
                    <p className="project-archive-role">{group.role}</p>
                    <p className="project-archive-count">{group.projects.length} projects</p>
                  </div>
                  <div className="project-archive-list">
                    {group.projects.map((project) => (
                      <div className="project-archive-item" key={project}>
                        {project}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>`r`n            </div>`r`n          </div>`r`n        </details>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="section-heading credentials-heading">
          <div>
            <p className="section-kicker">Credentials</p>
            <h2>Education and training.</h2>
          </div>
        </div>

        <div className="education-feature">
          <p className="project-type">Education</p>
          <h3>{education}</h3>
        </div>

        <div className="credentials-grid">
          {credentialGroups.map((group) => (
            <section className="credential-block" key={group.title}>
              <h3>{group.title}</h3>
              <div className="credential-list">
                {group.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-panel">
          <p className="section-kicker">Core strengths</p>
          <h2>Built for relationship-led growth.</h2>
        </div>

        <div className="skills-panel compact-skills">
          {skillGroups.map((skill) => (
            <div className="skill-pill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-header">
          <p className="section-kicker">Contact form</p>
          <h2>Send a message.</h2>
        </div>

        <form className="contact-form" action="mailto:johndj711@gmail.com" method="post" encType="text/plain">
          <label className="form-field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label className="form-field form-field-full">
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Tell Jonathan about your opportunity"></textarea>
          </label>
          <button className="button button-primary form-submit" type="submit">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}

