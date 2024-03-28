const moment = require("moment");
const { random } = require("./utils");
const panels = require("./data.js");

function generatePanelData(panels) {
  return panels.data.map((panel) => ({
    ...panel,
    time: moment().toISOString(),
    wattage: random(0, 400),
    voltage: random(0, 20),
  }));
}

exports.handler = async function (event, context) {
  const freshData = generatePanelData(panels);
  return {
    statusCode: 200,
    body: JSON.stringify(freshData),
  };
};
