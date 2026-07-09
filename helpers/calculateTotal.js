function calculate(op, maxStops) {
  let result = [];

  for (let i = 0; i < op.length; i++) {
    let stops = [];
    let totalDistance = 0;
    let totalDuration = 0;
    let totalFare = 0;
    let flightNo = [];
    let acc;

    for (let j = 0; j < op[i].length; j++) {
      stops.push(op[i][j].from);
      acc = j;
    }
    stops.push(op[i][acc].to);

    for (let j = 0; j < op[i].length; j++) {
      totalDistance = totalDistance + op[i][j].distance;
      totalDuration = totalDuration + op[i][j].duration;
      totalFare = totalFare + op[i][j].baseFare;
      flightNo.push(op[i][j].flightId);
    }

    result.push({
      cities: stops,
      flights: flightNo,
      stops: stops.length - 2,
      distance: totalDistance,
      flyDuration: totalDuration,
      fare: totalFare,
    });
  }
  console.log(result.length);

  return result;
}

module.exports = { calculate };
