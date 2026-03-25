import React, { useState } from "react";
import { Layers, Users, BarChart3, Globe, PenTool, Code, Database, Gamepad2, Coins, ArrowUpRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JOBS = [
  { id:1, title:"Blockchain Protocol Engineer",  icon:Layers,   dept:"Engineering", type:"Remote", intro:"Design and maintain MetaLedger Chain's core EVM-compatible Layer 2 and cross-chain bridge infrastructure.", requirements:["Solidity/Rust expertise","L2 scaling (Optimistic/ZK)","Bridge security models"], responsibilities:["Build and audit core protocol contracts","Optimize chain throughput and finality","Design cross-chain message passing"], benefits:["Remote-first","Token allocation","Cutting-edge L2 stack"] },
  { id:2, title:"Economy Design Engineer",        icon:Coins,    dept:"Research",    type:"Remote", intro:"Build tokenomics simulation tools and design sustainable in-game economy architectures for our studio partners.", requirements:["Agent-based modelling","Game theory fundamentals","Python/R for simulation"], responsibilities:["Run pre-launch economy simulations","Advise studios on tokenomics design","Build dynamic parameter adjustment systems"], benefits:["Unique intersection of gaming & DeFi","Published research","Competitive comp"] },
  { id:3, title:"Web3 Frontend Engineer",         icon:Code,     dept:"Engineering", type:"Remote", intro:"Build the SDK UI components, developer dashboard, and player-facing wallet interfaces that studios ship to millions of players.", requirements:["React/TypeScript","ethers.js/viem","Wallet & AA experience"], responsibilities:["Build MetaLedger Wallet SDK UI","Develop studio developer dashboard","Create reusable marketplace components"], benefits:["Remote-first","Modern stack","High-impact product work"] },
  { id:4, title:"Smart Contract Security Lead",   icon:Layers,   dept:"Engineering", type:"Remote", intro:"Own the security posture of every smart contract in the MetaLedger protocol stack — audit, test, monitor, and respond.", requirements:["Smart contract auditing","Foundry/Hardhat","CTF / competitive auditing background"], responsibilities:["Audit all protocol and partner contracts","Build automated vulnerability detection","Lead bug bounty programme"], benefits:["High impact","Security-first culture","Open-source contributions"] },
  { id:5, title:"Studio Partnerships Manager",    icon:Users,    dept:"Growth",      type:"Hybrid", intro:"Own the commercial relationships with game studios — from first contact to successful integration and long-term growth.", requirements:["B2B enterprise sales or BD","Web3 or gaming industry knowledge","Strong communicator"], responsibilities:["Source and close studio partnerships","Guide studios through integration","Represent MetaLedger at industry events"], benefits:["Competitive OTE","Dubai or remote","Game industry access"] },
  { id:6, title:"Game Economy Analyst",           icon:BarChart3,dept:"Research",    type:"Remote", intro:"Track real-time health metrics of studio economies, surface insights, and recommend adjustments to keep economies sustainable.", requirements:["On-chain data analysis","SQL / Dune Analytics","Understanding of game economies"], responsibilities:["Monitor economy health dashboards","Produce studio economy reports","Develop anomaly detection models"], benefits:["Frontier problem space","Data-forward team","High autonomy"] },
  { id:7, title:"DevRel Engineer",                icon:Globe,    dept:"Engineering", type:"Remote", intro:"Be the bridge between MetaLedger's engineering team and the developer community — docs, demos, talks, and content.", requirements:["Developer empathy","Strong writing and public speaking","Building sample applications"], responsibilities:["Write developer documentation","Create integration tutorials","Speak at conferences and hackathons"], benefits:["Travel budget","Community influence","Creative freedom"] },
  { id:8, title:"UI/UX Designer",                 icon:PenTool,  dept:"Design",      type:"Remote", intro:"Design the interfaces that make Web3 gaming invisible — wallet onboarding, marketplace UX, and developer tooling.", requirements:["Figma mastery","Web3 / DeFi UX experience","Interaction design expertise"], responsibilities:["Own end-to-end design of Wallet SDK","Design developer dashboard","Build and maintain design system"], benefits:["Remote-first","Creative ownership","High-profile product"] },
  { id:9, title:"Backend Infrastructure Engineer",icon:Database, dept:"Engineering", type:"Remote", intro:"Build the APIs, indexers, and data pipelines that power MetaLedger's on-chain analytics and marketplace infrastructure.", requirements:["Node.js / Go","PostgreSQL / Redis","Blockchain indexing (The Graph / custom)"], responsibilities:["Build high-throughput on-chain indexers","Develop marketplace settlement APIs","Ensure 99.99% infrastructure uptime"], benefits:["Remote","Modern infra stack","Meaningful scale"] },
];

const DEPT_COLORS = {
  Engineering: { bg:"var(--green-bg)",  text:"var(--green)",  border:"var(--green-bd)" },
  Research:    { bg:"rgba(255,107,53,0.09)", text:"var(--coral)", border:"var(--coral-bd)" },
  Growth:      { bg:"rgba(34,197,94,0.09)", text:"#22c55e", border:"rgba(34,197,94,0.25)" },
  Design:      { bg:"rgba(251,191,36,0.09)", text:"#fbbf24", border:"rgba(251,191,36,0.25)" },
};

const fv = { hidden:{opacity:0,y:22}, visible:(i=0)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.06,ease:[.22,1,.36,1]}}) };

export default function Jobs() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const depts = ["All", ...Array.from(new Set(JOBS.map(j => j.dept)))];
  const filtered = filter === "All" ? JOBS : JOBS.filter(j => j.dept === filter);

  return (
    <div style={{ background:"var(--bg)", color:"var(--tx)", minHeight:"100vh" }}>

      {/* Hero */}
      <section style={{ background:"var(--bg2)", borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none",opacity:0.4}}/>
        <div style={{position:"absolute",top:-60,right:-40,width:340,height:340,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,53,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="wrap" style={{ position:"relative", zIndex:1, paddingTop:"5rem", paddingBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7 }}>
            <div className="t-eyebrow" style={{ marginBottom:".75rem" }}>We're Hiring</div>
            <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:"1.5rem" }}>
              <div>
                <h1 className="t-h1" style={{ marginBottom:"1rem", maxWidth:560 }}>
                  Open <span className="grad-text">Positions</span>
                </h1>
                <p className="t-body-lg" style={{ maxWidth:500 }}>
                  Help us build the economy layer for the next generation of games. Remote-first, mission-driven, and growing fast from Dubai.
                </p>
              </div>
              <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.2}}
                style={{ fontFamily:"var(--font-display)", fontSize:"clamp(4rem,7vw,7rem)", fontWeight:800, lineHeight:1, userSelect:"none",
                  WebkitTextStroke:"2px var(--green-bd)", color:"transparent" }}>
                {JOBS.length}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="wrap" style={{ paddingTop:"2.5rem", paddingBottom:"1rem" }}>
        <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
          {depts.map(d => (
            <button key={d} onClick={() => setFilter(d)} style={{
              padding:"0.42rem 1rem", borderRadius:5, border:"1.5px solid", cursor:"pointer",
              fontFamily:"var(--font-body)", fontSize:"0.8rem", fontWeight:600, transition:"all .18s",
              borderColor: filter===d ? "var(--green)" : "var(--border)",
              background: filter===d ? "var(--green-bg)" : "transparent",
              color: filter===d ? "var(--green)" : "var(--tx2)",
            }}>{d}</button>
          ))}
        </div>
      </div>

      {/* Job List */}
      <div className="wrap" style={{ paddingTop:"2rem", paddingBottom:"5rem" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          {filtered.map((job, i) => {
            const dc = DEPT_COLORS[job.dept] || DEPT_COLORS.Engineering;
            return (
              <motion.div key={job.id} variants={fv} custom={i} initial="hidden" whileInView="visible" viewport={{once:true}}
                onClick={() => navigate("/apply", { state: job })}
                style={{ background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, padding:"1.5rem 1.75rem",
                  cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between",
                  gap:"1.5rem", transition:"border-color .2s, box-shadow .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="var(--green-bd)"; e.currentTarget.style.boxShadow="var(--shadow)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1.25rem", minWidth:0 }}>
                  <div style={{ width:42, height:42, borderRadius:9, background:"var(--green-bg)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <job.icon size={18} style={{ color:"var(--green)" }}/>
                  </div>
                  <div style={{ minWidth:0 }}>
                    <div style={{ fontFamily:"var(--font-display)", fontSize:"1rem", fontWeight:700, color:"var(--tx)", marginBottom:"0.3rem" }}>{job.title}</div>
                    <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", alignItems:"center" }}>
                      <span style={{ padding:"2px 8px", borderRadius:4, background:dc.bg, border:`1px solid ${dc.border}`, fontSize:"0.65rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:dc.text }}>{job.dept}</span>
                      <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:"0.75rem", color:"var(--tx3)", fontFamily:"var(--font-body)" }}>
                        <MapPin size={11}/> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:5, color:"var(--green)", fontFamily:"var(--font-body)", fontSize:"0.82rem", fontWeight:600, flexShrink:0 }}>
                  Apply <ArrowUpRight size={14}/>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
