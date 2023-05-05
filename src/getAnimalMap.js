const { species } = require('../data/zoo_data');

const getSpeciesNames = (obj, specie) => {
  let { residents } = specie;
  if (obj.sex) residents = residents.filter((resident) => resident.sex === obj.sex);
  residents = residents.map((resident) => resident.name);
  if (obj.sorted) residents = residents.sort();
  return residents;
};
const getAnimalMap = (obj) => {
  if (!obj || !('includeNames' in obj) || obj.includeNames === false) {
    return species.reduce(
      (acc, specie) => {
        acc[specie.location] = [...acc[specie.location] || [], (specie.name)];
        return acc;
      },
      {},
    );
  }
  return species.reduce((acc, specie) => {
    if (!(specie.location in acc)) acc[specie.location] = [];
    acc[specie.location] = [
      ...acc[specie.location],
      { [specie.name]: getSpeciesNames(obj, specie) },
    ];
    return acc;
  }, {});
};
module.exports = getAnimalMap;
