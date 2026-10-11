

import "./PrototypeVisual.css";

export default function PrototypeVisual() {
  return (
    <section className="prototype-section">
      <div className="prototype-heading">
        <p className="prototype-tag">REGENIQ-EV | CONCEPT VISUALIZATION</p>
        <h2>Every journey can create an energy opportunity.</h2>
        <p>
          An intelligent EV companion concept exploring energy recovery,
          storage, and smarter vehicle energy management.
        </p>
      </div>

      <div className="prototype-car">
        <svg viewBox="0 0 800 300" role="img" aria-label="Futuristic electric vehicle concept">
          <defs>
            <linearGradient id="carPaint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e6ffff" />
              <stop offset="45%" stopColor="#39dce8" />
              <stop offset="100%" stopColor="#087d9b" />
            </linearGradient>
          </defs>
          <ellipse cx="400" cy="245" rx="290" ry="20" fill="#16d9e8" opacity=".15" />
          <path d="M115 207 L145 165 Q165 150 240 142 L315 85 Q340 68 390 68 L490 75 Q520 80 555 130 L630 155 Q675 166 690 203 L680 225 L120 225 Z"
            fill="url(#carPaint)" stroke="#8cf8ff" strokeWidth="3" />
          <path d="M265 139 L330 91 Q350 80 390 81 L420 83 L440 139 Z" fill="#102a40" stroke="#71edf5" strokeWidth="2" />
          <path d="M450 84 L486 88 Q507 93 532 135 L451 139 Z" fill="#102a40" stroke="#71edf5" strokeWidth="2" />
          <path d="M140 184 L210 176 M600 177 L667 192" stroke="#f4ffff" strokeWidth="5" strokeLinecap="round" />
          <path d="M130 211 L210 211 M590 211 L672 211" stroke="#2ff6ff" strokeWidth="5" strokeLinecap="round" />
          <circle cx="245" cy="220" r="42" fill="#101820" stroke="#77f7ff" strokeWidth="5" />
          <circle cx="245" cy="220" r="20" fill="#405968" stroke="#c5ffff" strokeWidth="4" />
          <circle cx="570" cy="220" r="42" fill="#101820" stroke="#77f7ff" strokeWidth="5" />
          <circle cx="570" cy="220" r="20" fill="#405968" stroke="#c5ffff" strokeWidth="4" />
          <text x="400" y="190" fill="#052a3b" fontSize="21" fontWeight="bold" textAnchor="middle">REGENIQ-EV</text>
        </svg>
      </div>

      <div className="prototype-cards">
        <article className="prototype-card">
          <span>01 / CAPTURE</span>
          <h3>Energy opportunities</h3>
          <p>Explore solar input, regenerative braking, and vibration-energy harvesting as concept pathways.</p>
        </article>
        <article className="prototype-card">
          <span>02 / STORE</span>
          <h3>Intelligent storage</h3>
          <p>Illustrates how recovered energy could be monitored and directed toward suitable storage systems.</p>
        </article>
        <article className="prototype-card">
          <span>03 / OPTIMIZE</span>
          <h3>AI energy companion</h3>
          <p>Imagine energy insights that help drivers make more informed decisions about their journeys.</p>
        </article>
      </div>

      <p className="prototype-note">
        Concept visualization only - not a tested vehicle prototype or a claim of measured energy savings.
      </p>
    </section>
  );
}
