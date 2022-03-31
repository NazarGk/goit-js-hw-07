import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

const galleryList = createListOfGallery(galleryItems);

function createListOfGallery(list) {
    return galleryItems.map(list => `
    <a class="gallery__item" href="${list.original}">
  <img class="gallery__image" src="${list.preview}" alt="${list.description}" />
</a>`).join('');
}

galleryEl.innerHTML = galleryList;



const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom'});
console.log(lightbox);







