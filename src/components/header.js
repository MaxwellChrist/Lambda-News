const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  console.log(title, date, temp);
  const header = document.createElement("div");
  const spanDate = document.createElement("span");
  const heading = document.createElement("h1");
  const spanTemp = document.createElement("span");

  header.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  // spanDate.textContent = document.querySelector("title").textContent;
  // heading.textContent = document.querySelector("title").textContent;
  spanDate.textContent = date;
  heading.textContent = title;
  spanTemp.textContent = temp;

  header.appendChild(spanDate);
  header.appendChild(heading);
  header.appendChild(spanTemp);

  // const one = header.querySelector('div.header>h1.textContent');
  
  return header
}

// const one = header.querySelector('div.header>h1.textContent');
// const two = header.querySelector('div.header>span.date');
// const three = header.querySelector('div.header>span.temp');

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // console.log(selector);
  const parent = document.querySelector(selector);
  // console.log(parent);
  // const child = Header("Lambda Times", "February 11th, 2022", "45" + "\xB0");
    // const child = Header(one, selector.heading, selector.spanTemp);
    parent.appendChild(Header("Lambda Times", "February 11th, 2022", "45" + "\xB0"));
}

export { Header, headerAppender }
