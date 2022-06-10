import axios from 'axios';

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

const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const parent3 = document.querySelector(selector);
      function loopAppend(item) {
        for (let i = 0; i < item.length; i++) {
          parent3.appendChild(Card(item[i]));
        }
      }
      const js = res.data.articles.javascript;
      loopAppend(js)
      const bootstrap = res.data.articles.bootstrap;
      loopAppend(bootstrap)
      const node = res.data.articles.node;
      loopAppend(node)
      const jquery = res.data.articles.jquery;
      loopAppend(jquery)
      const technology = res.data.articles.technology;
      loopAppend(technology)
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => console.log("done"))
}

export { Card, cardAppender }