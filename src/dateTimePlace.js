import { getOutputDiv, makeOutputDiv } from "./domUtils";

const parent = getOutputDiv(".date-time-place");

function makeBtn() {
  const btn = document.createElement("button");
  btn.classList = "btn";
  btn.innerHTML = `<i class="fa fa-rotate-right"></i>`;
  return btn;
}

function makeDTP(arr) {
  parent.append(arr[0]);
  parent.append(arr[1]);
  arr[2].append(makeBtn());
  parent.append(arr[2]);
}

export default makeDTP;
