const pics = document.querySelectorAll('.picture');
const bigPic = document.querySelector('.big-picture');
const bigPicImg = document.querySelector('.big-picture__preview');
const bigPicCloseBtn = document.querySelector('.big-picture__cancel');
// console.log(cancel);
// console.log('тык');



//вешаем обработчик клика на каждую миниатюру
for (let i = 0; i < pics.length; i++) {
  const newPhoto = pics[i];
  newPhoto.addEventListener('click', (photo) => {
    console.log(newPhoto);

    bigPic.classList.remove('hidden');

    bigPicImg.querySelector('.big-picture__img img').src = photo.url;
    // bigPicImg.querySelector('.likes-count').textContent = photo.likes;
    // bigPicImg.querySelector('.comments-count').textContent = photo.comments.length;

    closePic();
  });
};


//закрываем большую фотку
function closePic() {
  bigPicCloseBtn.addEventListener('click', () => {
    bigPic.classList.add('hidden');
  });
};
