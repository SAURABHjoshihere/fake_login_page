// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
// res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });





//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userisAuthorised =true;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
 if(userisAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
    console.log(req.body);
 }
 else{
    res.sendFile(__dirname + "/public/index.html");
 }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
