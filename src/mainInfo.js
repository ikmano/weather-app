import { getOutputDiv, makeOutputDiv } from "./domUtils";

const parent = getOutputDiv(".weather-info");

function makeMainInfo(desc, temp, feels, icon) {
  parent.append(desc);
  const mainTemp = makeOutputDiv(null, "main-temp");
  const temperature = makeOutputDiv(null, "temperature");
  temperature.append(temp);
  temperature.append(feels);
  mainTemp.append(temperature);
  mainTemp.append(icon);
  parent.append(mainTemp);
}

export { makeMainInfo };
