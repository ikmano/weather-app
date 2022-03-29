import "./style/main.scss";
import { data, getWeather } from "./data_fn";
import makeNavbar from "./navbar";

getWeather(data, "Bratislava");
makeNavbar();
