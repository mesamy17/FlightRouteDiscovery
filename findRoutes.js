const data = require("./data/input.json");
const r = require("./helpers/readData");
const g = require("./helpers/getPossibilities");
const cal = require("./helpers/calculateTotal");

function findRoutes(source, destination, maxStops) {
  try {
    if (maxStops <= 0) {
      throw new Error("invalid number of stops");
    }
    if (maxStops > 5) {
      throw new Error("to many stops");
    }
    if (typeof source != "string") {
      throw new Error("invalid source location");
    }
    if (typeof destination != "string") {
      throw new Error("invalid destination location");
    }

    let op = g.getFlightRoutes(source, destination, maxStops);

    let finalOp = cal.calculate(op, maxStops);

    return finalOp;
  } catch (error) {
    return "Unable to find routes";
  }
}

console.log(findRoutes("Mumbai", "Kolkata", 3));
