const fs = require("fs");

function read() {
  try {
    if (!fs.existsSync("./data/input.json")) {
      return null;
    }

    let op = JSON.parse(fs.readFileSync("./data/input.json", "utf8"));
    return op;
  } catch (error) {
    console.log("Data no found : ", "./data/input.json");
    return null;
  }
}

module.exports = { read };
