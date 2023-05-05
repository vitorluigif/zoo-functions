const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const response = species.filter((animal) => animal.id === findEmployee)[0].residents
    .reduce((acc, crr) => (acc.age > crr.age ? acc : crr));
  return Object.values(response);
};
module.exports = getOldestFromFirstSpecies;
