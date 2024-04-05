import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup(array) {
  const createGallery = array
    .map(
      ({
        views,
        comments,
        downloads,
        likes,
        webformatURL,
        tags,
        largeImageURL,
      }) => {
        return `<li>
      <div class="gallery">
        <a href="${largeImageURL}">
          <img class="img" src="${webformatURL}" alt="${tags}" width="360" height="200">
          <ul class="list">
            <li class="info-list"><span class="likes">Likes</span><span class="value">${likes}</span></li>
            <li class="info-list"><span class="views">Views</span><span class="value">${views}</span></li>
            <li class="info-list"><span class="comments">Comments</span><span class="value">${comments}</span></li>
            <li class="info-list"><span class="downloads">Downloads</span><span class="value">${downloads}</span></li>
          </ul>
        </a>
      </div>
    </li>`;
      }
    )
    .join('');

  const objectList = document.querySelector('.object-list');
  objectList.innerHTML = createGallery;

  const gallery = new simpleLightbox('gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 200,
    showCounter: false,
  });
  return createGallery;
}
