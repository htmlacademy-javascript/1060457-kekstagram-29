import './full-sizeImage.js';
import './form.js';
import { sendFormSumbit } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderMiniPic } from './creatingMiniatures.js';

getData()
  .then((pictures) => {
    renderMiniPic(pictures);
  })
  .catch(() => {
    showAlert('Не удалось загрузить фотографии');
  });

sendFormSumbit();

