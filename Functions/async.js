function getAsyncData(ms) {
  const data = { name: "Aren", surname: "Qochinyan", age: 18 };
  return new Promise((res, rej) => {
    if (ms)
      setTimeout(() => {
        res(data);
      }, ms);
    else rej(new Error("Unknown Time"));
  });
}
module.exports = {getAsyncData};
