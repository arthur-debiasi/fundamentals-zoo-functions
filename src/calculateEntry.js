const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const allEntrants = entrants.map(((entrant) => entrant.age));
  const childEntrants = allEntrants.filter((entrant) => entrant < 18).length;
  const adultEntrants = allEntrants.filter((entrant) => entrant >= 18 && entrant < 50).length;
  const seniorEntrants = allEntrants.filter((entrant) => entrant >= 50).length;
  return { child: childEntrants, adult: adultEntrants, senior: seniorEntrants };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const { adult, senior, child } = data.prices;
  const { adult: aPrice, senior: sPrice, child: cPrice } = countEntrants(entrants);
  return adult * aPrice + senior * sPrice + child * cPrice;
}

module.exports = { calculateEntry, countEntrants };
