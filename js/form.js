import { resetScale } from './scale.js';
import { resetEffect, setEffectsSlider } from './effects.js';
import { sendData } from './api.js';
import { showSuccessPopup, showErrorPopup } from './popups.js';

const MAX_HASHTAGS_COUNT = 5;

const HASHTAGS_RULES = /^#[a-zа-яё0-9]{1,19}$/i;
const UNUNIQUE_TAGS_ERROR_TEXT = 'Хештеги не уникальны';
const INVALID_CONTENT_ERROR_TEXT = 'Хештег должен начинаться с # и включать от 1  до 19 символов!';
const INVALID_COUNT_ERROR_TEXT = 'Максимум 5';

const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const descriptionField = document.querySelector('.text__description');
const htagField = document.querySelector('.text__hashtags');
const fileField = document.querySelector('#upload-file');
const canselBtn = document.querySelector('#upload-cancel');
const sumbitBtn = document.querySelector('#upload-submit');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload--error'
});

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  htagField.addEventListener('keyup', onTextKeyUp);
  descriptionField.addEventListener('keyup', onTextKeyUp);
  setEffectsSlider();
};

const closeModal = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffect();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  htagField.removeEventListener('keyup', onTextKeyUp);
  descriptionField.removeEventListener('keyup', onTextKeyUp);
};

const isFieldFocused = () =>
  document.activeElement === htagField || document.activeElement === descriptionField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isFieldFocused()) {
    evt.stopPropagation();
    closeModal();
  }
}

const onOpenFileChange = () => {
  openModal();
};

const onCancelBtnClick = () => {
  closeModal();
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const isValidTag = (value) => normalizeTags(value).every((tag) => HASHTAGS_RULES.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


//валидация на повторяющиеся хэштэги
pristine.addValidator(
  htagField,
  hasUniqueTags,
  UNUNIQUE_TAGS_ERROR_TEXT,
  1,
  true
);

//валидация на символы хэштэга
pristine.addValidator(
  htagField,
  isValidTag,
  INVALID_CONTENT_ERROR_TEXT,
  2,
  true
);

//валидация на количество хэштэгов
pristine.addValidator(
  htagField,
  hasValidCount,
  INVALID_COUNT_ERROR_TEXT,
  3,
  true
);

function onTextKeyUp() {
  if (hasUniqueTags(htagField.value) && isValidTag(htagField.value) && hasValidCount(htagField.value) && descriptionField.value.length < 141) {
    sumbitBtn.disabled = false;
  } else {
    sumbitBtn.disabled = true;
  }
}

const userFotoFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      onTextKeyUp();
      sendData(new FormData(evt.target))
        .then(() => {
          closeModal();
          showSuccessPopup();
        })
        .catch(() => {
          showErrorPopup();
        })
        .finally(onTextKeyUp);
    }
  });
};

fileField.addEventListener('change', onOpenFileChange);
canselBtn.addEventListener('click', onCancelBtnClick);

export { userFotoFormSubmit, onDocumentKeydown };
