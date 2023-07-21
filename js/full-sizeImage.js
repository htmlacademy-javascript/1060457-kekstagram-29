const COMMENTS_PER_PORTION = 5;

const modalOpenElement = document.querySelector('.big-picture');
const commentElement = modalOpenElement.querySelector('.comments');
const commentCountElement = modalOpenElement.querySelector('.comments-count');
const commentListElement = modalOpenElement.querySelector('.social__comments');
const commentsLoaderElement = modalOpenElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = modalOpenElement.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('.big-picture__social').querySelector('.social__comment');

let commentsShown = 0;
let comments = [];


const createComment = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }
  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commentElement.textContent = commentsShown;
  commentCountElement.textContent = comments.length;
};

const closePic = () => {
  modalOpenElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePic();
  }
}

const onCancelButtonClick = () => closePic();

const onCommentsLoaderClick = () => renderComments();

const fillBigPicture = ({ url, avatar, likes, description }) => {
  modalOpenElement.querySelector('.big-picture__img img').src = url;
  modalOpenElement.querySelector('.big-picture__img img').alt = avatar;
  modalOpenElement.querySelector('.likes-count').textContent = likes;
  modalOpenElement.querySelector('.comments-count').textContent = comments.length;
  modalOpenElement.querySelector('.social__caption').textContent = description;
};

const openPic = (data) => {
  modalOpenElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fillBigPicture(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { openPic };
