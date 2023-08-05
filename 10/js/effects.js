const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const imgElem = document.querySelector('.img-upload__preview img');
const effectsElem = document.querySelector('.effects');
const sliderElem = document.querySelector('.effect-level__slider');
const effectsBox = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const showSlider = () => effectsBox.classList.remove('hidden');

const hideSlider = () => effectsBox.classList.add('hidden');

const updateSlider = () => {
  sliderElem.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgElem.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const initSlider = () => {
  noUiSlider.create(sliderElem, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });
};

const onSliderUpdate = () => {
  const sliderValue = sliderElem.noUiSlider.get();
  imgElem.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectValue.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const setEffectsSlider = () => {
  initSlider();
  hideSlider();
  effectsElem.addEventListener('change', onEffectsChange);
  sliderElem.noUiSlider.on('update', onSliderUpdate);

};

export { resetEffect, setEffectsSlider };
