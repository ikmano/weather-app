import getWeather from "./data";
import * as div from "./dataToDiv";
import makeDTP from "./dateTimePlace";
import { makeMainInfo } from "./mainInfo";
import { getCity } from "./domUtils";
import makeDetailed from "./detailed";
import makeForcastDiv from "./forcast";
import { capitalize } from "./utils";

async function renderWeather() {
  let city = getCity();
  if (city === "") {
    city = "London";
  } else {
    city = capitalize(city);
  }
  try {
    const { alert, current, daily } = await getWeather(city);

    const arrDTP = [
      div.locationDiv(city),
      div.dateDiv("date", null, current.dt),
      div.timeDiv("time", null, current.dt),
    ];
    makeDTP(arrDTP);

    const arrMain = [
      div.descDiv("desc", "", current.weather["0"].description),
      div.tempDiv("temp", "", current.temp),
      div.feelsDiv("feels", "", current.feels_like),
      div.iconDiv("icon", "icon", current.weather["0"].icon),
    ];
    makeMainInfo(...arrMain);

    const arrDetailed = [
      div.precipitationDiv("prec", "", current),
      div.humidityDiv("humidity", "", current.humidity),
      div.windDiv("wind", "", current.wind_speed),
      div.visibilityDiv("visibility", "", current.visibility),
      div.pressureDiv("pressure", "", current.pressure),
      div.uvDiv("uv", "", current.uvi),
      div.sunriseDiv("sunrise", "", current.sunrise),
      div.sunsetDiv("sunset", "", current.sunset),
      div.dewDiv("dew", "", current.dew_point),
    ];
    makeDetailed(arrDetailed);

    for (let i = 1; i < 8; i++) {
      let arrDaily = [
        div.descDiv("desc", "day-detail", daily[i].weather[0].description),
        div.minMaxTempDiv(
          "temp",
          "day-detail",
          daily[i].temp.min,
          daily[i].temp.max
        ),
        div.iconDiv("icon", "day-detail icon", daily[i].weather[0].icon),
        div.dateDiv("date", "day-detail", daily[i].dt),
      ];
      makeForcastDiv(i, arrDaily);
    }
  } catch (err) {
    console.log(err);
    return false;
  }

  return true;
}

export default renderWeather;
