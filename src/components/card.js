import axios from "axios";
const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  image.src = article.authorPhoto;
  headline.textContent = article.headline;
  name.textContent = article.authorName;
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(image);
  return card;
};

const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5001/api/articles`)
    .then((res) => {
      const typeArr = Object.keys(res.data.articles);
      typeArr.forEach((type) => {
        const articlesArr = res.data.articles[type];
        articlesArr.forEach((article) => {
          document.querySelector(selector).appendChild(Card(article));
        });
      });
    })
    .catch((res) => {
      console.log(`Something went wrong collecting articles: ${res.data}`);
    });
};

export { Card, cardAppender };
