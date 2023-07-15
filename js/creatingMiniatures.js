import { similarPhotos } from './data.js';
import { getRandomInteger } from './util.js';
import { openPic } from './full-sizeImage.js';


const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createPic = (pic) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = pic.url;
  pictureElement.querySelector('.picture__img').alt = pic.description;
  pictureElement.querySelector('.picture__comments').textContent = getRandomInteger(1, 50);
  pictureElement.querySelector('.picture__likes').textContent = pic.likes;
  pictureElement.dataset.id = pic.id;

  pictureElement.addEventListener('click', () => {
    openPic(pic);
  });

  return pictureElement;
};

const renderMiniPic = (pictures) => {
  pictures.forEach((pic) => container.append(createPic(pic)));
};

export {renderMiniPic};
