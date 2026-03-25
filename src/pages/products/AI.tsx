import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart2, TrendingUp, Cpu, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const fv={hidden:{opacity:0,y:22},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.08,ease:[.22,1,.36,1]}})};
function R({children,i=0,style={}}){const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;}

const features=[
  {icon:BarChart2,t:"Monte Carlo Economy Simulation",d:"10,000-run simulations modelling whale attacks, sybil farming, organic growth, and retention curves — producing a dynamic parameter set, not a static whitepaper."},
  {icon:TrendingUp,t:"Real-Time Economy Health Monitoring",d:"Live dashboards tracking emission rate, burn rate, wallet concentration, and velocity — with automated alerts when economy health scores fall below thresholds."},
  {icon:Cpu,t:"Dynamic Parameter Engine",d:"Smart contracts that read real on-chain signals and automatically adjust emission, burn, and yield parameters — keeping economies stable without manual intervention."},
  {icon:Zap,t:"Tokenomics Stress Testing",d:"Simulate black swan scenarios: exchange listing spikes, whale exit events, and competitor launches. Identify catastrophic failure modes before your players discover them."},
];

export default function AI(){
  return(
    <div style={{background:"var(--bg)",color:"var(--tx)"}}>
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"6rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-60,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,53,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"1.5rem",color:"var(--coral)",borderColor:"var(--coral-bd)",background:"var(--coral-bg)"}}><BarChart2 size={10}/> Economy Engine</div>
            <h1 className="t-h1" style={{marginBottom:"1.25rem",maxWidth:680}}>Simulate Before You <span style={{color:"var(--coral)"}}>Launch</span></h1>
            <p className="t-body-lg" style={{maxWidth:580,marginBottom:"2rem"}}>The MetaLedger Economy Engine combines agent-based modelling, on-chain data feeds, and smart contract automation to design, simulate, and maintain sustainable in-game economies.</p>
            <Link to="/schedule" className="btn btn-coral">Request an Economy Audit <ArrowUpRight size={14}/></Link>
          </motion.div>
        </div>
      </section>

      <section style={{background:"var(--bg)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem",color:"var(--coral)"}}>Economy Engine</div><h2 className="t-h2">Design. Simulate. Deploy.</h2></R>
          <div className="grid-2">
            {features.map((f,i)=>(
              <R key={f.t} i={i}>
                <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",height:"100%"}}>
                  <div style={{width:44,height:44,borderRadius:9,background:"var(--coral-bg)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem"}}>
                    <f.icon size={20} style={{color:"var(--coral)"}}/>
                  </div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"1.05rem",fontWeight:700,color:"var(--tx)",marginBottom:".6rem"}}>{f.t}</div>
                  <div className="t-small">{f.d}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"var(--bg2)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap" style={{paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}}>
          <R>
            <h2 className="t-h2" style={{marginBottom:"1.25rem"}}>Launch with a sustainable economy</h2>
            <p className="t-body-lg" style={{maxWidth:480,margin:"0 auto 2rem"}}>Our economy team works with you from initial tokenomics design through to post-launch monitoring and adjustment.</p>
            <Link to="/contact" className="btn btn-coral">Start an Economy Audit <ArrowUpRight size={14}/></Link>
          </R>
        </div>
      </section>
    </div>
  );
}
