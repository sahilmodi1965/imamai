import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'imamai.db');
const db = new Database(dbPath);

// Create conversations table
db.exec(`
  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    source_refs TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export function saveConversation(question: string, answer: string) {
  const stmt = db.prepare(`
    INSERT INTO conversations (question, answer) 
    VALUES (?, ?)
  `);
  return stmt.run(question, answer);
}

export function getRecentConversations(limit = 10) {
  const stmt = db.prepare(`
    SELECT * FROM conversations 
    ORDER BY created_at DESC 
    LIMIT ?
  `);
  return stmt.all(limit);
}

export function searchConversations(query: string) {
  const stmt = db.prepare(`
    SELECT * FROM conversations 
    WHERE question LIKE ? OR answer LIKE ?
    ORDER BY created_at DESC
  `);
  return stmt.all(`%${query}%`, `%${query}%`);
}

export default db;
