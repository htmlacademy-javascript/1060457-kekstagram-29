const COMMENTS_PER_PORTION = 5;

const bigPicCloseBtn = document.querySelector('.big-picture__cancel');
const bigPic = document.querySelector('.big-picture');
const bigPhotoPreview = document.querySelector('.big-picture__preview');
const commentsBox = document.querySelector('.social__comments');
const loadMoreBtn = document.querySelector('.comment__loader');
const commentShown = document.querySelector('.social__comment-count');
const commentTemplate = document.querySelector('.social__comment');
const commentCounter = document.querySelector('.comment-count');

let commentsShown = 0;
let comments = [];

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown <= comments.length) {
    loadMoreBtn.classList.remove('hidden');
    commentsShown = comments.length;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsBox.innerHTML = '';
  commentsBox.append(fragment);
  commentShown.textContent = commentsShown;
  commentCounter.textContent = comments.length;
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
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  fillBigPicture(data);
  comments = data.comments;
  renderComments();
};


//закрываем большую фотку
const closePic = () => {
  document.body.classList.remove('modal-open');
  bigPic.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
  loadMoreBtn.removeEventListener('click', onCommentsLoaderClick);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePic();
  }
}

//загружаем ещё 5 комментов
function onCommentsLoaderClick () {
  renderComments();
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', onCommentsLoaderClick, false);
}

bigPicCloseBtn.addEventListener('click', closePic);

export { openPic };

// big-picture overlay с стоп пропагандой
