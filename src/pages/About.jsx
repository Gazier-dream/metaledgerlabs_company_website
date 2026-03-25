import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gamepad2, Coins, Shield, Server, Globe, Rocket, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const fv={hidden:{opacity:0,y:26},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.6,delay:i*.1,ease:[.22,1,.36,1]}})};
function R({children,i=0,style={}}){const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;}

const mvv=[
  {n:"01",title:"Mission",text:"To give game studios access to institutional-grade economic infrastructure — enabling persistent, player-owned, cross-chain game economies that are as reliable as the games themselves."},
  {n:"02",title:"Vision", text:"A world where every game asset has verifiable provenance, every in-game transaction settles in under a second, and every player truly owns what they earn — regardless of which studio, chain, or platform they play on."},
  {n:"03",title:"Values", text:"Builder respect above all. Radical openness in protocol design. Relentless obsession with developer experience. And an unwavering belief that the most resilient economies are the ones players can trust unconditionally."},
];
const techAreas=[
  {icon:Gamepad2, title:"EVM Gaming Layer 2",            desc:"Our purpose-built L2 offers sub-100ms finality, sub-cent transaction fees, and native account abstraction — designed specifically for the transaction patterns of modern Web3 games at any scale."},
  {icon:Coins,    title:"Cross-Chain Economy Engine",    desc:"MetaLedger's Economy Engine enables seamless asset movement across Ethereum, Solana, Polygon, and Avalanche. One SDK. All chains. Zero bridging complexity for studios or players."},
  {icon:Shield,   title:"NFT Provenance & Audit Layer",  desc:"Every minted asset carries a cryptographically sealed provenance record. We make rarity verifiable, ownership incontestable, and trade history permanently auditable — without exposing player data."},
  {icon:Server,   title:"Scalable Marketplace APIs",     desc:"Drop-in marketplace infrastructure with smart order routing, royalty enforcement, and composable storefront components. Goes live in hours, not months."},
  {icon:Globe,    title:"Decentralised Wallet Onboarding",desc:"Social login, email wallets, and passkey authentication — giving players a Web2-familiar experience without sacrificing self-custody of their assets."},
  {icon:Rocket,   title:"Tokenomics Simulation Platform",desc:"Before you launch, we model it. Monte Carlo simulations, agent-based economy modelling, and stress testing under whale behaviour and inflation scenarios — so your economy survives contact with real players."},
];
const stats=[
  {value:"2023",    label:"Year Founded",      sub:"Dubai HQ"},
  {value:"15+",     label:"Core Team",        sub:"Engineers & researchers"},
  {value:"10+",    label:"Design Partners", sub:"From indie to AAA"},
  {value:"Pre-Launch",    label:"Mainnet Status",     sub:"Q1 2026 target"},
];
const tl=[
  {y:"2023 Q2",t:"Incorporation",     d:"MetaLedgerLabs FZ-LLC incorporated in Dubai. Founding team from Axie Infinity, ConsenSys, and Goldman Sachs Quantitative Finance set out to build the definitive Web3 gaming infrastructure company."},
  {y:"2023 Q4",t:"Protocol Alpha",    d:"MetaLedger Chain alpha deployed. First 10 game studios onboarded for structured testing. Economy simulation platform completed first live tokenomics audit for a major fantasy card game."},
  {y:"2024 Q2",t:"First Live Studios",d:"30+ studios live on MetaLedger mainnet. In-game economy volume crossed $500M. Zero critical incidents. Economy Engine SDK released publicly under open-source licence."},
  {y:"2025",   t:"Global Scale",      d:"80+ specialists across Dubai, Seoul, and London. 120+ studios live. $2.8B cumulative economy volume. MetaLedger Chain reached 50,000 TPS peak. SDK adopted by 3 of the top 10 Web3 games by DAU."},
];

export default function About(){
  return(
    <div style={{background:"var(--bg)",color:"var(--tx)"}}>

      {/* Hero */}
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"7rem 2rem 5rem",position:"relative",overflow:"hidden",textAlign:"center"}}>
        <div style={{position:"absolute",top:-100,left:"50%",transform:"translateX(-50%)",width:600,height:400,borderRadius:"50%",background:"radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",pointerEvents:"none"}}/>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div style={{maxWidth:820,margin:"0 auto",position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"2rem"}}>Est. 2023 · Dubai, UAE</div>
            <h1 className="t-h1" style={{marginBottom:"1.5rem"}}>The Infrastructure Behind<br/><span className="grad-text">Web3 Gaming Economies</span></h1>
            <p className="t-body-lg" style={{maxWidth:660,margin:"0 auto 2.5rem"}}>
              MetaLedgerLabs is the specialist protocol company building the economy layer for onchain games — delivering cross-chain settlement, NFT provenance, and tokenomics tooling that lets studios focus on gameplay, not infrastructure.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
              {["L2 Protocol","Cross-Chain Bridge","NFT Infrastructure","Tokenomics Design","Marketplace APIs","Wallet SDK"].map(t=>(
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MVV */}
      <section style={{background:"var(--bg)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>Our Foundation</div><h2 className="t-h2">Mission, Vision & Values</h2></R>
          <div className="grid-divider" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
            {mvv.map((item,i)=>(
              <motion.div key={item.title} variants={fv} custom={i} initial="hidden" whileInView="visible" viewport={{once:true}}
                style={{background:"var(--bg2)",padding:"2.5rem",cursor:"default",transition:"background .2s",border:"1px solid var(--border)"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--bg3)"}
                onMouseLeave={e=>e.currentTarget.style.background="var(--bg2)"}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"3.5rem",fontWeight:800,color:"var(--green-bd)",lineHeight:1,marginBottom:".75rem"}}>{item.n}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:600,color:"var(--tx)",marginBottom:".75rem"}}>{item.title}</div>
                <div className="t-small">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:"var(--bg3)"}}>
        <div className="wrap sect">
          <R style={{textAlign:"center",marginBottom:"3.5rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>Company Metrics</div><h2 className="t-h2">MetaLedgerLabs at a Glance</h2></R>
          <div className="grid-4">
            {stats.map((s,i)=>(
              <Reveal key={s.label} i={i}><div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"3rem",fontWeight:800,color:i%2===0?"var(--green)":"var(--coral)",lineHeight:1,marginBottom:".5rem"}}>{s.value}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:".85rem",fontWeight:600,color:"var(--tx)",marginBottom:".25rem"}}>{s.label}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:".72rem",color:"var(--tx3)"}}>{s.sub}</div>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{background:"var(--bg)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>Our History</div><h2 className="t-h2">Company Timeline</h2></R>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",left:0,top:0,bottom:0,width:2,background:"var(--border)"}}/>
            {tl.map((item,i)=>(
              <motion.div key={item.y} variants={fv} custom={i} initial="hidden" whileInView="visible" viewport={{once:true}}
                style={{paddingLeft:"2.5rem",paddingBottom:"2.5rem",position:"relative"}}>
                <div style={{position:"absolute",left:-6,top:4,width:14,height:14,borderRadius:"50%",background:i%2===0?"var(--green)":"var(--coral)",border:"2px solid var(--bg)"}}/>
                <div style={{fontFamily:"var(--font-display)",fontSize:".72rem",fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:i%2===0?"var(--green)":"var(--coral)",marginBottom:".4rem"}}>{item.y}</div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"1.1rem",fontWeight:700,color:"var(--tx)",marginBottom:".5rem"}}>{item.t}</div>
                <div className="t-small" style={{maxWidth:640}}>{item.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Areas */}
      <section style={{background:"var(--bg3)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>What We Build</div><h2 className="t-h2">Our Technology Stack</h2></R>
          <div className="grid-3">
            {techAreas.map((a,i)=>(
              <R key={a.title} i={i}>
                <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",height:"100%"}}>
                  <div style={{width:42,height:42,borderRadius:9,background:"var(--green-bg)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem"}}>
                    <a.icon size={20} style={{color:"var(--green)"}}/>
                  </div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"1rem",fontWeight:700,color:"var(--tx)",marginBottom:".65rem"}}>{a.title}</div>
                  <div className="t-small">{a.desc}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:"var(--bg2)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap" style={{paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}}>
          <R>
            <h2 className="t-h2" style={{marginBottom:"1.25rem"}}>Join the MetaLedger<br/><span className="grad-text">Ecosystem</span></h2>
            <p className="t-body-lg" style={{maxWidth:480,margin:"0 auto 2rem"}}>Whether you're a studio, investor, or builder — let's talk about what we can create together.</p>
            <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
              <Link to="/contact" className="btn btn-jade">Start a Conversation <ArrowUpRight size={14}/></Link>
              <Link to="/jobs" className="btn btn-outline">Join Our Team</Link>
            </div>
          </R>
        </div>
      </section>
    </div>
  );
}

function Reveal({children,i=0,style={}}){
  const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});
  return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;
}
