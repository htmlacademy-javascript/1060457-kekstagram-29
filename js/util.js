const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const randomArraySort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    const randomIndex = getRandomInteger(0, data.length - 1);
    const buffer = data[i];
    data[i] = data[randomIndex];
    data[randomIndex] = buffer;
  }
  return data;
};

const removeElement = (element) => {
  element.remove();
};

const randomFilter = (data, count) => randomArraySort(data).slice(0, count);

const filterComments = (data) => data.sort((a, b) => b.comments.length - a.comments.length);

export { getRandomInteger, getRandomArrayElement, showAlert, debounce, randomArraySort, removeElement, randomFilter, filterComments };

