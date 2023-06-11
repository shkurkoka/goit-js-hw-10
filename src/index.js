import {fetchBreeds, fetchCatByBreed} from './cat-api.js';

const selector = document.querySelector('.breed-select');
const listEl = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
error.style.display = 'none';


const APIkey = 'live_qYlL8o9MDIH8U2L6yURyex2Y5rzbgVNFDh0R2EHrDR6dYWpbJMuVjmE2sG4pixTn';

loader.style.display = 'block';

fetchBreeds()
    .then(data =>
        data.forEach(breed => {
            selector.insertAdjacentHTML("beforeend", `
                <option value="${breed.id}">${breed.name}</option>
            `);
        })
    )
    .catch(() => { error.style.display = 'block' })
    .finally(() =>{ loader.style.display = 'none' });



selector.addEventListener('change', () => {
    // console.log(selector.value);
    error.style.display = 'none';
    listEl.innerHTML = '';
    loader.style.display = 'block';
    fetchCatByBreed(selector.value)
        .then(catData => {
            const cat = catData[0];
            listEl.insertAdjacentHTML("beforeend", `
                <img src="${cat.url}" alt="" class="cat-image">
                <div class="wrap-text">
                    <h2 class="cat-info">${cat.breeds[0].name}</h2>
                    <p>${cat.breeds[0].description}</p>
                    <span><b>Temperament:</b> ${cat.breeds[0].temperament}</span>
                </div>
            `)
        })
        .catch(() => { error.style.display = 'block' })
        .finally(() => { loader.style.display = 'none' });
});







