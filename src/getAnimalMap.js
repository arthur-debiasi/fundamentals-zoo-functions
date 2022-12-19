const data = require('../data/zoo_data');

const { species } = data;
const allLocations = ['NE', 'NW', 'SE', 'SW'];

const getSpeciesByLocation = (location) => ({ [location]: species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name) });

const getSpeciesByAllLocations = () => allLocations
  .reduce((acc, cur) => {
    Object.assign(acc, getSpeciesByLocation(cur));
    return acc;
  }, {});

const getResidentsBySpeciesSort = (specieName, options) => {
  const { residents } = species.find((specie) => specie.name === specieName);
  if (options.sex && options.sorted) {
    return residents.filter((resident) => resident.sex === options.sex)
      .map((resident) => resident.name).sort();
  }
  if (options.sorted) {
    return residents.map((resident) => resident.name).sort();
  }
  if (options.sex) {
    return residents.filter((resident) => resident.sex === options.sex)
      .map((resident) => resident.name);
  }
  return residents.map((resident) => resident.name);
};

const getAnimalsByLocationSort = (location, options) => ({ [location]: species
  .filter((specie) => specie.location.includes(location))
  .map((specie) => ({ [specie.name]: getResidentsBySpeciesSort(specie.name, options) })) });

const allLocationsMapSort = (options) => allLocations
  .reduce((acc, cur) => Object.assign(acc, getAnimalsByLocationSort(cur, options)), {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return getSpeciesByAllLocations();
  }
  return allLocationsMapSort(options);
}

module.exports = getAnimalMap;
