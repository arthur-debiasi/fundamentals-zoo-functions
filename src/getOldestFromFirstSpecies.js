const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

const findSpecieById = (specieId) => species.find(({ id }) => id === specieId);

const findEmployeeById = (employeeId) => employees.find(({ id }) => id === employeeId);

function getOldestFromFirstSpecies(id) {
  return Object.values(findSpecieById(findEmployeeById(id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
