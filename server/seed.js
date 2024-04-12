import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
	CREATE TABLE IF NOT EXISTS guestbook (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
        message TEXT
	)
`);
const postMessage = db.prepare(`
INSERT INTO guestbook (name, message) VALUES (?, ?)
`);

postMessage.run("Alan", "im delighted to be here!");
postMessage.run("Dave", "This is my 3rd time here today");
postMessage.run("Peter", "Hello everyone");

