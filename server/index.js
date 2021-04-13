const express = require("express");
const phones = require("./phones.json");
const app = express();
const cors = require("cors");

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});

app.use(cors());

app.get("/phones", (req, res) => {

  res.status(200).send({
    success: "true",
    message: "Data collected",
    data: phones,
  });
  
});
