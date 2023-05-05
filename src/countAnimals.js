const { species: animals } = require('../data/zoo_data');

const countAnimals = (specie = {}) => {
  const getSpecies = animals.reduce((acc, { name, residents }) => {
    acc[name] = specie.sex ? residents.filter((animal) => animal.sex === specie.sex)
      .length : residents.length;
    return acc;
  }, {});
  return specie.species ? getSpecies[specie.species] : getSpecies;
};
module.exports = countAnimals;
