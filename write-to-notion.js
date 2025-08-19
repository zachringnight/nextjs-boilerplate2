import { Client as Notion } from "@notionhq/client";
import OpenAI from "openai";

const notion = new Notion({ auth: process.env.NOTION_TOKEN });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const DB_ID = process.env.NOTION_DATABASE_ID;

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Use POST" });
    }

    const { title = "GPT Draft", prompt = "Write a short NIL trend update in 120 words." } = req.body ?? {};

    // 1) Generate content with GPT
    const chat = await openai.chat.completions.create({
      model: "gpt-5.1",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });
    const text = chat.choices?.[0]?.message?.content?.trim() || "No content generated.";

    // 2) Create a Notion page in your database
    const page = await notion.pages.create({
      parent: { database_id: DB_ID },
      properties: {
        Name: { title: [{ text: { content: title } }] }
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: { rich_text: [{ type: "text", text: { content: text } }] }
        }
      ]
    });

    return res.status(200).json({ ok: true, pageId: page.id });
  } catch (e) {
    const hint =
      e.message?.includes("validation_error") ? "Check Notion DB property names/types." :
      (e.message?.includes("unauthorized") || e.message?.includes("permission")) ? "Share the DB with your Notion integration (Can edit)." :
      e.message?.includes("rate_limited") ? "Slow requests (~3 rps) or batch blocks." :
      null;

    return res.status(500).json({ ok: false, error: e.message, hint });
  }
}
