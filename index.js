const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/sanjay", (req, res) => {
  const sanjay = {
    info: "My name is Sanjay.",
    roll: 6,
  };
  res.send(sanjay);
});

app.get("/paji", (req, res) => {
  const value = req.query.sn + "_hello";

  res.send({ value });
});

app.listen(PORT, () => {
  console.log("Console is listening on PORT", PORT);
});
