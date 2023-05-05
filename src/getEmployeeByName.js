const data = require('../data/zoo_data');

const { employees } = data;
const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employee = employees.find((empregado) => (
    empregado.firstName === employeeName || empregado.lastName === employeeName));
  return employee;
};
module.exports = getEmployeeByName;
