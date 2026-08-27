import { useRef, useEffect } from 'react';
import useReveal from '../../hooks/useReveal';

export default function ArchitectureSection() {
  const ref = useRef();
  useReveal(ref, []);

  useEffect(() => {
    const diagram = ref.current?.querySelector('.graph-svg');
    const nodes = ref.current?.querySelectorAll('.graph-svg foreignObject');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!diagram || !nodes) return;

    const revealNodes = () => {
      nodes.forEach((node, index) => {
        setTimeout(() => node.classList.add('is-visible'), index * 110);
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNodes();
            currentObserver.disconnect();
          }
        });
      }, { threshold: 0.12 });
      observer.observe(diagram);
    } else {
      revealNodes();
    }

    if (!reduceMotion) {
      window.addEventListener('pointermove', (event) => {
        document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
      }, { passive: true });
    }

    nodes.forEach((node) => {
      const card = node.querySelector('.node-card');
      if (!card) return;

      card.addEventListener('mouseenter', () => {
        diagram.classList.add('is-interacting');
        card.classList.add('is-active');
        const lines = diagram.querySelectorAll('line[data-path="main"]');
        lines.forEach((line, lineIndex) => {
          if (Math.abs(lineIndex - [...nodes].indexOf(node)) <= 1) {
            line.classList.add('active-path');
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        diagram.classList.remove('is-interacting');
        card.classList.remove('is-active');
        diagram.querySelectorAll('.active-path').forEach((p) => p.classList.remove('active-path'));
      });

      card.addEventListener('click', () => {
        card.animate(
          [
            { transform: 'translateY(-4px) scale(1.035)' },
            { transform: 'translateY(-4px) scale(1.08)' },
            { transform: 'translateY(-4px) scale(1.035)' },
          ],
          { duration: 500, easing: 'cubic-bezier(.2,.8,.2,1)' },
        );
      });
    });

    return () => {
      nodes.forEach((node) => {
        const card = node.querySelector('.node-card');
        if (card) {
          card.replaceWith(card.cloneNode(true));
        }
      });
    };
  }, []);

  return (
    <section id="architecture" ref={ref} className="section-shell arch-section">
      <div className="section-head">
        <span className="section-num mono">08</span>
        <h2 className="section-title reveal">A Real Example</h2>
        <div className="section-line" />
      </div>
      <p className="section-sub reveal">
        Here's the actual multi-agent architecture behind one of my production projects — proof, not just philosophy.
      </p>

      <div className="arch-flowchart liquid-card reveal">
        <main className="diagram-container">
          <header className="diagram-header">
            <h1>Multi-Agent Finance Bot Development & Evaluation</h1>
            <p>LangGraph &bull; LLM Wrapper &bull; Automated Evaluation Engine &bull; Test Harness</p>
          </header>

          <section className="diagram-legend" aria-label="Diagram legend">
            <div className="legend-item">
              <span className="dot dot-pink"></span>
              <span style={{ color: '#de7b7b' }}>User / Test Input</span>
            </div>
            <div className="legend-item">
              <span className="dot dot-green"></span>
              <span style={{ color: '#88c070' }}>Tool / deterministic</span>
            </div>
            <div className="legend-item">
              <span className="dot dot-purple"></span>
              <span style={{ color: '#a888db' }}>LLM reasoning</span>
            </div>
          </section>

          <svg className="graph-svg" viewBox="0 0 680 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Multi-agent finance bot workflow">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 2 L 7 5 L 1 8 z" fill="#d1d5db"></path>
              </marker>
              <marker id="arrow-white" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 2 L 7 5 L 1 8 z" fill="#fff"></path>
              </marker>
            </defs>

            <g stroke="#d1d5db" strokeWidth="1.2">
              <line data-path="main" x1="340" y1="50" x2="340" y2="76" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="340" y1="128" x2="340" y2="154" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="340" y1="206" x2="340" y2="232" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="340" y1="284" x2="340" y2="314" markerEnd="url(#arrow)"></line>

              <line data-path="main" x1="340" y1="366" x2="340" y2="395"></line>
              <line data-path="main" x1="85" y1="395" x2="595" y2="395"></line>
              <line data-path="main" x1="85" y1="395" x2="85" y2="424" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="255" y1="395" x2="255" y2="424" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="425" y1="395" x2="425" y2="424" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="595" y1="395" x2="595" y2="424" markerEnd="url(#arrow)"></line>

              <line data-path="main" x1="85" y1="492" x2="85" y2="520"></line>
              <line data-path="main" x1="255" y1="492" x2="255" y2="520"></line>
              <line data-path="main" x1="425" y1="492" x2="425" y2="520"></line>
              <line data-path="main" x1="595" y1="492" x2="595" y2="520"></line>
              <line data-path="main" x1="85" y1="520" x2="595" y2="520"></line>
              <line data-path="main" x1="340" y1="520" x2="340" y2="548" markerEnd="url(#arrow)"></line>

              <line data-path="main" x1="340" y1="602" x2="340" y2="628" markerEnd="url(#arrow)"></line>
              <line data-path="main" x1="340" y1="680" x2="340" y2="708" markerEnd="url(#arrow)"></line>
            </g>

            <g fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="2 2">
              <path className="feedback-path" d="M 455 258 H 535 V 180 H 483" markerEnd="url(#arrow-white)"></path>
              <path className="feedback-path" d="M 225 655 H 48 V 102 H 207" markerEnd="url(#arrow-white)"></path>
              <path className="feedback-path" d="M 455 648 H 595 V 180 H 483" markerEnd="url(#arrow-white)"></path>
              <path className="feedback-path" d="M 455 668 H 635 V 458 H 666" markerEnd="url(#arrow-white)"></path>
            </g>

            <g className="packets" aria-hidden="true">
              <circle className="packet packet-pink" r="3">
                <animateMotion dur="4.8s" repeatCount="indefinite" begin="0s" path="M340 50 L340 366 L340 548 L340 708"></animateMotion>
              </circle>
              <circle className="packet packet-green" r="3">
                <animateMotion dur="4.8s" repeatCount="indefinite" begin="1.6s" path="M340 366 L85 395 L85 520 L340 548"></animateMotion>
              </circle>
              <circle className="packet packet-purple" r="3">
                <animateMotion dur="4.8s" repeatCount="indefinite" begin="3.2s" path="M340 366 L595 395 L595 520 L340 548"></animateMotion>
              </circle>
              <circle className="packet packet-gold" r="2.6">
                <animateMotion dur="5.5s" repeatCount="indefinite" begin="2.3s" path="M225 655 H48 V102 H207"></animateMotion>
              </circle>
            </g>

            <text x="543" y="222" fill="#fff" fontFamily="Georgia, serif" fontWeight="bold" fontSize="13">retry</text>
            <text x="58" y="642" fill="#fff" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10.5">fail → Prompt Builder</text>
            <text x="468" y="638" fill="#fff" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10.5">low score → Bot Agent</text>
            <text x="468" y="684" fill="#fff" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10.5">re-test → Metrics</text>

            <foreignObject x="230" y="0" width="220" height="50">
              <div className="node-card node-pink" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Question Generator</div>
                <div className="node-desc">question_generator.py / User Query</div>
              </div>
            </foreignObject>

            <foreignObject x="210" y="78" width="260" height="50">
              <div className="node-card node-green" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Prompt Builder</div>
                <div className="node-desc">prompt_builder.py (persona & context)</div>
              </div>
            </foreignObject>

            <foreignObject x="200" y="156" width="280" height="50">
              <div className="node-card node-purple" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Finance Bot Agent</div>
                <div className="node-desc">bot_agent.py &bull; llm_wrapper.py</div>
              </div>
            </foreignObject>

            <foreignObject x="225" y="234" width="230" height="50">
              <div className="node-card node-pink" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Candidate Response</div>
                <div className="node-desc">Generated financial advisory output</div>
              </div>
            </foreignObject>

            <foreignObject x="205" y="316" width="270" height="50">
              <div className="node-card node-purple" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">LangGraph Evaluation Engine</div>
                <div className="node-desc">langgraph_evaluation_engine.py</div>
              </div>
            </foreignObject>

            <foreignObject x="17" y="426" width="136" height="64">
              <div className="node-card node-purple" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Accuracy Judge</div>
                <div className="node-desc">Financial facts &<br />numeric validity</div>
              </div>
            </foreignObject>

            <foreignObject x="187" y="426" width="136" height="64">
              <div className="node-card node-green" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Compliance Tool</div>
                <div className="node-desc">Regulatory disclaimer<br />& risk policy</div>
              </div>
            </foreignObject>

            <foreignObject x="357" y="426" width="136" height="64">
              <div className="node-card node-purple" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Persona Judge</div>
                <div className="node-desc">Clarity, tone &<br />structured format</div>
              </div>
            </foreignObject>

            <foreignObject x="527" y="426" width="136" height="64">
              <div className="node-card node-green" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Metrics Profiler</div>
                <div className="node-desc">Token consumption<br />& response latency</div>
              </div>
            </foreignObject>

            <foreignObject x="210" y="550" width="260" height="52">
              <div className="node-card node-green" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Evaluation Tools Aggregator</div>
                <div className="node-desc">evaluation_tools.py (weighted scores)</div>
              </div>
            </foreignObject>

            <foreignObject x="225" y="630" width="230" height="50">
              <div className="node-card node-pink" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Quality Gate Check</div>
                <div className="node-desc">test_evaluation.py (pass/fail score)</div>
              </div>
            </foreignObject>

            <foreignObject x="210" y="710" width="260" height="50">
              <div className="node-card node-gold" xmlns="http://www.w3.org/1999/xhtml">
                <div className="node-title">Benchmark Report</div>
                <div className="node-desc">JSON / Markdown metrics & test run logs</div>
              </div>
            </foreignObject>
          </svg>

          <footer className="diagram-footer">
            Multi-Agent System &bull; LangGraph Engine &bull; LLM Judges &bull; Evaluation Tools
          </footer>
        </main>
      </div>

      <style>{`
        .arch-flowchart {
          --pink: #de7b7b;
          --green: #88c070;
          --purple: #a888db;
          --gold: #e5c07b;
          --line: #d1d5db;
          padding: 28px 20px;
          border-radius: 20px;
          overflow: hidden;
        }
        .diagram-container {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: page-enter 900ms ease both;
        }
        .diagram-header { text-align: center; margin-bottom: 24px; }
        .diagram-header h1 {
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          color: var(--text, #fff);
          animation: title-reveal 900ms 150ms ease both;
        }
        .diagram-header p {
          font-size: 11.5px;
          color: var(--muted-foreground, #b0b0b0);
          letter-spacing: 0.2px;
          animation: title-reveal 900ms 300ms ease both;
        }
        .diagram-legend {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 620px;
          margin-bottom: 28px;
          font-size: 13px;
          animation: fade-up 700ms 450ms ease both;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 250ms ease, filter 250ms ease;
        }
        .legend-item:hover { transform: translateY(-3px); filter: brightness(1.35); }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          display: inline-block;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        .dot-pink { background-color: var(--pink); }
        .dot-green { background-color: var(--green); }
        .dot-purple { background-color: var(--purple); }
        .graph-svg {
          width: 100%;
          height: auto;
          overflow: visible;
          perspective: 800px;
        }
        .graph-svg > g:not(.packets) line,
        .graph-svg > g:not(.packets) path {
          transition: stroke 300ms ease, opacity 300ms ease, filter 300ms ease;
        }
        .graph-svg.is-interacting > g:not(.packets) line,
        .graph-svg.is-interacting > g:not(.packets) path {
          opacity: 0.22;
        }
        .graph-svg.is-interacting .active-path {
          opacity: 1 !important;
          stroke: #fff;
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.75));
        }
        .node-card {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.88);
          border-radius: 8px;
          border: 1.5px solid transparent;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 4px 8px;
          transform-origin: center;
          transition: transform 260ms ease, background-color 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }
        .node-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 25%, rgba(255, 255, 255, 0.14) 48%, transparent 70%);
          transform: translateX(-140%);
          transition: transform 700ms ease;
          pointer-events: none;
        }
        .node-card:hover::before,
        .node-card.is-active::before { transform: translateX(140%); }
        .node-card:hover,
        .node-card.is-active { transform: translateY(-4px) scale(1.035); background-color: #101010; }
        .node-card.is-active { box-shadow: 0 0 26px rgba(255, 255, 255, 0.18); }
        .node-pink { border-color: var(--pink); }
        .node-green { border-color: var(--green); }
        .node-purple { border-color: var(--purple); }
        .node-gold { border-color: var(--gold); }
        .node-pink:hover, .node-pink.is-active { box-shadow: 0 0 22px rgba(222, 123, 123, 0.32); }
        .node-green:hover, .node-green.is-active { box-shadow: 0 0 22px rgba(136, 192, 112, 0.32); }
        .node-purple:hover, .node-purple.is-active { box-shadow: 0 0 22px rgba(168, 136, 219, 0.32); }
        .node-gold:hover, .node-gold.is-active { box-shadow: 0 0 22px rgba(229, 192, 123, 0.32); }
        .node-title {
          position: relative; z-index: 1;
          font-size: 12.5px; font-weight: bold; color: #fff; line-height: 1.25;
        }
        .node-desc {
          position: relative; z-index: 1;
          font-size: 10.5px; color: #d1d5db; margin-top: 3px; line-height: 1.2;
        }
        .diagram-footer {
          margin-top: 24px; text-align: center;
          font-size: 12px; color: var(--muted-foreground, #e5e5e5);
          letter-spacing: 0.3px;
          animation: fade-up 700ms 900ms ease both;
        }
        .graph-svg > g:not(.packets) line,
        .graph-svg > g:not(.packets) path {
          stroke-dasharray: 5 6;
          animation: flow-line 2.4s linear infinite;
        }
        .graph-svg > g:not(.packets) line { opacity: 0.82; }
        .graph-svg > g:not(.packets) path { animation-duration: 1.8s; }
        .packets { pointer-events: none; }
        .packet { opacity: 0; filter: drop-shadow(0 0 5px currentColor); }
        .packet-pink { color: var(--pink); fill: var(--pink); }
        .packet-green { color: var(--green); fill: var(--green); }
        .packet-purple { color: var(--purple); fill: var(--purple); }
        .packet-gold { color: var(--gold); fill: var(--gold); }
        .graph-svg foreignObject {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          transform: translateY(16px) scale(0.96);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .graph-svg foreignObject.is-visible { opacity: 1; transform: translateY(0) scale(1); }
        .graph-svg foreignObject.is-visible:nth-of-type(3n) .node-card { animation: node-glow 3.4s 1s ease-in-out infinite; }
        .graph-svg foreignObject.is-visible:nth-of-type(4n) .node-card { animation: node-float 4s 1.2s ease-in-out infinite; }
        @keyframes page-enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes title-reveal { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-up { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes flow-line { to { stroke-dashoffset: -22; } }
        @keyframes dot-pulse { 0%, 100% { opacity: 0.55; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1.35); } }
        @keyframes node-glow { 0%, 100% { filter: drop-shadow(0 0 0 transparent); } 50% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.24)); } }
        @keyframes node-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
        @media (max-width: 600px) {
          .diagram-header h1 { font-size: 19px; }
          .diagram-legend { gap: 10px; font-size: 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .graph-svg foreignObject { opacity: 1; transform: none; }
          .packet { display: none; }
        }
      `}</style>
    </section>
  );
}
