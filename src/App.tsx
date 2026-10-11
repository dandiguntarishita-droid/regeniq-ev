import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  BrainCircuit,
  CarFront,
  Cpu,
  Leaf,
  Menu,
  ShieldCheck,
  Sun,
  Waves,
  X,
  Zap,
  Mail,
  Send,
  Gauge,
  Target,
  FlaskConical,
  Handshake,
  ChevronRight,
} from "lucide-react";
import PrototypeVisual from "./components/prototype/PrototypeVisual";
import "./App.css";

type Page =
  | "home"
  | "technology"
  | "intelligence"
  | "research"
  | "about"
  | "sustainability"
  | "partners"
  | "contact";

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "technology", label: "Technology" },
  { id: "intelligence", label: "AI Intelligence" },
  { id: "research", label: "R&D Roadmap" },
  { id: "about", label: "About Us" },
  { id: "sustainability", label: "Sustainability" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];

const energySources = [
  {
    number: "01",
    icon: Zap,
    name: "Regenerative braking",
    tag: "MOTION → ENERGY",
    description:
      "Explore how compatible regenerative drive systems can recover part of a vehicle's kinetic energy during deceleration.",
  },
  {
    number: "02",
    icon: Sun,
    name: "Solar integration",
    tag: "SUNLIGHT → ELECTRICITY",
    description:
      "Investigate vehicle-integrated solar surfaces and measure their potential contribution under real-world conditions.",
  },
  {
    number: "03",
    icon: Waves,
    name: "Vibration harvesting",
    tag: "VIBRATION → LOW-POWER ENERGY",
    description:
      "Study electromagnetic energy harvesting for suitable low-power sensing and monitoring applications.",
  },
];

const milestones = [
  [
    "01",
    "Concept definition",
    "Define the problem, use cases and measurable requirements.",
  ],
  [
    "02",
    "System architecture",
    "Map energy paths, sensing, storage and protection boundaries.",
  ],
  [
    "03",
    "Subsystem prototyping",
    "Develop testable components and instrumentation.",
  ],
  [
    "04",
    "Bench testing",
    "Measure input, output, losses and operating conditions.",
  ],
  [
    "05",
    "Safety evaluation",
    "Review electrical protection and battery-system compatibility.",
  ],
  [
    "06",
    "Integration feasibility",
    "Evaluate interfaces and vehicle-level constraints.",
  ],
  [
    "07",
    "Controlled pilot",
    "Plan structured trials with suitable research or industry partners.",
  ],
  [
    "08",
    "Readiness assessment",
    "Review reliability, manufacturability and commercial feasibility.",
  ],
];

function navigate(page: Page) {
  if (window.location.hash === `#${page}`) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.location.hash = page;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </span>
  );
}

function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Button({
  children,
  onClick,
  secondary = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  secondary?: boolean;
}) {
  return (
    <button
      type="button"
      className={
        secondary
          ? "button button-secondary"
          : "button button-primary"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Navbar({ page }: { page: Page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  return (
    <header className="navbar">
      <button
        type="button"
        className="brand"
        onClick={() => navigate("home")}
        aria-label="REGENIQ-EV home"
      >
        <span className="brand-icon">
          <Zap size={23} fill="currentColor" />
        </span>
        <span className="brand-name">
          REGENIQ<span>-EV</span>
          <small>ENERGY INTELLIGENCE</small>
        </span>
      </button>

      <nav
        className={menuOpen ? "nav-links nav-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className={
              page === item.id
                ? "nav-link nav-active"
                : "nav-link"
            }
            onClick={() => navigate(item.id)}
          >
            {item.label}
          </button>
        ))}

        <Button onClick={() => navigate("contact")}>
          Collaborate <ArrowRight size={15} />
        </Button>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <button
            type="button"
            className="brand"
            onClick={() => navigate("home")}
          >
            <span className="brand-icon">
              <Zap size={22} fill="currentColor" />
            </span>
            <span className="brand-name">
              REGENIQ<span>-EV</span>
              <small>ENERGY INTELLIGENCE</small>
            </span>
          </button>

          <p className="footer-tagline">
            Recover. Recharge. Reinvent.
          </p>

          <p className="muted">
            Developing a more energy-aware future for electric mobility.
          </p>
        </div>

        <div className="footer-nav">
          <b>Explore</b>
          {navItems.slice(1, 5).map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="footer-nav">
          <b>Connect</b>
          <button
            type="button"
            onClick={() => navigate("partners")}
          >
            Partnerships
          </button>
          <button
            type="button"
            onClick={() => navigate("contact")}
          >
            Contact the team
          </button>
          <a href="mailto:regeniq.ev@gmail.com">
            regeniq.ev@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} REGENIQ-EV</span>
        <span>
          Research and development concept. Capabilities remain subject
          to validation.
        </span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <Eyebrow>REIMAGINING ELECTRIC MOBILITY</Eyebrow>

          <h1>
            The future of
            <br />
            EV energy <span>intelligence.</span>
          </h1>

          <p className="hero-lead">
            Recover energy. Understand every journey. Rethink electric
            mobility.
          </p>

          <p className="hero-description">
            REGENIQ-EV is developing a multi-source energy recovery
            concept with intelligent energy management for a more
            energy-aware driving experience.
          </p>

          <div className="hero-actions">
            <Button onClick={() => navigate("technology")}>
              Explore our technology <ArrowRight size={17} />
            </Button>

            <Button
              secondary
              onClick={() => navigate("about")}
            >
              Discover our vision
            </Button>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            Research & development initiative
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Illustration of an electric vehicle energy system"
        >
          <div className="art-orbit orbit-a" />
          <div className="art-orbit orbit-b" />

          <div className="art-top-label">
            <span>REGENIQ / 001</span>
            <span>ENERGY SYSTEMS</span>
          </div>

          <div className="car-glow" />
          <CarFront className="car-outline" strokeWidth={0.8} />

          <div className="car-caption">
            <span>REGENIQ-EV</span>
            <small>INTELLIGENT MOBILITY CONCEPT</small>
          </div>

          <div className="energy-chip chip-a">
            <Zap size={16} /> Motion
          </div>
          <div className="energy-chip chip-b">
            <Sun size={16} /> Solar
          </div>
          <div className="energy-chip chip-c">
            <Waves size={16} /> Vibration
          </div>

          <div className="art-bottom-label">
            RECOVER · MONITOR · OPTIMISE
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / ENERGY</span>
          <span>ENGINEERING AWARENESS INTO EVERY JOURNEY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="intro-strip">
        <span className="mini-label">OUR FOCUS</span>
        <h2>
          Multiple energy pathways.
          <br />
          <span>One intelligent vision.</span>
        </h2>
        <p>
          Connecting energy recovery, measurement and AI-assisted insight
          in one developing mobility concept.
        </p>
      </section>

      <section className="section section-dark">
        <Heading
          eyebrow="THE OPPORTUNITY"
          title={
            <>
              Energy is a system.
              <br />
              Intelligence connects it.
            </>
          }
          description="We are exploring complementary energy sources and intelligent monitoring to better understand energy use in electric mobility."
        />

        <div className="technology-grid">
          {energySources.map((item) => {
            const Icon = item.icon;

            return (
              <article className="tech-card" key={item.number}>
                <div className="card-top">
                  <span>{item.number} / 03</span>
                  <Icon size={25} />
                </div>

                <span className="card-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => navigate("technology")}
                >
                  Explore concept <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section intelligence-band">
        <div className="intelligence-copy">
          <Eyebrow>THE INTELLIGENCE LAYER</Eyebrow>

          <h2>
            From energy signals
            <br />
            to informed decisions.
          </h2>

          <p>
            Explore how measured energy, journey context, weather and
            battery limits could inform useful insights—while safety
            controls remain in charge.
          </p>

          <Button onClick={() => navigate("intelligence")}>
            Explore AI intelligence <ArrowRight size={17} />
          </Button>
        </div>

        <Architecture />
      </section>

      <section className="section roadmap-preview">
        <Heading
          eyebrow="THE PATH FORWARD"
          title={
            <>
              Built on evidence.
              <br />
              Advanced through validation.
            </>
          }
          description="A responsible roadmap moves from concept to measurement, safety evaluation and feasibility."
        />

        <div className="roadmap-preview-grid">
          {milestones.slice(0, 4).map((item) => (
            <article className="roadmap-card" key={item[0]}>
              <span className="roadmap-number">{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </article>
          ))}
        </div>

        <Button
          secondary
          onClick={() => navigate("research")}
        >
          View development roadmap <ArrowRight size={16} />
        </Button>
      </section>

      <CallToAction />
    </>
  );
}

function Architecture() {
  const stages = [
    "Energy sources",
    "Measurement & sensors",
    "AI energy intelligence",
    "Supervisory controller",
    "Permitted energy allocation",
  ];

  return (
    <div className="architecture">
      <div className="architecture-heading">
        <span>SYSTEM ARCHITECTURE</span>
        <span>CONCEPTUAL VIEW</span>
      </div>

      {stages.map((stage, index) => (
        <div className="architecture-item" key={stage}>
          <span className="architecture-index">
            0{index + 1}
          </span>
          <span>{stage}</span>
          {index < stages.length - 1 && <ChevronRight size={16} />}
        </div>
      ))}

      <div className="safety-banner">
        <ShieldCheck size={21} />
        <div>
          <b>Battery safety authority</b>
          <small>
            Independent battery limits must remain enforced.
          </small>
        </div>
      </div>
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero-grid" />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{intro}</p>

      <div className="page-hero-foot">
        <span>REGENIQ-EV</span>
        <span>RECOVER. RECHARGE. REINVENT.</span>
      </div>
    </section>
  );
}

function PageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
      />
      <section className="section page-content">
        {children}
      </section>
    </>
  );
}

function Technology() {
  return (
    <PageLayout
      eyebrow="OUR TECHNOLOGY"
      title={
        <>
          Three pathways.
          <br />
          <span>One connected vision.</span>
        </>
      }
      intro="We are exploring regenerative braking, solar generation and low-power vibration harvesting as complementary energy pathways."
    >
      <div className="technology-grid">
        {energySources.map((item) => {
          const Icon = item.icon;

          return (
            <article className="tech-card" key={item.number}>
              <div className="card-top">
                <span>{item.number} / 03</span>
                <Icon size={25} />
              </div>
              <span className="card-tag">{item.tag}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>

      <div className="notice">
        <ShieldCheck size={24} />
        <p>
          <b>Engineering before claims</b>
          <br />
          Combining energy sources requires compatible electrical
          interfaces, measured power output, conversion electronics and
          validated protection. All real systems have limits and losses.
        </p>
      </div>

      <Heading
        eyebrow="SYSTEM VIEW"
        title="How the concept connects"
        description="This is a proposed architecture, not a claim that every component is integrated into a validated vehicle."
      />

      <Architecture />
    </PageLayout>
  );
}

function Intelligence() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Journey context",
      text: "Explore how route, terrain, traffic and driving patterns could inform recommendations.",
    },
    {
      icon: Sun,
      title: "Solar forecasting",
      text: "Compare weather estimates with measured photovoltaic output under different conditions.",
    },
    {
      icon: Gauge,
      title: "Energy monitoring",
      text: "Study energy inputs, outputs and conversion losses using clearly defined measurements.",
    },
    {
      icon: BatteryCharging,
      title: "Battery-aware planning",
      text: "Respect battery condition, electrical compatibility and validated operating limits.",
    },
  ];

  return (
    <PageLayout
      eyebrow="AI & ENERGY INTELLIGENCE"
      title={
        <>
          Make energy
          <br />
          <span>more understandable.</span>
        </>
      }
      intro="Our AI vision is to transform measured signals and journey context into useful energy insights. Predictions are estimates, not guaranteed savings or range improvements."
    >
      <div className="feature-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <span className="feature-index">
                0{index + 1}
              </span>
              <Icon size={26} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>

      <div className="notice">
        <Cpu size={25} />
        <p>
          <b>AI recommends. Validated controls decide.</b>
          <br />
          Future implementation must separate predictive software from
          safety-critical control. Validated protection must prevent
          recommendations from overriding battery limits.
        </p>
      </div>
    </PageLayout>
  );
}

function Research() {
  return (
    <PageLayout
      eyebrow="RESEARCH & DEVELOPMENT"
      title={
        <>
          Progress through
          <br />
          <span>proof, not promises.</span>
        </>
      }
      intro="Our proposed roadmap focuses on feasibility, measurable results, safe integration and validation."
    >
      <div className="notice">
        <FlaskConical size={24} />
        <p>
          <b>Development transparency</b>
          <br />
          The following milestones are proposed stages, not confirmation
          that they have already been completed.
        </p>
      </div>

      <div className="roadmap-full">
        {milestones.map((item) => (
          <article className="roadmap-item" key={item[0]}>
            <span className="roadmap-number">{item[0]}</span>
            <div>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
            <span className="planned-label">PLANNED</span>
          </article>
        ))}
      </div>

      <div className="notice">
        <ShieldCheck size={24} />
        <p>
          <b>Evidence and validation</b>
          <br />
          Test methods, measured data, limitations and validation status
          should be published only when reliable results become available.
        </p>
      </div>
    </PageLayout>
  );
}

function About() {
  return (
    <PageLayout
      eyebrow="ABOUT REGENIQ-EV"
      title={
        <>
          Engineering a more
          <br />
          <span>energy-aware future.</span>
        </>
      }
      intro="REGENIQ-EV is a developing electric mobility technology initiative exploring intelligent energy recovery, monitoring and driver-focused insights."
    >
      <div className="mission-grid">
        <article className="mission-card">
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2>
            Help electric vehicles use energy more intelligently.
          </h2>
          <p>
            Develop technologies that make energy flows easier to measure,
            understand and manage.
          </p>
        </article>

        <article className="mission-card">
          <Eyebrow>OUR VISION</Eyebrow>
          <h2>A smarter, more energy-aware mobility future.</h2>
          <p>
            Combine engineering evidence with thoughtful software and
            sustainable design.
          </p>
        </article>
      </div>

      <Heading
        eyebrow="OUR PRINCIPLES"
        title="Ambition, grounded in engineering."
      />

      <div className="feature-grid">
        <article className="feature-card">
          <ShieldCheck size={26} />
          <h3>Safety first</h3>
          <p>
            Battery limits, electrical protection and validated interfaces
            matter.
          </p>
        </article>

        <article className="feature-card">
          <Target size={26} />
          <h3>Measure honestly</h3>
          <p>
            Use transparent methods and real results instead of
            unsupported claims.
          </p>
        </article>

        <article className="feature-card">
          <Leaf size={26} />
          <h3>Design responsibly</h3>
          <p>
            Evaluate efficiency, material choices, lifecycle and practical
            feasibility.
          </p>
        </article>
      </div>
    </PageLayout>
  );
}

function Sustainability() {
  const items = [
    {
      icon: Zap,
      title: "Energy awareness",
      text: "Measure energy flows and conversion losses to identify potential improvements.",
    },
    {
      icon: Leaf,
      title: "Lifecycle thinking",
      text: "Consider materials, manufacturing, durability, repairability and end-of-life handling.",
    },
    {
      icon: Gauge,
      title: "Evidence-led evaluation",
      text: "Compare performance against a defined baseline using repeatable tests.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible integration",
      text: "Prioritise electrical safety, compatibility and maintainability.",
    },
  ];

  return (
    <PageLayout
      eyebrow="SUSTAINABILITY"
      title={
        <>
          Progress that respects
          <br />
          <span>real-world limits.</span>
        </>
      }
      intro="Sustainable mobility requires measurement, thoughtful design, responsible materials and clear system boundaries."
    >
      <div className="feature-grid">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article className="feature-card" key={item.title}>
              <Icon size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="notice">
        <Leaf size={24} />
        <p>
          <b>Impact must be demonstrated</b>
          <br />
          Environmental benefits depend on measured energy yield,
          manufacturing, vehicle integration, lifetime and the energy
          source displaced.
        </p>
      </div>
    </PageLayout>
  );
}

function Partners() {
  const items = [
    {
      icon: CarFront,
      title: "EV manufacturers",
      text: "Vehicle integration feasibility, interfaces and application requirements.",
    },
    {
      icon: BatteryCharging,
      title: "Battery & power electronics",
      text: "Energy conversion, storage compatibility, monitoring and protection.",
    },
    {
      icon: BrainCircuit,
      title: "Research institutions",
      text: "Modelling, instrumentation, experiments and independent validation.",
    },
    {
      icon: Handshake,
      title: "Investors & incubators",
      text: "Technology development planning, mentorship and strategic collaboration.",
    },
  ];

  return (
    <PageLayout
      eyebrow="PARTNERSHIPS & INVESTMENT"
      title={
        <>
          The future is built
          <br />
          <span>together.</span>
        </>
      }
      intro="We welcome conversations with organisations that can help evaluate, develop, test and advance intelligent energy solutions."
    >
      <div className="feature-grid">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article className="feature-card" key={item.title}>
              <Icon size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>

      <section className="embedded-cta">
        <Eyebrow>OPEN TO DISCUSSION</Eyebrow>
        <h2>
          Bring your expertise
          <br />
          to the conversation.
        </h2>
        <p>
          Tell us about your organisation, research interests or potential
          collaboration.
        </p>
        <Button onClick={() => navigate("contact")}>
          Contact the team <ArrowRight size={16} />
        </Button>
      </section>
    </PageLayout>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    topic: "Partnership",
    message: "",
  });

  const [consent, setConsent] = useState(false);
  const [feedback, setFeedback] = useState("");

  function update(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFeedback("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!consent) {
      setFeedback(
        "Please confirm that your information may be used to respond to your enquiry."
      );
      return;
    }

    const subject = encodeURIComponent(
      `REGENIQ-EV enquiry: ${form.topic}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\nTopic: ${form.topic}\n\n${form.message}`
    );

    setFeedback(
      "Your email application should open. Review the message and send it to complete your enquiry."
    );

    window.location.href =
      `mailto:regeniq.ev@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <PageLayout
      eyebrow="CONTACT"
      title={
        <>
          Let's start a
          <br />
          <span>meaningful conversation.</span>
        </>
      }
      intro="For research collaboration, industry partnerships, technical discussions or investment enquiries, tell us what you have in mind."
    >
      <div className="contact-layout">
        <div className="contact-info">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>Good ideas grow through collaboration.</h2>
          <p>
            Share your enquiry and the area you'd like to discuss.
          </p>

          <div className="contact-detail">
            <Mail />
            <div>
              <small>BUSINESS ENQUIRIES</small>
              <a href="mailto:regeniq.ev@gmail.com">
                regeniq.ev@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <Handshake />
            <div>
              <small>COLLABORATION</small>
              <b>Research · Engineering · Investment</b>
            </div>
          </div>

          <div className="contact-detail">
            <ShieldCheck />
            <div>
              <small>PRIVACY</small>
              <b>
                Details are used to prepare your enquiry email.
              </b>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Full name
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                maxLength={100}
                placeholder="Your name"
              />
            </label>

            <label>
              Business email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                maxLength={254}
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label>
            Organisation (optional)
            <input
              name="organisation"
              value={form.organisation}
              onChange={update}
              maxLength={150}
              placeholder="Company or institution"
            />
          </label>

          <label>
            Enquiry type
            <select
              name="topic"
              value={form.topic}
              onChange={update}
            >
              <option>Partnership</option>
              <option>Investment</option>
              <option>Research collaboration</option>
              <option>Technical discussion</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            How can we collaborate?
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              required
              minLength={10}
              maxLength={4000}
              rows={5}
              placeholder="Tell us about your enquiry..."
            />
          </label>

          <label className="consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
            />
            I agree that my details may be used to prepare a response
            to this enquiry.
          </label>

          <button
            className="button button-primary submit-button"
            type="submit"
          >
            Prepare enquiry <Send size={16} />
          </button>

          {feedback && (
            <p className="form-feedback" role="status">
              {feedback}
            </p>
          )}

          <p className="form-disclaimer">
            This form opens your email application. It does not submit
            information to a website server.
          </p>
        </form>
      </div>
    </PageLayout>
  );
}

function CallToAction() {
  return (
    <section className="cta-section">
      <Eyebrow>THE NEXT CHAPTER</Eyebrow>

      <h2>
        Let's rethink what
        <br />
        energy can do.
      </h2>

      <p>
        We welcome conversations with researchers, engineering teams,
        EV companies and potential collaborators.
      </p>

      <Button onClick={() => navigate("partners")}>
        Explore collaboration <ArrowRight size={17} />
      </Button>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.slice(1) as Page;

    return navItems.some((item) => item.id === hash)
      ? hash
      : "home";
  });

  useEffect(() => {
    function syncPage() {
      const hash = window.location.hash.slice(1) as Page;

      const nextPage = navItems.some((item) => item.id === hash)
        ? hash
        : "home";

      setPage(nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", syncPage);

    return () => {
      window.removeEventListener("hashchange", syncPage);
    };
  }, []);

  useEffect(() => {
    const current = navItems.find((item) => item.id === page);
    document.title = `${current?.label ?? "Home"} | REGENIQ-EV`;
  }, [page]);

  const content: Record<Page, React.ReactNode> = {
    home: <Home />,
    technology: <Technology />,
    intelligence: <Intelligence />,
    research: <Research />,
    about: <About />,
    sustainability: <Sustainability />,
    partners: <Partners />,
    contact: <Contact />,
  };

  return (
    <div className="site-shell">
      <Navbar page={page} />

      {page === "home" && <PrototypeVisual />}

      <main key={page}>{content[page]}</main>

      <Footer />
    </div>
  );
}