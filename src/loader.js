const preloader = document.getElementById("preloader");
const loader = document.querySelector(".loader");
const err = document.querySelector(".err");

function activate(div) {
  div.classList.remove("deactivate");
  div.classList.add("activate");
}
function activateLoader() {
  activate(loader);
  activate(preloader);
}
function deactivate(div) {
  div.classList.remove("activate");
  div.classList.add("deactivate");
}

async function loaded(rendered) {
  activateLoader();
  const done = await rendered;

  if (done) {
    deactivate(err);
    setTimeout(() => {
      deactivate(loader);
      deactivate(preloader);
    }, 1500);
  } else {
    deactivate(loader);
    activate(err);
  }
}
export { loaded };
