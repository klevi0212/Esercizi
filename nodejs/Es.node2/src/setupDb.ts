// Do
// Add image field to planets table in the DB.
// Set POST /planets/:id/image route for file upload (planet's image).
// Store the image file locally (on disk).
// Save file path to DB (update the correct planet).
// Use
// Add image TEXT to your CREATE TABLE planets SQL query.

// Use multer library to save files to /uploads folder.

// Add image TEXT to CREATE TABLE planets SQL query (in your DB setup).

// Use this SQL query to update planet's image:

// UPDATE planets
// SET image=$2
// WHERE id=$1;

import db from "./db.js";
export default async function setupDb() {
  await db.none(`
        DROP TABLE IF EXISTS planets;
        CREATE TABLE planets (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT);
        
        DROP TABLE IF EXISTS users;
        CREATE TABLE users(
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT);
        `);
  await db.none("INSERT INTO planets (name) VALUES ('Earth'), ('Mars')");
  console.log("Database completato");
  await db.none("INSERT INTO users (username, password) VALUES ('klevi.02', 'helloworld')")
}
