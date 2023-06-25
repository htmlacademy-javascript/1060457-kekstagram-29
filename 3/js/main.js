const POSTS_COUNT = 25;
const AVATAR_COUNT = 6;
const POSTS_ID_COUNT = 25;
const COMMENTS_ID_COUNT = 500;
const LIKES_COUNT = 200;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Егор',
  'Август',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Кирилл',
  'Мартин',
];

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

const generatePhoto = getOrigId(1, POSTS_COUNT);
const generateIdPhoto = getOrigId(1, POSTS_ID_COUNT);
const generateIdComment = getOrigId(1, COMMENTS_ID_COUNT);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: generateIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: `${getRandomArrayElement(MESSAGE)}`,
  name: `${getRandomArrayElement(NAMES)}`
});

const pushPhoto = () => ({
  id: generateIdPhoto(),
  url: `photos/${generatePhoto()}.jpg`,
  description: 'New photo!',
  likes: getRandomInteger(15, LIKES_COUNT),

  comments: createComment()
});


const similarPhotos = () => {
  const arrayPhotos = Array.from({ length: POSTS_COUNT }, pushPhoto);
  return arrayPhotos;
};

similarPhotos();
