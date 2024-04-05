import * as renderFunction from './js/render-functions.js';
import * as pixabayApi from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const search = document.querySelector('input');
const objectList = document.querySelector('.object-list');
const loader = document.querySelector('.loader-box');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!search.value) {
    return iziToast.error({
      timeout: 2000,
      title: 'Error!',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      closeOnClick: true,
      position: 'topCenter',
    });
  }

  const searchValue = search.value;

  loader.style.display = 'flex';

  pixabayApi
    .objectSearch(searchValue)
    .then(data => {
      objectList.innerHTML = renderFunction.createMarkup(data.hits);
      searchForm.reset();

      loader.style.display = 'none';
    })
    .catch(error => {
      console.log(error);
      loader.style.display = 'none';
    });
}
