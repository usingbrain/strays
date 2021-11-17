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
exports.getStrays = () => {
  return fetchRequest('/strays');
};
exports.addStray = (body) => {
  return fetchRequest('/strays', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};
exports.addFeeding = (body) => {
  return fetchRequest('/feedings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};
