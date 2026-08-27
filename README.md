# Ajay J — AI/ML Engineer Portfolio

Personal portfolio and interactive AI assistant (**Jarvis**) showcasing production RAG systems, multi-agent evaluation pipelines, and document intelligence workflows.

---

## 🚀 Features

- **Liquid Glass Aesthetic:** Dark luxury aesthetic with champagne gold accents (`#e5d1b2`), custom typography (Fraunces + Inter + JetBrains Mono), and interactive liquid-card hover microinteractions.
- **Jarvis AI Assistant:** Embedded custom-built chatbot powered by **OpenRouter** and free LLMs (`google/gemma-4-26b-a4b-it:free`, `openrouter/free`). Provides instant, context-aware answers regarding Ajay's skills, internships, and projects.
- **Serverless Architecture:** Ready for instant deployment on **Netlify** (or Vercel / Node.js) with zero sensitive API keys exposed to the client.

---

## 🛠️ Deploy to Netlify

1. Fork or push this repository to your GitHub account.
2. In the [Netlify Dashboard](https://app.netlify.com/):
   - Click **Add new site** > **Import an existing project**.
   - Select your GitHub repository.
   - Set **Publish directory** to `dist`.
3. In **Site Configuration > Environment variables**, add:
   - `OPENROUTER_API_KEY`: `your-openrouter-api-key`
   - `OPENROUTER_MODEL` (optional): `google/gemma-4-26b-a4b-it:free`
4. Click **Deploy Site**!

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/ajayjai30/ajay-portfolio.git

# Set your API key in .env
echo "OPENROUTER_API_KEY=your_key_here" > .env

# Run local development server
node --env-file=.env server.js
```

Open [http://localhost:8080](http://localhost:8080) to view locally.
