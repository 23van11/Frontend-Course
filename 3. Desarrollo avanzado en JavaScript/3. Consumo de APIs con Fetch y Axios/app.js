const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

const API_URL = 'https://rickandmortyapi.com/api/character';

function renderCharacters(characters) {
  dataContainer.innerHTML = '';

  characters.forEach((character) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h3>${character.name}</h3>
    `;

    dataContainer.appendChild(card);
  });
}

function loadWithFetch() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return response.json();
    })
    .then((data) => {
      renderCharacters(data.results);
    })
    .catch((error) => {
      console.error('Error con fetch:', error);
    });
}

function loadWithAxios() {
  axios.get(API_URL)
    .then((response) => {
      renderCharacters(response.data.results);
    })
    .catch((error) => {
      console.error('Error con axios:', error);
    });
}

fetchBtn.addEventListener('click', loadWithFetch);
axiosBtn.addEventListener('click', loadWithAxios);
