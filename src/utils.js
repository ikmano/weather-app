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

  return `${date}.${month}.${year}`;
}

function timeConverter_time(unix_timestamp) {
  let timestamp = new Date(unix_timestamp * 1000);
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();

  if (min < 10 && hour < 10) return `0${hour}:0${min}`;
  else if (min < 10) return `${hour}:0${min}`;
  else if (hour < 10) return `0${hour}:${min}`;
  else return `${hour}:${min}`;
}

function capitalize(str) {
  const arr = str.split(" ");
  const capitalized = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalized.join(" ");
}

function uvConverter(index) {
  if (index < 3) return "low";
  if (index < 6) return "moderate";
  if (index < 8) return "high";
  if (index < 11) return "very high";
  if (index > 10) return "extreme";
}

export {
  getCoordURL,
  getWeatherURL,
  timeConverter_date,
  timeConverter_time,
  getIconURL,
  capitalize,
  uvConverter,
};
