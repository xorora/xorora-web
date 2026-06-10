import { type NeonQueryFunction, neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export type Database = NeonHttpDatabase<typeof schema>;

let sqlClient: NeonQueryFunction<false, false> | undefined;
let database: Database | undefined;

function createDb(): Database {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL environment variable is not set. Add it to .env.local for local development.",
    );
  }

  sqlClient ??= neon(url);
  database ??= drizzle(sqlClient, { schema });
  return database;
}

/** Lazy Neon + Drizzle singleton. Defers connection until the first query. */
export function getDb(): Database {
  return createDb();
}

export const db = new Proxy({} as Database, {
  get(_target, prop, receiver) {
    const instance = createDb();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export { schema };
