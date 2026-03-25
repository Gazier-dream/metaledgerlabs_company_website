import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Zap, Shield, Globe, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const fv={hidden:{opacity:0,y:22},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.08,ease:[.22,1,.36,1]}})};
function R({children,i=0,style={}}){const ref=useRef(null);const v=useInView(ref,{once:true,margin:"-60px"});return<motion.div ref={ref} variants={fv} custom={i} initial="hidden" animate={v?"visible":"hidden"} style={style}>{children}</motion.div>;}

const metrics=[
  {v:"<100ms",l:"Finality Time",     s:"Sub-second transaction confirmation"},
  {v:"50K",   l:"TPS Peak",          s:"Throughput at peak load"},
  {v:"$0.001",l:"Avg. Transaction",  s:"Fee per on-chain action"},
  {v:"99.99%",l:"Chain Uptime",      s:"SLA across all nodes"},
];
const features=[
  {icon:Zap,    t:"EVM-Compatible Layer 2",           d:"Full Ethereum compatibility with native account abstraction, custom precompiles for gaming primitives, and a gasless relay for sponsored player transactions."},
  {icon:Globe,  t:"9-Chain Bridge Infrastructure",    d:"Trustless cross-chain messaging to Ethereum, Solana, Polygon, Avalanche, BNB Chain, Arbitrum, Optimism, Base, and zkSync — with more chains added by governance vote."},
  {icon:Shield, t:"Audited Bridge Security",          d:"Every bridge contract is audited by two independent firms before deployment. A $5M insurance fund backs all in-transit assets."},
  {icon:Layers, t:"Native NFT Economy Primitives",    d:"On-chain royalty enforcement, dynamic metadata, batch minting, and fractionalisation — available as native protocol features, not external contracts."},
];

export default function Blockchain(){
  return(
    <div style={{background:"var(--bg)",color:"var(--tx)"}}>
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"6rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,left:-60,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(168,85,247,0.15) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"1.5rem"}}><Layers size={10}/> Protocol Infrastructure</div>
            <h1 className="t-h1" style={{marginBottom:"1.25rem",maxWidth:680}}>MetaLedger Chain — <span className="grad-text">Built for Games</span></h1>
            <p className="t-body-lg" style={{maxWidth:580,marginBottom:"2rem"}}>An EVM-compatible Layer 2 purpose-built for the transaction patterns, asset volumes, and UX requirements of modern Web3 games. Not a general-purpose chain with gaming features bolted on.</p>
            <div style={{display:"flex",gap:".85rem",flexWrap:"wrap"}}>
              <Link to="/schedule" className="btn btn-jade">Request Integration <ArrowUpRight size={14}/></Link>
              <a href="https://docs.metaledgerlabs.com/chain" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Read Chain Docs <ArrowUpRight size={14}/></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{background:"var(--bg)"}}>
        <div className="wrap sect">
          <div className="grid-4">
            {metrics.map((m,i)=>(
              <R key={m.l} i={i}>
                <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",textAlign:"center"}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"2.6rem",fontWeight:800,color:i%2===0?"var(--green)":"var(--coral)",lineHeight:1,marginBottom:".4rem"}}>{m.v}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:".85rem",fontWeight:600,color:"var(--tx)",marginBottom:".25rem"}}>{m.l}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:".72rem",color:"var(--tx3)"}}>{m.s}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{background:"var(--bg3)"}}>
        <div className="wrap sect">
          <R style={{marginBottom:"3rem"}}><div className="t-eyebrow" style={{marginBottom:".75rem"}}>What's Under the Hood</div><h2 className="t-h2">Protocol Features</h2></R>
          <div className="grid-2">
            {features.map((f,i)=>(
              <R key={f.t} i={i}>
                <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:10,padding:"2rem",display:"flex",gap:"1.25rem",height:"100%"}}>
                  <div style={{width:44,height:44,borderRadius:9,background:"var(--green-bg)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <f.icon size={20} style={{color:"var(--green)"}}/>
                  </div>
                  <div>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"1.05rem",fontWeight:700,color:"var(--tx)",marginBottom:".6rem"}}>{f.t}</div>
                    <div className="t-small">{f.d}</div>
                  </div>
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
            <h2 className="t-h2" style={{marginBottom:"1.25rem"}}>Deploy on MetaLedger Chain</h2>
            <p className="t-body-lg" style={{maxWidth:480,margin:"0 auto 2rem"}}>Testnet access is instant. Mainnet onboarding takes under a week with our integration team alongside you.</p>
            <Link to="/contact" className="btn btn-jade">Start Integration <ArrowUpRight size={14}/></Link>
          </R>
        </div>
      </section>
    </div>
  );
}
