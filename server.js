const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send("index.html")
);

app.get("/resume", (req, res) =>
  res.send("assets/pdf/resume.pdf")
);

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);