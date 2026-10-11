import "./FounderSection.css";

export default function FounderSection() {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-container">
        <div className="founder-heading">
          <span className="founder-eyebrow">
            THE PERSON BEHIND THE VISION
          </span>

          <h2>
            Meet the <span>Founder &amp; CEO</span>
          </h2>

          <p>
            Building a smarter, more sustainable future for electric mobility.
          </p>
        </div>

        <div className="founder-card">
          <div className="founder-identity">
            <div className="founder-monogram" aria-label="SK initials">
              SK
            </div>

            <div className="founder-name">
              <span className="founder-role">FOUNDER &amp; CEO</span>
              <h3>Koneti Sujith Kumar</h3>
              <p>Electrical and Electronics Engineering</p>
              <p>Sathyabama Institute of Science and Technology</p>

              <span className="founder-student-badge">
                B.Tech · Third Year
              </span>
            </div>
          </div>

          <div className="founder-divider" />

          <div className="founder-bio">
            <h4>About the Founder</h4>

            <p>
              I am Koneti Sujith Kumar, a third-year B.Tech student in
              Electrical and Electronics Engineering at Sathyabama Institute
              of Science and Technology. I am passionate about electric
              vehicles, renewable energy, artificial intelligence, and
              innovative engineering solutions.
            </p>

            <h4>The REGENIQ-EV Vision</h4>

            <p>
              My vision is to develop intelligent multi-source energy
              recovery technology that integrates regenerative braking,
              flexible solar photovoltaics, and electromagnetic vibration
              energy harvesting. REGENIQ-EV aims to combine AI-driven energy
              intelligence, dual-battery management, and safety-focused
              control systems to improve energy utilization and advance
              sustainable electric mobility.
            </p>

            <div className="founder-focus">
              <div>
                <span className="founder-focus-number">01</span>
                <strong>Energy Recovery</strong>
                <p>Explore multiple sources of recoverable energy.</p>
              </div>

              <div>
                <span className="founder-focus-number">02</span>
                <strong>AI Energy Intelligence</strong>
                <p>Make smarter energy-use decisions with AI.</p>
              </div>

              <div>
                <span className="founder-focus-number">03</span>
                <strong>Sustainable Mobility</strong>
                <p>Advance efficient, safety-focused electric mobility.</p>
              </div>
            </div>

            <div className="founder-signoff">
              <span>REGENIQ-EV</span>
              <p>Recover. Recharge. Reinvent.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
