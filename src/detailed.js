import { getOutputDiv } from "./domUtils";

const parent = getOutputDiv(".detailed-info");

function makeDetailed(arr) {
  arr.forEach((element) => {
    parent.append(element);
  });
}

export default makeDetailed;
