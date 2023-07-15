import {isEscapeKey} from './util.js';

const bigPicCloseBtn = document.querySelector('.big-picture__cancel');
const bigPic = document.querySelector('.big-picture');
const bigPhotoPreview = document.querySelector('.big-picture__preview');
const commentsBox = bigPhotoPreview.querySelector('.social__comments');
const commentTemplate = commentsBox.querySelector('.social__comment');

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

// console.log(createComment());


const renderComments = (comments) => {
  comments.forEach((data) => commentsBox.append(createComment(data)));
};

const fillBigPicture = (data) => {
  bigPhotoPreview.querySelector('.big-picture__img img').src = data.url;
  bigPhotoPreview.querySelector('.big-picture__img img').alt = data.description;
  bigPhotoPreview.querySelector('.likes-count').textContent = data.likes;
  bigPhotoPreview.querySelector('.comments-count').textContent = data.comments.length;
  bigPhotoPreview.querySelector('.social__caption').textContent = data.description;

  commentsBox.innerHTML = '';
  // renderComments(data.comments);
  bigPhotoPreview.querySelector('.social__comment-count').classList.add('hidden');
  bigPhotoPreview.querySelector('.comments-loader').classList.add('hidden');
};

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
  }
};

//открываем большую фотку
const openPic = (data) => {
  bigPicCloseBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPic.classList.add('hidden');
  });
  document.addEventListener('keydown', onDocumentKeydown);

  fillBigPicture(data);
  bigPic.classList.remove('hidden');
};

//закрываем большую фотку
const closePic = () => {
  bigPicCloseBtn.removeEventListener('click', () => {
    bigPic.classList.add('hidden');
  });
  document.removeEventListener('keydown', onDocumentKeydown);
};

export { closePic };
export { openPic };

// big-picture overlay с стоп пропагандой
