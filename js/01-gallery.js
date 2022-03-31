import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryEl = document.querySelector('.gallery');

const galleryList = createListOfGallery(galleryItems);

function createListOfGallery (list){
    return galleryItems.map(list => `
    <div class="gallery__item">
  <a class="gallery__link" href="${list.original}">
    <img
      class="gallery__image"
      src="${list.preview}"
      data-source="${list.original}"
      alt="${list.description}"
    />
  </a>
</div>`).join('');
}

galleryEl.innerHTML = galleryList;


galleryEl.addEventListener('click', clickOnGalleryPhoto);

function clickOnGalleryPhoto(event) {
    event.preventDefault();
    
    if(event.target.nodeName !== 'IMG'){
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`)


instance.show();


window.addEventListener('keydown', EscKeyForCloseModalWindow);

function EscKeyForCloseModalWindow(event){
    console.log(event.code)
    if(event.code === 'Escape'){
        instance.close();
    }
}
}






