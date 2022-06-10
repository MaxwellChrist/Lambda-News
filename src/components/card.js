const Card = (article ) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authorName);

  card.addEventListener("click", () =>  {
    console.log(headline.textContent);
  })

  return card
}

import axios from 'axios';
const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const parent3 = document.querySelector(selector);
      const js = res.data.articles.javascript;
      for (let i = 0; i < js.length; i++) {
        parent3.appendChild(Card(js[i]));
      }
      const bootstrap = res.data.articles.bootstrap;
      for (let i = 0; i < bootstrap.length; i++) {
        parent3.appendChild(Card(bootstrap[i]));
      }
      const node = res.data.articles.node;
      for (let i = 0; i < node.length; i++) {
        parent3.appendChild(Card(node[i]));
      }
      const jquery = res.data.articles.jquery;
      for (let i = 0; i < jquery.length; i++) {
        parent3.appendChild(Card(jquery[i]));
      }
      const technology = res.data.articles.technology;
      for (let i = 0; i < technology.length; i++) {
        parent3.appendChild(Card(technology[i]));
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => console.log("done"))
}

export { Card, cardAppender }