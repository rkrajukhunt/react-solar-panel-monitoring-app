const moment = require("moment");
const express = require("express");
const app = express();
const cors = require("cors");

const port = 9000;
const panels = require("./data.js");

// We can remove the 'freshData' array and compute the fresh data directly when handling requests.
function generatePanelData(panels) {
  return panels.data.map((panel) => ({
    ...panel,
    time: moment().toISOString(),
    wattage: random(0, 400),
    voltage: random(0, 20),
  }));
}

function random(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}

app.use(cors()); // Use cors middleware to enable CORS for all routes

app.get("/", (req, res) => {
  const freshData = generatePanelData(panels);
  res.send(freshData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
