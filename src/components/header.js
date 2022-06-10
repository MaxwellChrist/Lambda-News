const Header = (title, date, temp) => {
  const header = document.createElement("div");
  const spanDate = document.createElement("span");
  const heading = document.createElement("h1");
  const spanTemp = document.createElement("span");

  header.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  spanDate.textContent = date;
  heading.textContent = title;
  spanTemp.textContent = temp;

  header.appendChild(spanDate);
  header.appendChild(heading);
  header.appendChild(spanTemp);
  
  return header
}

const headerAppender = (selector) => {
  const parent = document.querySelector(selector);
    parent.appendChild(Header("Lambda Times", "February 11th, 2022", "45" + "\xB0"));
}

export { Header, headerAppender }