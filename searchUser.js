import { renderChar } from "./renderUser.js";

export const searchElement = document.getElementById("search");

export const searchForUser = searchElement.addEventListener(
  "keyup",
  async function (event) {
    try {
      const singleChar = await fetch(
        `https://api.disneyapi.dev/characters/${event.target.value}`
      );
      const singleCharData = await singleChar.json();
      renderChar(singleCharData);
    } catch (error) {
      console.log(`No such a character! ${error}`);
    }
  }
);
