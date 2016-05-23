


const without = function (array, index) {
  var ret = array.slice();
  ret.splice(index, 1);
  return ret;
};

const doFindItinerary = function (startAirport, ticketMap, ticketCount) {
  if (ticketCount === 0) {
    return [startAirport];
  }

  var nextCities = ticketMap[startAirport];

  for (var i = 0; nextCities != null && i < nextCities.length; i++) {
    const newTicketMap = Object.assign({}, ticketMap, {
      [startAirport]: without(nextCities, i)
    });
    const itinerary = doFindItinerary(nextCities[i], newTicketMap, ticketCount - 1);
    if (itinerary != null) {
      return [startAirport, ...itinerary];
    }
  }

  return null;
};



/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const ticketMap = {};
  tickets.forEach((ticket) => {
    const from = ticket[0];
    const to = ticket[1];
    ticketMap[from] = ticketMap[from] || [];
    ticketMap[from].push(to);
  });

  for (var prop in ticketMap) {
    ticketMap[prop].sort();
  }

  return doFindItinerary('JFK', ticketMap, tickets.length);
};

export default findItinerary;