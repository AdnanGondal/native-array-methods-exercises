const { animals } = require("./data");
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

function animalCount(species) {
  const animalCount = zooData.animals.reduce((obj, animal) => {
    obj[animal.name] = animal.residents.length;
    return obj;
  }, {});

  if (species) return animalCount[species];
  return animalCount;
}

function animalMap(options) {
  const animalLocn = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    zooData.animals.forEach((animal) => {
      animalLocn[animal.location].push(animal.name);
    });
    return animalLocn;
  }

  if (options.includeNames && !options.sex) {
    zooData.animals.forEach((animal) => {
      animalLocn[animal.location].push(
        animal.residents.reduce((obj, name) => {
          if (!Array.isArray(obj[animal.name])) {
            obj[animal.name] = [];
          }
          obj[animal.name].push(name.name);
          return obj;
        }, {})
      );
    });
  } else if (options.includeNames && options.sex) {
    zooData.animals.forEach((animal) => {
      animalLocn[animal.location].push(
        animal.residents.reduce((obj, name) => {
          if (!Array.isArray(obj[animal.name])) {
            obj[animal.name] = [];
          }
          if (name.sex === options.sex) obj[animal.name].push(name.name);
          return obj;
        }, {})
      );
    });
  }
  return animalLocn;
}

function animalPopularity(rating) {
  // your code here
  const popObj = zooData.animals.reduce((obj, anim) => {
    if (!Array.isArray(obj[anim.popularity.toString()]))
      obj[anim.popularity.toString()] = [];
    obj[anim.popularity.toString()].push(anim.name);
    return obj;
  }, {});
  if (rating) {
    return popObj[rating];
  } else return popObj;
}

function animalsByIds(ids) {
  if (!ids) return [];
  if (typeof ids === "string") {
    return [animals.find((animal) => animal.id === ids)];
  } else if (Array.isArray(ids)) {
    return animals.filter((animal) => {
      for (let id of ids) {
        if (id === animal.id) return true;
      }
    });
  }
}

function animalByName(animalName) {
  const anim = {};
  if (animalName) {
    zooData.animals.forEach((animal) => {
      resident = animal.residents.find((res) => res.name === animalName);
      if (resident) {
        anim["name"] = resident.name;
        anim["sex"] = resident.sex;
        anim["age"] = resident.age;
        anim["species"] = animal.name;
      }
    });
  }
  return anim;
}

function employeesByIds(ids) {
  if (!ids) return [];

  if (typeof ids === "string") {
    return [zooData.employees.find((emp) => emp.id === ids)];
  } else if (Array.isArray(ids)) {
    return zooData.employees.filter((employee) => {
      for (let id of ids) {
        if (id === employee.id) return true;
      }
    });
  }
}

function employeeByName(employeeName) {
  let employee = {};
  if (employeeName) {
    const target = zooData.employees.find((employee) => {
      if (
        employee.firstName === employeeName ||
        employee.lastName === employeeName
      ) {
        return true;
      }
    });

    if (target) {
      employee = target;
    }
  }
  return employee;
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
