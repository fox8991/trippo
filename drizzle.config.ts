import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local"});

export default defineConfig({
    schema: "./lib/schema.ts",
    verbose: true,
    strict: true,
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }
});