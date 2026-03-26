import Database from "better-sqlite3"

export const runMigrations = (db: Database.Database) => {
  db.exec(`CREATE TABLE IF NOT EXISTS migrations (id INTEGER PRIMARY KEY, name TEXT UNIQUE)`)
  
  // TODO move to a separate file
  const migrations = [
    { 
        name: '001_initial', 
        sql: `
            CREATE TABLE IF NOT EXISTS endpoints (
                id INTEGER PRIMARY KEY, 
                method TEXT,
                path TEXT,
                status INTEGER,
                body TEXT
            )
        ` 
    },
  ]

  for (const m of migrations) {
    const already = db.prepare('SELECT id FROM migrations WHERE name = ?').get(m.name)
    if (!already) {
      db.exec(m.sql)
      db.prepare('INSERT INTO migrations (name) VALUES (?)').run(m.name)
    }
  }

  console.info("DB migration finished")
}