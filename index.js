import "./styles.css";

// import { getJoke } from "./dataManager.js";

const getAPIJoke = () => {
  return fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json"
    }
  })
    .then((response) => {
      console.log("what is response", response);
      return response.json();
    })
    .then((joke) => {
      console.log("joke now?", joke);
      return joke;
    });
};

const getAJoke = () => {
  getAPIJoke().then((taco) => {
    const htmlElement = document.querySelector("#app");
    htmlElement.innerHTML = `${taco.joke}`;
  });
};

document.querySelector("#jokeButton").addEventListener("click", getAJoke);

getAJoke();
