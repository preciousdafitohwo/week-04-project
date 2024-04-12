import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.use(express.json());

import Database from "better-sqlite3";
const db = new Database("database.db");

app.get("/", function (req, res) {
  res.send("Hi you are viewing my guestbook database server");
});

app.get("/messages", function (request, response) {
  const messages = db.prepare("SELECT * FROM guestbook").all();
  response.json(messages);
});
app.post("/message", function (req, res) {
  //inserting the users post into the database
  const newMessage = db.prepare(
    `INSERT INTO guestbook (name, message) VALUES (?, ?)`
  );
  newMessage.run(req.body.name, req.body.message);
});

// app.delete("/delete", function (req, res){
//     const deleteMessage = db.prepare(`DELETE FROM guestbook WHERE (id) VALUE (?)
//     `);
//     deleteMessage.run(req.body.id);
    
// });

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
