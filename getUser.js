import { renderChar } from "./renderUser.js";

export const getUser = async function () {
  try {
    const user = await fetch("https://api.disneyapi.dev/characters");
    const userData = await user.json();
    return renderChar(userData);
  } catch (err) {
    console.log(`Something went wrong! ${err}`);
  }
};
