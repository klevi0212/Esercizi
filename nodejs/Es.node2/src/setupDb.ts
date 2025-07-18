import db from "./db.js";
export default async function setupDb() {
  await db.none(`
        DROP TABLE IF EXISTS planets;
        CREATE TABLE planets (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL)`);
  await db.none("INSERT INTO planets (name) VALUES ('Earth'), ('Mars')");
  console.log("Database completato");
}
