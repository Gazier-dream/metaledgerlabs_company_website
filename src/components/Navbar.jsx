import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/theme/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X,
  Layers, BarChart2, Coins, Activity,
  ArrowUpRight, ChevronDown,
} from "lucide-react";

const PRODUCTS = [
  { to: "/products/blockchain", icon: Layers,   label: "MetaLedger Chain",  desc: "EVM L2 · 50K TPS · sub-cent fees",       tag: "L2",   col: "#0D9E7E" },
  { to: "/products/ai",         icon: BarChart2, label: "Economy Engine",    desc: "Monte Carlo tokenomics simulation",       tag: "AI",   col: "#E8470A" },
  { to: "/products/consulting", icon: Coins,     label: "Studio Consulting", desc: "Integration & tokenomics advisory",       tag: null,   col: "#0D9E7E" },
  { to: "/attestation",         icon: Activity,  label: "Chain Explorer",    desc: "Live on-chain transaction stream",        tag: "Live", col: "#E8470A" },
];

const NAV_LINKS = [
  { to: "/about",     label: "About"    },
  { to: "/blog",      label: "Insights" },
  { to: "/audit-log", label: "Explorer" },
  { to: "/jobs",      label: "Careers"  },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [megaOpen, setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const megaRef = useRef(null);
  const loc = useLocation();

  useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [loc]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);


  return (
    <>
      {/* ════════════════════════════════════════════
          TOP BAR
      ════════════════════════════════════════════ */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: "var(--nav-h)",
        background: scrolled
          ? "rgba(8,8,10,0.97)"
          : "rgba(8,8,10,0.85)",
        backdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(0,230,118,0.18)" : "1px solid transparent",
        boxShadow: scrolled ? "0 0 40px rgba(0,230,118,0.05), 0 1px 0 rgba(0,230,118,0.1)" : "none",
        transition: "background 0.35s, border-color 0.35s",
      }}>
        <div style={{
          maxWidth: 1300, margin: "0 auto", padding: "0 2rem",
          height: "100%", display: "flex", alignItems: "center", gap: "1.5rem",
        }}>

          {/* ── LOGO ── */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.55rem", textDecoration: "none", flexShrink: 0, marginRight: "0.5rem" }}>
            <img
              src="/logo.png"
              alt=""
              width="44"
              height="44"
              style={{ display: "block", flexShrink: 0, objectFit: "contain" }}
            />
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.97rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--tx)",
              whiteSpace: "nowrap",
            }}>
              Meta<span style={{ color: "var(--green)" }}>Ledger</span><span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--flame)",
              }}>Labs</span>
            </span>
          </Link>

          {/* ── DESKTOP CENTER NAV ── */}
          <nav
            className="nb-desk"
            style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1 }}
          >
            {/* Products dropdown */}
            <div ref={megaRef} style={{ position: "relative" }}>
              <button
                onClick={() => setMegaOpen(o => !o)}
                style={{
                  display: "flex", alignItems: "center", gap: 3,
                  padding: "0.4rem 0.85rem", borderRadius: 8, border: "none",
                  background: megaOpen ? "var(--bg3)" : "transparent",
                  color: megaOpen ? "var(--tx)" : "var(--tx2)",
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                  cursor: "pointer", transition: "all 0.14s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--bg3)"; e.currentTarget.style.color = "var(--tx)"; }}
                onMouseLeave={e => { if (!megaOpen) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--tx2)"; }}}
              >
                Products
                <ChevronDown size={12} style={{ color: "var(--tx3)", transition: "transform 0.18s", transform: megaOpen ? "rotate(-180deg)" : "rotate(0deg)" }} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 480,
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: 16,
                      boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                      overflow: "hidden",
                      zIndex: 400,
                    }}
                  >
                    <div style={{ padding: "0.5rem" }}>
                      {PRODUCTS.map((p, i) => (
                        <Link
                          key={p.to} to={p.to}
                          onClick={() => setMegaOpen(false)}
                          style={{
                            display: "flex", alignItems: "center", gap: "0.85rem",
                            padding: "0.7rem 0.85rem",
                            borderRadius: 10,
                            textDecoration: "none",
                            transition: "background 0.12s",
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "var(--bg3)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <div style={{
                            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                            background: `${p.col}14`,
                            border: `1px solid ${p.col}28`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <p.icon size={16} style={{ color: p.col }} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: "var(--tx)" }}>
                                {p.label}
                              </span>
                              {p.tag && (
                                <span style={{
                                  fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700,
                                  letterSpacing: "0.08em", textTransform: "uppercase",
                                  color: p.col, background: `${p.col}12`,
                                  border: `1px solid ${p.col}28`,
                                  padding: "1px 5px", borderRadius: 4,
                                }}>{p.tag}</span>
                              )}
                            </div>
                            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.76rem", color: "var(--tx3)", marginTop: 1 }}>
                              {p.desc}
                            </div>
                          </div>
                          <ArrowUpRight size={13} style={{ color: "var(--tx3)", flexShrink: 0 }} />
                        </Link>
                      ))}
                    </div>
                    {/* Bottom accent strip */}
                    <div style={{
                      borderTop: "1px solid var(--border)",
                      padding: "0.65rem 1.35rem",
                      background: "var(--bg3)",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--tx3)" }}>
                        50K TPS · 9 chains · 120+ studios live
                      </span>
                      <Link
                        to="/schedule"
                        onClick={() => setMegaOpen(false)}
                        style={{
                          fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600,
                          color: "var(--green)", textDecoration: "none", display: "flex", alignItems: "center", gap: 3,
                        }}
                      >
                        Talk to us <ArrowUpRight size={10} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard links */}
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to} to={to}
                style={({ isActive }) => ({
                  padding: "0.4rem 0.85rem",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                  color: isActive ? "var(--tx)" : "var(--tx2)",
                  background: isActive ? "var(--bg3)" : "transparent",
                  textDecoration: "none", transition: "all 0.14s",
                  whiteSpace: "nowrap",
                })}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--bg3)"; e.currentTarget.style.color = "var(--tx)"; }}
                onMouseLeave={e => { if (!e.currentTarget.dataset.active) { e.currentTarget.style.background = ""; e.currentTarget.style.color = ""; }}}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto", flexShrink: 0 }}>

            {/* Docs link */}
            <a
              href="https://docs.metaledgerlabs.com"
              target="_blank" rel="noopener noreferrer"
              className="nb-desk"
              style={{
                display: "inline-flex", alignItems: "center", gap: 3,
                padding: "0.38rem 0.85rem",
                border: "1px solid var(--border)", borderRadius: 100,
                fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 500,
                color: "var(--tx2)", textDecoration: "none", transition: "all 0.14s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--jade-bd)"; e.currentTarget.style.color = "var(--jade)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--tx2)"; }}
            >
              Docs <ArrowUpRight size={10} />
            </a>
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="nb-desk"
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "0.48rem 1.2rem",
                background: "var(--green)",
                color: "#fff",
                borderRadius: 100,
                fontFamily: "var(--font-body)", fontSize: "0.83rem", fontWeight: 600,
                textDecoration: "none", transition: "all 0.14s",
                boxShadow: "0 0 24px var(--green-glow)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--jade2)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 24px var(--jade-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--jade)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px var(--jade-glow)"; }}
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="nb-mob"
              aria-label="Menu"
              style={{
                width: 36, height: 36, borderRadius: 9, border: "1px solid var(--border)",
                display: "none", alignItems: "center", justifyContent: "center",
                background: "var(--bg3)", color: "var(--tx2)", cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU
      ════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed", inset: 0, zIndex: 190,
              background: "var(--bg)",
              display: "flex", flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* Header row */}
            <div style={{
              height: "var(--nav-h)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0 1.5rem",
              borderBottom: "1px solid var(--border)",
              flexShrink: 0,
            }}>
              <Link to="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.55rem", textDecoration: "none" }}>
                <img src="/logo.png" alt="" width="30" height="30" style={{ display: "block", objectFit: "contain" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--tx)" }}>
                  Meta<span style={{ color: "var(--green)" }}>Ledger</span><span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, color: "var(--flame)" }}>Labs</span>
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg3)", color: "var(--tx2)", cursor: "pointer" }}>
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div style={{ flex: 1, padding: "1.5rem" }}>

              {/* Products section */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--tx3)", marginBottom: "0.75rem" }}>
                  Products
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {PRODUCTS.map(p => (
                    <Link
                      key={p.to} to={p.to}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.85rem",
                        padding: "0.75rem 0.85rem", borderRadius: 10,
                        textDecoration: "none", transition: "background 0.12s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "var(--bg3)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: `${p.col}12`, border: `1px solid ${p.col}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <p.icon size={15} style={{ color: p.col }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "var(--tx)" }}>{p.label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--tx3)" }}>{p.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--border)", marginBottom: "1.5rem" }} />

              {/* Nav links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "2rem" }}>
                {NAV_LINKS.map(({ to, label }) => (
                  <Link
                    key={to} to={to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "0.75rem 0.85rem", borderRadius: 10,
                      fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 500,
                      color: "var(--tx2)", textDecoration: "none", transition: "all 0.12s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--bg3)"; e.currentTarget.style.color = "var(--tx)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--tx2)"; }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer actions */}
            <div style={{ padding: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "0.65rem", flexShrink: 0 }}>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  padding: "0.9rem", background: "var(--green)", color: "#fff",
                  borderRadius: 100, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem",
                  textDecoration: "none", boxShadow: "0 2px 14px var(--jade-glow)",
                }}
              >
                Get Started <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://docs.metaledgerlabs.com"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  padding: "0.9rem", border: "1px solid var(--border)",
                  borderRadius: 100, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem",
                  color: "var(--tx2)", textDecoration: "none",
                }}
              >
                Documentation <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nb-desk { display: flex !important; }
        .nb-mob  { display: none  !important; }
        @media (max-width: 960px) {
          .nb-desk { display: none  !important; }
          .nb-mob  { display: flex  !important; }
        }
      `}</style>
    </>
  );
}
