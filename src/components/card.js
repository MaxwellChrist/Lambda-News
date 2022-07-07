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
      let topic = Object.values(res.data.articles)
      const parent = document.querySelector(selector);
      topic.forEach((x) => {
        for (let i = 0; i < x.length; i++) {
          parent.appendChild(Card(x[i]));
        }
      }) 
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => console.log("done"))
}

export { Card, cardAppender }