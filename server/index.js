const express = require("express");
const phones = require("./phones.json");
const app = express();
const cors = require("cors");

// const hostname = "localhost";
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});

// let whitelist = ['http://localhost:5000', 'http://localhost:3000'];

// let corsOptions = {
//   origin: function(origin, callback) {
//     let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(null, originIsWhitelisted);
//   },
//   credentials: true
// };

// app.use(cors(corsOptions));
app.use(cors());

app.get("/phones", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Data retrieved successfully",
    data: phones,
  });
});
