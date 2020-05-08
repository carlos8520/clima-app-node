const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7cec3f85f38dabe825fc908bf665e519&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
