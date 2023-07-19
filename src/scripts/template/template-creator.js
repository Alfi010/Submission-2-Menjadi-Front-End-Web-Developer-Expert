import CONFIG from "../globals/config";

const createHomeTemplate = (home) => `
<div class="posts_item">
  <div class="content1">
    <span class="city">Kota : ${home.city}</span>
    <span class="rating">Rating : ${home.rating}</span>
  </div>
  <img class="thumb" src="${CONFIG.BASE_IMAGE_URL + home.pictureId}" alt="${home.name}">
  <div class="content2">
    <h1 class="title">~ ${home.name} ~</h1>
    <p class="desc">${home.description .slice(0, 250)} ...</p>
    <button class="btn" onclick="window.location.href='./#/detail/${home.id}'">Lihat Detail</button>
  </div>
</div>
`;

const createDetailTemplate = (detail) => `
<div class="detail_item">
  <div class="content3">
    <h1><span class="snameall">${detail.name}<span></h1>
    <img class="thumbs" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="${detail.name}">
    <p><span class="snameall">${detail.address}, Kota ${detail.city}<span></p>
  </div>
  <div class="content4">
    <span>Deskripsi:</span> 
    <p>${detail.description}</p>
    <span>Menu Makanan:</span>
    <p>${detail.menus.foods.map((food) => food.name).join(', ')}</p>
    <span>Menu Minuman:</span>
    <p>${detail.menus.drinks.map((drink) => drink.name).join(', ')}</P>
  </div>
  <h1>Reviews</h1>
  <div class="content5">
    ${detail.customerReviews.map((review) => `
      <div class="reviews">
        <p class="rdate">${review.date}</p>
        <p class="rname">${review.name}</p>
        <p class="rreview">${review.review}</p>
      </div>
    `).join('')}
  </div>
</div>
`;

const createFavoriteTemplate = () => `
<div class="favorite">
  <img src ="./images/favorite-image.png" alt="favorite image">
  <p>Tidak ada warteg yang ditambahkan ke favorite!</p>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {createHomeTemplate, createDetailTemplate, createFavoriteTemplate, createLikeButtonTemplate, createLikedButtonTemplate};