function makeNavbar() {
  const navbar = document.querySelector("nav");

  const locationForm = document.createElement("form");
  const input = document.createElement("input");
  input.type = "text";
  input.id = "input";
  input.className = "form__input";
  input.placeholder = "Enter Location...";
  locationForm.append(input);
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.className = "btn";
  submit.classList.add("submit");
  submit.innerHTML = "submit";
  locationForm.append(submit);
  navbar.append(locationForm);

  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";
  navbar.append(navLinks);

  const home = document.createElement("a");
  home.href = "#";
  home.innerHTML = "Home";
  navLinks.append(home);

  const about = document.createElement("a");
  about.href = "#";
  about.innerHTML = "About";
  navLinks.append(about);
}

export default makeNavbar;
