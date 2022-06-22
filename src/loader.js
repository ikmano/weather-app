const loader = document.getElementById("loader");

function activate(div) {
  div.classList.remove("deactivate");
  div.classList.remove("fadeoutbcg");
  div.classList.add("activate");
}
function deactivate(div) {
  div.classList.remove("activate");
  div.classList.add("fadeoutbcg");
  setTimeout(() => {
    div.classList.add("deactivate");
  }, 1000);
}

async function loaded(rendered) {
  const done = await rendered;
  if (done) {
    deactivate(loader);
  }
}

export { loaded, loader, activate, deactivate };
