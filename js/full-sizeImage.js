const bigPicCloseBtn = document.querySelector('.big-picture__cancel');
const bigPic = document.querySelector('.big-picture');
const bigPhotoPreview = document.querySelector('.big-picture__preview');
const commentsBox = bigPhotoPreview.querySelector('.social__comments');
// const commentLoaderElem = commentsBox.querySelector('.comment__loader');
// const commentCounter = document.querySelector('.social__comment-count');
const commentTemplate = document.querySelector('.social__comment');

const createComment = (data) => {
  commentsBox.innerHTML = '';
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const renderComments = (comments) => {
  comments.forEach((data) => commentsBox.append(createComment(data)));
};

const fillBigPicture = (data) => {
  bigPhotoPreview.querySelector('.big-picture__img img').src = data.url;
  bigPhotoPreview.querySelector('.big-picture__img img').alt = data.description;
  bigPhotoPreview.querySelector('.likes-count').textContent = data.likes;
  bigPhotoPreview.querySelector('.comments-count').textContent = data.comments.length;
  bigPhotoPreview.querySelector('.social__caption').textContent = data.description;
};

//открываем большую фотку
const openPic = (data) => {
  bigPic.classList.remove('hidden');
  // commentLoaderElem.classList.add('hidden');
  // commentCounter.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  fillBigPicture(data);
  renderComments(data.comments);
};

//закрываем большую фотку
const closePic = () => {
  document.body.classList.remove('modal-open');
  bigPic.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePic();
  }
}

bigPicCloseBtn.addEventListener('click', closePic);

export { openPic };

// big-picture overlay с стоп пропагандой
