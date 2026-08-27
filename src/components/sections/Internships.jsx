import { useRef } from 'react';
import useReveal from '../../hooks/useReveal';
import { internships } from '../../data/content';

export default function Internships() {
  const ref = useRef();
  useReveal(ref, []);

  return (
    <section id="experience" ref={ref} className="section-shell tight internships-section">
      <div className="section-head">
        <span className="section-num mono">04</span>
        <h2 className="section-title reveal">Internships</h2>
        <div className="section-line" />
    </div>
      <p className="section-sub reveal">12+ months of production AI/ML work across six roles — from on-premise RAG at a French NGO to multi-agent evaluation at Zetheta</p>

      <div className="internships-timeline">
        {internships.map((it, i) => (
          <article key={it.company} className={`internship-card reveal d${Math.min(i + 1, 4)}`}>
            <div className="internship-marker">
              <span className="internship-dot" />
              {i < internships.length - 1 && <span className="internship-line" />}
          </div>
            <div className="internship-body">
              <header className="internship-head">
                <div>
                  <h3 className="internship-role">{it.role}</h3>
                  <p className="internship-company">
                    {it.company}
                    {it.location && <span className="internship-loc"> · {it.location}</span>}
                </p>
              </div>
                <span className="internship-date mono">{it.date}</span>
            </header>

              <p className="internship-desc">{it.desc}</p>

              <ul className="internship-bullets">
                {it.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
            </ul>

              {it.tools && it.tools.length > 0 && (
                <div className="internship-tools">
                  {it.tools.map((t) => (
                    <span key={t} className="internship-chip mono">{t}</span>
                  ))}
              </div>
              )}
          </div>
        </article>
        ))}
    </div>

      <style>{`
        .internships-timeline{ position:relative; display:flex; flex-direction:column; gap:36px; margin-top:32px; }
        .internship-card{ display:grid; grid-template-columns:36px 1fr; gap:24px; }
        .internship-marker{ display:flex; flex-direction:column; align-items:center; padding-top:8px; }
        .internship-dot{ width:16px; height:16px; border-radius:50%; background:linear-gradient(135deg, var(--accent, #e5d1b2), var(--accent-2, #f5e2c6)); box-shadow:0 0 16px rgba(229, 209, 178, 0.6), 0 0 0 4px rgba(229, 209, 178, 0.15); flex-shrink:0; }
        .internship-line{ width:2px; flex:1; background:linear-gradient(to bottom, rgba(229, 209, 178, 0.4), rgba(255, 255, 255, 0.05)); margin-top:8px; }
        .internship-body{
          padding:26px 30px;
          background:rgba(13, 14, 18, 0.85);
          backdrop-filter:blur(24px) saturate(140%);
          -webkit-backdrop-filter:blur(24px) saturate(140%);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:20px;
          box-shadow:0 10px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition:all .35s cubic-bezier(0.16, 0.8, 0.24, 1);
          position:relative;
          overflow:hidden;
        }
        .internship-body::before{
          content:'';
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:1px;
          background:linear-gradient(90deg, transparent, rgba(229, 209, 178, 0.3), transparent);
          opacity:0;
          transition:opacity .35s ease;
        }
        .internship-body:hover{
          border-color:rgba(229, 209, 178, 0.4);
          transform:translateY(-4px);
          box-shadow:0 20px 48px rgba(0, 0, 0, 0.6), 0 0 28px rgba(229, 209, 178, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }
        .internship-body:hover::before{
          opacity:1;
        }
        .internship-head{ display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:14px; flex-wrap:wrap; }
        .internship-role{ margin:0; font-family:var(--font-display, 'Fraunces', serif); font-size:1.28rem; font-weight:600; color:var(--heading, #f3f4f6); letter-spacing:-0.3px; line-height:1.25; }
        .internship-company{ margin:6px 0 0; color:var(--accent, #e5d1b2); font-weight:600; font-size:1.02rem; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
        .internship-loc{ color:var(--text-dim, #94a3b8); font-family:var(--font-mono, monospace); font-size:.76rem; font-weight:400; background:rgba(255, 255, 255, 0.05); padding:2px 8px; border-radius:6px; border:1px solid rgba(255, 255, 255, 0.08); }
        .internship-date{ font-family:var(--font-mono, monospace); font-size:.78rem; padding:5px 12px; background:rgba(229, 209, 178, 0.08); border:1px solid rgba(229, 209, 178, 0.22); color:var(--accent, #e5d1b2); border-radius:999px; white-space:nowrap; letter-spacing:0.3px; box-shadow:0 2px 8px rgba(0,0,0,0.2); }
        .internship-desc{ margin:10px 0 16px; color:var(--text, #b8bdc6); line-height:1.68; font-size:.96rem; }
        .internship-bullets{ margin:0 0 18px; padding-left:20px; display:flex; flex-direction:column; gap:10px; color:#cbd5e1; font-size:.94rem; line-height:1.65; }
        .internship-bullets li{ position:relative; }
        .internship-bullets li::marker{ color:var(--accent, #e5d1b2); font-size:1.15em; }
        .internship-tools{ display:flex; flex-wrap:wrap; gap:8px; padding-top:12px; border-top:1px solid rgba(255, 255, 255, 0.06); }
        .internship-chip{ font-family:var(--font-mono, monospace); font-size:.72rem; padding:4px 12px; background:rgba(255, 255, 255, 0.04); border:1px solid rgba(255, 255, 255, 0.1); border-radius:999px; color:var(--text-dim, #94a3b8); transition:all .25s ease; letter-spacing:0.2px; }
        .internship-chip:hover{ background:rgba(229, 209, 178, 0.14); border-color:var(--accent, #e5d1b2); color:#fff; transform:translateY(-1px); }
        @media (max-width: 640px){
          .internship-card{ grid-template-columns:24px 1fr; gap:14px; }
          .internship-body{ padding:18px 20px; }
          .internship-head{ flex-direction:column; align-items:flex-start; gap:8px; }
          .internship-role{ font-size:1.12rem; }
        }
      `}</style>
  </section>
  );
}
