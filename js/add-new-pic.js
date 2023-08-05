const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview img');
fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((value) => fileName.endsWith(value));
  if (matches) {
    uploadPreview.src = URL.createObjectURL(file);
  }
});
