const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  return new Promise((resolve) => {
    if (emosi == "marah") {
      (async () => {
        const sumIIX = calculate(await promiseTheaterIXX(), emosi);
        const sumVGC = calculate(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        const sumIIX = calculate(await promiseTheaterIXX(), emosi);
        const sumVGC = calculate(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    }
  });
};

const calculate = (data, hasil) => {
  let total = 0;
  if (hasil == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        total++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        total++;
      }
    }
  }
  return total;
}

module.exports = {
  promiseOutput,
};
