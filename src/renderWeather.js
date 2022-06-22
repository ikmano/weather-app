import getWeather from "./data";
import * as div from "./dataToDiv";
import makeDTP from "./dateTimePlace";
import { makeMainInfo } from "./mainInfo";
import { getCity } from "./domUtils";
import makeDetailed from "./detailed";
import makeForcastDiv from "./forcast";

async function renderWeather() {
  const city = getCity();
  const { alert, current, daily } = await getWeather(city);

  console.log(daily[0].weather[0].description);

  console.log(current);
  console.log(daily);
  console.log(alert);

  const arrDTP = [
    div.locationDiv(city),
    div.dateDiv("date", current.dt),
    div.timeDiv("time", current.dt),
  ];
  makeDTP(arrDTP);

  const arrMain = [
    div.descDiv("desc", current.weather["0"].description),
    div.tempDiv("temp", current.temp),
    div.feelsDiv("feels", current.feels_like),
    div.iconDiv("icon", current.weather["0"].icon),
  ];
  makeMainInfo(...arrMain);

  const arrDetailed = [
    div.humidityDiv("humidity", current.humidity),
    div.windDiv("wind", current.wind_speed),
    div.visibilityDiv("visibility", current.visibility),
    div.pressureDiv("pressure", current.pressure),
    div.uvDiv("uv", current.uvi),
    div.sunriseDiv("sunrise", current.sunrise),
    div.sunsetDiv("sunset", current.sunset),
    div.sunsetDiv("dew", current.dew_point),
  ];
  makeDetailed(arrDetailed);

  for (let i = 0; i < 8; i++) {
    let arrDaily = [
      div.descDiv("desc", daily[i].weather[0].description),
      div.minMaxTempDiv("temp", daily[i].temp.min, daily[i].temp.max),
      div.iconDiv("icon", daily[i].weather[0].icon),
      div.dateDiv("date", daily[i].dt),

      div.humidityDiv("humidity", daily[i].humidity),
      div.windDiv("wind", daily[i].wind_speed),
      div.pressureDiv("pressure", daily[i].pressure),
      div.uvDiv("uv", daily[i].uvi),
      div.sunriseDiv("sunrise", daily[i].sunrise),
      div.sunsetDiv("sunset", daily[i].sunset),
      div.dewDiv("dew", daily[i].dew_point),
    ];
    makeForcastDiv(i, arrDaily);
  }

  return true;
}

export default renderWeather;
