import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, CheckCircle, Upload, Briefcase, MapPin, User, Mail, Globe, FileText } from "lucide-react";
import { useToast } from "@/components/Toast";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const LBL = ({ children, required }) => (
  <label style={{
    fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600,
    letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tx3)",
    display: "block", marginBottom: "0.45rem",
  }}>
    {children}{required && <span style={{ color: "var(--green)", marginLeft: 3 }}>*</span>}
  </label>
);

const Field = ({ label, required, children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <LBL required={required}>{label}</LBL>
    {children}
  </div>
);

export default function ApplyForm() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const { push }  = useToast();
  const job       = location.state || {};

  const [form, setForm] = useState({
    name: "", email: "", role: job.title || "",
    linkedin: "", portfolio: "", experience: "",
    why: "", availability: "",
  });
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hc = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.why) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "job_applications"), {
        ...form,
        jobTitle:    job.title  || form.role,
        jobDept:     job.dept   || "",
        jobType:     job.type   || "",
        submittedAt: new Date(),
        status:      "new",
      });
      setSubmitted(true);
    } catch {
      push("Submission failed — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inp = {
    fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--tx)",
    background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 10,
    padding: "0.72rem 1rem", width: "100%", outline: "none",
    transition: "border-color 0.2s",
  };
  const inpFocus = e => e.target.style.borderColor = "var(--green-bd)";
  const inpBlur  = e => e.target.style.borderColor = "var(--border)";

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 520, textAlign: "center" }}
        >
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--green-bg)", border: "1px solid var(--green-bd)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <CheckCircle size={32} style={{ color: "var(--green)" }} />
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 400, color: "var(--tx)", marginBottom: "1rem", lineHeight: 1.1 }}>
            Application <em style={{ fontStyle: "italic", color: "var(--green)" }}>received</em>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--tx2)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Thanks, <strong style={{ color: "var(--tx)" }}>{form.name}</strong>. We've received your application for <strong style={{ color: "var(--tx)" }}>{job.title || form.role}</strong> and will review it within 3–5 business days.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/jobs")}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.7rem 1.5rem", borderRadius: 100, background: "var(--green)", color: "#000", fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 700, border: "none", cursor: "pointer" }}
            >
              View All Roles
            </button>
            <button
              onClick={() => navigate("/")}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.7rem 1.5rem", borderRadius: 100, border: "1px solid var(--border)", color: "var(--tx2)", background: "transparent", fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer" }}
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--tx)" }}>

      {/* ── Header ── */}
      <section style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "5rem 2rem 3.5rem", position: "relative", overflow: "hidden" }}>
        <div className="tex-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4 }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <button onClick={() => navigate("/jobs")} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--tx3)", fontFamily: "var(--font-body)", fontSize: "0.82rem", cursor: "pointer", padding: 0, marginBottom: "1.5rem", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--green)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--tx3)"}
            >
              <ArrowLeft size={14} /> Back to all roles
            </button>

            {/* Job badge */}
            {job.title && (
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center", marginBottom: "1.25rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "var(--green-bg)", border: "1px solid var(--green-bd)", fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--green)" }}>
                  <Briefcase size={10} /> {job.dept}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--tx3)" }}>
                  <MapPin size={11} /> {job.type}
                </span>
              </div>
            )}

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, color: "var(--tx)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              Apply for <em style={{ fontStyle: "italic", color: "var(--green)" }}>{job.title || "this role"}</em>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--tx2)", lineHeight: 1.7 }}>
              {job.intro || "Tell us about yourself. We review every application personally and respond within 3–5 business days."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "3.5rem 2rem 6rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <form onSubmit={submit}>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Section: Personal */}
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--tx3)", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                Personal Details
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                <style>{`@media(max-width:560px){.form-2col{grid-template-columns:1fr!important}}`}</style>
                <Field label="Full Name" required>
                  <input name="name" value={form.name} onChange={hc} required placeholder="Jane Smith" style={inp} onFocus={inpFocus} onBlur={inpBlur} />
                </Field>
                <Field label="Email Address" required>
                  <input name="email" type="email" value={form.email} onChange={hc} required placeholder="jane@studio.com" style={inp} onFocus={inpFocus} onBlur={inpBlur} />
                </Field>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                <Field label="LinkedIn Profile">
                  <input name="linkedin" value={form.linkedin} onChange={hc} placeholder="linkedin.com/in/yourname" style={inp} onFocus={inpFocus} onBlur={inpBlur} />
                </Field>
                <Field label="Portfolio / GitHub">
                  <input name="portfolio" value={form.portfolio} onChange={hc} placeholder="github.com/yourname" style={inp} onFocus={inpFocus} onBlur={inpBlur} />
                </Field>
              </div>

              {/* Section: Role */}
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--tx3)", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)", paddingTop: "0.5rem" }}>
                About Your Application
              </div>

              <Field label="Applying for">
                <input name="role" value={form.role} onChange={hc} placeholder="Role title" style={{ ...inp, background: job.title ? "var(--bg4)" : "var(--bg3)", color: job.title ? "var(--tx3)" : "var(--tx)" }} readOnly={!!job.title} />
              </Field>

              <Field label="Years of relevant experience" required>
                <select name="experience" value={form.experience} onChange={hc} required style={{ ...inp, cursor: "pointer" }} onFocus={inpFocus} onBlur={inpBlur}>
                  <option value="">Select...</option>
                  <option value="0-1">0 – 1 years</option>
                  <option value="1-3">1 – 3 years</option>
                  <option value="3-5">3 – 5 years</option>
                  <option value="5-8">5 – 8 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </Field>

              <Field label="Why MetaLedgerLabs?" required>
                <textarea
                  name="why" value={form.why} onChange={hc} required rows={5}
                  placeholder="Tell us what excites you about this role and what you'd bring to the team. Be specific — generic answers won't stand out."
                  style={{ ...inp, resize: "vertical", minHeight: 130, lineHeight: 1.65 }}
                  onFocus={inpFocus} onBlur={inpBlur}
                />
              </Field>

              <Field label="Availability / Notice Period">
                <input name="availability" value={form.availability} onChange={hc} placeholder="e.g. 2 weeks notice, available immediately" style={inp} onFocus={inpFocus} onBlur={inpBlur} />
              </Field>

              {/* Submit */}
              <div style={{ paddingTop: "0.5rem" }}>
                <button
                  type="submit"
                  disabled={loading || !form.name || !form.email || !form.why}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "0.9rem 2rem", borderRadius: 100,
                    background: loading || !form.name || !form.email || !form.why ? "var(--bg4)" : "var(--green)",
                    color: loading || !form.name || !form.email || !form.why ? "var(--tx3)" : "#000",
                    border: "none", cursor: loading || !form.name || !form.email || !form.why ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700,
                    transition: "all 0.15s",
                    boxShadow: (!loading && form.name && form.email && form.why) ? "0 0 28px var(--green-glow)" : "none",
                  }}
                >
                  {loading ? (
                    <>Submitting…</>
                  ) : (
                    <>Submit Application <ArrowUpRight size={15} /></>
                  )}
                </button>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--tx3)", textAlign: "center", marginTop: "0.85rem", lineHeight: 1.5 }}>
                  We review every application personally. You'll hear back within 3–5 business days.
                </p>
              </div>

            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
