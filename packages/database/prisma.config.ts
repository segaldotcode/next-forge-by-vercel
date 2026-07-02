import { config } from "dotenv";
import { resolve } from "node:path";
import { defineConfig } from "prisma/config";

// Load .env.local first, then .env as fallback
config({ path: resolve(__dirname, ".env.local") });
config({ path: resolve(__dirname, ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
