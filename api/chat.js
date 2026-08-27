export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: OpenRouter API key missing' });
  }

  const systemPrompt = `You are Jarvis, Ajay Jaikrishnan's personal AI assistant. 
Ajay is an AI/ML Engineer from Chennai, India.
Resume Profile:
- Education: B.E. in Mechanical Engineering (2022-2026), St. Joseph's Institute of Technology (CGPA: 7.79/10).
- Internships & Experience:
  1. Karma Com Solidarité (KCS) (Dec 2025 - May 2026): AI Engineer Intern (Volunteering) - Built on-premise role-based RAG assistant for volunteer tracking (50+ users) with N8N, Qdrant, LangGraph, Docker.
  2. Stellantis N.V (June 2025 - Dec 2025): Product Development Intern - Multi-format document parameter extraction engine with SpaCy NLP (96% accuracy), won 1st Place in Stellantis VPE Innovation Challenge.
  3. Wikasta Technical and Business Solutions (June 2025 - July 2025): AI/ML Software Engineer Intern - Shipped duplicate detection pipeline (95% accuracy) & OCR resume parser.
  4. Zetheta Algorithms (June 2025 - July 2025): AI Engineer Intern - Architected multi-agent LangGraph evaluation framework with Evidently & real-time fact verification.
  5. DYNX Technologies (July 2024 - Sept 2024): AI/ML Engineer Intern - Designed NLP virtual assistant.
  6. Getmax Healthcare (Jan 2024 - May 2024): Data Scientist Intern - Healthcare analytics & dashboard reporting.
- Skills & Tech Stack: Python, Java, LangChain, LangGraph, Ollama, RAG, Multi-Agent Systems, Smolagents, LlamaCpp, Prompt Engineering, Qdrant, Chroma, PostgreSQL + PgVector, FAISS, Docker, N8N, Streamlit, FastAPI.
- Achievements: NVIDIA Building RAG Agents certification, Oracle GenAI Professional 2025, Stellantis 1st Place in VPE Innovation Challenge.

Formatting Rules:
- Be concise, intelligent, professional, and friendly.
- Format all experiences, projects, or list items on a SINGLE clean bullet point per entry:
  - **Company Name** — *Role (Dates)*: Description of work.
- Never output company names and their roles on separate bullet points.
- Use clear spacing and bold headers for sections when organizing long replies.`;

  const models = [
    process.env.OPENROUTER_MODEL || 'google/gemma-4-26b-a4b-it:free',
    'openrouter/free',
    'google/gemma-4-31b-it:free'
  ];

  for (const model of models) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://ajay-portfolio.vercel.app',
          'X-Title': 'Ajay J Portfolio'
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return res.status(200).json({ reply });
        }
      } else {
        console.warn(`Model ${model} returned HTTP ${response.status}. Trying next available model...`);
      }
    } catch (err) {
      console.warn(`Error calling model ${model}:`, err.message);
    }
  }

  res.status(500).json({ error: 'All AI model endpoints are currently busy. Please retry in a moment.' });
}
