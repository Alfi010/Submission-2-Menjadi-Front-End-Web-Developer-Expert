import FavoriteRestoIdb from "../data/favorite-idb";
import { createHomeTemplate, createFavoriteTemplate } from "../template/template-creator";
import "../component/resto-favorite-like";
import "../component/resto-favorite-nolike";

const Favorite = {
  async render() {
    const favorite = await FavoriteRestoIdb.getAllResto();

    if (favorite.length === 0) {
      return `
        <resto-favorite-nolike></resto-favorite-nolike>
        ${createFavoriteTemplate()}
      `;
    } else {
      return `
      <resto-favorite-like></resto-favorite-like>
      `;
    }
  },

  async afterRender() {
    const favorite = await FavoriteRestoIdb.getAllResto();
    const favoriteContainer = document.querySelector('#post');

    favorite.forEach((resto) => {
      favoriteContainer.innerHTML += createHomeTemplate(resto);
    });
  },
};

export default Favorite;