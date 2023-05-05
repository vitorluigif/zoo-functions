const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const obj = {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
  return obj;
};
const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const valueGroup = countEntrants(entrants);
  const totalEntries = Object.keys(valueGroup).reduce((acc, crr) =>
    acc + valueGroup[crr] * prices[crr], 0);
  return totalEntries;
};

module.exports = { calculateEntry, countEntrants };
