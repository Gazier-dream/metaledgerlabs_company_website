import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Users, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const fv={hidden:{opacity:0,y:22},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.08,ease:[.22,1,.36,1]}})};
function R({children,i=0,style={}}){const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;}

const services=[
  {t:"Integration Architecture",d:"End-to-end technical scoping for MetaLedger SDK integration — wallet onboarding, asset minting strategy, marketplace setup, and chain selection."},
  {t:"Tokenomics Design Sprint",d:"A structured 2-week engagement covering token utility design, emission modelling, burn mechanism design, and simulation-backed parameter recommendations."},
  {t:"Economy Health Review",d:"A comprehensive audit of live economy health: emission/burn balance, wallet concentration, velocity, and player retention correlation analysis."},
  {t:"Web3 Strategy Advisory",d:"Senior advisors with backgrounds in ConsenSys, Axie Infinity, and Goldman Sachs help you navigate the market, regulatory environment, and competitive landscape."},
];

export default function Consulting(){
  return(
    <div style={{background:"var(--bg)",color:"var(--tx)"}}>
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"6rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"1.5rem"}}><Lightbulb size={10}/> Studio Consulting</div>
            <h1 className="t-h1" style={{marginBottom:"1.25rem",maxWidth:680}}>Expert Guidance from <span className="grad-text">Builders Who've Done It</span></h1>
            <p className="t-body-lg" style={{maxWidth:580,marginBottom:"2rem"}}>Our consulting practice helps game studios navigate every phase of Web3 integration — from initial strategy through to post-launch economy management.</p>
            <Link to="/schedule" className="btn btn-jade">Book a Consultation <ArrowUpRight size={14}/></Link>
          </motion.div>
        </div>
      </section>
      <section style={{background:"var(--bg)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>What We Offer</div><h2 className="t-h2">Consulting Services</h2></R>
          <div className="grid-2">
            {services.map((s,i)=>(
              <R key={s.t} i={i}>
                <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:"1rem"}}>
                    <CheckCircle size={16} style={{color:"var(--green)",flexShrink:0}}/>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"1rem",fontWeight:700,color:"var(--tx)"}}>{s.t}</div>
                  </div>
                  <div className="t-small">{s.d}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>
      <section style={{background:"var(--bg2)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap" style={{paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}}>
          <R>
            <h2 className="t-h2" style={{marginBottom:"1.25rem"}}>Start with a free 30-minute scoping call</h2>
            <p className="t-body-lg" style={{maxWidth:480,margin:"0 auto 2rem"}}>No obligation. We will tell you honestly whether we can add value, and what the right engagement looks like for your studio.</p>
            <Link to="/schedule" className="btn btn-jade">Book a Free Call <ArrowUpRight size={14}/></Link>
          </R>
        </div>
      </section>
    </div>
  );
}
