"use client"

// IMPORTANT: contenus à remplacer par tes vrais clients.
// Structure: 3 case studies longues (before/after/process) + 6 témoignages courts + stats globales.

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const HEADLINE_STATS = [
  { value: "42+", label: "Founders served" },
  { value: "€8.4M", label: "Client revenue attributed" },
  { value: "94%", label: "Renewal / referral rate" },
  { value: "16 wks", label: "Avg. time to ROI" },
]

const CASE_STUDIES = [
  {
    badge: "BRAND INTELLIGENCE + REVENUE ARCHITECTURE",
    client: "B2B SaaS · 12-person team · Paris",
    pseudo: "Mira (founder)",
    headline: "From 14k MRR to 58k MRR in 90 days.",
    teaser: "A SaaS with real product, real customers, and no idea why bigger deals kept slipping. Repositioning + offer engineering unlocked an enterprise tier that didn't exist before.",
    before: [
      "14k MRR, plateaued for 9 months",
      "Sales cycle averaging 42 days, half of deals dying after demo",
      "Pricing ceiling at 290€/seat — anything above that lost to incumbents",
      "Founder spending 70% of week in sales calls",
    ],
    after: [
      "58k MRR by month 3 — same product, repositioned",
      "Sales cycle compressed to 18 days median",
      "Enterprise tier launched at 1,290€/seat — closed 4 in quarter one",
      "Founder back in product, sales handled by one new hire reading the script",
    ],
    process: "Brand Intelligence revealed the real ICP was not the segment they'd been chasing for two years. Revenue Architecture rebuilt the offer ladder, added an enterprise tier with the right anchoring, rewrote every sales asset around the new narrative. The deals that had been dying stopped dying.",
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
  },
  {
    badge: "CONTENT DOMINATION",
    client: "Coaching practice · solopreneur · remote",
    pseudo: "Théo (founder)",
    headline: "2.4M organic views and 1,200 waitlist signups, zero ad spend.",
    teaser: "A respected coach with no time to film consistently. A 12-week cinematic content engine replaced the daily creative struggle — and turned one short-form into a category-defining moment.",
    before: [
      "Posting sporadically, no consistent narrative across channels",
      "Audience growth flat at ~40 followers/week",
      "Newsletter open rate 22%, no real conversion to paid offerings",
      "Recording sessions took 4–6 hours for 2–3 deliverables",
    ],
    after: [
      "2.4M organic views in 90 days across YouTube Shorts + Reels",
      "One short-form alone: 870k views, 1,200 qualified signups to the waitlist",
      "Newsletter at 41% open rate, 8% click-through to paid",
      "Recording sessions: 90 minutes for 10+ deliverables, all pre-scripted",
    ],
    process: "Content Domination doesn't post for you — it gives you architecture. Five content territories defined. Hook engineering on every short-form. Newsletters written as narrative arcs. The content engine ran while the founder went back to actually coaching. Algorithm noticed the consistency about week six.",
    quote: "I stopped guessing what to post. The content engine is the closest thing I've had to a creative co-founder — except it scales.",
  },
  {
    badge: "REVENUE ARCHITECTURE",
    client: "Online course creator · finance education · solo",
    pseudo: "Marina (founder)",
    headline: "Sales page conversion from 3.1% to 47%. One launch did 187k€.",
    teaser: "A creator with the audience, the offer, and a sales page that converted at 3.1%. The fix wasn't more traffic. It was rewriting the page like the decision it was meant to produce.",
    before: [
      "Sales page conversion: 3.1% on warm traffic",
      "Previous launch: 24k€ over 7 days, mostly from founder DM-ing leads",
      "Cart abandon rate: 71% at checkout",
      "No nurture sequence — leads went into the void after webinar",
    ],
    after: [
      "Sales page conversion: 47% on the same warm traffic source",
      "First launch after rebuild: 187k€ in 7 days",
      "Cart abandon rate: 34% (added a 2-step recovery sequence)",
      "Nurture sequence runs 21 days, converts a steady 6–9% of cold leads",
    ],
    process: "We didn't change the product. We changed the architecture around it. The offer got restructured (3 tiers, anchored properly). The page got rewritten as a decision, not a description. The checkout added a bump and a payment plan. The nurture sequence got built from scratch. Numbers moved in week two.",
    quote: "First launch after the rebuild did 187k€. The page closes for me now. I review the analytics and that's about it.",
  },
]

const EXTRA_QUOTES = [
  { quote: "I came in expecting a brand guide. I left with a business strategy.", name: "Anonymous founder", role: "Health-tech", system: "Brand Intelligence" },
  { quote: "The content stops needing me to be inspired. That alone was worth the subscription.", name: "Hugo D.", role: "Agency owner", system: "Content Domination" },
  { quote: "Our investor deck got rewritten by accident — the narrative bible became the deck.", name: "Founder", role: "Series A startup", system: "Brand Intelligence" },
  { quote: "We added a payment plan they recommended. 22% of new revenue comes from it now.", name: "Sophie L.", role: "Course creator", system: "Revenue Architecture" },
  { quote: "First time my LinkedIn felt like mine and not like everyone else's.", name: "Anonymous", role: "Solopreneur", system: "Content Domination" },
  { quote: "Booked the bundle. Cancelled three other agency contracts in the same week.", name: "Founder", role: "DTC brand", system: "Empire Bundle" },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "5%", right: "-5%", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.12, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 32 }}>
            CASE STUDIES · TESTIMONIALS
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 32 }}>
            The receipts.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Numbers, named.</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto" }}>
            Founders shipping with us don&apos;t get vibes. They get metrics that moved, on offers they could re-launch confidently. Three full case studies. Six more testimonials. The work.
          </p>
        </div>
      </section>

      {/* HEADLINE STATS BAND */}
      <section style={{ padding: "0 clamp(1.5rem,4vw,4rem) 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0, background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: `1px solid ${COLOR}33`, borderRadius: 24, overflow: "hidden" }}>
            {HEADLINE_STATS.map((s, i) => (
              <div key={i} style={{ padding: "36px 24px", textAlign: "center", borderRight: i < HEADLINE_STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }} className="stat-cell">
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 8, background: `linear-gradient(135deg, #fff, ${COLOR})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 18 }}>
            Aggregated across all clients since founding. Some figures are estimates based on client-reported attribution.
          </p>
        </div>
      </section>

      {/* CASE STUDIES (3) */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>FEATURED CASE STUDIES</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 720, margin: "0 auto" }}>
              Three stories. Three systems. Three sets of numbers that moved.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {CASE_STUDIES.map((c, i) => (
              <article key={i} style={{ position: "relative", background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: `1px solid ${COLOR}22`, borderRadius: 28, padding: "44px clamp(1.5rem, 3vw, 2.5rem)", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", top: "-30%", left: "-10%", width: 500, height: 500, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
                    <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em" }}>{c.badge}</div>
                    <div style={{ display: "inline-block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: 10, fontFamily: SANS, fontWeight: 600, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.1em" }}>{c.client}</div>
                  </div>

                  {/* headline */}
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
                    {c.headline}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 32, maxWidth: 780 }}>
                    {c.teaser}
                  </p>

                  {/* before/after grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginBottom: 32 }}>
                    <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "22px 24px" }}>
                      <div style={{ fontFamily: SANS, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 14, textTransform: "uppercase" }}>Before</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                        {c.before.map((b, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: SANS, fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                            <span style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0, marginTop: 1 }}>—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ background: `${COLOR}0d`, border: `1px solid ${COLOR}33`, borderRadius: 16, padding: "22px 24px" }}>
                      <div style={{ fontFamily: SANS, fontSize: 10, color: COLOR, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 14, textTransform: "uppercase" }}>After</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                        {c.after.map((a, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: SANS, fontSize: 13.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                            <span style={{ color: COLOR, flexShrink: 0, marginTop: 1 }}>✦</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* process */}
                  <div style={{ borderLeft: `2px solid ${COLOR}55`, paddingLeft: 22, marginBottom: 28 }}>
                    <div style={{ fontFamily: SANS, fontSize: 10, color: COLOR, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 10 }}>HOW</div>
                    <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", margin: 0 }}>
                      {c.process}
                    </p>
                  </div>

                  {/* quote */}
                  <blockquote style={{ margin: 0, padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }}>
                    <div style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.88)", fontStyle: "italic", marginBottom: 12 }}>
                      &ldquo;{c.quote}&rdquo;
                    </div>
                    <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
                      — {c.pseudo}
                    </div>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MORE TESTIMONIALS */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>MORE FROM CLIENTS</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              The kind of feedback we keep getting.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {EXTRA_QUOTES.map((q, i) => (
              <figure key={i} style={{ margin: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "26px 24px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: SERIF, fontSize: 38, color: COLOR, lineHeight: 0.5, marginBottom: 14, fontWeight: 700 }}>&ldquo;</div>
                <blockquote style={{ fontFamily: SERIF, fontSize: 16.5, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", fontStyle: "italic", margin: "0 0 20px 0", flex: 1 }}>
                  {q.quote}
                </blockquote>
                <figcaption style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontFamily: SANS, fontSize: 13, color: "#fff", fontWeight: 600 }}>{q.name}</div>
                    <div style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{q.role}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 9, color: COLOR, letterSpacing: "0.12em", fontWeight: 700, padding: "4px 10px", background: `${COLOR}1a`, border: `1px solid ${COLOR}33`, borderRadius: 100 }}>
                    {q.system}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            Your case study<br />could be next.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            Pick the system that fits the layer you&apos;re stuck on. Or skip the math and take the bundle.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/#offers" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 44px", borderRadius: 100, fontFamily: SANS, fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
              See the systems →
            </Link>
            <Link href="/empire-bundle" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", padding: "20px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
              Or take the bundle
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
