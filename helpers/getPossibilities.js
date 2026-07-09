const r = require("./readData");

function getFlightRoutes(source, destination, maxStops) {
  let flights = r.read();

  let op = [];
  let temp = [];

  if (maxStops >= 1) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].from == source && flights[i].to == destination) {
        temp.push(flights[i]);
        op.push(temp);
        temp = [];
      }
    }
  }

  if (maxStops >= 2) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].from == source) {
        for (let j = 0; j < flights.length; j++) {
          if (
            flights[j].from == flights[i].to &&
            flights[j].to == destination
          ) {
            temp.push(flights[i]);
            temp.push(flights[j]);
            op.push(temp);
            temp = [];
          }
        }
      }
    }
  }

  if (maxStops >= 3) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].from == source) {
        for (let j = 0; j < flights.length; j++) {
          if (flights[j].from == flights[i].to) {
            for (let k = 0; k < flights.length; k++) {
              if (
                flights[k].from == flights[j].to &&
                flights[k].to == destination
              ) {
                temp.push(flights[i]);
                temp.push(flights[j]);
                temp.push(flights[k]);
                op.push(temp);
                temp = [];
              }
            }
          }
        }
      }
    }
  }

  if (maxStops >= 4) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].from == source) {
        for (let j = 0; j < flights.length; j++) {
          if (flights[j].from == flights[i].to) {
            for (let k = 0; k < flights.length; k++) {
              if (flights[k].from == flights[j].to) {
                for (let l = 0; l < flights.length; l++) {
                  if (
                    flights[l].from == flights[k].to &&
                    flights[l].to == destination
                  ) {
                    temp.push(flights[i]);
                    temp.push(flights[j]);
                    temp.push(flights[k]);
                    temp.push(flights[l]);
                    op.push(temp);
                    temp = [];
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (maxStops >= 5) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].from == source) {
        for (let j = 0; j < flights.length; j++) {
          if (flights[j].from == flights[i].to) {
            for (let k = 0; k < flights.length; k++) {
              if (flights[k].from == flights[j].to) {
                for (let l = 0; l < flights.length; l++) {
                  if (flights[l].from == flights[k].to) {
                    for (let m = 0; m < flights.length; m++) {
                      if (
                        flights[m].from == flights[l].to &&
                        flights[m].to == destination
                      ) {
                        temp.push(flights[i]);
                        temp.push(flights[j]);
                        temp.push(flights[k]);
                        temp.push(flights[l]);
                        temp.push(flights[m]);
                        op.push(temp);
                        temp = [];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //   console.log(op.length);

  return op;
}

module.exports = { getFlightRoutes };
