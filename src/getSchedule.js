const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const fullSchedule = () => {
  const obj = Object.entries(hours)
    .reduce(((acc, cur) => {
      const exhibition = species.filter((specie) => specie.availability.includes(cur[0]))
        .map((specie) => specie.name);
      acc[cur[0]] = { officeHour: `Open from ${cur[1].open}am until ${cur[1].close}pm`,
        exhibition };
      if (cur[1].open === 0 || cur[1].close === 0 || exhibition.length === 0) {
        acc[cur[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      }
      return acc;
    }), {});
  return obj;
};

const animalArr = species.map(({ name }) => name);
const daysArr = Object.keys(hours);
const animalsAndDays = animalArr.concat(daysArr);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !animalsAndDays.includes(scheduleTarget)) {
    return fullSchedule();
  }
  if (animalArr.includes(scheduleTarget)) {
    const { availability } = species.find((specie) => specie.name === scheduleTarget);
    return availability;
  }
  return { [`${scheduleTarget}`]: fullSchedule()[scheduleTarget] };
}

const actual = getSchedule('Monday'); // const expected = ['Tuesday', 'Thursday', 'Saturday', 'Sunday'];

console.log(actual);

// Que bom que consegui, mas seria legal refatorar esta função.

module.exports = getSchedule;
