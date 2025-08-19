# Notion ↔︎ GPT Writer (No-Code-ish Deploy)

This folder is a ready-made project to deploy on **Vercel**. It creates an API endpoint that:
1) Uses GPT to generate text; 2) Writes it into your Notion database as a new page.

---

## What you need (once)
- A Notion integration token (**Settings & members → Connections → Develop or Manage integrations → New integration**). Copy the token (starts with `secret_...`).
- Share your target Notion **database** with that integration (open the DB → **Share** → invite your integration → *Can edit*).
- Your **database ID** (open DB as full page → copy the URL → the 32-char ID after the last `/`).

---

## Easiest path (Vercel dashboard)
1. Go to https://vercel.com → sign in.
2. Click **+ New Project** → **Import** using **"Upload"** (drag this entire folder in). If you don't see Upload, zip the folder and drag the zip—Vercel will unpack it.
3. After the project is created, open **Settings → Environment Variables** and add:
   - `OPENAI_API_KEY` = your OpenAI API key
   - `NOTION_TOKEN` = your Notion integration token
   - `NOTION_DATABASE_ID` = your Notion database ID
4. Go to **Deployments** and redeploy (or click **Redeploy**).

---

## Test your endpoint
Replace `<YOUR-APP>` with your Vercel project domain:
```bash
curl -X POST https://<YOUR-APP>.vercel.app/api/write-to-notion   -H "Content-Type: application/json"   -d '{"title":"Area Code Recap","prompt":"Write a sharp 120-word recap of the Area Code Games—no fluff."}'
```
- If successful, the response shows `{ ok: true, pageId: "..." }` and a new page appears in your Notion DB.

---

## Local dev (optional)
1. Install Node.js (18+). Then run:
```bash
npm install
cp .env.example .env   # fill in values in .env
npm run start          # checks required env vars exist
```
2. If you want local serverless emulation:
```bash
npm i -g vercel
vercel dev
```
Then POST to `http://localhost:3000/api/write-to-notion`.

---

## Common errors
- **403 / permission** → Share the DB with your integration **(Can edit)**.
- **validation_error** → Your DB must have a **title** property named **Name**. Rename in code or adjust your DB.
- **rate_limited** → Notion is ~3 requests/sec per integration. Keep calls low; batch blocks.

---

## Customize (optional)
- Map extra properties (Status/Tags) in `api/write-to-notion.js` under `properties`.
- Append to an existing page using `notion.blocks.children.append(...)`.

---

## Safety
- Never commit `.env` to Git. We included `.gitignore` for you.
- Use `.env.example` as a template; set real values only in Vercel env or local `.env`.
