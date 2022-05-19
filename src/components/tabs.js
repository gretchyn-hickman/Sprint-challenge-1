import axios from "axios";
const Tabs = (topics) => {
  const tab = document.createElement("div");
  tab.classList.add("topics");
  topics.forEach((topic) => {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = topic;
    tab.appendChild(newTab);
  });
  return tab;
};

const tabsAppender = (selector) => {
  axios
    .get("http://localhost:5001/api/topics")
    .then((res) => {
      const topicsArr = res.data.topics;
      const tabPlacement = document.querySelector(selector);
      tabPlacement.appendChild(Tabs(topicsArr));
    })
    .catch((res) => {
      console.log("Something went wrong grabbing topics.");
    });
};

export { Tabs, tabsAppender };
