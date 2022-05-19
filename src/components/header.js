const Header = (title, date, temp) => {
  const header = document.createElement("div");
  const dateSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempSpan = document.createElement("span");
  header.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");
  dateSpan.textContent = date;
  h1.textContent = title;
  tempSpan.textContent = temp;
  header.appendChild(dateSpan);
  header.appendChild(h1);
  header.appendChild(tempSpan);
  return header;
};

const headerAppender = (selector) => {
  const element = document.querySelector(selector);
  element.appendChild(Header("Bloom News", "2.22.22", "70F"));
};

export { Header, headerAppender };
