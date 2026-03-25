import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from "lucide-react";

// Telegram icon (not in lucide — inline SVG)
const TelegramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const COL = {
  fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.26em",
  textTransform: "uppercase", color: "var(--tx3)",
  marginBottom: "1rem", fontFamily: "var(--font-body)",
};
const LNK = {
  fontSize: "0.86rem", color: "var(--tx2)", textDecoration: "none",
  fontWeight: 400, display: "block", marginBottom: "0.55rem",
  fontFamily: "var(--font-body)", transition: "color .15s",
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4.5rem 2.5rem 2.5rem" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.6fr", gap: "3rem", marginBottom: "3.5rem" }} className="ftr-grid">
          <style>{`
            @media(max-width:900px){.ftr-grid{grid-template-columns:1fr 1fr!important}}
            @media(max-width:520px){.ftr-grid{grid-template-columns:1fr!important}}
          `}</style>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1rem" }}>
              <img src="/logo.svg" alt="MetaLedgerLabs" style={{ width: 34, height: 30, objectFit: "contain", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--tx)", letterSpacing: "-0.01em" }}>
                Meta<span style={{ color: "var(--green)" }}>Ledger</span>
                <span style={{ color: "var(--flame)", fontStyle: "italic", fontFamily: "var(--font-display)", fontWeight: 400 }}>Labs</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.84rem", color: "var(--tx2)", lineHeight: 1.75, maxWidth: 260, marginBottom: "0.4rem", fontFamily: "var(--font-body)" }}>
              The protocol infrastructure powering onchain game economies worldwide.
            </p>
            <p style={{ fontSize: "0.68rem", color: "var(--tx3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>
              Dubai, UAE · est. 2023
            </p>
            <div style={{ display: "flex", gap: "0.45rem" }}>
              {[
                { href: "https://linkedin.com/company/metaledgerlabs", I: Linkedin },
                { href: "https://github.com/MetaLedgerLabs", I: Github },
                { href: "https://twitter.com/metaledgerlabs", I: Twitter },
                { href: "https://t.me/metaledgerlabs", I: TelegramIcon },
              ].map(({ href, I }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: "8px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--tx2)", textDecoration: "none", transition: "border-color .18s, color .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--jade-bd)"; e.currentTarget.style.color = "var(--jade)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--tx2)"; }}>
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div style={COL}>Products</div>
            {[
              { to: "/products/blockchain", l: "MetaLedger Chain" },
              { to: "/products/ai",         l: "Economy Engine" },
              { to: "/products/consulting", l: "Studio Consulting" },
              { to: "/attestation",         l: "Chain Explorer" },
              { to: "/demo",               l: "Live Demo" },
            ].map(({ to, l }) => (
              <Link key={to} to={to} style={LNK}
                onMouseEnter={e => e.currentTarget.style.color = "var(--jade)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--tx2)"}>{l}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={COL}>Company</div>
            {[
              { to: "/about",     l: "About Us" },
              { to: "/blog",      l: "Insights" },
              { to: "/audit-log", l: "Chain Explorer" },
              { to: "/jobs",      l: "Careers" },
              { to: "/contact",   l: "Contact" },
            ].map(({ to, l }) => (
              <Link key={to} to={to} style={LNK}
                onMouseEnter={e => e.currentTarget.style.color = "var(--jade)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--tx2)"}>{l}</Link>
            ))}
          </div>

          {/* Developers */}
          <div>
            <div style={COL}>Developers</div>
            {[
              { href: "https://docs.metaledgerlabs.com",          l: "Documentation" },
              { href: "https://docs.metaledgerlabs.com/sdk",      l: "SDK Reference" },
              { href: "https://docs.metaledgerlabs.com/api",      l: "API Reference" },
              { href: "https://github.com/MetaLedgerLabs",        l: "GitHub" },
              { href: "https://status.metaledgerlabs.com",        l: "Status Page" },
            ].map(({ href, l }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={LNK}
                onMouseEnter={e => e.currentTarget.style.color = "var(--jade)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--tx2)"}>
                {l} <ArrowUpRight size={9} style={{ display: "inline", verticalAlign: "middle" }} />
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <div style={COL}>Web3 Gaming Brief</div>
            <p style={{ fontSize: "0.82rem", color: "var(--tx2)", lineHeight: 1.7, marginBottom: "1rem", fontFamily: "var(--font-body)" }}>
              Monthly dispatches on onchain game economies, protocol design, and the MetaLedger ecosystem.
            </p>
            <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: "100px", overflow: "hidden", background: "var(--bg3)" }}>
              <input
                type="email" placeholder="your@email.com"
                style={{
                  border: "none", background: "transparent",
                  padding: "0.6rem 1rem", fontSize: "0.82rem",
                  fontFamily: "var(--font-body)", color: "var(--tx)",
                  outline: "none", flex: 1, minWidth: 0,
                }}
              />
              <button
                style={{
                  padding: "0 1rem", background: "var(--green)", color: "#fff",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", flexShrink: 0,
                  transition: "background 0.15s", borderRadius: "0 100px 100px 0",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--jade2)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--jade)"}
              >
                <Mail size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "1.75rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{ fontSize: "0.74rem", color: "var(--tx3)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} MetaLedgerLabs FZ-LLC. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ fontSize: "0.74rem", color: "var(--tx3)", textDecoration: "none", fontFamily: "var(--font-body)", transition: "color .15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--jade)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--tx3)"}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
