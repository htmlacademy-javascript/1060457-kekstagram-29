import { similarPhotos } from './data.js';
import { getRandomInteger } from './util.js';
import { closePic } from './full-sizeImage.js';
import { renderComments } from './full-sizeImage.js';
import { commentBox } from './full-sizeImage.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const setPicture = similarPhotos(6);

const setFragment = document.createDocumentFragment();

setPicture.forEach(({ url, description, likes }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const bigPic = document.querySelector('.big-picture');

  pictureElement.querySelector('.picture__img').addEventListener('click', () => {
    bigPic.classList.remove('hidden');

    bigPic.querySelector('.big-picture__img img').src = url;
    bigPic.querySelector('.likes-count').textContent = likes;
    bigPic.querySelector('.comments-count').textContent = pictureElement.querySelector('.picture__comments').textContent;
    commentBox.innerHTML = '';
    renderComments();

    closePic(bigPic);
  });

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = getRandomInteger(1, 100);

  setFragment.append(pictureElement);
});

container.appendChild(setFragment);
