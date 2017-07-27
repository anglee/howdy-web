import _ from 'lodash';

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
var findItinerary0 = function(tickets) {
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

//--------------------------------------------------------------------------------------------------

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary1 = function(tickets) {

  const ticketMap = {};
  tickets.forEach((ticket) => {
    const from = ticket[0];
    const to = ticket[1];
    ticketMap[from] = ticketMap[from] || [];
    ticketMap[from].push({
      destination: to,
      used: false
    });
  });

  for (var prop in ticketMap) {
    ticketMap[prop] = _.sortBy(ticketMap[prop], 'destination');
  }

  let usedTicketCount = 0;
  const doFindItinerary = (startAirport) => {
    if (usedTicketCount === tickets.length) {
      return [startAirport];
    }
    if (!ticketMap[startAirport]) {
      return null;
    }

    for (let ticket of ticketMap[startAirport]) {
      if (ticket.used === false) {
        ticket.used = true;
        usedTicketCount++;
        const itinerary = doFindItinerary(ticket.destination);
        if (!itinerary) {
          ticket.used = false;
          usedTicketCount--;
        } else {
          return [startAirport, ...itinerary];
        }
      }
    }
    return null;
  };

  return doFindItinerary('JFK');
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) { // similar to Topological sort
  const ticketMap = {};
  tickets.forEach((ticket) => {
    const from = ticket[0];
    const to = ticket[1];
    ticketMap[from] = ticketMap[from] || []; // putIfAbsent
    ticketMap[from].push(to);
  });

  for (var prop in ticketMap) {
    ticketMap[prop].sort();
  }

  const visited = [];
  const dfs = (airport) => {
    while (ticketMap[airport] && ticketMap[airport].length) {
      dfs(ticketMap[airport].shift());
    }
    visited.unshift(airport);
  };

  dfs("JFK");
  return visited;
};

export default findItinerary;