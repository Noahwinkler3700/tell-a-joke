export const getJoke = () => {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((joke) => joke);
  };
  