import { similarPhotos } from './data.js';
import {getRandomInteger} from './util.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const setPicture = similarPhotos(6);

const setFragment = document.createDocumentFragment();

setPicture.forEach(({url, description, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = getRandomInteger(1, 100);

  setFragment.append(pictureElement);
});

container.appendChild(setFragment);
