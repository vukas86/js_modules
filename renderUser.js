import { getUser } from "./getUser.js";
import { resultsElement } from "./index.js";
import { searchElement, searchForUser } from "./searchUser.js";

getUser();
export const renderChar = function (data) {
  console.log(data);
  data.data.map((result) => {
    const { name, imageUrl } = result;
    const insertUser = `<div class="user">
        <img src="${imageUrl}" alt="userImg" />
        <h2>${name}</h2>
      </div>`;
    return resultsElement.insertAdjacentHTML("afterbegin", insertUser);
  });
};
