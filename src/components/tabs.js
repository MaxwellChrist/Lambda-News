import axios from 'axios';

const Tabs = (topics) => {

  const topic = document.createElement("div");
  topic.classList.add("topics");

  for (let i = 0; i < topics.length; i++) {
    let tab = document.createElement("div")
    tab.classList.add("tab");
    tab.textContent = topics[i];
    topic.appendChild(tab);
  }

  return topic
}

const entry = document.querySelector(".cards-container");
const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      const parent = document.querySelector(selector);
      const arrayTopics = res.data.topics;
      parent.appendChild(Tabs(arrayTopics));
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }