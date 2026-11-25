import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Database, Layers3, GraduationCap, Terminal, Sparkles, Send,
  Braces, Server, Globe, ChevronRight, Mouse
} from "lucide-react";

const skills = [
  { title: "Programming", icon: Braces, items: ["Java", "JavaScript", "SQL"] },
  { title: "Backend", icon: Server, items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs", "Laravel"] },
  { title: "Frontend", icon: Code2, items: ["React.js", "HTML5", "CSS3", "Thymeleaf"] },
  { title: "Database & Tools", icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Postman", "Maven"] }
];

const socials = [
  { label: "GitHub", href: "https://github.com/subham2120", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kumar-subham-125ab6264/", icon: Linkedin },
  { label: "Email", href: "mailto:kumarshubham2120@gmail.com", icon: Mail }
];

function Reveal({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const ref = React.useRef(null);
  return <div ref={ref} style={{ "--reveal-delay": `${delay}ms` }} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["home", "about", "education", "skills", "work", "contact"];
      const current = ids.reverse().find(id => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 150;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Home", "home"], ["About", "about"], ["Education", "education"], ["Skills", "skills"], ["Work", "work"], ["Contact", "contact"]];

  return <div className="site">
    <div className="noise" />
    <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Kumar Subham home">
        <span className="wordmark-icon">K<span>.</span></span>
        <span className="wordmark-name">KUMAR <b>SUBHAM</b></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "navigation nav-open" : "navigation"}>
        {navItems.map(([label, id]) => <a key={id} className={active === id ? "nav-active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-content">
          <div className="hero-status"><span className="live-dot"/> OPEN TO OPPORTUNITIES <span className="status-divider"/> INDIA</div>
          <p className="hero-overline">HELLO WORLD, I'M</p>
          <h1>Kumar<br/><span className="gradient-text">Subham</span><span className="hero-period">.</span></h1>
          <div className="role-line"><span className="role-bracket">&lt;</span> Java Full Stack Developer <span className="role-bracket">/&gt;</span></div>
          <p className="hero-intro">I turn ideas into functional digital experiences — building with Java, Spring Boot, React and a curiosity for solving real-world problems.</p>
          <div className="hero-buttons">
            <a href="#work" className="btn btn-primary">Explore my work <ArrowUpRight size={17}/></a>
            <a href="#contact" className="btn btn-outline">Get in touch <Mail size={16}/></a>
          </div>
          <div className="social-row">
            {socials.map(({label, href, icon: Icon}) => <a href={href} key={label} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"><Icon size={17}/><span>{label}</span></a>)}
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract animated developer illustration">
          <div className="art-halo halo-one"/><div className="art-halo halo-two"/>
          <div className="orbit orbit-1"><i/><i/></div><div className="orbit orbit-2"><i/></div>
          <div className="hero-core">
            <div className="core-top"><span>KS</span><span className="core-dot"/></div>
            <div className="core-code"><span className="code-muted">01</span> <b>const</b> developer = {"{"}</div>
            <div className="core-code indent"><span className="code-muted">02</span> name: <em>'Kumar Subham'</em>,</div>
            <div className="core-code indent"><span className="code-muted">03</span> role: <em>'Java Developer'</em>,</div>
            <div className="core-code indent"><span className="code-muted">04</span> mindset: <em>'Build & Learn'</em></div>
            <div className="core-code"><span className="code-muted">05</span> {"}"};</div>
            <div className="core-bottom"><span><i/> AVAILABLE TO BUILD</span><span>JAVA · WEB · SQL</span></div>
          </div>
          <div className="float-chip chip-java"><span className="chip-symbol">☕</span><span><b>Java</b><small>Backend</small></span></div>
          <div className="float-chip chip-react"><span className="react-mark">✳</span><span><b>React</b><small>Frontend</small></span></div>
          <div className="float-chip chip-db"><Database size={17}/><span><b>SQL</b><small>Database</small></span></div>
          <div className="art-caption">CREATIVE THINKING <span>×</span> CLEAN CODE</div>
        </div>
        <a className="scroll-indicator" href="#about"><Mouse size={16}/><span>SCROLL TO DISCOVER</span><ArrowDown size={14}/></a>
      </section>

      <section className="intro-band">
        <div className="wrap intro-band-inner">
          <span>CURIOUS BY NATURE</span><i/><span>BUILT WITH PURPOSE</span><i/><span>ALWAYS LEARNING</span><i/><span>FOCUSED ON GROWTH</span>
        </div>
      </section>

      <section className="section wrap" id="about">
        <Reveal><div className="section-label"><span>01 / ABOUT ME</span><i/></div></Reveal>
        <div className="about-layout">
          <Reveal className="about-main">
            <h2>Not just writing code.<br/><span className="gradient-text">Building with purpose.</span></h2>
            <p className="about-lead">I'm Kumar Subham, a postgraduate in Computer Applications with a passion for full-stack development.</p>
            <p className="body-copy">I enjoy understanding how applications work end to end — from database design and backend logic to user-friendly interfaces. My focus is on learning by building practical applications, improving my problem-solving skills and growing as a developer.</p>
            <a href="#skills" className="inline-link">Explore my toolkit <ArrowUpRight size={16}/></a>
          </Reveal>
          <Reveal className="about-side" delay={120}>
            <div className="profile-card">
              <div className="profile-card-top"><span>QUICK INTRO</span><Sparkles size={16}/></div>
              <div className="profile-monogram">K<span>S</span></div>
              <h3>Kumar Subham</h3>
              <p>Java Full Stack Developer</p>
              <div className="profile-meta"><span><GraduationCap size={15}/> MCA Graduate · 2026</span><span><Globe size={15}/> India</span></div>
              <div className="profile-card-bottom"><span>STATUS</span><b><i/> OPEN TO OPPORTUNITIES</b></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wrap" id="education">
        <Reveal><div className="section-label"><span>02 / EDUCATION</span><i/></div><div className="section-title-row"><h2>My learning <span className="gradient-text">journey.</span></h2><p>A strong foundation. A mindset to keep growing.</p></div></Reveal>
        <div className="education-timeline">
          <Reveal className="edu-item" delay={50}>
            <div className="edu-marker"><GraduationCap size={18}/></div>
            <div className="edu-card"><div className="edu-top"><span>POSTGRADUATION</span><b>2026</b></div><h3>Master of Computer Applications</h3><p className="edu-place">Tula's Institute <span>·</span> Dehradun</p><div className="edu-score"><span>Academic score</span><strong>7.37 CGPA</strong></div></div>
          </Reveal>
          <Reveal className="edu-item" delay={150}>
            <div className="edu-marker"><GraduationCap size={18}/></div>
            <div className="edu-card"><div className="edu-top"><span>GRADUATION</span><b>2021 — 2024</b></div><h3>Bachelor of Computer Applications</h3><p className="edu-place">Gaya College, Magadh University <span>·</span> Gaya</p><div className="edu-score"><span>Academic score</span><strong>72%</strong></div></div>
          </Reveal>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <Reveal><div className="section-label"><span>03 / TECH STACK</span><i/></div><div className="section-title-row"><h2>Tools of my <span className="gradient-text">trade.</span></h2><p>Technologies I have worked with and continue to strengthen.</p></div></Reveal>
        <div className="skills-grid">
          {skills.map(({title, icon: Icon, items}, index) => <Reveal key={title} delay={index * 90}><article className="skill-card"><div className="skill-card-head"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{index + 1}</span></div><h3>{title}</h3><div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-glow"/></article></Reveal>)}
        </div>
      </section>

      <section className="section wrap work-section" id="work">
        <Reveal><div className="section-label"><span>04 / SELECTED WORK</span><i/></div><div className="work-heading"><div><h2>Good things are<br/><span className="gradient-text">in progress.</span></h2><p>This space will feature my projects, what I built, the technologies I used and what I learned along the way.</p></div><div className="work-stamp"><Layers3 size={24}/><span>MORE TO<br/>COME</span></div></div></Reveal>
        <Reveal delay={120}><div className="work-empty"><div className="empty-visual"><div className="empty-orbit"/><div className="empty-icon"><Code2 size={34}/></div><span className="empty-spark spark-a">✳</span><span className="empty-spark spark-b">✦</span></div><div className="empty-copy"><span className="eyebrow-small">CURRENTLY BUILDING</span><h3>Projects are on the way.</h3><p>I'm documenting my development work and preparing project walkthroughs. Check back soon to explore the details.</p><a href="https://github.com/subham2120" target="_blank" rel="noreferrer" className="inline-link">Follow my GitHub <ArrowUpRight size={16}/></a></div><div className="empty-count">COMING<br/><b>SOON</b></div></div></Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow"/>
        <div className="wrap contact-content">
          <Reveal><div className="section-label"><span>05 / CONTACT</span><i/></div><p className="contact-kicker">HAVE AN OPPORTUNITY IN MIND?</p><h2>Let's make<br/><span className="gradient-text">something happen.</span></h2><p className="contact-description">I'm open to entry-level opportunities, internships and meaningful conversations about technology.</p><a className="btn btn-primary contact-email" href="mailto:kumarshubham2120@gmail.com"><Mail size={17}/> Say hello <ArrowUpRight size={17}/></a></Reveal>
          <Reveal className="contact-links" delay={120}>
            <a href="mailto:kumarshubham2120@gmail.com"><span className="contact-link-icon"><Mail size={18}/></span><span><small>EMAIL</small><b>kumarshubham2120@gmail.com</b></span><ArrowUpRight size={17}/></a>
            <a href="https://github.com/subham2120" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18}/></span><span><small>GITHUB</small><b>github.com/subham2120</b></span><ArrowUpRight size={17}/></a>
            <a href="https://www.linkedin.com/in/kumar-subham-125ab6264/" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small><b>Kumar Subham</b></span><ArrowUpRight size={17}/></a>
          </Reveal>
        </div>
      </section>
    </main>

    <footer className="footer wrap"><a className="wordmark" href="#home"><span className="wordmark-icon">K<span>.</span></span><span className="wordmark-name">KUMAR <b>SUBHAM</b></span></a><span>Designed & built with curiosity.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;