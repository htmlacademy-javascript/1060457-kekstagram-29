const INITIAL_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

const lowerBtn = document.querySelector('.scale__control--smaller');
const upperBtn = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgElem = document.querySelector('.img-upload__preview img');


const scaleImage = (value) => {
  imgElem.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onlowerBtnClick = () => {
  scaleImage(
    Math.max(parseInt(scaleValue.value, 10) - SCALE_STEP, MIN_SCALE)
  );
};

const onupperBtnClick = () => {
  scaleImage(
    Math.min(parseInt(scaleValue.value, 10) + SCALE_STEP, MAX_SCALE)
  );
};

const resetScale = () => scaleImage(INITIAL_SCALE);

lowerBtn.addEventListener('click', onlowerBtnClick);
upperBtn.addEventListener('click', onupperBtnClick);

export { resetScale };
