import Database from "better-sqlite3"
import { app } from "electron";
import path from "path"
import { runMigrations } from "./migrations";

let db: Database.Database;

export const initDb = () => {
    const dbPath = path.join(app.getPath("userData"), "mock-api-studio.db")
    console.log(dbPath)
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
    runMigrations(db)
}

export const getDb = () => {
    if (!db) {
        throw new Error("DB not initialized")
    }

    return db;
}