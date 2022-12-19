const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
  // return managers.some((managerId) => managerId === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees = [];
  const { employees } = data;
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      managedEmployees.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return managedEmployees;
}

module.exports = { isManager, getRelatedEmployees };
