const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getOrigId = (min, max, cache = []) => () => {
  let id = getRandomInteger(min, max);
  while (cache.includes(id)) {
    id = getRandomInteger(min, max);
  }
  cache.push(id);
  return id;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertBox = document.createElement('div');
  alertBox.style.zIndex = '100';
  alertBox.style.position = 'absolute';
  alertBox.style.left = '0';
  alertBox.style.top = '0';
  alertBox.style.right = '0';
  alertBox.style.padding = '7px 3px';
  alertBox.style.fontSize = '13px';
  alertBox.style.textAlign = 'center';
  alertBox.style.backgroundColor = 'red';

  alertBox.textContent = message;

  document.body.append(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, getRandomArrayElement, getOrigId, showAlert};

