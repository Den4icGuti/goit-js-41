import { photos } from "./bd/db.js";

const refGallery = document.querySelector(".js-gallery");

console.log(photos);

const onGalleryMarcup = () => {
  return photos
    .map(
      ({ img, alt }) => `<li class="item">
        <img class="item-gallery" src=${img} alt=${alt}>
      </li>`
    )
    .join("");
};

const marc = onGalleryMarcup(photos);

refGallery.insertAdjacentHTML("afterbegin", marc);
