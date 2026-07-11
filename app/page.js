const WHATSAPP = "https://wa.me/971505829298";

const TIERS = [
  {
    id: "gathering",
    coord: "Pawn",
    name: "Gathering",
    price: "AED 145",
    unit: "/ gathering",
    payUrl: "https://pay.ziina.com/shj.chessmates/uZSdXeFac",
    features: [
      "Entry to one casual gathering",
      "Open to all levels",
      "No commitment",
    ],
  },
  {
    id: "tournament",
    coord: "Rook",
    name: "Tournament",
    price: "AED 155",
    unit: "/ tournament",
    payUrl: `${WHATSAPP}?text=${encodeURIComponent("Hi! I'd like to join the next SHJ.CHESSMATES tournament (AED 155).")}`,
    features: [
      "Entry to one tournament",
      "Competitive bracket play",
      "No commitment",
    ],
  },
  {
    id: "duo-pass",
    coord: "Knight",
    name: "Duo Pass",
    price: "AED 260",
    unit: "/ 2 spots",
    featured: true,
    payUrl: `${WHATSAPP}?text=${encodeURIComponent("Hi! I'd like to get the SHJ.CHESSMATES Duo Pass (AED 260, 2 spots).")}`,
    features: [
      "2 spots to use however you like",
      "Both for you (two gatherings), or bring a friend to one",
      "Save AED 30 vs. paying separately (AED 290)",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-inner">
          <span className="coord">e4 — Sharjah, UAE</span>
          <h1>
            The board is set.
            <br />
            <em>The room is yours.</em>
          </h1>
          <p className="sub">
            SHJ.CHESSMATES is a chess community in Sharjah bringing players
            together over recurring tournaments, meetups, and a shared
            obsession with the game — now expanding to Dubai & Abu Dhabi.
          </p>
          <div className="cta-row">
            <a className="btn solid" href="#membership">
              Join a session
            </a>
            <a className="btn" href="#events">
              See upcoming events
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="label">
            <span className="coord">01 · about</span>
            <div className="rule" />
          </div>
          <div className="about-grid">
            <div>
              <h2>Built by a player, for players.</h2>
              <p>
                SHJ.CHESSMATES started as a small gathering of friends over a
                board and grew into a recurring community — monthly
                tournaments, themed evenings, and a space where beginners and
                titled players share a table.
              </p>
              <p>
                What began in Sharjah is now finding its footing in Dubai and Abu Dhabi,
                one evening at a time.
              </p>
            </div>
            <div className="stat-block">
              <div className="stat">
                <b>2</b>
                <span>Emirates active — Sharjah, Dubai &amp; Abu Dhabi</span>
              </div>
              <div className="stat">
                <b>12+</b>
                <span>Tournaments hosted to date</span>
              </div>
              <div className="stat">
                <b>3</b>
                <span>Ways to join</span>
              </div>
              <div className="stat">
                <b>1</b>
                <span>Women-only evening, and counting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events">
        <div className="wrap">
          <div className="label">
            <span className="coord">02 · events</span>
            <div className="rule" />
          </div>
          <div className="events">
            <div className="event-card">
              <span className="coord">Jul 04</span>
              <h3>Abu Dhabi Evening</h3>
              <p>Nowhere Café · casual rapid tournament, open to all levels.</p>
              <span className="tag">Past</span>
            </div>
            <div className="event-card">
              <span className="coord">Jul 18</span>
              <h3>Sharjah Gathering</h3>
              <p>Parka Bakehouse, Sharjah · casual chess gathering, open to all levels.</p>
              <span className="tag">Upcoming</span>
            </div>
            <div className="event-card">
              <span className="coord">Monthly</span>
              <h3>Sharjah Tournament Night</h3>
              <p>Our recurring flagship night — the one that started it all.</p>
              <span className="tag">Recurring</span>
            </div>
          </div>
        </div>
      </section>

      <section id="membership">
        <div className="wrap">
          <div className="label">
            <span className="coord">03 · membership</span>
            <div className="rule" />
          </div>
          <div className="tiers">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`tier ${tier.featured ? "featured" : ""}`}
              >
                <span className="coord">{tier.coord}</span>
                <h3>{tier.name}</h3>
                <div className="price">
                  {tier.price} <span>{tier.unit}</span>
                </div>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  className="btn solid"
                  href={tier.payUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay &amp; Join
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join">
        <div className="wrap join">
          <div>
            <h2>Pull up a chair. The next game starts soon.</h2>
            <p className="note">
              Prefer to sort payment over WhatsApp instead? Message us directly
              and we'll get you on the list.
            </p>
          </div>
          <a
            className="btn"
            href="https://wa.me/971505829298"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <span className="coord">SHJ.CHESSMATES — Sharjah · Abu Dhabi</span>
      </footer>
    </main>
  );
}
