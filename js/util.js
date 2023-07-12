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

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger};
export {getRandomArrayElement};
export {getOrigId};
export {isEscapeKey};
