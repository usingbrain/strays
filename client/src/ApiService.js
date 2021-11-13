const url = 'http://localhost:8080';

function fetchRequest(path, options) {
  return fetch(url + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.error('error: ', err));
}

exports.getSpots = () => {
  return fetchRequest('/spots');
};
