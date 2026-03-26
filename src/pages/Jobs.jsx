import React, { useState } from "react";
import {
  Layers, Users, BarChart3, Globe, PenTool,
  Code, Database, Coins, ArrowUpRight, MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JOBS = [
  { id:1, title:"Blockchain Protocol Engineer", icon:Layers, dept:"Engineering", type:"Remote" },
  { id:2, title:"Economy Design Engineer", icon:Coins, dept:"Research", type:"Remote" },
  { id:3, title:"Web3 Frontend Engineer", icon:Code, dept:"Engineering", type:"Remote" },
  { id:4, title:"Smart Contract Security Lead", icon:Layers, dept:"Engineering", type:"Remote" },
  { id:5, title:"Studio Partnerships Manager", icon:Users, dept:"Growth", type:"Hybrid" },
  { id:6, title:"Game Economy Analyst", icon:BarChart3, dept:"Research", type:"Remote" },
  { id:7, title:"DevRel Engineer", icon:Globe, dept:"Engineering", type:"Remote" },
  { id:8, title:"UI/UX Designer", icon:PenTool, dept:"Design", type:"Remote" },
  { id:9, title:"Backend Infrastructure Engineer", icon:Database, dept:"Engineering", type:"Remote" },
];

const DEPT_COLORS = {
  Engineering: { bg:"var(--green-bg)", text:"var(--green)", border:"var(--green-bd)" },
  Research: { bg:"rgba(255,107,53,0.09)", text:"var(--coral)", border:"var(--coral-bd)" },
  Growth: { bg:"rgba(34,197,94,0.09)", text:"#22c55e", border:"rgba(34,197,94,0.25)" },
  Design: { bg:"rgba(251,191,36,0.09)", text:"#fbbf24", border:"rgba(251,191,36,0.25)" },
};

const fv = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 }
  })
};

export default function Jobs() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const depts = ["All", ...new Set(JOBS.map(j => j.dept))];
  const filtered = filter === "All"
    ? JOBS
    : JOBS.filter(j => j.dept === filter);

  return (
    <div style={{ padding: "2rem", background: "var(--bg)", minHeight: "100vh" }}>

      {/* Filters */}
      <div style={{ marginBottom: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {depts.map(d => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            style={{
              padding: "6px 12px",
              border: "1px solid var(--border)",
              background: filter === d ? "var(--green-bg)" : "transparent",
              color: filter === d ? "var(--green)" : "var(--tx)",
              cursor: "pointer"
            }}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Job List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filtered.map((job, i) => {
          const dc = DEPT_COLORS[job.dept] || DEPT_COLORS.Engineering;

          return (
            <motion.div
              key={job.id}
              variants={fv}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -3 }}
              onClick={() => navigate("/contact", { state: job })}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                background: "var(--bg2)",
                cursor: "pointer"
              }}
            >
              {/* LEFT */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: "var(--green-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8
                }}>
                  <job.icon size={18} />
                </div>

                <div>
                  <div style={{ fontWeight: 700 }}>{job.title}</div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                    {job.dept} • {job.type}
                  </div>
                </div>
              </div>

              {/* APPLY BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 FIX
                  navigate("/apply", { state: job });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "transparent",
                  border: "none",
                  color: "var(--green)",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                Apply <ArrowUpRight size={14} />
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}