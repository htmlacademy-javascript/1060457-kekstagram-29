const commentBox = document.querySelector('.social__comments');
const commentElem = document.querySelector('.social__comment');


const createComment = (data) => {
  const comment = commentElem.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const renderComments = (comments) => {
  comments.forEach((comment) => commentBox.append(createComment(comment)));
};

//закрываем большую фотку
function closePic(node) {
  const bigPicCloseBtn = document.querySelector('.big-picture__cancel');

  bigPicCloseBtn.addEventListener('click', () => {
    node.classList.add('hidden');
  });
};

export { closePic };
export { renderComments };
export { commentBox };

