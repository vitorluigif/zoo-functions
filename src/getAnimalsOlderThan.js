const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (specie, age) => (
  species.find((element) => element.name === specie).residents
    .every((animal) => animal.age >= age)
);
module.exports = getAnimalsOlderThan;
