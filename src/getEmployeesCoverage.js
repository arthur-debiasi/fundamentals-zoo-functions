const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const animalNameById = (animalId) => species.find((specie) => specie.id === animalId).name;
const animalLocationById = (animalId) => species.find((specie) => specie.id === animalId).location;

const allEmployeeNames = employees
  .map((employee) => employee.firstName).concat(employees
    .map((employee) => employee.lastName));
const allEmployeeIds = employees.map((employee) => employee.id);

const employeeObj = (employee) => ({ id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((animalId) => animalNameById(animalId)),
  locations: employee.responsibleFor.map((animalId) => animalLocationById(animalId)) });

const getEmployeesCoverageByName = (nameT) => employeeObj(employees
  .find(({ firstName, lastName }) => firstName === nameT.name || lastName === nameT.name));

const getEmployeesCoverageById = (nameTag) => employeeObj(employees
  .find(({ id }) => id === nameTag.id));

const idVerification = (employeeTag) => {
  if (!allEmployeeIds.includes(employeeTag.id)) {
    throw new Error('Informações inválidas');
  }
};

const nameVerification = (employeeTag) => {
  if (!allEmployeeNames.includes(employeeTag.name)) {
    throw new Error('Informações inválidas');
  }
};

function getEmployeesCoverage(employeeTag) {
  if (employeeTag === undefined) {
    return employees.map((employee) => employeeObj(employee));
  }
  if (employeeTag.name) {
    nameVerification(employeeTag);
    return getEmployeesCoverageByName(employeeTag);
  }
  if (employeeTag.id) {
    idVerification(employeeTag);
    return getEmployeesCoverageById(employeeTag);
  }
}

module.exports = getEmployeesCoverage;
