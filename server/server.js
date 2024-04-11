import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hi you are viewing my guestbook database server")
});



app.listen(8080, function () {
    console.log("App is running on port 8080");
  });