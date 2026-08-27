(function() {
  const styles = `
    #kai-widget { 
      position: fixed; 
      bottom: 28px; 
      right: 28px; 
      z-index: 99999; 
      font-family: var(--font-body, 'Inter', sans-serif); 
      display: flex;
      align-items: center;
    }
    #jarvis-bubble {
      position: absolute;
      bottom: 10px;
      right: 72px;
      background: #0d0e12f5;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(229, 209, 178, 0.35);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(229, 209, 178, 0.15);
      color: var(--heading, #f1f5f9);
      font-family: var(--font-body, 'Inter', sans-serif);
      font-size: 13px;
      font-weight: 500;
      padding: 9px 15px;
      border-radius: 12px;
      white-space: nowrap;
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 6px;
      animation: jarvisPop 0.6s cubic-bezier(0.16, 0.8, 0.24, 1) both;
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    #jarvis-bubble strong {
      color: var(--accent, #e5d1b2);
      font-weight: 600;
    }
    #jarvis-bubble-arrow {
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: #0d0e12f5;
      border-top: 1px solid rgba(229, 209, 178, 0.35);
      border-right: 1px solid rgba(229, 209, 178, 0.35);
    }
    @keyframes jarvisPop {
      0% { opacity: 0; transform: translateX(14px) scale(0.9); }
      70% { transform: translateX(-3px) scale(1.04); }
      100% { opacity: 1; transform: translateX(0) scale(1); }
    }
    #kai-btn { 
      background: #0d0e12eb; 
      color: var(--accent, #e5d1b2); 
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.15)); 
      border-radius: 50%; 
      width: 60px; 
      height: 60px; 
      cursor: pointer; 
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px rgba(255, 255, 255, 0.15), 0 0 24px rgba(229, 209, 178, 0.25); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.24, 1); 
      backdrop-filter: blur(20px); 
      -webkit-backdrop-filter: blur(20px); 
    }
    #kai-btn:hover { 
      transform: translateY(-3px) scale(1.06); 
      border-color: var(--accent, #e5d1b2); 
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.65), inset 0 1px rgba(255, 255, 255, 0.25), 0 0 34px rgba(229, 209, 178, 0.45); 
      color: #fff; 
    }
    #kai-btn svg { 
      width: 28px; 
      height: 28px; 
      transition: transform 0.3s ease; 
    }
    #kai-btn:hover svg { 
      transform: rotate(6deg) scale(1.1); 
    }
    #kai-window { 
      display: none; 
      width: 400px; 
      max-width: calc(100vw - 40px);
      height: 540px; 
      background: #0f1014f5; 
      backdrop-filter: blur(26px) saturate(140%); 
      -webkit-backdrop-filter: blur(26px) saturate(140%); 
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.12)); 
      border-radius: 20px; 
      flex-direction: column; 
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75), inset 0 1px rgba(255, 255, 255, 0.1); 
      overflow: hidden; 
      position: absolute; 
      bottom: 74px; 
      right: 0; 
      animation: kaiSlideUp 0.3s cubic-bezier(0.16, 0.8, 0.24, 1); 
    }
    @keyframes kaiSlideUp { 
      from { opacity: 0; transform: translateY(14px) scale(0.96); } 
      to { opacity: 1; transform: translateY(0) scale(1); } 
    }
    #kai-header { 
      padding: 16px 18px; 
      background: rgba(255, 255, 255, 0.03); 
      border-bottom: 1px solid rgba(255, 255, 255, 0.08); 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    }
    #kai-header-left { 
      display: flex; 
      align-items: center; 
      gap: 12px; 
    }
    #kai-header-avatar { 
      width: 36px; 
      height: 36px; 
      border-radius: 10px; 
      background: rgba(229, 209, 178, 0.1); 
      border: 1px solid rgba(229, 209, 178, 0.25); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      color: var(--accent, #e5d1b2); 
    }
    #kai-header-avatar svg { 
      width: 22px; 
      height: 22px; 
    }
    #kai-header-title { 
      font-family: var(--font-display, 'Fraunces', serif); 
      font-weight: 600; 
      font-size: 16px; 
      color: var(--heading, #e1e9e5); 
      letter-spacing: -0.2px; 
      line-height: 1.2;
    }
    #kai-header-subtitle { 
      font-family: var(--font-mono, monospace); 
      font-size: 10.5px; 
      color: var(--accent, #e5d1b2); 
      letter-spacing: 0.8px; 
      text-transform: uppercase; 
    }
    #kai-close { 
      background: transparent; 
      border: 1px solid transparent; 
      color: var(--text-dim, #8a9099); 
      cursor: pointer; 
      width: 30px; 
      height: 30px; 
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      font-size: 15px; 
      transition: all 0.2s ease; 
    }
    #kai-close:hover { 
      background: rgba(255, 255, 255, 0.08); 
      border-color: rgba(255, 255, 255, 0.15); 
      color: #fff; 
    }
    #kai-messages { 
      flex: 1; 
      padding: 18px; 
      overflow-y: auto; 
      display: flex; 
      flex-direction: column; 
      gap: 14px; 
      scrollbar-width: thin; 
      scrollbar-color: rgba(229, 209, 178, 0.25) transparent; 
    }
    .msg { 
      padding: 14px 18px; 
      border-radius: 16px; 
      max-width: 90%; 
      font-size: 13.5px; 
      line-height: 1.6; 
      word-wrap: break-word; 
    }
    .msg.bot { 
      background: rgba(255, 255, 255, 0.04); 
      color: #d1d5db; 
      align-self: flex-start; 
      border-bottom-left-radius: 4px; 
      border: 1px solid rgba(255, 255, 255, 0.08); 
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25); 
    }
    .msg.bot strong { 
      color: var(--heading, #f3f4f6); 
      font-weight: 600; 
    }
    .msg.bot em { 
      color: var(--accent, #e5d1b2); 
      font-style: normal; 
    }
    .msg.bot code { 
      background: rgba(229, 209, 178, 0.12); 
      color: var(--accent, #e5d1b2); 
      padding: 2px 6px; 
      border-radius: 4px; 
      font-family: var(--font-mono, monospace); 
      font-size: 12px; 
    }
    .msg-section-header {
      font-family: var(--font-display, 'Fraunces', serif);
      font-size: 14px;
      font-weight: 600;
      color: var(--accent, #e5d1b2);
      margin: 10px 0 6px 0;
      letter-spacing: -0.2px;
    }
    .msg-section-header:first-child {
      margin-top: 0;
    }
    .msg.bot p { 
      margin: 0 0 10px 0; 
    }
    .msg.bot p:last-child { 
      margin-bottom: 0; 
    }
    .msg.bot ul.msg-list { 
      margin: 8px 0 10px 18px; 
      padding: 0; 
      list-style-type: disc; 
    }
    .msg.bot ul.msg-list li { 
      margin-bottom: 8px; 
      line-height: 1.55; 
      padding-left: 4px;
    }
    .msg.bot ul.msg-list li:last-child { 
      margin-bottom: 0; 
    }
    .msg.bot ul.msg-list li::marker { 
      color: var(--accent, #e5d1b2); 
      font-size: 1.15em;
    }
    .msg.user { 
      background: linear-gradient(135deg, #e5d1b2, #f5e2c6); 
      color: #12100a; 
      font-weight: 500; 
      align-self: flex-end; 
      border-bottom-right-radius: 4px; 
      box-shadow: 0 4px 16px rgba(229, 209, 178, 0.18); 
    }
    #kai-input-area { 
      display: flex; 
      padding: 14px 16px; 
      border-top: 1px solid rgba(255, 255, 255, 0.08); 
      background: rgba(0, 0, 0, 0.35); 
      gap: 10px; 
      align-items: center; 
    }
    #kai-input { 
      flex: 1; 
      background: rgba(255, 255, 255, 0.04); 
      border: 1px solid rgba(255, 255, 255, 0.12); 
      padding: 11px 14px; 
      color: #fff; 
      font-family: var(--font-body, 'Inter', sans-serif); 
      font-size: 13.5px; 
      border-radius: 10px; 
      outline: none; 
      transition: all 0.2s ease; 
    }
    #kai-input:focus { 
      border-color: var(--accent, #e5d1b2); 
      background: rgba(255, 255, 255, 0.07); 
      box-shadow: 0 0 14px rgba(229, 209, 178, 0.15); 
    }
    #kai-input::placeholder { 
      color: var(--text-dim, #8a9099); 
    }
    #kai-send { 
      background: linear-gradient(135deg, #e5d1b2, #f5e2c6); 
      color: #12100a; 
      border: none; 
      padding: 11px 18px; 
      border-radius: 10px; 
      cursor: pointer; 
      font-family: var(--font-mono, monospace); 
      font-size: 11.5px; 
      font-weight: 600; 
      letter-spacing: 0.6px; 
      text-transform: uppercase; 
      transition: all 0.2s ease; 
      box-shadow: 0 4px 14px rgba(229, 209, 178, 0.2); 
    }
    #kai-send:hover { 
      transform: translateY(-1px); 
      box-shadow: 0 6px 18px rgba(229, 209, 178, 0.35); 
    }
    #kai-send:active { 
      transform: translateY(0); 
    }
  `;

  const sheet = document.createElement('style');
  sheet.innerHTML = styles;
  document.head.appendChild(sheet);

  function parseMarkdown(md) {
    if (!md) return '';
    
    // 1. Escape HTML
    let html = md
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Bold (**text** or __text__)
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // 3. Italic (*text* or _text_)
    html = html.replace(/(^|[^*])\*(?!\*)([^*]+)\*(?!\*)/g, '$1<em>$2</em>');

    // 4. Inline code (`code`)
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // 5. Structure lines into paragraphs, section headers, and lists
    const rawLines = html.split(/\r?\n/);
    let inList = false;
    let result = [];

    for (let i = 0; i < rawLines.length; i++) {
      let line = rawLines[i].trim();
      if (!line) continue;

      if ((line.endsWith(':') && !/^[-*•\d]/.test(line)) || /^###?\s+/.test(line)) {
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        let cleanHeader = line.replace(/^###?\s+/, '');
        result.push(`<div class="msg-section-header">${cleanHeader}</div>`);
        continue;
      }

      if (/^[-*•]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
        if (!inList) {
          result.push('<ul class="msg-list">');
          inList = true;
        }
        let content = line.replace(/^[-*•\d.]+\s+/, '');
        result.push(`<li>${content}</li>`);
      } else {
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        result.push(`<p>${line}</p>`);
      }
    }
    if (inList) {
      result.push('</ul>');
    }

    return result.join('');
  }

  // Sleek, agency-grade robot icon matching champagne gold theme
  const roboIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="5" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    <rect x="4" y="5" width="16" height="14" rx="4" fill="currentColor" fill-opacity="0.15" />
    <circle cx="9" cy="11" r="1.5" fill="currentColor" />
    <circle cx="15" cy="11" r="1.5" fill="currentColor" />
    <path d="M8.5 15h7" />
    <path d="M2 10v4a1 1 0 0 0 1 1h1v-6H3a1 1 0 0 0-1 1z" fill="currentColor" fill-opacity="0.2" />
    <path d="M22 10v4a1 1 0 0 1-1 1h-1v-6h1a1 1 0 0 1 1 1z" fill="currentColor" fill-opacity="0.2" />
  </svg>`;

  const container = document.createElement('div');
  container.id = 'kai-widget';
  
  container.innerHTML = `
    <div id="jarvis-bubble">
      <span>Hi, I'm <strong>Jarvis</strong>! 👋</span>
      <div id="jarvis-bubble-arrow"></div>
    </div>
    <div id="kai-window">
      <div id="kai-header">
        <div id="kai-header-left">
          <div id="kai-header-avatar">${roboIcon}</div>
          <div>
            <div id="kai-header-title">Jarvis Assistant</div>
            <div id="kai-header-subtitle">Ajay's AI Agent</div>
          </div>
        </div>
        <button id="kai-close" title="Close">✕</button>
      </div>
      <div id="kai-messages">
        <div class="msg bot"><p>Hi! I'm <strong>Jarvis</strong>, Ajay's personal AI assistant. Ask me anything about his experience, internships, or technical skills!</p></div>
      </div>
      <form id="kai-input-area">
        <input type="text" id="kai-input" placeholder="Ask about Ajay's work..." autocomplete="off">
        <button type="submit" id="kai-send">Send</button>
      </form>
    </div>
    <button id="kai-btn" title="Chat with Jarvis">${roboIcon}</button>
  `;
  document.body.appendChild(container);

  const btn = document.getElementById('kai-btn');
  const win = document.getElementById('kai-window');
  const close = document.getElementById('kai-close');
  const bubble = document.getElementById('jarvis-bubble');
  const form = document.getElementById('kai-input-area');
  const input = document.getElementById('kai-input');
  const msgs = document.getElementById('kai-messages');

  let open = false;
  btn.onclick = () => { 
    open = !open; 
    win.style.display = open ? 'flex' : 'none'; 
    if (bubble) bubble.style.display = open ? 'none' : 'flex';
    if (open) input.focus(); 
  };
  close.onclick = () => { 
    open = false; 
    win.style.display = 'none'; 
    if (bubble) bubble.style.display = 'flex';
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.textContent = text;
    msgs.appendChild(userDiv);
    
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg bot';
    typingDiv.id = 'kai-typing';
    typingDiv.textContent = 'Thinking...';
    msgs.appendChild(typingDiv);
    msgs.scrollTop = msgs.scrollHeight;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      const typingEl = document.getElementById('kai-typing');
      if (typingEl) typingEl.remove();
      
      const botDiv = document.createElement('div');
      botDiv.className = 'msg bot';
      if (data.reply) {
        botDiv.innerHTML = parseMarkdown(data.reply);
      } else if (data.error) {
        botDiv.textContent = '⚠️ ' + data.error;
      }
      msgs.appendChild(botDiv);
    } catch (err) {
      const typingEl = document.getElementById('kai-typing');
      if (typingEl) typingEl.remove();
      const botDiv = document.createElement('div');
      botDiv.className = 'msg bot';
      botDiv.textContent = 'Error reaching backend API. Check console.';
      msgs.appendChild(botDiv);
      console.error(err);
    }
    msgs.scrollTop = msgs.scrollHeight;
  };
})();
