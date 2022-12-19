const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const { employees } = data;
  const firstNameFind = employees.find(({ firstName }) => firstName === employeeName);
  const lastNameFind = employees.find(({ lastName }) => lastName === employeeName);
  if (firstNameFind) {
    return firstNameFind;
  }
  return lastNameFind;
}

const actual = getEmployeeByName('Emery');
console.log(actual);

module.exports = getEmployeeByName;
