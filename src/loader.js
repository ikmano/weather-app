const preloader = document.getElementById("loader");
const contentWraper = document.querySelector(".weather-content");
const loader = document.querySelector(".loader");

function activate(div) {
  div.classList.remove("deactivate");
  div.classList.remove("fadeoutbcg");
  div.classList.add("activate");
}
function deactivate(div) {
  div.classList.remove("activate");
  setTimeout(() => {
    div.classList.add("fadeoutbcg");
    setTimeout(() => {
      div.classList.add("deactivate");
    }, 1000);
  }, 500);
}

async function loaded(rendered) {
  const done = await rendered;
  console.log(done);
  preloader.innerHTML = "";
  activate(contentWraper);
  if (done) {
    setTimeout(() => {
      deactivate(preloader);
    }, 1000);
  } else {
    deactivate(loader);
    preloader.innerHTML =
      "ERROR: Could not find entered location! Please check your input and try again.";
  }
}

export { loaded, preloader, activate, deactivate };
