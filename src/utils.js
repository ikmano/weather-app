function getCoordURL(city) {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`;
}

function getWeatherURL(lat, lon) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`;
}

function getIconURL(code) {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

function timeConverter_date(unix_timestamp) {
  let timestamp = new Date(unix_timestamp * 1000);
  let date = timestamp.getDate();
  let month = timestamp.getMonth() + 1;
  let year = timestamp.getFullYear();

  return `${date}/${month}/${year}`;
}

function timeConverter_time(unix_timestamp) {
  let timestamp = new Date(unix_timestamp * 1000);
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();
  let sec = timestamp.getSeconds();

  return `${hour}:${min}:${sec}`;
}

export {
  getCoordURL,
  getWeatherURL,
  timeConverter_date,
  timeConverter_time,
  getIconURL,
};
