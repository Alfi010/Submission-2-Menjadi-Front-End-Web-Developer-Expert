import dataJson from '../DATA.json';

const items = dataJson.restaurants;
const itemList = items.map(item => `
  <div class="posts_item">
  <div class="content1">
    <span class="city">Kota : ${item.city}</span>
    <span class="rating">Rating : ${item.rating}</span>
    </div>
  <img class="thumb" src="${item.pictureId}" alt="${item.name}" title="${item.name}">
  <div class="content2">
      <h1 class="title">~ ${item.name} ~</h1>
      <p class="desc">${item.description}</p>
    </div>
  </div>
`).join('');

document.getElementById('post').innerHTML = itemList;
