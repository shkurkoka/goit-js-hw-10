import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const selector = document.querySelector('.breed-select');
const listEl = document.querySelector('.cat-info');

const APIkey = 'live_qYlL8o9MDIH8U2L6yURyex2Y5rzbgVNFDh0R2EHrDR6dYWpbJMuVjmE2sG4pixTn';

fetchBreeds(selector);





selector.addEventListener('click', () => {
    fetchCatByBreed()
        .then((posts) => renderPosts(posts))
        .catch ((error) => console.log(error));
});



