import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Terminal, Shield, ArrowUpRight, Copy, Check,
  Gamepad2, Coins, Layers, BarChart2, Zap, Globe,
} from "lucide-react";

const fv = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
function Reveal({ children, i = 0, style = {} }) {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v ? "visible" : "hidden"} style={style}>{children}</motion.div>;
}

const OS_TABS = [
  { key:"mac",     label:"macOS",   icon:"⌘", command:`curl 'https://www.metaledgerlabs.com/sdk/mac/install' | sh`,    hint:"Requires macOS 11+. Run in Terminal.app or iTerm2." },
  { key:"linux",   label:"Linux",   icon:"🐧", command:`wget -qO- 'https://www.metaledgerlabs.com/sdk/linux/install' | sh`, hint:"Compatible with Ubuntu 20.04+, Debian 11+, and major distros." },
  { key:"windows", label:"Windows", icon:"⊞", command:`curl https://www.metaledgerlabs.com/sdk/windows/install | cmd`,  hint:"Run PowerShell as Administrator. Windows 10/11 supported." },
];

const OUTPUT_LINES = [
  { c:"var(--tx3)",  t:"MetaLedger SDK v2.4.1 — Economy Engine" },
  { c:"var(--tx3)",  t:"──────────────────────────────────────" },
  { c:"#22c55e",     t:"✔  Connecting to MetaLedger Chain..." },
  { c:"#22c55e",     t:"✔  Authenticating studio credentials..." },
  { c:"#22c55e",     t:"✔  Loading tokenomics simulation module..." },
  { c:"#22c55e",     t:"✔  Economy Engine ready." },
  { c:"var(--green)", t:"✔  Sandbox environment active:" },
  { c:"var(--green)", t:"→  https://demo.metaledgerlabs.com/studio/b7f2a1" },
];

const FEATURES = [
  { icon:Layers,    title:"Cross-Chain Asset Minting",   desc:"Mint NFTs once, bridge to any supported chain instantly with full provenance intact." },
  { icon:BarChart2, title:"Economy Simulation Dashboard", desc:"Watch our Monte Carlo engine model your tokenomics across 10,000 player scenarios in real time." },
  { icon:Gamepad2,  title:"Live Marketplace APIs",        desc:"Explore the drop-in marketplace infrastructure with royalty enforcement on every trade." },
  { icon:Shield,    title:"NFT Provenance Audit Trail",   desc:"Full cryptographic history of every asset — mint, transfer, burn — in a single API call." },
  { icon:Globe,     title:"Wallet SDK Demo",              desc:"Experience AA-powered social login and session keys — no seed phrase required." },
  { icon:Zap,       title:"Chain Analytics",              desc:"Real-time TPS, fee metrics, and asset velocity across MetaLedger Chain." },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); }}
      style={{ padding:"0.4rem 0.75rem", background:"var(--green-bg)", border:"1px solid var(--green-bd)", borderRadius:5, color:"var(--green)", cursor:"pointer", display:"flex", alignItems:"center", gap:5, fontFamily:"var(--font-body)", fontSize:"0.75rem", fontWeight:600, transition:"background .15s", whiteSpace:"nowrap" }}>
      {copied ? <><Check size={12}/>Copied!</> : <><Copy size={12}/>Copy</>}
    </button>
  );
}

export default function Demo() {
  const [tab, setTab] = useState("mac");
  const current = OS_TABS.find(t => t.key === tab);

  return (
    <div style={{ background:"var(--bg)", color:"var(--tx)", minHeight:"100vh" }}>

      {/* Hero */}
      <section style={{ background:"var(--bg2)", borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{position:"absolute",top:-80,right:-60,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",pointerEvents:"none"}}/>
        <div className="tex-grid" style={{ position:"absolute", inset:0, pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:1, paddingTop:"5rem", paddingBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7 }}>
            <div className="badge" style={{ marginBottom:"1.5rem" }}>
              <span className="attested-dot"/>
              Sandboxed Environment · No Wallet Required
            </div>
            <h1 className="t-h1" style={{ marginBottom:"1rem", maxWidth:660 }}>
              Explore the<br/><span className="grad-text">MetaLedger Platform</span>
            </h1>
            <p className="t-body-lg" style={{ maxWidth:520, marginBottom:"2rem" }}>
              A fully interactive sandbox — mint assets, simulate economies, explore cross-chain bridging, and test the wallet SDK. No setup, no wallet, no gas.
            </p>
            <div style={{ display:"flex", gap:"0.85rem", flexWrap:"wrap" }}>
              <a href="https://demo.metaledgerlabs.com" target="_blank" rel="noopener noreferrer" className="btn btn-jade">
                Open Live Demo <ArrowUpRight size={14}/>
              </a>
              <a href="https://docs.metaledgerlabs.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Read the Docs <ArrowUpRight size={14}/>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDK Install */}
      <div className="wrap" style={{ paddingTop:"4rem", paddingBottom:"2rem" }}>
        <Reveal>
          <div className="t-eyebrow" style={{ marginBottom:".75rem" }}>SDK Quick Start</div>
          <h2 className="t-h2" style={{ marginBottom:"2rem", maxWidth:540 }}>Up and running in 90 seconds</h2>
        </Reveal>

        <Reveal i={1}>
          <div style={{ background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", maxWidth:760 }}>
            {/* Tab bar */}
            <div style={{ display:"flex", borderBottom:"1px solid var(--border)", background:"var(--bg3)" }}>
              {OS_TABS.map(t => (
                <button key={t.key} onClick={() => setTab(t.key)} style={{
                  padding:"0.65rem 1.1rem", border:"none", background: tab === t.key ? "var(--bg2)" : "transparent",
                  color: tab === t.key ? "var(--tx)" : "var(--tx3)", cursor:"pointer",
                  fontFamily:"var(--font-body)", fontSize:"0.82rem", fontWeight:600,
                  borderBottom: tab === t.key ? "2px solid var(--green)" : "2px solid transparent",
                  transition:"color .15s, background .15s", display:"flex", alignItems:"center", gap:6,
                }}>
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>
            {/* Command */}
            <div style={{ padding:"1rem 1.25rem", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
              <code style={{ fontFamily:"var(--font-mono)", fontSize:"0.82rem", color:"var(--green)", flex:1, wordBreak:"break-all" }}>
                {current.command}
              </code>
              <CopyButton text={current.command}/>
            </div>
            <div style={{ padding:"0 1.25rem 0.75rem", fontFamily:"var(--font-body)", fontSize:"0.72rem", color:"var(--tx3)" }}>
              {current.hint}
            </div>
          </div>
        </Reveal>

        {/* Terminal */}
        <Reveal i={2} style={{ marginTop:"1.5rem" }}>
          <div style={{ background:"var(--bg)", border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", maxWidth:760 }}>
            <div style={{ padding:"0.6rem 1rem", background:"var(--bg2)", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", gap:6 }}>
                {["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}
              </div>
              <div style={{ fontFamily:"var(--font-mono)", fontSize:".65rem", color:"var(--tx3)", letterSpacing:".1em" }}>metaledgerlabs — economy-sdk</div>
              <span className="status-attested"><span className="attested-dot" style={{width:5,height:5}}/>Live</span>
            </div>
            <div style={{ padding:"1.25rem", fontFamily:"var(--font-mono)", fontSize:"0.78rem", lineHeight:1.9 }}>
              {OUTPUT_LINES.map((l, i) => (
                <motion.div key={i} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: 0.3 + i * 0.18 }} style={{ color: l.c }}>
                  {l.t}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Features grid */}
      <div className="wrap" style={{ paddingTop:"3rem", paddingBottom:"5rem" }}>
        <Reveal style={{ marginBottom:"2.5rem" }}>
          <div className="t-eyebrow" style={{ marginBottom:".75rem" }}>What's in the Sandbox</div>
          <h2 className="t-h2">Everything you need to evaluate MetaLedger</h2>
        </Reveal>
        <div className="grid-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} i={i}>
              <div style={{ background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, padding:"1.75rem", height:"100%", transition:"border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor="var(--green-bd)"}
                onMouseLeave={e => e.currentTarget.style.borderColor="var(--border)"}>
                <div style={{ width:40, height:40, borderRadius:8, background:"var(--green-bg)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1rem" }}>
                  <f.icon size={18} style={{ color:"var(--green)" }}/>
                </div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"0.95rem", fontWeight:700, color:"var(--tx)", marginBottom:".6rem" }}>{f.title}</div>
                <div className="t-small">{f.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Strip */}
        <Reveal style={{ marginTop:"3.5rem" }}>
          <div style={{ background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:12, padding:"2.5rem", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1.5rem" }}>
            <div style={{ maxWidth:480 }}>
              <div style={{ fontFamily:"var(--font-display)", fontSize:"1.3rem", fontWeight:700, color:"var(--tx)", marginBottom:".5rem" }}>
                Ready to integrate MetaLedger into your studio?
              </div>
              <p className="t-small">Our integration team responds within one business day. Most studios are live within 48 hours.</p>
            </div>
            <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
              <Link to="/schedule" className="btn btn-jade">Schedule a Call <ArrowUpRight size={14}/></Link>
              <Link to="/contact" className="btn btn-outline">Send an Enquiry</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
