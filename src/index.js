import { fetchBreeds} from './cat-api.js';

const selector = document.querySelector('.breed-select');
const listEl = document.querySelector('.cat-info');
const options = document.querySelectorAll('option');
fetchBreeds(selector);

const APIkey = 'live_qYlL8o9MDIH8U2L6yURyex2Y5rzbgVNFDh0R2EHrDR6dYWpbJMuVjmE2sG4pixTn';


selector.addEventListener('change', () => {
    // console.log("Hi");
    options.forEach(option => {
        if (option.hasAttribute('checked')) {
            console.log("option name", option.value);
        }
    });
});







