function makeNavbar() {
  const navbar = document.querySelector("nav");

  const locationForm = document.createElement("form");
  const input = document.createElement("input");
  input.placeholder = "Enter Location...";
  locationForm.append(input);
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
