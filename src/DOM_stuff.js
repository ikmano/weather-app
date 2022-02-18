const content = document.querySelector(".content");

function output(key, data) {
  const p = document.createElement("p");
  p.innerHTML = `${key}: ${data}`;
  content.append(p);
}

function displayData(data, obj) {
  const keys = Object.keys(obj);
  console.log(keys);
  keys.forEach((key) => {
    data[key] = obj[key];
    if (key === "weather" || key === "0") {
      return displayData(data, obj[key]);
    }
    output(key, obj[key]);
  });
}

export default displayData;
