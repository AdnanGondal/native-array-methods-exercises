const zooData = require("./data");

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const keys = Object.keys(entrants);
  const values = Object.values(entrants);
  const prices = zooData.prices;

  return values.reduce((tot, val, i) => tot + val * prices[keys[i]], 0);
}

function schedule(dayName) {
  const openingHours = zooData.hours;
  const daysOfWeek = Object.keys(openingHours);

  const readable = daysOfWeek.reduce((obj, day) => {
    if (day === "Monday") {
      obj[day] = "CLOSED";
      return obj;
    } else {
      obj[day] =
        "Open from " +
        openingHours[day].open +
        "am until " +
        (openingHours[day].close - 12) +
        "pm";
    }
    return obj;
  }, {});

  if (dayName) {
    return { [dayName]: readable[dayName] };
  } else return readable;
}

function animalCount(species) {}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
};
