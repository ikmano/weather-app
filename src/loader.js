const loader = document.getElementById("loader");
const contentWraper = document.querySelector(".content-wrapper");

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
  activate(contentWraper);
  if (done) {
    setTimeout(() => {
      deactivate(loader);
    }, 1000);
  }
}

export { loaded, loader, activate, deactivate };
