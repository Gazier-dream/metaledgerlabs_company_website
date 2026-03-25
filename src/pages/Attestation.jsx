import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AttestationConsole from "@/components/AttestationConsole";
import { ShieldCheck, Gamepad2, Coins, Globe } from "lucide-react";

const fv={hidden:{opacity:0,y:22},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.1,ease:[.22,1,.36,1]}})};
function R({children,i=0,style={}}){const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;}

const stats=[
  {icon:Gamepad2, label:"Transactions Today",   val:"1,847,392",  sub:"Across all integrated studios"},
  {icon:Coins,    label:"Assets Minted Today",  val:"28,440",      sub:"NFTs and fungibles combined"},
  {icon:Globe,    label:"Active Sessions",       val:"14,220",      sub:"Concurrent player sessions"},
  {icon:ShieldCheck,label:"Chain Health",        val:"99.98%",      sub:"All nodes operational"},
];

export default function Attestation(){
  return(
    <div style={{background:"var(--bg)",color:"var(--tx)",minHeight:"100vh"}}>
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"5rem 2rem 4rem",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,left:"50%",transform:"translateX(-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(168,85,247,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,textAlign:"center"}}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"1.5rem"}}>
              <span className="attested-dot"/>
              Live Protocol Explorer · Read-Only
            </div>
            <h1 className="t-h1" style={{marginBottom:"1rem",maxWidth:640,margin:"0 auto 1rem"}}>
              MetaLedger <span className="grad-text">Chain Explorer</span>
            </h1>
            <p className="t-body-lg" style={{maxWidth:520,margin:"0 auto"}}>
              Real-time view of transactions, asset mints, and economy health across all studios integrated on MetaLedger Chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="wrap" style={{paddingTop:"3rem"}}>
        <div className="grid-4">
          {stats.map((s,i)=>(
            <R key={s.label} i={i}>
              <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"1.75rem",textAlign:"center"}}>
                <div style={{width:40,height:40,borderRadius:8,background:"var(--green-bg)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"}}>
                  <s.icon size={18} style={{color:"var(--green)"}}/>
                </div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"2rem",fontWeight:800,color:"var(--green)",lineHeight:1,marginBottom:".35rem"}}>{s.val}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:".82rem",fontWeight:600,color:"var(--tx)",marginBottom:".2rem"}}>{s.label}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:".7rem",color:"var(--tx3)"}}>{s.sub}</div>
              </div>
            </R>
          ))}
        </div>
      </div>

      {/* Console */}
      <div className="wrap" style={{paddingTop:"2.5rem",paddingBottom:"5rem"}}>
        <R>
          <div style={{marginBottom:".75rem",display:"flex",alignItems:"center",gap:8}}>
            <ShieldCheck size={13} style={{color:"var(--green)"}}/>
            <span style={{fontFamily:"var(--font-body)",fontSize:".68rem",fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"var(--tx3)"}}>Live Transaction Stream · MetaLedger Chain Mainnet</span>
          </div>
          <div style={{border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"var(--shadow2)",background:"var(--bg3)"}}>
            <div style={{padding:"0.6rem 1rem",background:"var(--bg)",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",gap:6}}>
                {["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}
              </div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:".65rem",color:"var(--tx3)",letterSpacing:".1em"}}>chain.metaledgerlabs.com — explorer</div>
              <span className="status-attested"><span className="attested-dot" style={{width:5,height:5}}/>Live</span>
            </div>
            <div style={{padding:"1rem"}}>
              <AttestationConsole/>
            </div>
          </div>
        </R>
      </div>
    </div>
  );
}
