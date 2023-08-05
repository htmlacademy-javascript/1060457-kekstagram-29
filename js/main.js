import './full-sizeImage.js';
import { sendFormSumbit } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderMiniPic } from './creating-miniatures.js';
import { filterGallery } from './filters.js';
import './add-new-pic.js';


getData()
  .then((pictures) => {
    renderMiniPic(pictures);
    filterGallery(pictures);
  })
  .catch(() => {
    showAlert('Не удалось загрузить фотографии');
  });

sendFormSumbit();

