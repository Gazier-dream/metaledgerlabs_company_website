import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Coins, Shield, Globe, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const fv={hidden:{opacity:0,y:18},visible:(i=0)=>({opacity:1,y:0,transition:{duration:.5,delay:i*.07,ease:[.22,1,.36,1]}})};

const LOGS=[
  {id:"0x3F3E...A9C2",type:"NFT_MINT",     studio:"ArcadeVerse",  chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,847",asset:"Legendary Sword #8824",time:"2s ago",   gas:"$0.0009"},
  {id:"0x7A2D...F4B1",type:"BRIDGE_OUT",   studio:"PixelRealms",  chain:"Polygon",       status:"CONFIRMED",block:"4,192,846",asset:"100,000 PRXL",        time:"5s ago",   gas:"$0.0012"},
  {id:"0xE91C...3D7F",type:"MARKETPLACE",  studio:"ChainQuest",   chain:"MetaLedger L2",status:"PENDING",  block:"—",          asset:"Epic Mount #441",    time:"8s ago",   gas:"$0.0008"},
  {id:"0x44AB...9E2C",type:"BURN",         studio:"ArcadeVerse",  chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,844",asset:"500 ARC consumed",    time:"12s ago",  gas:"$0.0006"},
  {id:"0x8C0F...7B3A",type:"NFT_MINT",     studio:"MetaRaiders",  chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,843",asset:"Rare Helmet #2201",   time:"18s ago",  gas:"$0.0009"},
  {id:"0x1B77...2CF8",type:"BRIDGE_IN",    studio:"PixelRealms",  chain:"Ethereum",      status:"CONFIRMED",block:"4,192,842",asset:"50 ETH → 50 wETH",   time:"24s ago",  gas:"$0.0015"},
  {id:"0x5E33...A104",type:"WALLET_CREATE",studio:"ChainQuest",   chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,840",asset:"New AA Wallet",       time:"31s ago",  gas:"$0.0000"},
  {id:"0xD29B...6F7E",type:"MARKETPLACE",  studio:"MetaRaiders",  chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,838",asset:"Common Boots #9912",  time:"45s ago",  gas:"$0.0007"},
  {id:"0xA112...C3D5",type:"NFT_MINT",     studio:"GuildWars3",   chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,835",asset:"Epic Staff #551",     time:"1m ago",   gas:"$0.0009"},
  {id:"0xF820...B7E1",type:"BURN",         studio:"ChainQuest",   chain:"MetaLedger L2",status:"CONFIRMED",block:"4,192,831",asset:"200 QUEST burned",    time:"2m ago",   gas:"$0.0006"},
];

const TYPE_META={
  NFT_MINT:     {c:"var(--green)",  bg:"var(--green-bg)",  bd:"var(--green-bd)",  label:"Mint"},
  BRIDGE_OUT:   {c:"var(--coral)", bg:"var(--coral-bg)", bd:"var(--coral-bd)", label:"Bridge Out"},
  BRIDGE_IN:    {c:"#22c55e",      bg:"rgba(34,197,94,.09)", bd:"rgba(34,197,94,.25)", label:"Bridge In"},
  MARKETPLACE:  {c:"#f59e0b",      bg:"rgba(245,158,11,.09)",bd:"rgba(245,158,11,.25)",label:"Trade"},
  BURN:         {c:"#ef4444",      bg:"rgba(239,68,68,.09)", bd:"rgba(239,68,68,.25)", label:"Burn"},
  WALLET_CREATE:{c:"#8b5cf6",      bg:"rgba(139,92,246,.09)",bd:"rgba(139,92,246,.25)",label:"Wallet"},
};

export default function AuditLog(){
  const [expanded,setExpanded]=useState(null);
  const [filter,setFilter]=useState("All");

  const types=["All",...Array.from(new Set(LOGS.map(l=>l.type)))];
  const filtered=filter==="All"?LOGS:LOGS.filter(l=>l.type===filter);

  return(
    <div style={{background:"var(--bg)",color:"var(--tx)",minHeight:"100vh"}}>
      <section style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",padding:"5rem 2rem 4rem",position:"relative",overflow:"hidden"}}>
        <div className="tex-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="badge" style={{marginBottom:"1.25rem"}}><span className="attested-dot"/>Live</div>
            <h1 className="t-h1" style={{marginBottom:"1rem",maxWidth:640}}>Chain <span className="grad-text">Explorer</span></h1>
            <p className="t-body-lg" style={{maxWidth:520}}>Real-time transaction log across all MetaLedger Chain activity — mints, burns, trades, bridges, and wallet creations.</p>
          </motion.div>
        </div>
      </section>

      <div className="wrap" style={{paddingTop:"2.5rem",paddingBottom:"1.5rem"}}>
        <div style={{display:"flex",gap:".5rem",flexWrap:"wrap"}}>
          {types.map(t=>{
            const meta=TYPE_META[t];
            return(
              <button key={t} onClick={()=>setFilter(t)} style={{
                padding:"0.4rem 1rem",borderRadius:5,border:"1.5px solid",cursor:"pointer",
                fontFamily:"var(--font-body)",fontSize:"0.78rem",fontWeight:600,transition:"all .18s",
                borderColor: filter===t?(meta?meta.bd:"var(--green)"):"var(--border)",
                background: filter===t?(meta?meta.bg:"var(--green-bg)"):"transparent",
                color: filter===t?(meta?meta.c:"var(--green)"):"var(--tx2)",
              }}>{meta?meta.label:t}</button>
            );
          })}
        </div>
      </div>

      <div className="wrap" style={{paddingBottom:"5rem"}}>
        <div style={{border:"1px solid var(--border)",borderRadius:12,overflow:"hidden"}}>
          <div style={{background:"var(--bg3)",padding:".75rem 1.25rem",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1.5fr 80px",gap:"1rem",borderBottom:"1px solid var(--border)"}}>
            {["Type","Studio","Chain","Asset","Status"].map(h=>(
              <div key={h} style={{fontFamily:"var(--font-body)",fontSize:".65rem",fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"var(--tx3)"}}>{h}</div>
            ))}
          </div>
          {filtered.map((log,i)=>{
            const meta=TYPE_META[log.type]||TYPE_META.NFT_MINT;
            const open=expanded===log.id;
            return(
              <motion.div key={log.id} variants={fv} custom={i} initial="hidden" whileInView="visible" viewport={{once:true}}>
                <div onClick={()=>setExpanded(open?null:log.id)}
                  style={{padding:".9rem 1.25rem",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1.5fr 80px",gap:"1rem",alignItems:"center",borderBottom:"1px solid var(--border)",cursor:"pointer",transition:"background .15s",background:open?"var(--bg3)":"transparent"}}
                  onMouseEnter={e=>!open&&(e.currentTarget.style.background="var(--bg2)")}
                  onMouseLeave={e=>!open&&(e.currentTarget.style.background="transparent")}>
                  <span style={{padding:"2px 8px",borderRadius:4,background:meta.bg,border:`1px solid ${meta.bd}`,fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:meta.c,display:"inline-block"}}>{meta.label}</span>
                  <div style={{fontFamily:"var(--font-body)",fontSize:".82rem",fontWeight:500,color:"var(--tx)"}}>{log.studio}</div>
                  <div style={{fontFamily:"var(--font-mono)",fontSize:".75rem",color:"var(--tx3)"}}>{log.chain}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:".82rem",color:"var(--tx2)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{log.asset}</div>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <span style={{width:7,height:7,borderRadius:"50%",background:log.status==="CONFIRMED"?"#22c55e":"var(--green)",display:"block",flexShrink:0}}/>
                    {open?<ChevronUp size={13} style={{color:"var(--tx3)"}}/>:<ChevronDown size={13} style={{color:"var(--tx3)"}}/>}
                  </div>
                </div>
                {open&&(
                  <div style={{padding:"1rem 1.25rem",background:"var(--bg3)",borderBottom:"1px solid var(--border)"}}>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"2rem"}}>
                      {[["Tx Hash",log.id],["Block",log.block],["Time",log.time],["Gas Fee",log.gas],["Status",log.status]].map(([l,v])=>(
                        <div key={l}>
                          <div style={{fontFamily:"var(--font-body)",fontSize:".62rem",fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:".25rem"}}>{l}</div>
                          <div style={{fontFamily:"var(--font-mono)",fontSize:".78rem",color:"var(--tx)"}}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
