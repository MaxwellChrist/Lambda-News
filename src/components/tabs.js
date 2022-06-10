const Tabs = (topics) => {
  const topic = document.createElement("div");
  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");
  const tab4 = document.createElement("div");
  const tab5 = document.createElement("div");
  
  topic.classList.add("topics");
  tab1.classList.add("tab");
  tab2.classList.add("tab");
  tab3.classList.add("tab");
  tab4.classList.add("tab");
  tab5.classList.add("tab");

  tab1.textContent = topics[0];
  tab2.textContent = topics[1];
  tab3.textContent = topics[2];
  tab4.textContent = topics[3];
  tab5.textContent = topics[4];

  topic.appendChild(tab1);
  topic.appendChild(tab2);
  topic.appendChild(tab3);
  topic.appendChild(tab4);
  topic.appendChild(tab5);

  return topic
}

const entry = document.querySelector(".cards-container");

import axios from 'axios';
const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      const parent2 = document.querySelector(selector);
      const array = res.data.topics;
      parent2.appendChild(Tabs(array));
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }