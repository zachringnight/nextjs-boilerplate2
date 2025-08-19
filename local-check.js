import 'dotenv/config';

function requireEnv(name) {
  if (!process.env[name]) {
    console.error(`[X] Missing env var: ${name}`);
    process.exit(1);
  } else {
    console.log(`[✓] Found ${name}`);
  }
}

['OPENAI_API_KEY','NOTION_TOKEN','NOTION_DATABASE_ID'].forEach(requireEnv);
console.log('All required environment variables are present.');
