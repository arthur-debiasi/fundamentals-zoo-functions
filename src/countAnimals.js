const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce(((acc, specie) => {
      const object = {};
      object[specie.name] = specie.residents.length;
      return Object.assign(acc, object);
    }), {});
  }
  if (animal.specie && !animal.sex) {
    const { residents } = species.find((specie) => specie.name === animal.specie);
    return residents.length;
  }
  const { residents } = species.find((specie) => specie.name === animal.specie);
  const residentsBySex = residents.filter((resident) => resident.sex === animal.sex);
  return residentsBySex.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
