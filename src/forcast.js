import { getOutputDiv, makeOutputDiv } from "./domUtils";

const parent = getOutputDiv(".daily-forcast");

function makeForcastDiv(i, arr) {
  const div = makeOutputDiv(`day${i}`, "daily");
  arr.forEach((element) => {
    div.append(element);
  });

  parent.append(div);
}

export default makeForcastDiv;
