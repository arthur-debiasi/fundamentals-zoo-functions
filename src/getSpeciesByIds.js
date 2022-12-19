const data = require('../data/zoo_data');

function getSpeciesByIds(...speciesIds) {
  if (!speciesIds[0]) {
    return [];
  }
  const result = [];
  const { species } = data;
  speciesIds.forEach((specieId) =>
    result.push(species.find(({ id }) => id === specieId)));

  return result;
}

module.exports = getSpeciesByIds;
