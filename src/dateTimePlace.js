import { getOutputDiv } from "./domUtils";

const parent = getOutputDiv(".date-time-place");

function makeBtn() {
  const btn = document.createElement("button");
  btn.classList = "btn";
  btn.innerHTML = `<i class="fa fa-rotate-right"></i>`;
  return btn;
}

function makeDTP(arr) {
  arr.forEach((element) => {
    parent.append(element);
  });
  parent.append(makeBtn());
}

export default makeDTP;
