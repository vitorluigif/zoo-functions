const { species, employees } = require('../data/zoo_data');

const getSpeciesLocal = (responsible) => responsible.map((specieId) => species.find(({ id }) =>
  id === specieId).location);

const findSpecies = (responsible) => responsible.map((specieId) =>
  species.find(({ id }) => id === specieId).name);

const verifyEmployee = ({ name, id }) =>
  employees.some(({ firstName, lastName, id: idEmployee }) =>
    name === firstName || name === lastName || id === idEmployee);

const relatory = () => employees
  .map(({ responsibleFor, firstName, lastName, id: idEmployee }) => ({
    id: idEmployee,
    fullName: `${firstName} ${lastName}`,
    species: findSpecies(responsibleFor),
    locations: getSpeciesLocal(responsibleFor),
  }));

const getEmployeesCoverage = (employee) => {
  const Orelatory = relatory();
  if (!employee) return Orelatory;
  if (!verifyEmployee(employee)) {
    throw new Error('Informações inválidas');
  }
  const reportFind = Orelatory
    .find(({ fullName, id }) =>
      id === employee.id || fullName.includes(employee.name));
  return reportFind;
};

module.exports = getEmployeesCoverage;
