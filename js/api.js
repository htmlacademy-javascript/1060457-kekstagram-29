const SERVER = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ERROR_GET = 'Не удаётся загрузить данные. Проверьте подключение к сети !';
const ERROR_SEND = 'Возникла ошибка при отправке';

const load = (route, errorText, method = 'GET', body = null) =>
  fetch(`${SERVER}${route}`, {method, body})
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ERROR_GET, 'GET');
const sendData = (body) => load(Route.SEND_DATA, ERROR_SEND, 'POST', body);

export {getData, sendData};
