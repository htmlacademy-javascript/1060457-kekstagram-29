import { openPic } from './full-sizeImage.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');

const createPic = (pic) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = pic.url;
  pictureElement.querySelector('.picture__img').alt = pic.description;
  pictureElement.querySelector('.picture__likes').textContent = pic.likes;
  pictureElement.querySelector('.picture__comments').textContent = pic.comments.length;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPic(pic);
  });

  return pictureElement;
};

const renderMiniPic = (pictures) => {
  pictures.forEach((pic) => container.append(createPic(pic)));
};

export { renderMiniPic };
