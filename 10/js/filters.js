import { renderMiniPic } from './creating-miniatures.js';
import { debounce, removeElement, randomFilter, filterComments } from './util.js';

const DELAY_TIME = 500;
const COUNT_RANDOM_PHOTOS = 10;

const filtersSection = document.querySelector('.img-filters');
const sortRandomElement = document.querySelector('#filter-random');
const filterBtn = document.querySelector('#filter-discussed');

const updateGallery = (targetElement, photos) => {
  let copyPhotos = photos.slice();
  if (targetElement === sortRandomElement) {
    copyPhotos = randomFilter(copyPhotos, COUNT_RANDOM_PHOTOS);
  }
  if (targetElement === filterBtn) {
    copyPhotos = filterComments(copyPhotos);
  }
  document.querySelectorAll('.picture').forEach(removeElement);
  renderMiniPic(copyPhotos);
};

const renderGalleryDelay = debounce((targetElement, photos) => updateGallery(targetElement, photos), DELAY_TIME);

const filterGallery = (loadedPhotos) => {
  filtersSection.classList.remove('img-filters--inactive');
  filtersSection.addEventListener('click', (evt) => {
    if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
      const activeFilterBtn = filtersSection.querySelector('.img-filters__button--active');
      activeFilterBtn.classList.remove('img-filters__button--active');
      renderGalleryDelay(evt.target, loadedPhotos);
      evt.target.classList.add('img-filters__button--active');
    }
  });
};

export { filterGallery };
