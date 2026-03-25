import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers, BarChart2, Wallet, Globe, Shield, Code2,
  ArrowUpRight, Zap, Users, Lock, Coins, ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const fv = { hidden:{opacity:0,y:32}, visible:(i=0)=>({opacity:1,y:0,transition:{duration:0.65,delay:i*0.1,ease:[0.16,1,0.3,1]}}) };
function R({children,i=0,style={},className=""}){
  const ref=useRef(null);
  const v=useInView(ref,{once:true,margin:"-60px"});
  return <motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style} className={className}>{children}</motion.div>;
}

/* ── Game showcase images from Unsplash (Web3/gaming/metaverse feel) ── */
const GAME_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    title: "Battle Arena",
    tag: "PvP · On-Chain",
  },
  {
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    title: "Open World RPG",
    tag: "Open Economy",
  },
  {
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    title: "Strategy League",
    tag: "NFT Assets",
  },
];

const FEATURES = [
  { icon: Layers,   title: "L2 Gaming Chain",        desc: "Purpose-built EVM Layer 2. Sub-cent fees, fast finality, gaming-specific precompiles for batch minting and on-chain royalties.", color: "var(--green)",  tag: "Chain"   },
  { icon: BarChart2,title: "Economy Simulation",     desc: "Model your token economy before launch. Monte Carlo simulations stress-test for whale attacks, farming, and inflation spirals.", color: "var(--orange)", tag: "AI"      },
  { icon: Wallet,   title: "Gasless Wallet SDK",     desc: "Players log in with email or Google. No seed phrase. No gas. Account abstraction built-in — invisible Web3 for your audience.",   color: "var(--green)",  tag: "SDK"     },
  { icon: Globe,    title: "Multi-Chain Bridge",     desc: "Move assets across Ethereum, Solana, Polygon, Arbitrum, Base and more. One integration covers all chains.",                         color: "var(--purple)", tag: "Bridge"  },
  { icon: Shield,   title: "NFT Provenance",         desc: "Cryptographic asset history from mint through every trade. Verifiable rarity, tamper-proof ownership, automatic royalty splits.",    color: "var(--orange)", tag: "NFT"     },
  { icon: Code2,    title: "Marketplace APIs",       desc: "REST + WebSocket APIs to power in-game trading. Real-time floor pricing, smart order routing, royalty settlement built-in.",         color: "var(--purple)", tag: "API"     },
];

const ROADMAP = [
  { q: "Q3 2025", title: "Foundation",      items: ["Core protocol architecture", "Smart contract audit", "Testnet deployment", "SDK alpha release"],                  done: true  },
  { q: "Q4 2025", title: "Builder Phase",   items: ["Economy Engine beta", "Wallet SDK v1", "10 studio design partners", "Security audit complete"],                   done: true  },
  { q: "Q1 2026", title: "Mainnet Launch",  items: ["MetaLedger Chain mainnet", "Bridge infrastructure live", "First game integrations", "Public SDK launch"],          done: false, active: true },
  { q: "Q2 2026", title: "Ecosystem Scale", items: ["Marketplace APIs", "50+ studio target", "MLL token launch", "DAO governance framework"],                           done: false },
];

const PILLARS = [
  { icon: Zap,    label: "Built for Speed",   sub: "Sub-100ms finality"     },
  { icon: Lock,   label: "Audited Security",  sub: "Multi-firm smart contract audits" },
  { icon: Users,  label: "Studio-First",      sub: "Designed around developers"       },
  { icon: Coins,  label: "Fair Economics",    sub: "Sustainable tokenomics by design"  },
];

/* ── Unsplash hero image — dark cyberpunk / gaming city ── */
const HERO_IMG = "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=1600&q=80";
const CHAIN_IMG = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80";
const SDK_IMG   = "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=900&q=80";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--tx)" }}>

      {/* ══════════════════════════════════════
          HERO — full-bleed dark cinematic
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>

        {/* Background image + dark overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(8,8,10,0.95) 40%, rgba(8,8,10,0.70) 100%)" }} />
        {/* Green glow top-left */}
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 65%)", zIndex: 1, pointerEvents: "none" }} />
        {/* Grid overlay */}
        <div className="tex-grid" style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.35, pointerEvents: "none" }} />

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", paddingBottom: "7rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} style={{ maxWidth: 820 }}>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 14px", borderRadius: 100,
              border: "1px solid var(--green-bd)", background: "var(--green-bg)",
              fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--green)",
              marginBottom: "2rem",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "pdot 2s ease-in-out infinite", display: "inline-block" }} />
              Now Building · Mainnet Coming Q1 2026
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.6rem, 7.5vw, 7.5rem)",
              fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: "2rem",
            }}>
              Own your<br />game's<br /><em style={{ fontStyle: "italic", color: "var(--green)" }}>economy</em>
            </h1>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.75,
              color: "rgba(240,238,248,0.65)", maxWidth: 540, marginBottom: "3rem", fontWeight: 400,
            }}>
              MetaLedgerLabs is building the protocol layer for Web3 game economies — cross-chain settlement, NFT provenance, and tokenomics infrastructure for the games of tomorrow.
            </p>

            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginBottom: "4rem" }}>
              <Link to="/schedule" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "0.8rem 2rem", borderRadius: 100,
                background: "var(--green)", color: "#000",
                fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 32px var(--green-glow), 0 0 80px rgba(0,230,118,0.08)",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--green2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--green)"; e.currentTarget.style.transform = "none"; }}
              >
                Join the Waitlist <ArrowUpRight size={15} />
              </Link>
              <Link to="/about" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "0.8rem 2rem", borderRadius: 100,
                border: "1px solid rgba(240,238,248,0.15)", color: "rgba(240,238,248,0.75)",
                fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 500,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--green-bd)"; e.currentTarget.style.color = "var(--green)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,238,248,0.15)"; e.currentTarget.style.color = "rgba(240,238,248,0.75)"; }}
              >
                Our Vision
              </Link>
            </div>

            {/* Pillars */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {PILLARS.map(p => (
                <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--green-bg)", border: "1px solid var(--green-bd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <p.icon size={14} style={{ color: "var(--green)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 600, color: "rgba(240,238,248,0.85)" }}>{p.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "rgba(240,238,248,0.35)", letterSpacing: "0.04em" }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to top, var(--bg), transparent)", zIndex: 2 }} />
      </section>

      {/* ══════════════════════════════════════
          GAME SHOWCASE STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--bg)", paddingTop: 0, paddingBottom: "5rem" }}>
        <div className="wrap">
          <R style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="t-eyebrow" style={{ marginBottom: "0.6rem" }}>For game studios</div>
              <h2 className="t-h2" style={{ maxWidth: 480 }}>Infrastructure for every genre</h2>
            </div>
            <Link to="/products/blockchain" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--green)", fontWeight: 600, textDecoration: "none" }}>
              Explore the protocol <ChevronRight size={15} />
            </Link>
          </R>

          <div className="grid-3">
            {GAME_IMAGES.map((g, i) => (
              <R key={g.title} i={i}>
                <div style={{
                  position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden",
                  aspectRatio: "16/10", cursor: "default",
                  border: "1px solid var(--border)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px var(--green-bd)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <img src={g.url} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.7) saturate(0.85)" }} />
                  {/* Overlay gradient */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,10,0.85) 0%, transparent 60%)" }} />
                  {/* Content */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, color: "#fff", marginBottom: "0.35rem" }}>{g.title}</div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)" }}>{g.tag}</span>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WE'RE BUILDING — Feature grid
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap sect">
          <R style={{ marginBottom: "4rem" }}>
            <div className="t-eyebrow" style={{ marginBottom: "0.75rem" }}>The protocol stack</div>
            <h2 className="t-h2" style={{ maxWidth: 600 }}>Everything a game needs.<br />Nothing it doesn't.</h2>
          </R>

          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <R key={f.title} i={i}>
                <div style={{
                  background: "var(--bg3)", border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)", padding: "1.75rem",
                  height: "100%", display: "flex", flexDirection: "column",
                  transition: "border-color 0.2s, transform 0.2s",
                  position: "relative", overflow: "hidden",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${f.color}35`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
                >
                  {/* Top accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${f.color}50, transparent)` }} />

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${f.color}10`, border: `1px solid ${f.color}25`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <f.icon size={18} style={{ color: f.color }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: f.color, background: `${f.color}10`, border: `1px solid ${f.color}20`, padding: "2px 7px", borderRadius: 4 }}>{f.tag}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "var(--tx)", marginBottom: "0.6rem" }}>{f.title}</div>
                  <p className="t-small" style={{ flex: 1, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISUAL SPLIT — Chain + SDK visuals
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <div className="wrap sect">

          {/* Row 1 — Chain */}
          <R style={{ marginBottom: "5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="split-grid">
              <style>{`@media(max-width:768px){.split-grid{grid-template-columns:1fr!important}}`}</style>
              <div>
                <div className="t-eyebrow" style={{ marginBottom: "1rem" }}>MetaLedger Chain</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.08, color: "var(--tx)", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  A blockchain built<br />for <em style={{ fontStyle: "italic", color: "var(--green)" }}>games first</em>
                </h2>
                <p className="t-body" style={{ marginBottom: "1.5rem", maxWidth: 460 }}>
                  General-purpose chains weren't designed for game economics. MetaLedger Chain is — with custom precompiles for batch NFT minting, dynamic on-chain metadata, and royalty enforcement baked into consensus.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {[
                    { v: "Sub-100ms", l: "transaction finality" },
                    { v: "$0.001",    l: "average transaction fee" },
                    { v: "50K TPS",   l: "peak throughput capacity" },
                    { v: "EVM",       l: "fully compatible — no new tooling" },
                  ].map(item => (
                    <div key={item.l} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 600, color: "var(--green)", minWidth: 80 }}>{item.v}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--tx3)" }}>{item.l}</div>
                    </div>
                  ))}
                </div>
                <Link to="/products/blockchain" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 600, color: "var(--green)", textDecoration: "none" }}>
                  Chain Architecture <ArrowUpRight size={14} />
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <img src={CHAIN_IMG} alt="Blockchain gaming" style={{ width: "100%", borderRadius: "var(--r-lg)", border: "1px solid var(--border)", display: "block", filter: "brightness(0.75) saturate(0.9)" }} className="img-glow" />
                {/* Floating stat */}
                <div style={{
                  position: "absolute", bottom: "1.5rem", left: "1.5rem",
                  background: "rgba(8,8,10,0.9)", border: "1px solid var(--green-bd)",
                  borderRadius: 10, padding: "0.75rem 1rem", backdropFilter: "blur(12px)",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 500, color: "var(--green)", lineHeight: 1 }}>50K</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", color: "var(--tx3)", marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>TPS Capacity</div>
                </div>
              </div>
            </div>
          </R>

          {/* Row 2 — Wallet */}
          <R>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="split-grid">
              <div style={{ order: 2 }}>
                <div className="t-eyebrow" style={{ marginBottom: "1rem" }}>Wallet SDK</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.08, color: "var(--tx)", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  Onboard players,<br /><em style={{ fontStyle: "italic", color: "var(--orange)" }}>not crypto users</em>
                </h2>
                <p className="t-body" style={{ marginBottom: "1.5rem", maxWidth: 460 }}>
                  The biggest barrier to Web3 games is the wallet. Our AA-powered SDK lets players sign up with email or Google, auto-creates a smart wallet, and sponsors gas — all invisible to the player.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  {["Email Login","Google OAuth","Passkey","No Seed Phrase","Sponsored Gas","Session Keys"].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <Link to="/products/ai" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 600, color: "var(--orange)", textDecoration: "none" }}>
                  Wallet SDK Docs <ArrowUpRight size={14} />
                </Link>
              </div>
              <div style={{ position: "relative", order: 1 }}>
                <img src={SDK_IMG} alt="Mobile gaming wallet" style={{ width: "100%", borderRadius: "var(--r-lg)", border: "1px solid var(--border)", display: "block", filter: "brightness(0.7) saturate(0.8)" }} />
                <div style={{
                  position: "absolute", top: "1.5rem", right: "1.5rem",
                  background: "rgba(8,8,10,0.9)", border: "1px solid var(--orange-bd)",
                  borderRadius: 10, padding: "0.75rem 1rem", backdropFilter: "blur(12px)",
                }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, color: "var(--orange)", marginBottom: 2 }}>Avg. Onboard Time</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", color: "var(--tx)", lineHeight: 1 }}>4hrs</div>
                </div>
              </div>
            </div>
          </R>

        </div>
      </section>

      {/* ══════════════════════════════════════
          ROADMAP
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap sect">
          <R style={{ marginBottom: "4rem", textAlign: "center" }}>
            <div className="t-eyebrow" style={{ marginBottom: "0.75rem" }}>Where we are</div>
            <h2 className="t-h2">Building in public</h2>
            <p className="t-body" style={{ maxWidth: 480, margin: "1rem auto 0" }}>We're pre-launch — and completely transparent about it. Here's exactly what's been built and what's coming.</p>
          </R>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }} className="rm-grid">
            <style>{`@media(max-width:768px){.rm-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.rm-grid{grid-template-columns:1fr!important}}`}</style>
            {ROADMAP.map((phase, i) => (
              <R key={phase.q} i={i}>
                <div style={{
                  background: phase.active ? "var(--bg3)" : "var(--bg2)",
                  padding: "2rem",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Active glow */}
                  {phase.active && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--green)" }} />}

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: phase.active ? "var(--green)" : phase.done ? "var(--tx3)" : "var(--tx3)" }}>
                      {phase.q}
                    </span>
                    {phase.done   && <span style={{ fontSize: "0.6rem", padding: "1px 6px", borderRadius: 4, background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)", color: "var(--green)", fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>}
                    {phase.active && <span style={{ fontSize: "0.6rem", padding: "1px 6px", borderRadius: 4, background: "rgba(0,230,118,0.12)", border: "1px solid var(--green-bd)", color: "var(--green)", fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.08em", animation: "pdot 2s ease-in-out infinite" }}>ACTIVE</span>}
                  </div>

                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, color: phase.active ? "var(--tx)" : "var(--tx2)", marginBottom: "1rem" }}>{phase.title}</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {phase.items.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: phase.done ? "var(--green)" : phase.active ? "var(--green)" : "var(--tx3)", flexShrink: 0, marginTop: 5, opacity: phase.done ? 1 : phase.active ? 0.7 : 0.35 }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: phase.done ? "var(--tx2)" : phase.active ? "var(--tx2)" : "var(--tx3)", lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — Join the waitlist
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,230,118,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0 }} className="tex-grid" />

        <div className="wrap sect" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <R>
            <div className="t-eyebrow" style={{ marginBottom: "1.25rem" }}>Early Access</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
              fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.018em",
              color: "var(--tx)", marginBottom: "1.5rem",
            }}>
              Be first to<br /><em style={{ fontStyle: "italic", color: "var(--green)" }}>build on MetaLedger</em>
            </h2>
            <p className="t-body-lg" style={{ maxWidth: 500, margin: "0 auto 2.5rem" }}>
              We're onboarding a select group of game studios for early access ahead of mainnet launch. Get priority access, direct engineering support, and influence the roadmap.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/schedule" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "0.9rem 2.25rem", borderRadius: 100,
                background: "var(--green)", color: "#000",
                fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 700,
                textDecoration: "none", boxShadow: "0 0 40px var(--green-glow)",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--green2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--green)"; e.currentTarget.style.transform = "none"; }}
              >
                Apply for Early Access <ArrowUpRight size={15} />
              </Link>
              <Link to="/blog" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "0.9rem 2.25rem", borderRadius: 100,
                border: "1px solid var(--border2)", color: "var(--tx2)",
                fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 500,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--green-bd)"; e.currentTarget.style.color = "var(--green)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--tx2)"; }}
              >
                Read Our Research
              </Link>
            </div>
          </R>
        </div>
      </section>

    </div>
  );
}
