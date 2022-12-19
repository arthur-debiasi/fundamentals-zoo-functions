const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, animalAge) {
  const { species } = data;
  const { residents } = species
    .find(({ name }) => name === animal);
  return residents.every((element) => element.age > animalAge);
}

module.exports = getAnimalsOlderThan;
